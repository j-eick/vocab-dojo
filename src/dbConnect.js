/**
 * This file provides functions to connect to the DB
 *
 * Here: The app connects to Mongoose, which then connects to the DB.
 *
 * STEPS
 * 	1. Import mongoose
 * 	2. Connect respective DB
 */

/**
 * 1. Import mongoose
 */
import mongoose from 'mongoose';

/**
 * 2. Which DB?
 *
 * Can be found in the environment variables, which in node.js, can
 * be found in process.env.etc...
 *
 * PROCESS = object, that can be destructured
 * 	- once destructred, MONGODB_URL can be found here
 */
const {MONGODB_URL} = process.env;

/**
 * Function is async, hence..
 * 	- async ()
 *  - await ...
 */
export const dbConnect = async () => {
	try {
		// this is network request, hence I need to wait for answer
		// ==> await
		await mongoose.connect(MONGODB_URL);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('error: could not connect', error.message);
	}
};
