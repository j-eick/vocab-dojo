import {useState} from 'react';

import NextFlashCardButton from '../../components/Button/NextFlashCard';
import FlashCard from '../../components/Flashcard';
import Layout from '../../components/Layout';
import {getAllFlashcards} from '../../services/vocabServices';
import {getRandomNum} from '../../utils/functions';
import {shuffleCards} from '../../utils/functions';

console.clear();

export async function getStaticProps() {
	const allFlashcards = await getAllFlashcards();
	const sumAllFlashcards = await allFlashcards.length;
	const startingCard = await getRandomNum(sumAllFlashcards);
	const newArray = await shuffleCards(allFlashcards);
	console.log(newArray);

	return {
		props: {startingCard, newArray},
	};
}

export default function StudySession({startingCard, newArray}) {
	const [currentCard, setCurrentCard] = useState(newArray[startingCard]);

	console.log('currentCard');
	console.log(currentCard);

	function getRandomCard() {
		const sumAllFlashcards = newArray.length;
		const randomNum = getRandomNum(sumAllFlashcards);
		return newArray[randomNum];
	}

	return (
		<Layout>
			<FlashCard
				frontTitle={currentCard.frontTitle}
				frontDescription={currentCard.frontDescription}
				backTitle={currentCard.backTitle}
				backDescription={currentCard.backDescription}
			/>
			<NextFlashCardButton onClick={() => setCurrentCard(getRandomCard())} />
		</Layout>
	);
}
