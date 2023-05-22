import create from 'zustand';

const toggleStore = set => ({
	cardsInList: true,
	toggleNoCards: () => set({cardsInList: false}),
	toggleWithCards: () => set({cardsInList: true}),

	showModal: true,
	hide_Modal: () => set({showModal: false}),
	show_Modal: () => set({showModal: true}),
});

export const useToggleStore = create(toggleStore);
