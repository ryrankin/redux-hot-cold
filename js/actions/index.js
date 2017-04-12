// guess a number
// add number guessed to list
// generate new random number
// submit guess

export const NUMBER_GUESS = 'NUMBER_GUESS';
export const numberGuess = value => ({
	type: NUMBER_GUESS,
	value: value
});

export const GUESSED_NUMBER = 'GUESSED_NUMBER';
export const guessedNumber = value => ({
	type: GUESSED_NUMBER,
	value: value
});

export const NEW_NUMBER = 'NEW_NUMBER';
export const newNumber = value => ({
	type: NEW_NUMBER,
	value: value
});

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = value => ({
	type: SUBMIT_GUESS,
	value: value
});