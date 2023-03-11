const vocabList = [
	{
		id: '1',
		front: 'its',
		back: 'an expamle',
	},
	{
		id: '2',
		front: 'yo',
		back: 'mama',
	},
	{
		id: '3',
		front: 'yes',
		back: 'sir',
	},
	{
		id: '4',
		front: 'ha',
		back: 'douken',
	},
];

export function getAllVocabs() {
	return vocabList;
}

export function getVocabById(id) {
	return vocabList.find(word => word.id === id);
}
