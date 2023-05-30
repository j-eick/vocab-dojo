import {mdiClose} from '@mdi/js';
import Icon from '@mdi/react';

import IconTemplate from '.';

export default function CloseIcon({size, onClick}) {
	return (
		<IconTemplate>
			<Icon path={mdiClose} size={size} onClick={onClick} />
		</IconTemplate>
	);
}
