import Button from './Button';

export default function AddCardTitleButton({onClick, children, variant}) {
	return (
		<Button onClick={onClick} variant={variant}>
			{children}
		</Button>
	);
}
