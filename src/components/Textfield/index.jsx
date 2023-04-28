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
			padding: 20px;

			font-size: var(--fontsize_Textfield_text);

			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

			border-radius: 20px;
			background: rgb(237, 243, 251);
			background: linear-gradient(
				207deg,
				rgba(237, 243, 251, 1) 0%,
				rgba(211, 222, 238, 1) 10%
			);
		`}
`;
