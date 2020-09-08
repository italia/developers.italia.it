"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
function mergeUnique(key, uniques, getter) {
    return function (a, b, k) {
        return k === key && __spread(difference(a, b, function (item) { return uniques.indexOf(getter(item)); }), b);
    };
}
function difference(a, b, cb) {
    var ret = a.filter(function (v, i) {
        var foundA = cb(v);
        var foundB = cb(b[i] || {});
        if (foundA >= 0 && foundB >= 0) {
            return foundA !== foundB;
        }
        return true;
    });
    return ret;
}
exports["default"] = mergeUnique;
//# sourceMappingURL=unique.js.map