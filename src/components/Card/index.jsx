import {useState} from 'react';
import styled from 'styled-components';

console.clear();

const Front = styled.div`
	background-color: lightcoral;
`;
const Back = styled.div`
	background-color: coral;
`;

export default function FlashCard({front, back}) {
	const [turn, setTurn] = useState(true);

	return (
		<div onClick={() => setTurn(!turn)}>
			<Front>
				<p>{front}</p>
			</Front>
			<Back>
				<p>{back}</p>
			</Back>
		</div>
	);
}
