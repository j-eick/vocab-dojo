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
				<StyledLabel htmlFor="frontSide">
					Frontside:
					<input
						id="frontSide"
						type="text"
						name="frontSide"
						onChange={event => {
							setFrontside(event.target.value);
						}}
					/>
				</StyledLabel>
				<StyledLabel htmlFor="backSide">
					Backside:
					<input
						id="backSide"
						type="text"
						name="backSide"
						onChange={event => {
							setBackside(event.target.value);
						}}
					/>
				</StyledLabel>
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

const StyledForm = styled.form`
	margin-top: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledLabel = styled.label`
	margin: 20px 20px;
`;

const StyledSubmit = styled.button`
	width: 40%;
`;

// const StyledSubmit = styled.input.attrs({
// 	type: 'submit',
// })`
// 	width: 40%;
// `;
