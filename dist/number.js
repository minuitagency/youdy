"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumberInArray = exports.getProgressBarPercent = void 0;
const getProgressBarPercent = (steps, curStep) => {
    const matchedIndex = steps.findIndex((item) => item === curStep);
    const indexPercent = (matchedIndex + 1) * (100 / steps.length);
    return `${indexPercent}%`;
};
exports.getProgressBarPercent = getProgressBarPercent;
function addNumberInArray(numbers) {
    const initialValue = 0;
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}
exports.addNumberInArray = addNumberInArray;
