import { createStore, compose, applyMiddleware } from "redux";

import appReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // For Chrome/Edge DevTool Extension

const createdStore = createStore(appReducer, composeEnhancers(applyMiddleware()));

const store = { createdStore };

export default store;
