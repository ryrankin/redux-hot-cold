import React from 'react';
import FormContainer from './form-container';
import {connect} from 'react-redux';
import {newGame} from '../actions/index';

import GuessList from './guess-list';

export class Game extends React.Component{
	render(){
		let won;
		if(this.props.won){
			won = (<button onClick={(event)=>{this.props.dispatch(newGame())}} value="New Game">New Game</button>)
		}
		console.log(this.props.rightAnswer);
		return(
				<div>
					<h1>{this.props.feedback}</h1>
					{won}
					<FormContainer />
					<GuessList guessList={this.props.guessList} />
				</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	feedback: state.feedback,
	guessList: state.guessList,
	won: state.won,
	rightAnswer: state.rightAnswer
})

export default connect(mapStateToProps)(Game);