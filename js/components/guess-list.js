import React from 'react';

export default function GuessList(props){
	const guessList = props.guessList.map((guess, index) => {
		return (
				<li key={index}>{guess}</li>
				)
	})

	return (
			<ul>	
				{guessList}
			</ul>
	)
}