import Modal from '.';

export default function SafteyQuestionModal({children, variant, safetyQuestionModalActive}) {
	return (
		<Modal variant={variant} safetyQuestionModalActive={safetyQuestionModalActive}>
			{children}
		</Modal>
	);
}
