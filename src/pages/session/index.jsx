import {useState} from 'react';

import NextFlashCard from '../../components/Button/NextFlashCard';
import FlashCard from '../../components/Flashcard';
import Layout from '../../components/Layout';
import {vocabStore} from '../../hooks/useStore';
import {getRandomNum} from '../../utils/functions';

export function getStaticProps() {
	const startingCard = getRandomNum(4);

	return {
		props: {startingCard},
	};
}

export default function StudySession({startingCard}) {
	const vocabList = vocabStore(state => state.vocabList);

	const [currentCard, setCurrentCard] = useState(vocabList[startingCard]);

	function getRandomCard() {
		const randomNum = getRandomNum(4);
		return vocabList[randomNum];
	}

	return (
		<Layout>
			<FlashCard front={currentCard.front} back={currentCard.back} />
			<NextFlashCard onClick={() => setCurrentCard(getRandomCard())} />
		</Layout>
	);
}
