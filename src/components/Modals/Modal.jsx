import styled, {css} from 'styled-components';

export default function Modal({children, ...props}) {
	return <StyledModal {...props}>{children}</StyledModal>;
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
`;
