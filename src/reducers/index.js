import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  routing: routerReducer
});

export default rootReducer;
