import Button from './Button';

export default function NextFlashCard({onClick}) {
	const handleKeyPress = event => {
		if (event.keyCode === 13) {
			onClick;
		}
	};

	return (
		<Button onClick={onClick} onKeyPress={handleKeyPress} variant="nextFlashCard">
			Next Card
		</Button>
	);
}
