import {mdiClose} from '@mdi/js';
import Icon from '@mdi/react';

import IconTemplate from '.';

export default function CloseIcon({size, onClick, variant}) {
	return (
		<IconTemplate variant={variant}>
			<Icon path={mdiClose} size={size} onClick={onClick} />
		</IconTemplate>
	);
}
