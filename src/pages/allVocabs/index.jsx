import Head from 'next/head';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import DeleteFlashcards from '../../components/Button/DeleteFlashcardButton';
import Layout from '../../components/Layout';
import Textbox from '../../components/Texfield/Textbox';
import {useFetch} from '../../hooks/useFetch';
import {getAllFlashcards} from '../../services/vocabServices';

console.clear();

export async function getStaticProps() {
	const allFlashcards = await getAllFlashcards();

	return {
		props: {allFlashcards},
	};
}

/**
 * 1.	List of vocabs is passed to useState
 * 2.	stateVariable sends vocabs to card-element
 * 3. 	Deletebutton empties state-variable.
 * 4. 	DB gets updated with emptied list, when url !== 'allVocabs
 */
export default function VocabListPage({allFlashcards}) {
	const [cardstack, setCardstack] = useState(allFlashcards);
	const [cardstackEmpty, setCardstackFull] = useState(false);
	const fetchAPI = useFetch();
	console.log('cardstack is empty: ' + cardstackEmpty);

	useEffect(() => {
		setCardstackFull(!setCardstackFull);
	}, [cardstack]);

	async function deleteHandler() {
		await fetchAPI('/api/flashcard/delete', {
			method: 'DELETE',
		});
		setCardstack('');
	}

	return (
		<Layout>
			<Head>
				<title key="title">VocabList</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<StyledUl>
				{cardstack?.map(word => (
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
			{cardstackEmpty && <DeleteFlashcards onClick={deleteHandler} />}
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
