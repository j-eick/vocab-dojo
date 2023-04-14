/**
 * Retrieves cards from MongoDB server.
 *
 * Service functions connect to DB.
 *
 *
 * @returns Array with all existing flashcards
 */

import {dbConnect} from '../dbConnect';
import Flashcard from '../models/cardModel';

export async function getAllFlashcards() {
	await dbConnect();

	/**
	 * retrieves EVERYTHING from respective collection
	 *
	 * Problem:
	 * • Doesn't return pure JSON, but also functions and other stuff
	 *
	 * Solution:
	 * • For example MAP over all data and retrieve only the
	 *   information that I need.
	 */
	const flashcards = await Flashcard.find();

	return flashcards.map(({id, front, back}) => {
		return {id, front, back};
	});
}

export async function getFlashcardById(id_) {
	await dbConnect();

	const flashcard = await Flashcard.findById(id_);

	const test = await flashcard;
	console.log(test);

	const {id, front, back} = flashcard;
	return {id, front, back};
}
