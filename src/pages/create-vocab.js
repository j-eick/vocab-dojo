import AddVocabForm from '../components/Form/AddVocabForm';
import Layout from '../components/Layout';
import {useFetch} from '../hooks/useFetch';
// import {getAllFlashcards} from '../../services/vocabServices';

// export async function getServerSideProps() {
// 	const flashcards = await getAllFlashcards();

// 	return {
// 		props: {flashcards: flashcards},
// 	};
// }

export default function CreateVocab() {
	const fetchAPI = useFetch();

	async function handleSubmit(data) {
		await fetchAPI('/api/flashcard/create', {
			method: 'POST',
			body: JSON.stringify(data),
		});
	}

	return (
		<Layout>
			<AddVocabForm onSubmit={handleSubmit} />
		</Layout>
	);
}
