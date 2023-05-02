import {useState} from 'react';

import CreateFlashcardButton from '../Button/CreateFlashcardButton';
import Inputfield from '../Input';
import CardInputMultiline from '../InputMultiline/CardInputMultiline';

import Form from './';

console.clear();

export default function AddVocabForm({onSubmit}) {
	const [frontside, setFrontside] = useState('');
	const [backside, setBackside] = useState('');

	const handleSubmit = event => {
		event.preventDefault();

		if ((frontside && backside) !== '') {
			onSubmit({
				front: frontside,
				back: backside,
			});
		} else {
			alert('both sides need input!');
		}
		event.target.elements.frontSide.value = '';
		event.target.elements.backSide.value = '';
	};

	return (
		<Form onSubmit={handleSubmit} variant="addFlashcard_Form">
			{/* **************  FRONTSIDE title  ************** */}
			{/* <LabelTwoTags htmlFor="frontSide_title" variant="createVocab_input" /> */}
			<Inputfield
				id="frontSide_title"
				type="text"
				name="frontSide_title"
				variant="input_createVocabs_title"
				placeholder="optional"
				onChange={event => {
					setFrontside(event.target.value);
				}}
			/>
			{/* **************  FRONTSIDE Description  ************** */}
			{/* <LabelTwoTags htmlFor="frontSide_description" variant="createVocab_input" /> */}
			<CardInputMultiline
				id="frontSide_description"
				type="text"
				name="frontSide_description"
				variant="input_createVocabs_text"
				onChange={event => {
					setFrontside(event.target.value);
				}}
				placeholder="front"
			/>
			{/* **************  BACKSIDE title  ************** */}
			{/* <LabelTwoTags htmlFor="backSide_title" variant="createVocab_input" /> */}
			<Inputfield
				id="backSide_title"
				type="text"
				name="backSide_title"
				variant="input_createVocabs_title"
				placeholder="optional"
				onChange={event => {
					setFrontside(event.target.value);
				}}
			/>
			{/* **************  BACKSIDE description  ************** */}
			{/* <LabelTwoTags htmlFor="backSide_description" variant="createVocab_input" /> */}
			<CardInputMultiline
				id="backSide_description"
				type="text"
				name="backSide_description"
				variant="input_createVocabs_text"
				onChange={event => {
					setBackside(event.target.value);
				}}
				placeholder="back"
			/>
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<CreateFlashcardButton type="submit" name="submit" variant="createFlashcard">
					New Word
				</CreateFlashcardButton>
			</div>
		</Form>
	);
}
