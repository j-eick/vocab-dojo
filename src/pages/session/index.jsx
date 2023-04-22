import {useState} from 'react';

import NextFlashCardButton from '../../components/Button/NextFlashCard';
import FlashCard from '../../components/Flashcard';
import Layout from '../../components/Layout';
import {getAllFlashcards} from '../../services/vocabServices';
import {getRandomNum} from '../../utils/functions';

console.clear();

export async function getStaticProps() {
	const startingCard = getRandomNum(4);
	const allFlashcards = await getAllFlashcards();

	return {
		props: {startingCard, allFlashcards},
	};
}

export default function StudySession({startingCard, allFlashcards}) {
	const [currentCard, setCurrentCard] = useState(allFlashcards[startingCard]);

	function getRandomCard() {
		const randomNum = getRandomNum(4);
		return allFlashcards[randomNum];
	}

	return (
		<Layout>
			<FlashCard front={currentCard.front} back={currentCard.back} />
			<NextFlashCardButton onClick={() => setCurrentCard(getRandomCard())} />
		</Layout>
	);
}
