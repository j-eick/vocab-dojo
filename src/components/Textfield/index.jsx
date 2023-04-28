import styled, {css} from 'styled-components';

export default function Textfield({children, variant = 'default'}) {
	return <StyledTextfield variant={variant}>{children}</StyledTextfield>;
}

const StyledTextfield = styled.div`
	${({variant}) =>
		variant === 'default' &&
		css`
			color: red;
			border: 1.5px solid black;
		`}
	${({variant}) =>
		variant === 'textfield_mainpage' &&
		css`
			width: 100%;
			height: 100px;
			padding: 10px;

			border-radius: 20px;
			background-color: #d3f0ff;
		`}
`;
