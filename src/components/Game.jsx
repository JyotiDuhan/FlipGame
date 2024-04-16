import React, { useState } from 'react';

export default function Game(){
	const [lS, setLs] = useState('');
	const [rS, setRs] = useState('');

	let count = ['red', 'green', 'blue', 'yellow'];
	let rCount = ['red', 'green', 'blue', 'yellow'];

	function flipCard(index, item, side) {
		let card = document.getElementById(index);
		card.classList.toggle('is-flipped');
		if(side === 'l' && !lS) {
			setLs(item);
			let leftList = document.getElementById('left');
			leftList.classList.add('disable');
			// remove disable class from right side if exists - ToDo
			// also, reset right side state if exists - Todo
		} else if(side === 'r' && !rS) {
			setRs(item);
			let rightList = document.getElementById('right');
			rightList.classList.add('disable');
			// remove disable class from left side if exists - ToDo
			// also, reset left side state if exists - Todo
		} 
	}

	function shuffleArray(array) {
		let input = array;
	    for (var i = input.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = input[i];
	        input[i] = input[j];
	        input[j] = temp;
	    }
	    return input;
	}

	const cards = count.map((item, index) => 
		<div key={index} id={index} className='flip-cards left-side' onClick={() => flipCard(index, item, 'l')}>
			<div className="flip-card-front flip-face">{}</div>
			<div className="flip-card-back flip-face" style={{backgroundColor: item}}>{}</div>
		</div>
	);

	const rightCards = shuffleArray(rCount).map((item, index) => 
		<div key={item} id={index+4} className='flip-cards right-side' onClick={() => flipCard(index+4, item, 'r')}>
			<div className="flip-card-front flip-face">{}</div>
			<div className="flip-card-back flip-face" style={{backgroundColor: item}}>{}</div>
		</div>
	);

	return (
		<div className="game-wrap">
			<div id='left'>{cards}</div>
			<div id='right'>{rightCards}</div>
		</div>
	)
}