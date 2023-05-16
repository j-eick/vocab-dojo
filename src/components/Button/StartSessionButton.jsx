import {mdiArrowRightDropCircle} from '@mdi/js';
import Icon from '@mdi/react';

import Button from './Button';

export default function StartSessionButton({onClick}) {
	return (
		<Button type="button" name="startSession" variant="startSession" onClick={onClick}>
			Start Session
			<Icon path={mdiArrowRightDropCircle} size={1.5} />
		</Button>
	);
}
