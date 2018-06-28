import { createStore, applyMiddleware } from "redux";
import reducer from './reducers/reducer';
import {createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
const initialState = {
  name: "rajesh",
  count: 0
};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(createLogger(),thunk)
);
export default store;
