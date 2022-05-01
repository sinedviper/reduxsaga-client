import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import apiReducer from "components/modules/api/reducer.js";
import apiSaga from "./components/modules/api/saga";
import appReducer from "components/modules/app/reducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const reducers = combineReducers({
  api: apiReducer,
  app: appReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(apiSaga);

export default store;
