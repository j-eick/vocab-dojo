import {useState} from 'react';
import styled, {css} from 'styled-components';

console.clear();

export default function FlashCard({frontTitle, frontDescription, backTitle, backDescription}) {
	const [turn, setTurn] = useState(false);

	function handleClick() {
		setTurn(!turn);
	}

	function renderFront() {
		if (frontTitle !== '' && frontDescription !== '') {
			return (
				<Front>
					<StyledH1 variant="FRONT_title_and_description">{frontTitle}</StyledH1>
					<StyledP variant="FRONT_title_and_description">{frontDescription}</StyledP>
				</Front>
			);
		} else if (frontTitle !== '' || frontDescription !== '') {
			if (frontTitle !== '') {
				return (
					<Front>
						<StyledH1 variant="FRONT_title">{frontTitle}</StyledH1>
					</Front>
				);
			} else if (frontDescription !== '') {
				return (
					<Front>
						<StyledP variant="FRONT_description">{frontDescription}</StyledP>
					</Front>
				);
			}
			return null;
		}
	}

	function renderBack() {
		if (backTitle !== '' && backDescription !== '') {
			return (
				<Back>
					<StyledH1 variant="BACK_title_and_description">{backTitle}</StyledH1>
					<StyledP variant="BACK_title_and_description">{backDescription}</StyledP>
				</Back>
			);
		} else if (backTitle !== '' || backDescription !== '') {
			if (backTitle !== '') {
				return (
					<Back>
						<StyledH1 variant="BACK_title">{backTitle}</StyledH1>
					</Back>
				);
			} else if (backDescription !== '') {
				return (
					<Back>
						<StyledP variant="BACK_description">{backDescription}</StyledP>
					</Back>
				);
			}
			return null;
		}
	}

	return (
		<>
			<CardContainer onClick={handleClick}>
				<Card turn={turn}>
					{renderFront()}
					{renderBack()}
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
	/* position: relative; */
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
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

	display: flex;
	flex-direction: column;
	align-items: center;
	backface-visibility: hidden;

	border: 1px solid #e5ecf5;
	border-radius: 30px;

	background: rgb(237, 243, 251);
	background: linear-gradient(137deg, #eff4fa 0%, #d6dfed 20%);
`;

const StyledH1 = styled.h1`
	height: 100%;
	width: 100%;

	display: grid;
	place-items: center;

	border: 1px solid gray;

	${({variant}) =>
		variant === 'FRONT_title_and_description' &&
		css`
			margin-top: 10px;
			height: 20%;
			width: 90%;

			font-size: var(--fontsize_Flashcard_title);
		`}
	${({variant}) =>
		variant === 'FRONT_title' &&
		css`
			margin-top: 40px;
			height: 50%;
			width: 90%;

			font-size: var(--fontsize_Flashcard_title);
		`}
	${({variant}) =>
		variant === 'BACK_title_and_description' &&
		css`
			margin-top: 10px;
			height: 20%;
			width: 90%;

			font-size: var(--fontsize_Flashcard_title);
		`}
	${({variant}) =>
		variant === 'BACK_title' &&
		css`
			margin-top: 40px;
			height: 50%;
			width: 90%;

			font-size: var(--fontsize_Flashcard_title);
		`}
`;

const StyledP = styled.p`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;

	${({variant}) =>
		variant === 'FRONT_title_and_description' &&
		css`
			margin-top: 5px;
			width: 90%;
			height: 65%;
			border: 1px solid grey;

			font-size: var(--fontsize_Flashcard_description);
		`}
	${({variant}) =>
		variant === 'FRONT_description' &&
		css`
			margin-top: 10px;
			height: 90%;
			width: 90%;
			border: 1px solid gray;

			font-size: var(--fontsize_Flashcard_description);
		`}

	${({variant}) =>
		variant === 'BACK_title_and_description' &&
		css`
			margin-top: 5px;
			width: 90%;
			height: 65%;
			border: 1px solid grey;

			font-size: var(--fontsize_Flashcard_description);
		`}
	${({variant}) =>
		variant === 'BACK_description' &&
		css`
			margin-top: 10px;
			height: 90%;
			width: 90%;
			border: 1px solid gray;

			font-size: var(--fontsize_Flashcard_description);
		`}
`;
