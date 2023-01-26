import {useState} from 'react';

export default function AddVocab() {
	const [word, setWord] = useState('');

	return (
		<>
			<input value={word} onChange={e => setWord(e.target.value)} />;
		</>
	);
}
