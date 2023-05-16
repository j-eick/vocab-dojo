import styled, {css} from 'styled-components';

export default function Modal({onClick, variant, children}) {
	return (
		<StyledModal onClick={onClick} variant={variant}>
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
`;
