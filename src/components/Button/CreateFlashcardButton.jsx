import {mdiArrowRightDropCircle} from '@mdi/js';
import Icon from '@mdi/react';

import Button from './Button';

export default function CreateFlashcardButton() {
	return (
		<Button type="submit" name="submit" variant="createFlashcard">
			<div>Create Card</div>

			<Icon path={mdiArrowRightDropCircle} size={1.5} />
		</Button>
	);
}
