/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Range } from '../jsonLanguageTypes';
export function findDefinition(document, position, doc) {
    var offset = document.offsetAt(position);
    var node = doc.getNodeFromOffset(offset, true);
    if (!node || !isRef(node)) {
        return Promise.resolve([]);
    }
    var propertyNode = node.parent;
    var valueNode = propertyNode.valueNode;
    var path = valueNode.value;
    var targetNode = findTargetNode(doc, path);
    if (!targetNode) {
        return Promise.resolve([]);
    }
    var definition = {
        targetUri: document.uri,
        originSelectionRange: createRange(document, valueNode),
        targetRange: createRange(document, targetNode),
        targetSelectionRange: createRange(document, targetNode)
    };
    return Promise.resolve([definition]);
}
function createRange(document, node) {
    return Range.create(document.positionAt(node.offset), document.positionAt(node.offset + node.length));
}
function isRef(node) {
    return node.type === 'string' &&
        node.parent &&
        node.parent.type === 'property' &&
        node.parent.valueNode === node &&
        node.parent.keyNode.value === "$ref" ||
        false;
}
function findTargetNode(doc, path) {
    var tokens = parseJSONPointer(path);
    if (!tokens) {
        return null;
    }
    return findNode(tokens, doc.root);
}
function findNode(pointer, node) {
    if (!node) {
        return null;
    }
    if (pointer.length === 0) {
        return node;
    }
    var token = pointer.shift();
    if (node && node.type === 'object') {
        var propertyNode = node.properties.find(function (propertyNode) { return propertyNode.keyNode.value === token; });
        if (!propertyNode) {
            return null;
        }
        return findNode(pointer, propertyNode.valueNode);
    }
    else if (node && node.type === 'array') {
        if (token.match(/^(0|[1-9][0-9]*)$/)) {
            var index = Number.parseInt(token);
            var arrayItem = node.items[index];
            if (!arrayItem) {
                return null;
            }
            return findNode(pointer, arrayItem);
        }
    }
    return null;
}
function parseJSONPointer(path) {
    if (path === "#") {
        return [];
    }
    if (path[0] !== '#' || path[1] !== '/') {
        return null;
    }
    return path.substring(2).split(/\//).map(unescape);
}
function unescape(str) {
    return str.replace(/~1/g, '/').replace(/~0/g, '~');
}
