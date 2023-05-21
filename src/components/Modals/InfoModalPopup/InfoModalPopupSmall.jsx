import InfoModalPopup from '.';

export default function InfoModalPopupSmall({variant, onClick, children}) {
	return (
		<InfoModalPopup variant={variant} onClick={onClick}>
			{children}
		</InfoModalPopup>
	);
}
