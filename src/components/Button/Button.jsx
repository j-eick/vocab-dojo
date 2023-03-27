import styled, {css} from 'styled-components';

console.clear();

export default function Button({type = 'button', children, ...props}) {
	return (
		<>
			<StyledButton type={type} {...props}>
				{children}
			</StyledButton>
		</>
	);
}

const StyledButton = styled.button`
	${({variant}) =>
		variant === 'profileMenuModal' &&
		css`
			height: 70%;
			width: 50px;
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
`;
