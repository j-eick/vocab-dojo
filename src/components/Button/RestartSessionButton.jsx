import {mdiRepeatVariant} from '@mdi/js';
import Icon from '@mdi/react';

import Button from './Button';

export default function RestartSessionButton({onClick}) {
	return (
		<Button variant="repeatSession" onClick={onClick}>
			Restart
			<Icon path={mdiRepeatVariant} size={1.5} />
		</Button>
	);
}
