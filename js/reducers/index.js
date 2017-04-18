import * as actions from '../actions/index';

const initialState = {
	feedback: 'Make a guess',
	fewestGuesses: '',
	guess: '',
	guessList: [],
	rightAnswer: Math.floor(Math.random()*100),
	won: false
};

export const gameReducer = (state = initialState, action) => {
	if(action.type === actions.USER_GUESS) {
		const guess = parseInt(action.guess, 10);
		const difference = Math.abs(state.rightAnswer - guess);
		let feedback;
		let won = state.won;

		if(difference >= 25) {
			feedback = 'COLD'
		}
		else if(difference >= 10) {
			feedback = 'WARM'
		}
		else if(difference >= 5) {
			feedback = 'HOT'
		}
		else if(difference >= 1) {
			feedback = 'VERY HOT'
		}
		else {
			feedback = 'You got the right answer!';
			won = true;
		}

		return {...state,
			feedback: feedback,
			guess: guess,
			guessList: state.guessList.concat(guess),
			won: won
		}
	}

	else if(action.type === actions.NEW_GAME) {
		return {...initialState,
			fewestGuesses: state.fewestGuesses,
			rightAnswer: Math.floor((Math.random()*100))
		}
	}

	else if(action.type === actions.POST_FEWEST_GUESSES_SUCCESS) {
		return{...state,
			fewestGuesses: state.guessList.length
		}
	}

	else if(action.type === actions.FETCH_FEWEST_GUESSES_SUCCESS) {
		return{...state,
			fewestGuesses: state.fewestGuesses
		}
	}

	return state;
}