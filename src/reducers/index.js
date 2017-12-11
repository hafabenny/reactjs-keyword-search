import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

const rootReducer = combineReducers({
	weather: WeatherReducer
});

export default rootReducer;
