import Head from 'next/head';

import Layout from '../components/Layout';
import StartSession_noCards from '../components/Links/StartSessionLink_noCards';
import StartSession_withCards from '../components/Links/StartSessionLink_withCards';
import Textfield from '../components/Texfield/Textbox';
import TextfieldArea from '../components/TextfieldArea';
import Title from '../components/Title/index';
import {useToggleStore} from '../hooks/useToggleStore';

console.clear();

export default function HomePage() {
	const cardsInList = useToggleStore(state => state.cardsInList);

	return (
		<Layout>
			<Head>
				<title key="title">Vocab-Dojo</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			{/* #############   TEXTFIELD AREAS   ################ */}

			<TextfieldArea variant="textFieldArea">
				<Title variant="Textbox_Title">Hard to remember</Title>
				<Textfield variant="textfield_mainpage">Example 2</Textfield>
			</TextfieldArea>
			<TextfieldArea variant="textFieldArea">
				<Title variant="Textbox_Title">Last Added</Title>
				<Textfield variant="textfield_mainpage">Example</Textfield>
			</TextfieldArea>

			{/* #############   START SESSION   ################ */}
			<Title variant="Textbox_Title">Train your brain</Title>

			{/* PICK DIFFEREN STARTSESSION BUTTON BASED ON CONDITION, whether CardList is full or empty */}
			{cardsInList ? (
				<StartSession_withCards variant="startSession_withCards" />
			) : (
				<StartSession_noCards variant="startSession_noCards" />
			)}
		</Layout>
	);
}
