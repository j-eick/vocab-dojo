import Modal from '.';

export default function SafteyQuestionModal({children, variant, showSafetyQuestion_Modal}) {
	return (
		<Modal variant={variant} showSafetyQuestion_Modal={showSafetyQuestion_Modal}>
			{children}
		</Modal>
	);
}
