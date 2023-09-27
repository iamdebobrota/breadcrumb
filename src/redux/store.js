import { legacy_createStore, applyMiddleware, compose } from "redux";
import { appReducer } from "./appReducer/reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  appReducer,
  composeEnhancer(applyMiddleware(thunk))
);
