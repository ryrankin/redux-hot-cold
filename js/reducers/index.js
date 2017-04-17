import * as actions from '../actions/index';

const initialState = {
	feedback: 'Make a guess',
	guess: '',
	guessList: [],
	rightAnswer: Math.floor((Math.random() * 100)),
	won: false
};

export const gameReducer = (state=initialState, action) => {
	if(action.type === actions.USER_GUESS){
		const guess = parseInt(action.guess, 10);
		console.log('guess', guess);
		console.log(state.rightAnswer);
		const difference = Math.abs(guess - state.rightAnswer);
		let feedback;
		let won = state.won;

		if(difference > 50){
			feedback = 'VERY COLD'
		}
		else if(difference > 30){
			feedback = 'COLD'
		}
		else if(difference > 20){
			feedback = 'WARM'
		}
		else if(difference >= 1){
			feedback = 'HOT'
		}
		else {
			feedback = 'Right Answer';
			won = true;
		}

		return {...state, 
				feedback: feedback,
				guess: guess,
				guessList: state.guessList.concat(guess),
				won: won
			}

	}
	else if(action.type === actions.NEW_GAME){
		return {...initialState,
				rightAnswer: Math.floor((Math.random() * 100))
			}
	}

	return state;

}