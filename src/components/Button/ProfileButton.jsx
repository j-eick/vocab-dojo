import {mdiAccountCircle} from '@mdi/js';
import Icon from '@mdi/react';
import {useState} from 'react';

import ProfileMenuModal from '../Modals/ProfileMenuModal';

import Button from './Button';

console.clear();

export default function ProfileButton() {
	const [modal, setModal] = useState(true);

	return (
		<>
			<Button variant={'profileMenuModal'} onClick={() => setModal(!modal)}>
				<Icon path={mdiAccountCircle} size={3} />
			</Button>
			{!modal ? <ProfileMenuModal /> : null}
		</>
	);
}
