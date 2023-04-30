import styled, {css} from 'styled-components';

export default function InputMultiline({id, text, name, onChange, variant}) {
	return <StyledTextarea id={id} type={text} name={name} onChange={onChange} variant={variant} />;
}

const StyledTextarea = styled.textarea`
	${({variant}) =>
		variant === 'input_createVocabs' &&
		css`
			margin-bottom: 20px;
			padding: 8px;
			height: 120px;
			resize: none;

			outline: none;
			border: 1px solid white;
			border-radius: 10px;
			font-size: var(--fontsize_Textfield_text);
			line-break: normal;

			background: #dae2eb;

			box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
				rgb(209, 213, 219) 0px 0px 0px 1px inset;
			&:focus {
				background: #e6e8ea;
			}
		`}
`;
