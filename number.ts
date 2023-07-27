export const getProgressBarPercent = (steps: string[], curStep: string) => {
	const matchedIndex = steps.findIndex((item) => item === curStep);
	const indexPercent = (matchedIndex + 1) * (100 / steps.length);
	return `${indexPercent}%`;
};

export function addNumberInArray(numbers: number[]) {
	const initialValue = 0;
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}
