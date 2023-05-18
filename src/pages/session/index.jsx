import {useState} from 'react';

import NextFlashCardButton from '../../components/Button/NextFlashCard';
import RepeatSessionButton from '../../components/Button/RestartSessionButton';
import StartSession from '../../components/Button/StartSessionButton';
import FlashCard from '../../components/Flashcard';
import Layout from '../../components/Layout';
import Modal from '../../components/Modals';
import {getAllFlashcards} from '../../services/vocabServices';
import {getRandomNum} from '../../utils/functions';
import {shuffleCards} from '../../utils/functions';

console.clear();

export async function getStaticProps() {
	const allFlashcards = await getAllFlashcards();
	const sumAllFlashcards = await allFlashcards.length;
	const startingCard = await getRandomNum(sumAllFlashcards);
	const newArray = await shuffleCards(allFlashcards);

	console.log(newArray);

	return {
		props: {startingCard, newArray},
	};
}

export default function StudySession({startingCard, newArray}) {
	const [showPreSessionModal, setShowPreSessionModal] = useState(true);
	const [showPostSessionModal, setShowPostSessionModal] = useState(false);
	const [showNextCardButton, setShowNextCardButton] = useState(false);
	const [showRepeatSessionButton, setShowRepeatSessionButton] = useState(false);
	const [startCard, setStartCard] = useState(newArray[startingCard]);
	const [startStack, setStartStack] = useState(() => {
		return newArray.filter(card => card !== startCard);
	});

	function startSessionHandler() {
		setShowPreSessionModal(!showPreSessionModal);
		setShowNextCardButton(!showNextCardButton);
	}

	function workThruStack() {
		if (startStack.length !== 0) {
			console.log(startStack.length);
			const card = startStack.pop();
			setStartCard(card);
		} else {
			setShowPostSessionModal(!showPostSessionModal);
			setShowNextCardButton(!showNextCardButton);
			setShowRepeatSessionButton(!showRepeatSessionButton);
			setStartStack(newArray);
		}
	}

	return (
		<Layout>
			{showPreSessionModal && (
				<Modal variant="preSessionModal" onClick={startSessionHandler}>
					<StartSession onClick={startSessionHandler} />
				</Modal>
			)}
			{showPostSessionModal && (
				<Modal variant="postSessionModal">
					<p>Congrats!</p>
					<p>Session Complete!</p>
				</Modal>
			)}
			<FlashCard
				frontTitle={startCard.frontTitle}
				frontDescription={startCard.frontDescription}
				backTitle={startCard.backTitle}
				backDescription={startCard.backDescription}
			/>
			{showNextCardButton && <NextFlashCardButton onClick={workThruStack} />}
			{showRepeatSessionButton && <RepeatSessionButton />}
		</Layout>
	);
}
