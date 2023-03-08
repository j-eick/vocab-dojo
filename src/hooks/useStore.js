import create from 'zustand';

export const useStore = create(set => ({
	vocabList: [],

	addVocabs: () =>
		set(state => ({
			list: state.newWord,
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
