import styled, {css} from 'styled-components';

export default function Title({children, variant = 'default'}) {
	return <StyledTextfieldTitle variant={variant}>{children}</StyledTextfieldTitle>;
}

const StyledTextfieldTitle = styled.h1`
	${({variant}) =>
		variant === 'default' &&
		css`
			color: red;
			font-size: var(--fontsize_Textfield_title);
		`}

	${({variant}) =>
		variant === 'textfieldArea_Title' &&
		css`
			padding-left: 15px;
			margin-bottom: 5px;

			color: red;
			font-size: var(--fontsize_Textfield_title);
		`}

		${({variant}) =>
		variant === 'startSession_Title' &&
		css`
			margin-bottom: 15px;
			font-size: var(--fontsize_HeaderTitle);
		`}
`;
