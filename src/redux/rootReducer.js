import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  login: loginReducer
  // Add more reducers if needed
});

export default rootReducer;
