import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import serverReducer from './serverReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  server: serverReducer
  // Add more reducers if needed
});

export default rootReducer;
