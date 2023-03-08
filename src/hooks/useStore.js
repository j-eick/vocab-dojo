import create from 'zustand';

export const vocabStore = create(set => ({
	vocabList: [
		{
			front: 'this is',
			back: 'an expamle',
		},
		{
			front: 'yo',
			back: 'mama',
		},
		{
			front: 'yes',
			back: 'sir',
		},
		{
			front: 'ha',
			back: 'douken',
		},
	],

	addVocabs: newCard =>
		set(state => ({
			vocabList: [...state.vocabList, newCard],
		})),

	removeVocabs: removeCard =>
		set(state => ({
			vocabList: state.vocabList.filter(card => card !== removeCard),
		})),

	// removeVocabs: cardToRemove =>
	// 	set(state => ({
	// 		// filter out the card I want to remove;
	// 		// return array copy with all remaining cards
	// 		vocabList: [state.vocabList.filter(card => (
	// 			card !== cardToRemove)],
	// 		)),
	// 	})),
}));

// const useStore = create(set => ({
// 	counter: 0,
// 	setCounter(counter) {
// 		set({counter});
// 	},
// 	decrementCounter(step = 1) {
// 		set(({counter}) => ({counter: counter - step}));
// 	},
// 	incrementCounter(step = 1) {
// 		set(({counter}) => ({counter: counter + step}));
// 	},
// }));

// export default useStore;
