"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rating = void 0;
function rating({ rating }) {
    return (Object.values(rating).reduce((acc, curr, index) => acc + (curr || 0) * (index + 1), 0) / Object.values(rating).reduce((acc, curr) => acc + (curr || 0), 0));
}
exports.rating = rating;
