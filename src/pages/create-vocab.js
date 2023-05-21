import AddVocabForm from '../components/Form/AddVocabForm';
import Layout from '../components/Layout';
import {useFetch} from '../hooks/useFetch';
import {useToggleStore} from '../hooks/useToggleStore';
import {vocabStore} from '../hooks/useVocabStore';

export default function CreateVocab() {
	const fetchAPI = useFetch();
	const addVocab = vocabStore(state => state.addVocab);
	const toggleWithCards = useToggleStore(state => state.toggleWithCards);

	async function handleSubmit(data) {
		await fetchAPI('/api/flashcard/create', {
			method: 'POST',
			body: JSON.stringify(data),
		});
		addVocab(data);
		toggleWithCards();
	}

	return (
		<Layout>
			<AddVocabForm onSubmit={handleSubmit} />
		</Layout>
	);
}
