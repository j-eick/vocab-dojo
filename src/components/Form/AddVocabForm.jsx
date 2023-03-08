import styled from 'styled-components';

import {vocabStore} from '../../hooks/useStore';

console.clear();

const Wrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
const StyledCardList = styled.ul`
	width: 80%;
	padding: 20px;

	display: flex;
	justify-content: center;
	gap: 20px;
	background-color: yellow;
`;
const StyledCard = styled.li`
	display: flex;
	flex-direction: column;
	gap: 10px;

	border: 1px solid black;
`;
const StyledCardSide = styled.p`
	width: 120px;

	display: flex;
	justify-content: center;

	/* margin: 20px; */
	padding: 20px;
	background-color: #62aed4;
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

export default function AddVocabForm() {
	const getVocabList = vocabStore(state => state.vocabList);
	const addVocabs = vocabStore(state => state.addVocabs);

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
			<StyledCardList>
				{getVocabList.map(card => (
					<StyledCard key={card.front}>
						<StyledCardSide>{card.front}</StyledCardSide>
						<StyledCardSide>{card.back}</StyledCardSide>
					</StyledCard>
				))}
			</StyledCardList>
		</Wrapper>
	);
}
