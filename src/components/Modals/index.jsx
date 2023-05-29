import styled, {css, keyframes} from 'styled-components';

export default function Modal({onClick, variant, children, safetyQuestionModalActive}) {
	return (
		<StyledModal
			onClick={onClick}
			variant={variant}
			safetyQuestionModalActive={safetyQuestionModalActive}
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

			padding: 40px 40px;
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

			${({safetyQuestionModalActive}) =>
				safetyQuestionModalActive &&
				css`
					animation: ${fadeIn} 1s cubic-bezier(0.28, 1.04, 0.79, 1.19);
				`}
		`}
`;

const fadeIn = keyframes`
	0% {
    transform: translateY(-70px);
	opacity: 0
  }
  80% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
	opacity: 1
  }
	`;
