import axiosClient from '../config/axios';
import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR,
} from '../types'; // usually same as reducer




// Add product
export const addProductAction =  (product) => {
    return async(dispatch) => {
        // try to add the product
       dispatch(addProduct());

       try {
           // insert to DB
            await axiosClient.post('/productdds', product)
            // if everything goes well, update state
           dispatch(addProductOk(product));
       }
       catch (error) {
           // if error, change the state
           dispatch(addProductError(true));
       }
       }
    }

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

const addProductOk = (product) => ({
    type: ADD_PRODUCT_OK,
    payload: product
});

const addProductError = (errorState) => ({
    type: ADD_PRODUCT_ERROR,
    payload: errorState
});