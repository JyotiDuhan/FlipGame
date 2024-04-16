import React from 'react';

export default function Game(){
	// let count = ['#CD5C5C','#40E0D0','#CCCCFF','#FF7F50'];
	let count = ['red', 'green', 'blue', 'yellow'];
	let rCount = ['red', 'green', 'blue', 'yellow'];

	function flipCard(index) {
		let card = document.getElementById(index);
		card.classList.toggle('is-flipped');
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
		<div key={index} id={index} className='flip-cards' onClick={() => flipCard(index)}>
			<div className="flip-card-front flip-face">{}</div>
			<div className="flip-card-back flip-face" style={{backgroundColor: item}}>{}</div>
		</div>
	);

	const rightCards = shuffleArray(rCount).map((item, index) => 
		<div key={item} id={index+4} className='flip-cards' onClick={() => flipCard(index+4)}>
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