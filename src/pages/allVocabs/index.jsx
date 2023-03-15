import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/Layout';
// import UnorderedList from '../components/UnorderedLists';
import {getAllFlashcards} from '../../services/vocabServices';

import {StyledUl, StyledLi, StyledCard, StyledP} from './styled.js';

/**
 * Retrieves all Flashcards from MongoDB
 * => Needs to wait for server => asnyc function
 *
 * @returns { front, back } of the cards
 */
export async function getStaticProps() {
	const allFlashcards = await getAllFlashcards();
	console.log(allFlashcards);

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
				{allFlashcards.map(card => (
					<StyledLi key={card.front}>
						<Link href={`/allVocabs/${card.front}`}>
							<StyledCard>
								<StyledP>{card.front}</StyledP>
								<StyledP>{card.back}</StyledP>
							</StyledCard>
						</Link>
					</StyledLi>
				))}
			</StyledUl>
		</Layout>
	);
}
