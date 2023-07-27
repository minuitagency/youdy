"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDateObjectToHourAndMinuteString = exports.convertHourAndMinuteStringToDateObject = exports.validateDate = exports.incrementTime = exports.getCustomDay = exports.formatMinutesToHour = exports.getAge = exports.dateStringToDateObject = void 0;
const dayjs_locale_1 = __importDefault(require("./dayjs.locale"));
function dateStringToDateObject(dateString) {
    if (!dateString) {
        throw new Error('Excepted type string but got undefined');
    }
    const timestamp = Date.parse(dateString);
    return new Date(timestamp);
}
exports.dateStringToDateObject = dateStringToDateObject;
function getAge(date) {
    const now = new Date();
    return Math.abs(now.getFullYear() - date.getFullYear());
}
exports.getAge = getAge;
/**
    * This function will convert your minutes input to a format like this '1h23'
    * @param {number} minutes
    * @return {string}
    */
function formatMinutesToHour(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) {
        return `${mins}min`;
    }
    if (mins === 0) {
        return `${hours}h`;
    }
    return `${hours}h${mins}`;
}
exports.formatMinutesToHour = formatMinutesToHour;
/**
    * This function will adjust the day index to start from Monday as 0
    * @param {Date} date
    * @return {number}
    */
function getCustomDay(date) {
    let dayIndex = date.getDay();
    dayIndex = (dayIndex + 6) % 7;
    return dayIndex;
}
exports.getCustomDay = getCustomDay;
/**
    * This function will return you an array of hours from the startTime to the endTime according to the minuteIncrement
    * @param {String} startTime in format '10:00' (24h)
    * @param {String} endTime in format '10:00' (24h)
    * @param {Number} minuteIncrement
    * @return {String[]}
    */
function incrementTime(startTime, endTime, minuteIncrement) {
    const startHours = startTime.split(':')[0];
    const startMinutes = startTime.split(':')[1];
    const endHours = endTime.split(':')[0];
    const endMinutes = endTime.split(':')[1];
    const hours = [];
    const startNow = new Date();
    startNow.setHours(parseInt(startHours, 10), parseInt(startMinutes, 10));
    const endNow = new Date();
    endNow.setHours(parseInt(endHours, 10), parseInt(endMinutes, 10));
    for (let day = (0, dayjs_locale_1.default)(startNow); !day.isAfter(endNow.toISOString(), 'minutes'); day = day.add(minuteIncrement, 'minutes')) {
        let dayFormat = '';
        dayFormat = day.format('HH:mm');
        hours.push(dayFormat);
    }
    return hours;
}
exports.incrementTime = incrementTime;
function validateDate(date) {
    if (!date) {
        return null;
    }
    if ((0, dayjs_locale_1.default)(date).isValid()) {
        return date;
    }
    if (typeof (date === null || date === void 0 ? void 0 : date.toDate) === 'function') {
        return date === null || date === void 0 ? void 0 : date.toDate();
    }
    return null;
}
exports.validateDate = validateDate;
function convertHourAndMinuteStringToDateObject(time) {
    const now = new Date();
    const hour = parseInt(time.split(':')[0], 10);
    const minute = parseInt(time.split(':')[1], 10);
    now.setHours(hour, minute);
    return now;
}
exports.convertHourAndMinuteStringToDateObject = convertHourAndMinuteStringToDateObject;
function convertDateObjectToHourAndMinuteString(time) {
    let hours = String(time.getHours());
    if (hours.length === 1) {
        hours = `0${hours}`;
    }
    let minutes = String(time.getMinutes());
    if (minutes.length === 1) {
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
}
exports.convertDateObjectToHourAndMinuteString = convertDateObjectToHourAndMinuteString;
