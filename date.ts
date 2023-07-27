import dayjs from './dayjs.locale';

export function dateStringToDateObject(dateString: string | undefined) {
	if (!dateString) {
		throw new Error('Excepted type string but got undefined');
	}
	const timestamp = Date.parse(dateString);
	return new Date(timestamp);
}

export function getAge(date: Date) {
	const now = new Date();
	return Math.abs(now.getFullYear() - date.getFullYear());
}

/**
	* This function will convert your minutes input to a format like this '1h23'
	* @param {number} minutes
	* @return {string}
	*/
export function formatMinutesToHour(minutes: number) {
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

/**
	* This function will adjust the day index to start from Monday as 0
	* @param {Date} date
	* @return {number}
	*/
export function getCustomDay(date: Date) {
	let dayIndex = date.getDay();

	dayIndex = (dayIndex + 6) % 7;

	return dayIndex;
}

/**
	* This function will return you an array of hours from the startTime to the endTime according to the minuteIncrement
	* @param {String} startTime in format '10:00' (24h)
	* @param {String} endTime in format '10:00' (24h)
	* @param {Number} minuteIncrement
	* @return {String[]}
	*/
export function incrementTime(
		startTime: string,
		endTime: string,
		minuteIncrement: number
): string[] {
	const startHours = startTime.split(':')[0];
	const startMinutes = startTime.split(':')[1];
	const endHours = endTime.split(':')[0];
	const endMinutes = endTime.split(':')[1];
	const hours: string[] = [];

	const startNow = new Date();
	startNow.setHours(parseInt(startHours, 10), parseInt(startMinutes, 10));
	const endNow = new Date();
	endNow.setHours(parseInt(endHours, 10), parseInt(endMinutes, 10));

	for (
			let day = dayjs(startNow);
			!day.isAfter(endNow.toISOString(), 'minutes');
			day = day.add(minuteIncrement, 'minutes')
	) {
		let dayFormat: string = '';
		dayFormat = day.format('HH:mm');
		hours.push(dayFormat);
	}
	return hours;
}

export function validateDate(date: any) {
	if (!date) {
		return null;
	}
	if (dayjs(date).isValid()) {
		return date;
	}
	if (typeof date?.toDate === 'function') {
		return date?.toDate();
	}
	return null;
}

export function convertHourAndMinuteStringToDateObject(time: string) {
	const now = new Date();
	const hour = parseInt(time.split(':')[0], 10);
	const minute = parseInt(time.split(':')[1], 10);
	now.setHours(hour, minute);
	return now;
}

export function convertDateObjectToHourAndMinuteString(time: Date) {
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
