import AddVocabForm from '../components/Form/AddVocabForm';
import Layout from '../components/Layout';
import {useFetch} from '../hooks/useFetch';
import {vocabStore} from '../hooks/useStore';

export default function CreateVocab() {
	const fetchAPI = useFetch();
	// const mainList = vocabStore(state => state.mainList);
	const addVocab = vocabStore(state => state.addVocab);

	async function handleSubmit(data) {
		await fetchAPI('/api/flashcard/create', {
			method: 'POST',
			body: JSON.stringify(data),
		});
		addVocab(data);
	}

	return (
		<Layout>
			<AddVocabForm onSubmit={handleSubmit} />
		</Layout>
	);
}
