/**
 *
 * @param multiplier = the number of items in the array
 * @returns randomNumber between 0 and *mutiplier*
 */
export function getRandomNum(multiplier) {
	const randomNum = Math.floor(Math.random() * multiplier);
	return randomNum;
}

/**
 * Exporting this function to src/utils/functions results in the following error:
 */
export function shuffleCards(allFlashcards) {
	// 1. Make copy of card array + create empty array
	const origArray = allFlashcards;
	let newArray = [];

	while (origArray.length != 0) {
		// 1.0. get origArray length, generate random integer
		//  	and use that number to choose card x
		const numOfCards = origArray.length;
		const randomNum = Math.floor(Math.random() * numOfCards);
		const cardForNewArray = origArray[randomNum];

		// 1.1. Paste card x into new array
		newArray.push(cardForNewArray);
		// 1.2. Cut card x out of orig array
		origArray.splice(randomNum, 1);
	}

	// 2. Return new array
	return newArray;
}
