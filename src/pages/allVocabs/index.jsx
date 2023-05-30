import Head from 'next/head';
import {useState} from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import DeleteAllFlashcardsButton from '../../components/Button/DeleteFlashcardButton';
import CloseIcon from '../../components/Icons/CloseIcon';
import Layout from '../../components/Layout';
import SafteyQuestionModal from '../../components/Modals/SafetyQuestion';
import Textbox from '../../components/Texfield/Textbox';
import {useFetch} from '../../hooks/useFetch';
import {getAllFlashcards} from '../../services/vocabServices';

export async function getStaticProps() {
	const allFlashcards = await getAllFlashcards();

	return {
		props: {allFlashcards},
	};
}

export default function VocabListPage({allFlashcards}) {
	const [flashcards, setFlashcards] = useState(allFlashcards);
	const [showSafetyQuestion_Modal, setShowSafetyQuestion_Modal] = useState(false);

	const fetchAPI = useFetch();

	async function deleteHandler() {
		// Deletes items in MongoDB
		await fetchAPI('/api/flashcard/delete', {
			method: 'DELETE',
		});
		// Resets flashcard state
		setFlashcards([]);
		// makes safetyQuestionModal disappear
		setShowSafetyQuestion_Modal(false);
	}

	function deletePromptHandler() {
		// safetyQuestionModal shows
		setTimeout(() => {
			setShowSafetyQuestion_Modal(true);
		}, 500);
	}

	return (
		<Layout>
			<Head>
				<title key="title">VocabList</title>
				<meta key="description" name="description" content="About" />
			</Head>
			{showSafetyQuestion_Modal && (
				<SafteyQuestionModal
					variant="saftey_question_modal"
					showSafetyQuestion_Modal={showSafetyQuestion_Modal}
				>
					<CloseIcon
						onClick={() => setShowSafetyQuestion_Modal(!showSafetyQuestion_Modal)}
						size={1.5}
					/>
					<p>Are you sure?</p>
					<Button variant="deleteButton" onClick={deleteHandler}>
						Delete
					</Button>
				</SafteyQuestionModal>
			)}
			<StyledUl>
				{flashcards.map(word => (
					<StyledLi key={word.id}>
						<StyledCard>
							<Textbox variant="textfield_overview">
								<p style={{color: 'red'}}>{word.frontTitle}</p>
								<p>{word.frontDescription}</p>
							</Textbox>
							<Textbox variant="textfield_overview">
								<p style={{color: 'red'}}>{word.backTitle}</p>
								<p>{word.backDescription}</p>
							</Textbox>
						</StyledCard>
					</StyledLi>
				))}
			</StyledUl>
			{/* {cardstackEmpty && <DeleteFlashcards onClick={deleteHandler} />} */}
			<DeleteAllFlashcardsButton onClick={deletePromptHandler} />
		</Layout>
	);
}

// #################################
// #######    STYLING    ###########
// #################################

const StyledUl = styled.ul`
	margin-top: 100px;
	padding: 30px 20px;
	width: 80%;
	height: 430px;

	display: flex;
	flex-direction: column;
	align-items: center;

	border-top: 3px solid #dde7f4;
	border-bottom: 3px solid #dde7f4;

	-ms-overflow-style: none;
	scrollbar-width: none;
	overflow-y: scroll;
	gap: 25px;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const StyledLi = styled.li`
	width: 100%;
`;

const StyledCard = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	/* padding: 10px 0; */
	gap: 5px;
`;
