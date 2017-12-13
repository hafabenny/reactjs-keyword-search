import { combineReducers } from 'redux';
import ImuidReducer from './reducer_imuid';

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

const rootReducer = combineReducers({
	imuid: ImuidReducer
});

export default rootReducer;
