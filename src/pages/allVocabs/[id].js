// import Head from 'next/head';

// import {getAllFlashcards, getFlashcardById} from '../../services/vocabServices';

// export async function getStaticPaths() {
// 	const allFlashcards = await getAllFlashcards();
// 	return {
// 		paths: allFlashcards.map(card => ({
// 			params: {
// 				id: card.id,
// 			},
// 		})),
// 		fallback: false,
// 	};
// }

// export async function getStaticProps(context) {
// 	const flashcard = await getFlashcardById(context.params.id);

// 	console.log('hi: ' + flashcard);
// 	return {
// 		props: {flashcard},
// 	};
// }

// export default function AllVocabs({flashcard}) {
// 	const {id, front, back} = flashcard;

// 	return (
// 		<>
// 			<Head>
// 				<title>Flashcard: {front}</title>
// 			</Head>
// 			<p>{'id: ' + id}</p>
// 			<p>{'front => ' + front}</p>
// 			<p>{'back => ' + back}</p>
// 		</>
// 	);
// }
