export const NUMBER_GUESS = 'NUMBER_GUESS';
export const numberGuess = value => ({
	type: NUMBER_GUESS,
	value: value
});

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = value => ({
	type: SUBMIT_GUESS,
	value: value
});