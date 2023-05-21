import Head from 'next/head';
import {useEffect} from 'react';

import Layout from '../components/Layout';
import StartSession_noCards from '../components/Links/StartSessionLink_noCards';
import StartSession_withCards from '../components/Links/StartSessionLink_withCards';
import InfoModalPopupSmall from '../components/Modals/InfoModalPopup/InfoModalPopupSmall';
import Textfield from '../components/Texfield/Textbox';
import TextfieldArea from '../components/TextfieldArea';
import Title from '../components/Title/index';
import {useToggleStore} from '../hooks/useToggleStore';
import {useVocabStore} from '../hooks/useVocabStore';

console.clear();

export default function HomePage() {
	const fetchAllCards = useVocabStore(state => state.fetchAllCards);
	const cardsInList = useToggleStore(state => state.cardsInList);
	const showModal = useToggleStore(state => state.showModal);
	const hide_Modal = useToggleStore(state => state.hide_Modal);
	const show_Modal = useToggleStore(state => state.show_Modal);

	const popupModalHandler = () => {
		console.log('test');
		show_Modal();
		setTimeout(() => {
			hide_Modal();
		}, 3000);
	};

	useEffect(() => {
		console.log('Test');
		const fetchCards = async () => {
			await fetchAllCards();
		};
		fetchCards().catch(console.error);
		// console.log(mainList);
	}, []);

	return (
		<Layout>
			<Head>
				<title key="title">Vocab-Dojo</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			{/* #############   INFO MODALs   ################ */}
			{showModal && (
				<InfoModalPopupSmall variant="smallInfoModal">
					Create flashcard first
				</InfoModalPopupSmall>
			)}

			{/* #############   TEXTFIELD AREAS   ################ */}

			<TextfieldArea variant="textarea_hardToRemember">
				<Title variant="Textbox_Title">Hard to remember</Title>
				<Textfield variant="textbox_mainpage">Example 2</Textfield>
			</TextfieldArea>
			<TextfieldArea variant="textarea_lastAdded">
				<Title variant="Textbox_Title">Last Added</Title>
				<Textfield variant="textbox_mainpage">Example</Textfield>
			</TextfieldArea>

			{/* #############   START SESSION   ################ */}
			<Title variant="Textbox_Title">Train your brain</Title>

			{/* PICK DIFFEREN STARTSESSION BUTTON BASED ON CONDITION, whether CardList is full or empty */}
			{cardsInList ? (
				<StartSession_withCards
					variant="startSession_withCards"
					onClick={popupModalHandler}
				/>
			) : (
				<StartSession_noCards variant="startSession_noCards" onClick={popupModalHandler} />
			)}
		</Layout>
	);
}
