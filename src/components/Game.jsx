import React, { useState, useEffect, createContext, useContext } from 'react';
import Winner from './Winner';

export const ContestContext = createContext(null);
export default function Game(){
	const [winner, setWinner] = useState('');
	const [lS, setLs] = useState('');
	const [rS, setRs] = useState('');
	const [rCount, setrCount] = useState(shuffleArray(['red', 'green', 'blue', 'yellow']));

	let count = ['red', 'green', 'blue', 'yellow'];
	// let rCount = shuffleArray(['red', 'green', 'blue', 'yellow']);

	function flipCard(index, item, side) {
		let card = document.getElementById(index);
		card.classList.toggle('is-flipped');
		if(side === 'l' && !lS) {
			setLs(item);
			let leftList = document.getElementById('left');
			leftList.classList.add('disable');
			// remove disable class from right side if exists 
			if(document.getElementById('right').classList.contains('disable')) {
				document.getElementById('right').classList.remove('disable');
			}
			if(rS && rS === lS) {
				setWinner('Game over.');
			} else if(rS) { // also, reset right side state if exists 
				setRs('');
			}
		} else if(side === 'r' && !rS) {
			setRs(item);
			let rightList = document.getElementById('right');
			rightList.classList.add('disable');
			// remove disable class from left side if exists 
			if(document.getElementById('left').classList.contains('disable')) {
				document.getElementById('left').classList.remove('disable');
			}
			if(lS && lS === rS){
				setWinner('Game over.');
			} else if(lS) { // also, reset left side state if exists
				setLs('');
			}
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

	const rightCards = rCount.map((item, index) => 
		<div key={item} id={index+4} className='flip-cards right-side' onClick={() => flipCard(index+4, item, 'r')}>
			<div className="flip-card-front flip-face">{}</div>
			<div className="flip-card-back flip-face" style={{backgroundColor: item}}>{}</div>
		</div>
	);

	return (
		<ContestContext.Provider value={winner}>
			<div>
				{winner 
					? <Winner />
					:
					<div className="game-wrap">
						<div id='left'>{cards}</div>
						<div id='right'>{rightCards}</div>
					</div>
				}
			</div>
		</ContestContext.Provider>
	)
}