import {useEffect} from 'react';
import {useState} from 'react';

import NextFlashCard from '../../components/Button/NextFlashCard';
import FlashCard from '../../components/Flashcard';
import Layout from '../../components/Layout';
import {getAllVocabs} from '../../services/vocabServices';

console.clear();

export const getStaticProps = () => {
	const allVocabs = getAllVocabs();

	function pullRandomCard() {
		const floatCard = Math.random(allVocabs.length);
		const randomizedCard = Math.round(floatCard * 4);
		return randomizedCard;
	}

	const initialVocab = allVocabs[pullRandomCard()];
	console.log(initialVocab);

	return {
		props: {allVocabs, initialVocab},
	};
};

export default function StudySession({allVocabs, initialVocab}) {
	const [currentCard, setCurrentCard] = useState(initialVocab);

	console.log(currentCard);

	useEffect(() => {
		setCurrentCard(pullRandomCard());
	}, []);

	function pullRandomCard() {
		const floatCard = Math.random(allVocabs.length);
		const randomizedCard = Math.round(floatCard * 4);
		setCurrentCard(allVocabs[randomizedCard]);
	}

	return (
		<Layout>
			<FlashCard front={currentCard.front} back={currentCard.back} />
			<NextFlashCard onClick={pullRandomCard} />
		</Layout>
	);
}
