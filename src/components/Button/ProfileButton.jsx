import {useState} from 'react';

import ProfileMenuModal from '../Modals/ProfileMenuModal';

import Button from './Button';

console.clear();

export default function ProfileButton() {
	const [modal, setModal] = useState(false);

	return (
		<>
			<Button variant={'profileMenu'} onClick={() => setModal(!modal)}>
				<div>🙋🏻‍♂️</div>
			</Button>
			{!modal ? <ProfileMenuModal /> : null}
		</>
	);
}
