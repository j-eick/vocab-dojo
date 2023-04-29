import Head from 'next/head';

import Layout from '../components/Layout';
import StartSession from '../components/Links/StartSessionLink';
import Textfield from '../components/Texfield/Textbox';
import TextfieldArea from '../components/TextfieldArea';
import Title from '../components/Title/index';

console.clear();

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Vocab-Dojo</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			{/* #############   TEXTFIELD AREAS   ################ */}

			<TextfieldArea variant="textFieldArea">
				<Title variant="Textbox_Home">Hard to remember</Title>
				<Textfield variant="textfield_mainpage">Example 2</Textfield>
			</TextfieldArea>
			<TextfieldArea variant="textFieldArea">
				<Title variant="Textbox_Home">Last Added</Title>
				<Textfield variant="textfield_mainpage">Example</Textfield>
			</TextfieldArea>

			{/* #############   START SESSION   ################ */}
			<Title variant="startSession_Title">Train your brain</Title>
			<StartSession variant="startSession" />
		</Layout>
	);
}
