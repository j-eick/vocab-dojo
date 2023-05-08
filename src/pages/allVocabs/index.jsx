import Head from 'next/head';
import styled from 'styled-components';

import DeleteFlashcards from '../../components/Button/DeleteFlashcardButton';
import Layout from '../../components/Layout';
import Textbox from '../../components/Texfield/Textbox';
import {useFetch} from '../../hooks/useFetch';
import {vocabStore} from '../../hooks/useStore';

// export async function getStaticProps() {
// 	const allFlashcards = await getAllFlashcards();

// 	return {
// 		props: {allFlashcards},
// 	};
// }

export default function VocabListPage() {
	const mainList = vocabStore(state => state.mainList);
	const clearMainList = vocabStore(state => state.clearMainList);

	const fetchAPI = useFetch();

	async function deleteHandler() {
		// Deletes items in MongoDB
		await fetchAPI('/api/flashcard/delete', {
			method: 'DELETE',
		});
		// Deletes items in globalState
		clearMainList();
	}

	return (
		<Layout>
			<Head>
				<title key="title">VocabList</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<StyledUl>
				{mainList.map(word => (
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
			<DeleteFlashcards onClick={deleteHandler} />
		</Layout>
	);
}

// #################################
// #######    STYLING    ###########
// #################################

const StyledUl = styled.ul`
	margin-top: 120px;
	padding: 30px 20px;
	width: 80%;
	max-height: 450px;

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
