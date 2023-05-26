import styled, {css} from 'styled-components';

import {nunito} from '../../utils/font';

console.clear();

export default function Title({children, variant = 'default'}) {
	return (
		<StyledTextfieldTitle variant={variant} className={nunito.className}>
			{children}
		</StyledTextfieldTitle>
	);
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

	${({variant}) =>
		variant === 'Textbox_Title' &&
		css`
			margin-bottom: 3px;
			padding: 0 7px 0 7px;

			width: fit-content;
			font-weight: 300;
			font-size: var(--fontsize_Textfield_title);
		`}
`;
