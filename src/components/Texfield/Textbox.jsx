import Textbox from './index';

export default function TextBox({children, variant, flashcards}) {
	return (
		<Textbox variant={variant} flashcards={flashcards}>
			{children}
		</Textbox>
	);
}
