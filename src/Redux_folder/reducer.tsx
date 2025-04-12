import {combineReducers} from 'redux';
import userDataReducer from '../Login/loginSlice';
const rootReducer = combineReducers({
  userData: userDataReducer,
});
export default rootReducer;
