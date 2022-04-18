/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR,
} from '../types';

// each reducer has its own state
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    // the whole reducer is a Switch
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload // sent from the actions
            }
        case ADD_PRODUCT_OK:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};