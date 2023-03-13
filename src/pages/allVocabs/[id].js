import {getAllFlashcards, getVocabById} from '../../services/vocabServices';

export const getStaticPaths = () => {
	const allVocabs = getAllFlashcards();
	return {
		paths: allVocabs.map(vocab => ({
			params: {
				id: vocab.id,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps = context => {
	const vocab = getVocabById(context.params.id);
	return {
		props: {vocab},
	};
};

export default function AllVocabs({vocab}) {
	const {id, front, back} = vocab;

	return (
		<>
			<p>{'id: ' + id}</p>
			<p>{'front => ' + front}</p>
			<p>{'back => ' + back}</p>
		</>
	);
}
