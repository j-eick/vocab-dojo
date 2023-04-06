import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/Layout';
// import UnorderedList from '../components/UnorderedLists';
import {getAllFlashcards} from '../services/vocabServices';

const StyledUl = styled.ul`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	border: 1px solid black;
`;

const StyledLi = styled.li`
	width: 100%;
	padding: 0 10px;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;

	align-items: left;
	background-color: lightcoral;
`;

const StyledP = styled.p`
	background-color: lightcyan;
`;

export const getStaticProps = () => {
	const allVocabs = getAllFlashcards();
	return {
		props: {allVocabs},
	};
};

export default function VocabListPage({allVocabs}) {
	return (
		<Layout>
			<Head>
				<title key="title">VocabList</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<StyledUl>
				{allVocabs.map(word => (
					<StyledLi key={word.id}>
						<Link href={`/vocabList/${word.id}`}>
							<StyledP>{word.front}</StyledP>
							<StyledP>{word.back}</StyledP>
						</Link>
					</StyledLi>
				))}
			</StyledUl>
		</Layout>
	);
}
