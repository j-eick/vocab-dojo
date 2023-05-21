import create from 'zustand';

import {getAllFlashcards} from '../services/vocabServices';

const vocabStore = set => ({
	mainList: [],

	// pulls cards from MongoDB
	fetchAllCards: () => set({mainList: getAllFlashcards()}),

	addVocab: newCard =>
		set(state => ({
			mainList: [...state.mainList, newCard],
		})),

	removeVocab: id =>
		set(state => ({
			mainList: state.mainList.filter(card => card !== id),
		})),

	clearMainList: () => set({mainList: []}),

	// removeVocabs: cardToRemove =>
	// 	set(state => ({
	// 		// filter out the card I want to remove;
	// 		// return array copy with all remaining cards
	// 		vocabList: [state.vocabList.filter(card => (
	// 			card !== cardToRemove)],
	// 		)),
	// 	})),
});

export const useVocabStore = create(vocabStore);

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
