/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017 Joachim Wester
 * MIT license
 */
import { _deepClone, escapePathComponent } from './helpers';
import { applyPatch, Operation } from './core';
export { applyOperation, applyPatch, applyReducer, getValueByPointer, Operation, AddOperation, RemoveOperation, ReplaceOperation, MoveOperation, CopyOperation, TestOperation, GetOperation, validate, validator, OperationResult } from './core';
export { PatchError as JsonPatchError, _deepClone as deepClone, escapePathComponent, unescapePathComponent } from './helpers';
export interface Observer<T> {
    object: T;
    patches: Operation[];
    unobserve: () => void;
    callback: (patches: Operation[]) => void;
}
/**
 * Detach an observer from an object
 */
export declare function unobserve<T>(root: T, observer: Observer<T>): void;
/**
 * Observes changes made to an object, which can then be retrieved using generate
 */
export declare function observe<T>(obj: Object | Array<T>, callback?: (patches: Operation[]) => void): Observer<T>;
/**
 * Generate an array of patches from an observer
 */
export declare function generate<T>(observer: Observer<Object>, invertible?: boolean): Operation[];
/**
 * Create an array of patches from the differences in two objects
 */
export declare function compare(tree1: Object | Array<any>, tree2: Object | Array<any>, invertible?: boolean): Operation[];
/**
 * Default export for backwards compat
 */
import * as core from './core';
import { PatchError as JsonPatchError, unescapePathComponent } from './helpers';
declare const _default: {
    unobserve: typeof unobserve;
    observe: typeof observe;
    generate: typeof generate;
    compare: typeof compare;
    JsonPatchError: typeof JsonPatchError;
    deepClone: typeof _deepClone;
    escapePathComponent: typeof escapePathComponent;
    unescapePathComponent: typeof unescapePathComponent;
    getValueByPointer(document: any, pointer: string): any;
    applyOperation<T>(document: T, operation: Operation, validateOperation?: boolean | core.Validator<T>, mutateDocument?: boolean, banPrototypeModifications?: boolean, index?: number): core.OperationResult<T>;
    applyPatch<T>(document: T, patch: Operation[], validateOperation?: boolean | core.Validator<T>, mutateDocument?: boolean, banPrototypeModifications?: boolean): core.PatchResult<T>;
    applyReducer<T>(document: T, operation: Operation, index: number): T;
    validator(operation: Operation, index: number, document?: any, existingPathFragment?: string): void;
    validate<T>(sequence: Operation[], document?: T, externalValidator?: core.Validator<T>): JsonPatchError;
    default: {
        JsonPatchError: typeof JsonPatchError;
        deepClone: typeof _deepClone;
        getValueByPointer: typeof core.getValueByPointer;
        applyOperation: typeof core.applyOperation;
        applyPatch: typeof applyPatch;
        applyReducer: typeof core.applyReducer;
        validator: typeof core.validator;
        validate: typeof core.validate;
    };
};
export default _default;
