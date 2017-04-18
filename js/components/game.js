import React from 'react';
import {connect} from 'react-redux';

import FormContainer from './form-container';
import GuessList from './guess-list';
import * as actions from '../actions/index';

export class Game extends React.Component {
	render() {
		if(this.props.won && this.props.guessList.length < this.props.fewestGuesses) {
			this.props.dispatch(actions.postFewestGuesses(this.props.guessList.length));
		}
		console.log(this.props.rightAnswer);

		let didWin = (<button onClick={() => {this.props.dispatch(actions.newGame())}}>New Game</button>);

		return (
			<div>
				<h1>{this.props.feedback}</h1>
				{this.props.won ? didWin : null}
				<FormContainer />
				<GuessList guessList={this.props.guessList} />
			</div>
			)
	}
}

const mapStateToProps = (state, props) => ({
	fewestGuesses: state.fewestGuesses,
	feedback: state.feedback,
	guessList: state.guessList,
	rightAnswer: state.rightAnswer,
	won: state.won
})

export default connect(mapStateToProps)(Game);