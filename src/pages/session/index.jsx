import FlashCard from '../../components/Flashcard';
import Layout from '../../components/Layout';
import {getAllVocabs} from '../../services/vocabServices';

console.clear();

export const getStaticProps = () => {
	const allVocabs = getAllVocabs();

	return {
		props: {
			allVocabs,
		},
	};
};

export default function StudySession({allVocabs}) {
	console.log(allVocabs[0].front);

	return (
		<Layout>
			<FlashCard front={allVocabs[0].front} back={allVocabs[0].back} />
		</Layout>
	);
}
