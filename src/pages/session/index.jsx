import {useState} from 'react';

import NextFlashCardButton from '../../components/Button/NextFlashCard';
import FlashCard from '../../components/Flashcard';
import Layout from '../../components/Layout';
import {getAllFlashcards} from '../../services/vocabServices';
import {getRandomNum} from '../../utils/functions';

console.clear();

export async function getStaticProps() {
	const allFlashcards = await getAllFlashcards();
	const sumAllFlashcards = await allFlashcards.length;
	const startingCard = await getRandomNum(sumAllFlashcards);
	const newArray = shuffleCards();

	/**
	 * Exporting this function to src/utils/functions results in the following error:
	 *
	 * 	TypeError: can't access property "Flashcard", mongoose__WEBPACK_IMPORTED_MODULE_0___default().models is undefined
	 */
	function shuffleCards() {
		// 1. Make copy of card array + create empty array
		const origArray = allFlashcards;
		const newArray = [];

		while (origArray.length != 0) {
			// 1.0. get origArray length, generate random integer
			//  	and use that number to choose card x
			const numOfCards = origArray.length;
			const randomNum = Math.floor(Math.random() * numOfCards);
			const cardForNewArray = origArray[randomNum];

			// 1.1. Paste card x into new array
			newArray.push(cardForNewArray);
			// 1.2. Cut card x out of orig array
			origArray.splice(randomNum, 1);
		}

		// 2. Return new array
		return newArray;
	}

	return {
		props: {startingCard, newArray},
	};
}

export default function StudySession({startingCard, newArray}) {
	const [currentCard, setCurrentCard] = useState(newArray[startingCard]);

	function getRandomCard() {
		const sumAllFlashcards = newArray.length;
		const randomNum = getRandomNum(sumAllFlashcards);
		return newArray[randomNum];
	}

	return (
		<Layout>
			<FlashCard front={currentCard.front} back={currentCard.back} />
			<NextFlashCardButton onClick={() => setCurrentCard(getRandomCard())} />
		</Layout>
	);
}
