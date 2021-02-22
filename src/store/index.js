import { combineReducers, createStore } from 'redux';
import aiaWrapper from './AIAWrapper';

const reducer = combineReducers({ aiaWrapper });

// eslint-disable-next-line max-len
const store = createStore(reducer, [], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({ type: 'init' });

export default store;
