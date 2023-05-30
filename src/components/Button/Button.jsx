import styled, {css} from 'styled-components';

console.clear();

export default function Button({type = 'button', variant = 'default', children, onClick, name}) {
	return (
		<>
			<StyledButton onClick={onClick} type={type} variant={variant} name={name}>
				{children}
			</StyledButton>
		</>
	);
}

const StyledButton = styled.button`
	${({variant}) =>
		variant === 'default' &&
		css`
			width: fit-content;
			padding: 10px;
			border: none;
			border-radius: 20px;
			display: grid;
			place-items: center;
		`}

	${({variant}) =>
		variant === 'profileMenuModal' &&
		css`
			position: absolute;
			height: 70px;
			width: 60px;
			display: grid;
			place-items: center;

			top: 20px;
			left: 10px;
			border-radius: 50%;
			border: none;
		`}

	${({variant}) =>
		variant === 'createFlashcard' &&
		css`
			padding: 10px 10px;
			width: fit-content;

			display: grid;
			grid-template-columns: 3fr 1fr;
			align-items: center;
			gap: 5px;

			border: none;
			border-radius: 15px;
			cursor: pointer;

			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
			background-color: #dde7f4;
			&:hover {
				background: #e1e8f3;
			}
			&:focus {
				/* border: black; */
				outline: 1px solid white;
			}
		`}

	${({variant}) =>
		variant === 'deleteFlashcardStack' &&
		css`
			margin-top: 10px;
			padding: 10px 10px;
			width: fit-content;

			display: grid;
			grid-template-columns: 4fr 1fr;
			align-items: center;

			border: none;
			border-radius: 15px;
			cursor: pointer;

			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
			background-color: #dde7f4;
			&:hover {
				background: #e1e8f3;
			}
			&:focus {
				/* border: black; */
				outline: 1px solid white;
			}
		`}

	${({variant}) =>
		variant === 'deleteButton' &&
		css`
			margin-top: 20px;
			padding: 10px 20px;
			width: fit-content;

			display: grid;
			align-items: center;

			border: none;
			border-radius: 15px;
			cursor: pointer;

			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
			background-color: #ff1d1d76;
			&:hover {
				/* background: #e1e8f3; */
				outline: 1px solid white;
			}
			&:focus {
				/* border: black; */
			}
		`}

	${({variant}) =>
		variant === 'add_cardTitle' &&
		css`
			/* position: absolute; */
			width: fit-content;
			transform: translateY(100px);
		`}

	${({variant}) =>
		variant === 'startSession' &&
		css`
			padding: 10px 10px;
			height: 40px;
			width: fit-content;

			display: grid;
			grid-template-columns: 3fr 1fr;
			align-items: center;
			gap: 5px;

			border: none;
			border-radius: 15px;
			cursor: pointer;

			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
			background-color: #dde7f4;
			&:hover {
				background: #e1e8f3;
			}
			&:focus {
				/* border: black; */
				outline: 1px solid white;
			}
		`}

		${({variant}) =>
		variant === 'nextFlashCard' &&
		css`
			margin-top: 220px;
			/* padding: 7px 15px; */
			height: 40px;
			width: 90px;

			display: grid;
			place-items: center;

			border: none;
			border-radius: 50px;
			cursor: pointer;

			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
			background-color: #dde7f4;
			&:hover {
				background: #e1e8f3;
			}
			&:focus {
				/* border: black; */
				outline: 1px solid white;
			}
		`}

	${({variant}) =>
		variant === 'repeatSession' &&
		css`
			margin-top: 220px;
			padding: 10px 15px;
			height: 40px;
			width: fit-content;

			display: flex;
			align-items: center;
			gap: 5px;

			border: none;
			border-radius: 15px;
			cursor: pointer;

			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
			background-color: #dde7f4;
			&:hover {
				background: #e1e8f3;
			}
			&:focus {
				/* border: black; */
				outline: 1px solid white;
			}
		`}
`;
