import {useState} from 'react';
import styled from 'styled-components';

console.clear();

export default function FlashCard({front = 'DefaultFront', back = 'DefaultBack'}) {
	const [turn, setTurn] = useState(false);

	function handleClick() {
		setTurn(!turn);
	}

	return (
		<>
			<CardContainer onClick={handleClick}>
				<Card turn={turn}>
					<Front>
						<StyledH1>{front}</StyledH1>
						<StyledP>{front}</StyledP>
					</Front>
					<Back>{back}</Back>
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

	border: 1px solid #e5ecf5;
	border-radius: 30px;

	background: rgb(237, 243, 251);
	background: linear-gradient(207deg, #eff4fa 0%, #d6dfed 20%);

	box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 18px, rgba(0, 0, 0, 0.22) 0px 0px 5px;
`;
const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	transform: rotateX(180deg);

	display: grid;
	place-items: center;
	backface-visibility: hidden;

	border: 1px solid #e5ecf5;
	border-radius: 30px;

	background: rgb(237, 243, 251);
	background: linear-gradient(137deg, #eff4fa 0%, #d6dfed 20%);
`;

const StyledH1 = styled.h1`
	height: 80%;
	width: 80%;

	display: grid;
	place-items: center;

	border: 1px solid gray;
`;
const StyledP = styled.p`
	height: 80%;
	width: 80%;

	display: grid;
	place-items: center;

	border: 1px solid gray;
`;
