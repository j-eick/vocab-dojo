import Head from 'next/head';

import Layout from '../components/Layout';
import StartSession from '../components/Links/StartSessionLink';
import Textbox from '../components/Textbox';
import TextfieldArea from '../components/TextfieldArea';
import Title from '../components/Title/index';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Vocab-Dojo</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			{/* #############   TEXTFIELD AREAS   ################ */}

			<TextfieldArea variant="textFieldArea">
				<Title variant="Textbox_Title">Hard to remember</Title>
				<Textbox variant="textfield_mainpage">Example 2</Textbox>
			</TextfieldArea>
			<TextfieldArea variant="textFieldArea">
				<Title variant="Textbox_Title">Last Added</Title>
				<Textbox variant="textfield_mainpage">Example</Textbox>
			</TextfieldArea>

			{/* #############   START SESSION   ################ */}
			<Title variant="Textbox_Title">Train your brain</Title>
			<StartSession variant="startSession" />
		</Layout>
	);
}
