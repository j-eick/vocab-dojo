import {mdiDelete} from '@mdi/js';
import Icon from '@mdi/react';

import Button from './Button';

console.clear();

export default function DeleteFlashcardButton({onClick}) {
	// const fetchAPI = useFetch();

	// async function deleteHandler() {
	// 	await fetchAPI('/api/flashcard/delete', {
	// 		method: 'DELETE',
	// 	});
	// }

	return (
		<Button type="button" onClick={onClick} variant="deleteFlashcardStack">
			<p>Remove all</p>
			<Icon path={mdiDelete} size={1.5} />
		</Button>
	);
}
