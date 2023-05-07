import MySVG from '../../../public/MySVG';
import {useFetch} from '../../hooks/useFetch';

import Button from './Button';

console.clear();

export default function DeleteFlashcardButton() {
	const fetchAPI = useFetch();

	async function deleteHandler() {
		await fetchAPI('/api/flashcard/delete', {
			method: 'DELETE',
		});
	}

	return (
		<Button type="button" onClick={deleteHandler} variant="default">
			<MySVG variant="undo2" size="24px" />
		</Button>
	);
}
