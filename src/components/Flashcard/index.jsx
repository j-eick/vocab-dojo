import {useState} from 'react';
import styled from 'styled-components';

console.clear();

export default function FlashCard() {
	const [turn, setTurn] = useState(false);

	function handleClick() {
		setTurn(!turn);
	}

	return (
		<>
			<CardContainer onClick={handleClick}>
				<Card turn={turn}>
					<Front>
						<StyledH1>Title</StyledH1>
						<StyledP>Description</StyledP>
					</Front>
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
	perspective: 500px;
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
	grid-template-rows: 35% 65%;
	backface-visibility: hidden;

	border-radius: 30px;

	background-color: lightcoral;
`;
const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transform: rotateX(180deg);

	display: grid;
	place-items: center;
	backface-visibility: hidden;

	border-radius: 30px;

	background: coral;
`;

const StyledH1 = styled.h1`
	height: 90%;
	width: 90%;

	display: grid;
	place-items: center;

	background-color: darkgrey;
`;
const StyledP = styled.p`
	height: 90%;
	width: 90%;

	display: grid;
	place-items: center;
	background-color: grey;
`;
