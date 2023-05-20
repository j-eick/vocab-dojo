import create from 'zustand';

const toggleStore = set => ({
	cardsInList: true,

	toggleNoCards: () => set({cardsInList: false}),
	toggleWithCards: () => set({cardsInList: true}),
});

export const useToggleStore = create(toggleStore);
