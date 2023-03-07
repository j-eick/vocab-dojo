import {useState, useEffect} from 'react';
import styled from 'styled-components';

console.clear();

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const StyledSubmit = styled.input.attrs({
	type: 'submit',
})`
	width: 40%;
`;

export default function AddVocabForm() {
	const [card, setCard] = useState([
		{
			frontSide: 'front',
			backSide: 'back',
		},
	]);

	useEffect(() => {
		console.log(card);
	}, []);

	const handleSubmit = event => {
		event.preventDefault();
		const front = event.target.elements.frontSide.value;
		const back = event.target.elements.backSide.value;

		if ((front && back) !== '') {
			setCard(prevState => [
				...prevState,
				{
					frontSide: front,
					backSide: back,
				},
			]);
		} else {
			alert('both sides need input!');
		}
		event.target.elements.frontSide.value = '';
		event.target.elements.backSide.value = '';
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label htmlFor="frontSide">
				Frontside:
				<input id="frontSide" type="text" name="frontSide" />
			</label>
			<label htmlFor="backSide">
				Backside:
				<input id="backSide" type="text" name="backSide" />
			</label>
			<StyledSubmit type="submit" name="submit" />
		</StyledForm>
	);
}
