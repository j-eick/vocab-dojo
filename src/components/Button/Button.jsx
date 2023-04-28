import styled, {css} from 'styled-components';

console.clear();

export default function Button({type = 'button', variant, children, onClick, ...props}) {
	return (
		<>
			<StyledButton onClick={onClick} type={type} variant={variant} {...props}>
				{children}
			</StyledButton>
		</>
	);
}

const StyledButton = styled.button`
	${({variant}) =>
		variant === 'profileMenuModal' &&
		css`
			position: absolute;
			height: 70px;
			width: 60px;
			display: grid;
			place-items: center;

			top: 20px;
			left: 10px;
			border-radius: 50%;
			border: none;
		`}
	${({variant}) =>
		variant === 'startLearning' &&
		css`
			height: 30px;
			width: 50px;
			margin-top: 50px;
			border-radius: 10%;
			border: none;
		`}
	${({variant}) =>
		variant === 'nextFlashCard' &&
		css`
			height: 30px;
			margin-top: 50px;
			padding: 10px;

			border-radius: 10%;
			border: none;
		`}
	${({variant}) =>
		variant === 'default' &&
		css`
			width: fit-content;
			border: none;
			border-radius: 20px;
			display: grid;
			place-items: center;
		`}
`;
