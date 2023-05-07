import MySVG from '../../../public/MySVG';

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
		<Button type="button" onClick={onClick} variant="default">
			<MySVG variant="undo2" size="24px" />
		</Button>
	);
}
