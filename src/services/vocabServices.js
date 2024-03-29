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

	return flashcards.map(({id, frontTitle, frontDescription, backTitle, backDescription}) => {
		return {id, frontTitle, frontDescription, backTitle, backDescription};
	});
}

export async function getFlashcardById(id_) {
	await dbConnect();

	const flashcard = await Flashcard.findById(id_);

	const {id, frontTitle, frontDescription, backTitle, backDescription} = flashcard;
	return {id, frontTitle, frontDescription, backTitle, backDescription};
}
