import {dbConnect} from '../../../dbConnect';
import Flashcard from '../../../models/cardModel';

export default async function handler(req, res) {
	await dbConnect();
	// const {id} = req.query;

	// ++++  POST  ++++
	if (req.method === 'DELETE') {
		console.log('req.method: ' + 'DELETE');
		// code
		await Flashcard.deleteMany({});
		res.status(200).json({message: 'Flashcard deleted'});
	}
}
