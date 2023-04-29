import styled, {css} from 'styled-components';

export default function Form({children, onSubmit, variant = 'default'}) {
	return (
		<StyledForm onSubmit={onSubmit} variant={variant}>
			{children}
		</StyledForm>
	);
}

const StyledForm = styled.form`
	${({variant}) =>
		variant === 'default' &&
		css`
			border: 1px solid red;
		`}

	${({variant}) =>
		variant === 'addFlashcard_Form' &&
		css`
			margin-top: 120px;

			width: 80%;

			display: flex;
			flex-direction: column;
			&button[type='submit'] {
				justify-content: flex-end;
			}
		`}
`;
