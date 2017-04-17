// usre guess
// add number guessed to list
// generate new random number


export const USER_GUESS = 'USER_GUESS';
export const userGuess = guess => ({
	type: USER_GUESS,
	guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME
});

