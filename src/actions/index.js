import axios from 'axios';

// add your API endpoint here
const ROOT_URL = ``;


// want to share CONSTANT with other components, actions, reducers
export const FETCH_IMUIDS = 'FETCH_IMUIDS';

// make an API request to fetch weather data
export function fetchImuid(searchTerm) {

	const url = `${ROOT_URL}&searchTerm=${searchTerm}`;

	// async ajax call
	// request is a promise object
	const request = axios.get(url);

	// helps show workflow of action creator, actions and middleware
	// with async promises
	//console.log('Request: ', request);

	return {
		type: FETCH_IMUIDS,
		payload: request
	}
}
