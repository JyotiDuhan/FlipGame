import React from 'react';

export default function Game(){
	let count = [1,2,3,4];
	let rCount = [5,6,7,8];

	function flipCard(index) {
		let card = document.getElementById(index);
		card.classList.toggle('is-flipped');
	}

	const cards = count.map((item, index) => 
		<div key={index} id={item} className='flip-cards' onClick={() => flipCard(item)}>
			<div className="flip-card-front flip-face">{item}</div>
			<div className="flip-card-back flip-face">{}</div>
		</div>
	);

	const rightCards = rCount.map((item, index) => 
		<div key={index} id={item} className='flip-cards' onClick={() => flipCard(item)}>
			<div className="flip-card-front flip-face">{index+1}</div>
			<div className="flip-card-back flip-face">{}</div>
		</div>
	);

	return (
		<div className="game-wrap">
			<div id='left'>{cards}</div>
			<div id='right'>{rightCards}</div>
		</div>
	)
}