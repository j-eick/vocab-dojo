import create from 'zustand';

import {getAllFlashcards} from '../services/vocabServices';

const vocabStore = set => ({
	mainList: [],

	// pulls cards from MongoDB
	fetchAllCards: async () => set({mainList: await getAllFlashcards()}),

	addVocab: newCard =>
		set(state => ({
			mainList: [...state.mainList, newCard],
		})),

	removeVocab: id =>
		set(state => ({
			mainList: state.mainList.filter(card => card !== id),
		})),

	clearMainList: () => set({mainList: []}),
});

export const useVocabStore = create(vocabStore);
