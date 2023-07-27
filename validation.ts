export function isEmailValid(email: string) {
	const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return reg.test(email);
}

export function isPasswordStrong(password: string) {
	const passwordRegex = new RegExp(/^(?=.*[A-Z])(?=.*\d).{6,}$/);
	return passwordRegex.test(password);
}

export function isObjectEmpty(object: object) {
	return Object.keys(object).length === 0;
}

export function isSameObject(object1: object, object2: object) {
	return JSON.stringify(object1) === JSON.stringify(object2);
}
