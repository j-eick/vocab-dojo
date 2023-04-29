import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Textfield from '../../components/TextField';
import {getAllFlashcards} from '../../services/vocabServices';

console.clear();

export async function getStaticProps() {
	const allFlashcards = await getAllFlashcards();
	console.log(allFlashcards.length);

	return {
		props: {allFlashcards},
	};
}

export default function VocabListPage({allFlashcards}) {
	return (
		<Layout>
			<Head>
				<title key="title">VocabList</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<StyledUl>
				{allFlashcards.map(word => (
					<StyledLi key={word.id}>
						<StyledCard>
							<Textfield variant="textfield_overview">{word.front}</Textfield>
							<Textfield variant="textfield_overview">{word.back}</Textfield>
						</StyledCard>
					</StyledLi>
				))}
			</StyledUl>
		</Layout>
	);
}

// #################################
// #######    STYLING    ###########
// #################################

const StyledUl = styled.ul`
	margin-top: 120px;
	width: 80%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
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
