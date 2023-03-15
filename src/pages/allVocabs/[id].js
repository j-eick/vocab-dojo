import {getAllFlashcards, getVocabById} from '../../services/vocabServices';

export async function getStaticPaths() {
	const allVocabs = await getAllFlashcards();
	return {
		paths: allVocabs.map(vocab => ({
			params: {
				id: vocab.front,
			},
		})),
		fallback: false,
	};
}

export const getStaticProps = context => {
	const vocab = getVocabById(context.params.id);
	return {
		props: {vocab},
	};
};

export default function AllVocabs({vocab}) {
	const {front, back} = vocab;

	return (
		<>
			{/* <p>{'id: ' + id}</p> */}
			<p>{'front => ' + front}</p>
			<p>{'back => ' + back}</p>
		</>
	);
}
