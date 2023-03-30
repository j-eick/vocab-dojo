import styled from 'styled-components';

import {vocabStore} from '../../hooks/useStore';

console.clear();

export default function AddVocabForm() {
	const getVocabList = vocabStore(state => state.vocabList);
	const addVocabs = vocabStore(state => state.addVocabs);
	const removeVocabs = vocabStore(state => state.removeVocabs);

	const handleSubmit = event => {
		event.preventDefault();

		const frontside = event.target.elements.frontSide.value;
		const backside = event.target.elements.backSide.value;

		if ((frontside && backside) !== '') {
			addVocabs({
				front: frontside,
				back: backside,
			});
		} else {
			alert('both sides need input!');
		}
		event.target.elements.frontSide.value = '';
		event.target.elements.backSide.value = '';
	};

	const handleRemoveItem = itemToRemove => {
		removeVocabs(itemToRemove);
		console.log('clicked the bin ' + itemToRemove);
	};

	return (
		<Wrapper>
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
			<StyledCardUl>
				{getVocabList.map(card => (
					<StyledCardLi key={card.front}>
						<StyledCardSide>
							{card.front}
							<Trash onClick={() => handleRemoveItem(card)}>🗑</Trash>
						</StyledCardSide>
						<StyledCardSide>
							{card.back}
							<Trash onClick={() => handleRemoveItem(card)}>🗑</Trash>
						</StyledCardSide>
					</StyledCardLi>
				))}
			</StyledCardUl>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
const StyledCardUl = styled.ul`
	width: 80%;
	padding: 20px;
	margin-top: 50px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	background-color: yellow;
`;
const StyledCardLi = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: center;

	gap: 10px;

	border: 1px solid black;
`;
const StyledCardSide = styled.p`
	position: relative;
	width: 120px;

	display: flex;
	justify-content: center;

	/* margin: 20px; */
	padding: 20px;
	background-color: #62aed4;
`;

const Trash = styled.span`
	position: absolute;
	top: -7px;
	right: -5px;
	font-size: 1.5rem;
`;

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
