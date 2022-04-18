// You only need ONE store
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // allows you to use async functions 
import reducer from "./reducers";

const store = createStore(
    reducer, // it only accepts one reducer, thats why we are using combineReducers
    compose(applyMiddleware(thunk), 
    typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;