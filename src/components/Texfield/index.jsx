import styled, {css} from 'styled-components';

export default function TextBox({children, variant = 'default'}) {
	return <StyledTextbox variant={variant}>{children}</StyledTextbox>;
}

const StyledTextbox = styled.div`
	${({variant}) =>
		variant === 'default' &&
		css`
			color: red;
			border: 1.5px solid black;
		`}
	${({variant}) =>
		variant === 'textbox_mainpage' &&
		css`
			width: 100%;
			height: 100px;
			padding: 20px;

			font-size: var(--fontsize_Textfield_text);

			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

			border-radius: 10px;
			background: rgb(237, 243, 251);
			background: linear-gradient(207deg, #eff4fa 0%, #d6dfed 20%);
		`}

		${({variant}) =>
		variant === 'textfield_overview' &&
		css`
			padding: 10px 10px;

			font-size: var(--fontsize_Textfield_text);

			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1.5px;

			border-radius: 20px;
			background: rgb(237, 243, 251);
			background: linear-gradient(207deg, #eff4fa 0%, #d6dfed 5%);

			border-radius: 5px;
		`}
`;
