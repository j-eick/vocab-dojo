import StartSession from '../Button/StartSessionButton';

import Modal from '.';

export default function PreSessionModal({onClick}) {
	return (
		<Modal variant="preSessionModal">
			<StartSession onClick={onClick} />
		</Modal>
	);
}
