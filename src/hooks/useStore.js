import create from 'zustand';

export const vocabStore = create(set => ({
	mainList: [],

	// pulls cards from MongoDB
	fetchAllCards: async getAllFlashcards => {
		const response = await getAllFlashcards;
		set({mainList: await response});
	},

	addVocab: newCard =>
		set(state => ({
			mainList: [...state.mainList, newCard],
		})),

	removeVocabs: removeCard =>
		set(state => ({
			mainList: state.mainList.filter(card => card !== removeCard),
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
