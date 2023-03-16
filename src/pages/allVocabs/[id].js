// import {getAllFlashcards, getVocabById} from '../../services/vocabServices';

// export async function getStaticPaths() {
// 	const allVocabs = await getAllFlashcards();
// 	return {
// 		paths: allVocabs.map(vocab => ({
// 			params: {
// 				id: vocab.front,
// 			},
// 		})),
// 		fallback: false,
// 	};
// }

// export const getStaticProps = async context => {
// 	const vocab = await getVocabById(context.params.id);
// 	return {
// 		props: {vocab},
// 	};
// };

// export default async function AllVocabs({vocab}) {
// 	const {front, back} = await vocab;

// 	return (
// 		<>
// 			{/* <p>{'id: ' + id}</p> */}
// 			<p>{'front => ' + front}</p>
// 			<p>{'back => ' + back}</p>
// 		</>
// 	);
// }
