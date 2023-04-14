import {useState} from 'react';
import styled from 'styled-components';

console.clear();

export default function AddVocabForm({onSubmit}) {
	const [frontside, setFrontside] = useState('');
	const [backside, setBackside] = useState('');

	const handleSubmit = event => {
		event.preventDefault();

		if ((frontside && backside) !== '') {
			onSubmit({
				front: frontside,
				back: backside,
			});
		} else {
			alert('both sides need input!');
		}
		event.target.elements.frontSide.value = '';
		event.target.elements.backSide.value = '';
	};

	return (
		<Wrapper>
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor="frontSide">
					Frontside:
					<input
						id="frontSide"
						type="text"
						name="frontSide"
						onChange={event => {
							setFrontside(event.target.value);
						}}
					/>
				</label>
				<label htmlFor="backSide">
					Backside:
					<input
						id="backSide"
						type="text"
						name="backSide"
						onChange={event => {
							setBackside(event.target.value);
						}}
					/>
				</label>
				<StyledSubmit type="submit" name="submit">
					New Word
				</StyledSubmit>
			</StyledForm>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
// const StyledCardUl = styled.ul`
// 	width: 80%;
// 	padding: 20px;
// 	margin-top: 50px;

// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	gap: 20px;

// 	background-color: yellow;
// `;
// const StyledCardLi = styled.li`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: center;

// 	gap: 10px;

// 	border: 1px solid black;
// `;
// const StyledCardSide = styled.p`
// 	position: relative;
// 	width: 120px;

// 	display: flex;
// 	justify-content: center;

// 	/* margin: 20px; */
// 	padding: 20px;
// 	background-color: #62aed4;
// `;

// const Trash = styled.span`
// 	position: absolute;
// 	top: -7px;
// 	right: -5px;
// 	font-size: 1.5rem;
// `;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledSubmit = styled.button`
	width: 40%;
`;

// const StyledSubmit = styled.input.attrs({
// 	type: 'submit',
// })`
// 	width: 40%;
// `;
