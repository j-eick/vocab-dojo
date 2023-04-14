import {dbConnect} from '../../../dbConnect';
import Flashcard from '../../../models/cardModel';

export default async function handler(req, res) {
	await dbConnect();

	if (req.method === 'POST') {
		const data = JSON.parse(req.body);

		console.log('after parse: ' + data);

		await Flashcard.create(data);
		res.status(200).json({message: 'product created'});
	}
}
