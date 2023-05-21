import styled, {css, keyframes} from 'styled-components';

export default function InfoModalPopup({variant, onClick, children}) {
	return (
		<StyledContainer variant={variant} onClick={onClick}>
			<StyledP>{children}</StyledP>
		</StyledContainer>
	);
}

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  10% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const StyledContainer = styled.div`
	position: fixed;
	top: 100px;
	width: 70%;
	padding: 20px 20px;

	display: grid;
	place-items: center;

	animation: one 3s infinite;

	border-radius: 5px;
	background-color: #bfe2fd;

	animation: ${slideDown} 0.5s ease-in-out forwards;

	/* @keyframes StyledContainer {
		0% {
			right: -200px;
		}
		100% {
			right: 0px;
		}
	} */
`;

const StyledP = styled.p`
	${({variant}) =>
		variant === 'smallInfoModal' &&
		css`
			font-size: var(--fontsize_Modal_Popups);
		`}
`;
