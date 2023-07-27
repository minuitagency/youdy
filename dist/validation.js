"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameObject = exports.isObjectEmpty = exports.isPasswordStrong = exports.isEmailValid = void 0;
function isEmailValid(email) {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
}
exports.isEmailValid = isEmailValid;
function isPasswordStrong(password) {
    const passwordRegex = new RegExp(/^(?=.*[A-Z])(?=.*\d).{6,}$/);
    return passwordRegex.test(password);
}
exports.isPasswordStrong = isPasswordStrong;
function isObjectEmpty(object) {
    return Object.keys(object).length === 0;
}
exports.isObjectEmpty = isObjectEmpty;
function isSameObject(object1, object2) {
    return JSON.stringify(object1) === JSON.stringify(object2);
}
exports.isSameObject = isSameObject;
