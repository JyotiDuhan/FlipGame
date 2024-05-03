import React, { useContext } from 'react';
import { ContestContext } from './Game';
import { Link } from "react-router-dom";

export default function Winner() {
	const contestants = useContext(ContestContext);
	function playagain() {
		window.location.reload();
	}
	return (
		<div className='winner-wrap'>
			<p>Congratulations <span className="winner-color" style={{backgroundColor: contestants}}></span></p><br/>
			<button onClick={() => playagain()}>Play again</button>
		</div>
	)
}