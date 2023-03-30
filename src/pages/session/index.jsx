import NextFlashCard from '../../components/Button/NextFlashCard';
import FlashCard from '../../components/Flashcard';
import Layout from '../../components/Layout';
import {getAllVocabs} from '../../services/vocabServices';

console.clear();

export const getStaticProps = () => {
	const allVocabs = getAllVocabs();

	return {
		props: {allVocabs},
	};
};

export default function StudySession() {
	// function getRandomArrayNum() {
	// 	const floatCard = Math.random(allVocabs.length);
	// 	const randomizedCard = Math.round(floatCard * 4);
	// 	return randomizedCard;
	// }

	return (
		<Layout>
			<FlashCard />
			<NextFlashCard />
		</Layout>
	);
}
