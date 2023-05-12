import {useState} from 'react';

import CreateFlashcardButton from '../Button/CreateFlashcardButton';
import Inputfield from '../Input';
import CardInputMultiline from '../InputMultiline/CardInputMultiline';

import Form from './';

console.clear();

export default function AddVocabForm({onSubmit}) {
	const [frontTitle, setFrontTitle] = useState('');
	const [frontDescription, setFrontDescription] = useState('');
	const [backTitle, setBackTitle] = useState('');
	const [backDescription, setBackDescription] = useState('');

	const handleSubmit = event => {
		event.preventDefault();

		if (
			((frontTitle !== '' || frontDescription !== '') &&
				(backTitle !== '' || backDescription !== '')) ||
			((frontTitle !== '' || frontDescription !== '') &&
				backTitle !== '' &&
				backDescription !== '') ||
			(frontTitle !== '' &&
				frontDescription !== '' &&
				(backTitle !== '' || backDescription !== ''))
		) {
			onSubmit({
				frontTitle,
				frontDescription,
				backTitle,
				backDescription,
			});
			setFrontTitle('');
			setFrontDescription('');
			setBackTitle('');
			setBackDescription('');
			event.target.elements.frontSide_title.value = '';
			event.target.elements.frontSide_description.value = '';
			event.target.elements.backSide_title.value = '';
			event.target.elements.backSide_description.value = '';
		} else {
			alert('Missing input... no card');
		}
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
				placeholder="optional title"
				onChange={event => {
					setFrontTitle(event.target.value);
				}}
			/>
			{/* **************  FRONTSIDE Description  ************** */}
			{/* <LabelTwoTags htmlFor="frontSide_description" variant="createVocab_input" /> */}
			<CardInputMultiline
				id="frontSide_description"
				type="text"
				name="frontSide_description"
				variant="input_createVocabs_text"
				placeholder="front"
				onChange={event => {
					setFrontDescription(event.target.value);
				}}
			/>
			{/* **************  BACKSIDE title  ************** */}
			{/* <LabelTwoTags htmlFor="backSide_title" variant="createVocab_input" /> */}
			<Inputfield
				id="backSide_title"
				type="text"
				name="backSide_title"
				variant="input_createVocabs_title"
				placeholder="optional title"
				onChange={event => {
					setBackTitle(event.target.value);
				}}
			/>
			{/* **************  BACKSIDE description  ************** */}
			{/* <LabelTwoTags htmlFor="backSide_description" variant="createVocab_input" /> */}
			<CardInputMultiline
				id="backSide_description"
				type="text"
				name="backSide_description"
				variant="input_createVocabs_text"
				placeholder="back"
				onChange={event => {
					setBackDescription(event.target.value);
				}}
			/>
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<CreateFlashcardButton type="submit" name="submit" variant="createFlashcard">
					New Word
				</CreateFlashcardButton>
			</div>
		</Form>
	);
}
