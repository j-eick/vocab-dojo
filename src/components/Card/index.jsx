import {useState} from 'react';
import styled from 'styled-components';

console.clear();

export default function FlashCard() {
	const [turn, setTurn] = useState(false);

	function handleClick() {
		setTurn(!turn);
		console.log(turn);
	}

	return (
		<>
			<CardContainer onClick={handleClick}>
				<Card turn={turn}>
					<Front>front</Front>
					<Back>back</Back>
				</Card>
			</CardContainer>
		</>
	);
}

// #################################
// ########   STYLING    ###########
// #################################

const CardContainer = styled.div`
	margin-top: 100px;
	width: 300px;
	height: 200px;
	perspective: 1000px;
`;

const Card = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	transition: transform 0.6s;
	transform-style: preserve-3d;
	transform: ${props => (props.turn ? 'rotateX(180deg)' : 'rotateX(0deg)')};
	transform-origin: center;
`;

const Front = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	display: grid;
	place-items: center;

	backface-visibility: hidden;

	background-color: lightcoral;
`;
const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	display: grid;
	place-items: center;

	backface-visibility: hidden;
	transform: rotateX(180deg);
	background: coral;
`;
