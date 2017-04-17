import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

import * as actions from '../js/actions/index';
import store from '../js/store';

const should = chai.should();

const initialState = {
	guess: 20
}

describe('Redux test', function(){
	it('Should make a guess', function(){
		store.dispatch(actions.userGuess(initialState.guess));
		store.getState().guess.should.equal(20);
		store.getState().guessList.length.should.equal(1);
	});
	it('Should start a new game', function(){
		store.dispatch(actions.newGame());
		store.getState().guessList.length.should.equal(0);
	});
	it('Should win game', function(){
		let rightAnswer = store.getState().rightAnswer;
		store.dispatch(actions.userGuess(rightAnswer));
		store.getState().won.should.equal(true);
	})
});