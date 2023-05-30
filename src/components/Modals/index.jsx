import styled, {css, keyframes} from 'styled-components';

export default function Modal({onClick, variant, children, showSafetyQuestion_Modal}) {
	return (
		<StyledModal
			onClick={onClick}
			variant={variant}
			showSafetyQuestion_Modal={showSafetyQuestion_Modal}
		>
			{children}
		</StyledModal>
	);
}

const StyledModal = styled.div`
	${({variant}) =>
		variant === 'profileMenuModal' &&
		css`
			position: absolute;
			transform: translateY(250px);

			padding: 50px 20px;

			width: 250px;
			height: 400px;

			border-radius: 20px;
			opacity: 0.8;
			background-color: greenyellow;
		`};

	${({variant}) =>
		variant === `preSessionModal` &&
		css`
			position: absolute;
			top: 120px;

			display: grid;
			place-items: center;

			height: 160px;
			width: 280px;

			border-radius: 15px;
			background: rgba(17, 41, 87, 0.15);
			backdrop-filter: blur(10px);

			font-size: var(--fontsize_Textfield_title);

			/* opacity: 0; */
			z-index: 60;
		`}

	${({variant}) =>
		variant === `postSessionModal` &&
		css`
			position: absolute;
			top: 120px;

			display: grid;
			place-items: center;

			height: 160px;
			width: 280px;

			border-radius: 15px;
			background: rgba(17, 41, 87, 0.15);
			backdrop-filter: blur(10px);

			font-size: var(--fontsize_Textfield_title);

			/* opacity: 0; */
			z-index: 70;
		`}

	${({variant}) =>
		variant === `saftey_question_modal` &&
		css`
			position: absolute;
			top: 20px;

			display: grid;
			place-items: center;

			padding: 50px 40px 30px 40px;
			width: fit-content;

			border-radius: 10px;
			background: rgba(227, 111, 53, 0.331);
			backdrop-filter: blur(7px);

			font-size: var(--fontsize_Textfield_title);

			/* opacity: 0; */
			z-index: 70;

			/* transform: translateY(50px); */

			& p {
				font-size: var(--fontsize_Textfield_title);
			}

			${({showSafetyQuestion_Modal}) =>
				showSafetyQuestion_Modal &&
				css`
					animation: ${fadeIn} 0.5s cubic-bezier(0.29, 1.12, 0.75, 1.18);
					/* animation: ${({safetyQuestionModalActive}) =>
						safetyQuestionModalActive ? fadeIn : fadeOut}
						1s cubic-bezier(0.28, 1.11, 0.66, 1.11) forward; */
				`}
		`}
`;

const fadeIn = keyframes`
	0% {
    transform: translateY(-70px);
	visibility: hidden;
}
80% {
	transform: translateY(20px);
}
100% {
	transform: translateY(0);
	visibility: visible;
  }
	`;
const fadeOut = keyframes`
	0% {
    transform: translateY(-50px);
	opacity: 0
  }
  80% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
	opacity: 1
  }
	`;
