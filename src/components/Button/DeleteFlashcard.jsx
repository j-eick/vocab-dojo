import MySVG from '../../../public/MySVG';

import Button from './Button';

export default function DeleteFlashcardButton({onClick}) {
	return (
		<Button type="button" onClick={onClick} variant="default">
			<MySVG variant="undo2" size="24px" />
		</Button>
	);
}
