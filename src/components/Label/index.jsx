import styled, {css} from 'styled-components';

export default function LabelTwoTags({htmlFor, variant = 'default', children}) {
	return (
		<StyledLabel htmlFor={htmlFor} variant={variant}>
			{children}
		</StyledLabel>
	);
}

const StyledLabel = styled.label`
	${({variant}) =>
		variant === 'default' &&
		css`
			color: red;
		`}

	${({variant}) =>
		variant === 'createVocab_input' &&
		css`
			margin-bottom: 5px;
			margin-left: 7px;

			font-size: var(--fontsize_Textfield_title);
		`}
`;
