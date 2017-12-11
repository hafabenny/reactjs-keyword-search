import axios from 'axios';

const ROOT_URL = `http://api-qa.healthline.com:8080/core/imuid/search?partnerId=31a86f67-b1b6-4fd7-8b98-8caeee8d3078&rows=9999`;


// want to share CONSTANT with other components, actions, reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// make an API request to fetch weather data
export function fetchWeather(searchTerm) {

	const url = `${ROOT_URL}&searchTerm=${searchTerm}`;

	// async ajax call
	// request is a promise object
	const request = axios.get(url);

	// helps show workflow of action creator, actions and middleware
	// with async promises
	console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}