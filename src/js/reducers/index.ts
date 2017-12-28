import { combineReducers } from 'redux';
import menu                from './menu.reducer.ts';

const rootReducer = combineReducers({
  menu,
});

export default rootReducer;
