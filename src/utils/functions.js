/**
 *
 * @param multiplier = the number of items in the array
 * @returns randomNumber between 0 and *mutiplier*
 */
export function getRandomNum(multiplier) {
	const randomNum = Math.floor(Math.random() * multiplier);
	return randomNum;
}
