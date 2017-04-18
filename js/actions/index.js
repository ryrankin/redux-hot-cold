// user guess
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

export const POST_FEWEST_GUESSES_SUCCESS = 'POST_FEWEST_GUESSES_SUCCESS';
export const postFewestGuessesSuccess = (message, fewestGuesses) => ({
	type: POST_FEWEST_GUESSES_SUCCESS,
	message,
	fewestGuesses
});

export const POST_FEWEST_GUESSES_ERROR = 'POST_FEWEST_GUESSES_ERROR';
export const postFewestGuessesError = error => ({
	type: POST_FEWEST_GUESSES_ERROR,
	error
});

export const postFewestGuesses = fewestGuesses => dispatch => {
	fetch('/fewest-guesses' , {
		method: 'POST',
		headers: {
				'Content-Type': 'application/json'
		},
		body: JSON.stringify({fewestGuesses: fewestGuesses})
	}).then(response => {
		if(!response.ok){
			let error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
	})
		.then(response => response.json())
		.then(data => {
			dispatch(postFewestGuessesSuccess(data.message, data.fewestGuesses));
			console.log(data);
		})
		.catch(error => {
			dispatch(postFewestGuessesError(error));
		})
}










