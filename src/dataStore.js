import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { siteReducer } from "./restReducers/restReducer";

// create reducer

const reducer = combineReducers({
  reducer1: siteReducer,
});

// create middleware
const middleware = [thunk];

//create store

//                      reducer, middleware

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
