import mongoose from 'mongoose';

const {Schema} = mongoose;

/**
 * Schema describes what my data will look like
 * Rules for how a Schema should look like.
 */
const flashcardSchema = new Schema(
	{
		frontTitle: {type: String, Number},
		frontDescription: {type: String, Number},
		backTitle: {type: String, Number},
		backDescription: {type: String, Number},
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
const Flashcard = mongoose.models.Flashcard || mongoose.model('Flashcard', flashcardSchema);

export default Flashcard;
