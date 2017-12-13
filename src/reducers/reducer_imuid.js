import { FETCH_IMUIDS } from '../actions/index';

// data structure for state is a list
// the user can see weather forecast data for multiple cities
// so define state as an array
// this statement is ES6 syntax sugar: state = []
// it means on page load, initialize state to empty array
// all other times, return state object
export default function(state = [], action) {

	// helps show workflow of action creator, actions and middleware
	// with async promises
	console.log('action received', action);


	// super important: do not manipulate state
	// always return a clean object for state
	// NEVER add to it, change it, etc.
	// bad usage: return state.push();
	// good usage: new array, that includes old data and new data
	//
	// we want multiple cities in forecast data
	// concat existing array with new array
	// always return a new instance of state
	// more ES6 syntax sugar:
	// - both statements are the same:
	// 		return state.concat([ action.payload.data ])
	// 		return [ action.payload.data, ...state ]
	switch (action.type) {
	case FETCH_IMUIDS:
		return action.payload.data.data
	}


	return state;
}