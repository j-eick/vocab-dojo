import {useState} from 'react';

console.clear();

// const StyledForm = styled.form`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `;
// const StyledSubmit = styled.input.attrs({
// 	type: 'submit',
// })`
// 	width: 40%;
// `;

export default function AddVocabForm() {
	const [card, setCard] = useState([
		{
			frontSide: 'front',
			backSide: 'back',
		},
	]);

	const handleSubmit = event => {
		event.preventDefault();
		setCard([
			...card,
			{
				frontSide: event.target.elements.frontSide.value,
				backSide: event.target.elements.backSide.value,
			},
		]);
		event.target.elements.frontSide.value = '';
		event.target.elements.backSide.value = '';
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="frontSide">
				Frontside:
				<input id="frontSide" type="text" name="frontSide" />
			</label>
			<label htmlFor="backSide">
				Backside:
				<input id="backSide" type="text" name="backSide" />
			</label>
			<input type="submit" />
		</form>
	);
}
