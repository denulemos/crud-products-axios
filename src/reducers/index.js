import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

// have multiple reducers with states
export default combineReducers({
    products: productsReducer
})