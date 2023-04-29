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
		variant === 'createVocab_frontBack' &&
		css`
			margin-bottom: 5px;
		`}
`;
