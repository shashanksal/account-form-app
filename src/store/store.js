import { createStore, compose, applyMiddleware } from 'redux';

import appReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // For Chrome/Edge DevTool Extension

const store = createStore(appReducer, composeEnhancers(applyMiddleware()));

export default { store };
