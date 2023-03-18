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
		variant === 'profileMenu' &&
		css`
			height: 70%;
			width: 50px;
			border-radius: 50%;
			border: none;
		`};
`;
