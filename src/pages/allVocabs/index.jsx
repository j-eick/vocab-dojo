import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../../components/Layout';
// import UnorderedList from '../components/UnorderedLists';
import {getAllVocabs} from '../../services/vocabServices';

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

	display: grid;
	grid-template-columns: 1fr;
	gap: 15px;

	align-items: left;
	background-color: lightcoral;
`;

const StyledCard = styled.div`
	padding: 0 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
`;

const StyledP = styled.p`
	padding: 0 10px;
	background-color: lightcyan;
`;

export const getStaticProps = () => {
	const allVocabs = getAllVocabs();
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
						<Link href={`/allVocabs/${word.id}`}>
							<StyledCard>
								<StyledP>{word.front}</StyledP>
								<StyledP>{word.back}</StyledP>
							</StyledCard>
						</Link>
					</StyledLi>
				))}
			</StyledUl>
		</Layout>
	);
}
