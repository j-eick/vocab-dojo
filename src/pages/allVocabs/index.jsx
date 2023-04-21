import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import {getAllFlashcards} from '../../services/vocabServices';

console.clear();

export async function getStaticProps() {
	const allFlashcards = await getAllFlashcards();

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
							<StyledP>{word.front}</StyledP>
							<StyledP>{word.back}</StyledP>
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
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	gap: 15px;
	border: 1px solid black;
`;

const StyledLi = styled.li`
	display: grid;
	grid-template-columns: 1fr;
	align-items: left;
	width: 100%;
	gap: 15px;
	background-color: lightcoral;
`;

const StyledCard = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 0 20px;
	gap: 15px;
`;

const StyledP = styled.p`
	padding: 0 10px;
	background-color: lightcyan;
`;
