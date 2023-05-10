import {openai} from '../../utils/openai';

export default async function handler(request, response) {
	const completion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: 'Hello world',
	});
	response.status(200).json(completion.data.choices[0].text);

	// const completion = await openai.createCompletion({
	// 	model: 'text-davinci-003',
	// 	prompt: 'what is 2 + 2?',
	// });

	// response.status(200).json(completion.data.choices[0].text);

	// receive user data, ask chat gpt to generate somethign, and return to the user
}
