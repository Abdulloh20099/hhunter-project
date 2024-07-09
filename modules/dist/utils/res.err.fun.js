"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errFun = exports.userGet = exports.resFun = void 0;
function resFun(status, data, dataObj, error) {
    return [{ status, data, dataObj, error }];
}
exports.resFun = resFun;
function userGet(status, dataObj, error) {
    return [{ status, dataObj, error }];
}
exports.userGet = userGet;
function errFun(status, errorMsg, error) {
    return [{ status, errorMsg, error }];
}
exports.errFun = errFun;
