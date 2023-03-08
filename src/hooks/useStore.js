import create from 'zustand';

export const vocabStore = create(set => ({
	vocabList: [
		{
			front: 'this is',
			back: 'an expamle',
		},
	],

	addVocabs: newCard =>
		set(state => ({
			vocabList: [...state.vocabList, newCard],
		})),
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
