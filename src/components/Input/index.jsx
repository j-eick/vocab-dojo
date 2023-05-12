import styled, {css} from 'styled-components';

export default function Inputfield({id, text, name, onChange, variant, placeholder}) {
	return (
		<StyledInput
			id={id}
			type={text}
			name={name}
			onChange={onChange}
			variant={variant}
			placeholder={placeholder}
		/>
	);
}

const StyledInput = styled.input`
	${({variant}) =>
		variant === 'input_createVocabs_title' &&
		css`
			width: 80%;
			height: 2em;

			margin-bottom: 4px;
			padding: 8px;

			outline: none;
			border: 1px solid whitesmoke;
			border-radius: 7px;
			/* border-top-right-radius: 10px;
			border-top-left-radius: 10px; */
			font-size: var(--fontsize_Textfield_text);
			line-break: normal;

			background: #dae2eb;

			box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
				rgb(209, 213, 219) 0px 0px 0px 1px inset;

			/* opacity: 0; */

			/* IE: default scrollbar is hidden  */
			overflow: auto;
			&:focus {
				background: #e6e8ea;

				&::placeholder {
					color: transparent;
				}
			}
			&::placeholder {
				color: gray;
				font-size: var(--fontsize_Flashcard_title_placeholder);
				font-style: italic;
				opacity: 0.3;
				text-align: left;
			}
		`}

	${({variant}) =>
		variant === 'input_createVocabs' &&
		css`
			margin-bottom: 20px;
			padding: 8px;
			min-height: 80px;

			outline: none;
			border: 1px solid white;
			border-radius: 7px;
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
