import {useState} from 'react';

import CreateFlashcardButton from '../Button/CreateFlashcardButton';
import Inputfield from '../Input';
import LabelTwoTags from '../Label';

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
			<LabelTwoTags htmlFor="frontSide" variant="createVocab_frontBack">
				Frontside:
			</LabelTwoTags>
			<Inputfield
				id="frontSide"
				type="text"
				name="frontSide"
				onChange={event => {
					setFrontside(event.target.value);
				}}
				variant="input_createVocabs"
			/>
			<LabelTwoTags htmlFor="backSide" variant="createVocab_frontBack">
				Backside:
			</LabelTwoTags>
			<Inputfield
				id="backSide"
				type="text"
				name="backSide"
				onChange={event => {
					setBackside(event.target.value);
				}}
				variant="input_createVocabs"
			/>
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<CreateFlashcardButton type="submit" name="submit" variant="createFlashcard">
					New Word
				</CreateFlashcardButton>
			</div>
		</Form>
	);
}
