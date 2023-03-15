import {mongoose} from 'mongoose';

const {Schema} = mongoose;

/**
 * Schema describes what my data will look like
 * Rules for how a Schema should look like.
 */
const flashcardSchema = new Schema(
	{
		front: {type: String, required: true},
		back: {type: String, required: true},
	}
	// {collection: 'flashcards'}
);

/**
 * Create model from schema
 *
 * Mongoose takes the first parameter and turns it into the
 * name for the collection. It automatically turns the name
 * into plural with smallCaps.
 *
 * mongoose.model.Card || mongoose.model('Card', cardSchema)
 * - uses the model or newly registers the model, if it's using the
 *   model now for the first time
 */
const Flashcard = mongoose.models.Flashcards || mongoose.model('Flashcards', flashcardSchema);

export default Flashcard;
