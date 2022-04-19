import axiosClient from '../config/axios';
import {
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_OK,
    DOWNLOAD_PRODUCTS_ERROR,
    PRODUCT_DELETE,
    PRODUCT_DELETE_OK,
    PRODUCT_DELETE_ERROR,
    PRODUCT_EDIT,
    START_PRODUCT_EDIT,
    PRODUCT_EDIT_OK,
    PRODUCT_EDIT_ERROR

} from '../types'; // usually same as reducer
import Swal from 'sweetalert2';




// Add product
export const addProductAction =  (product) => {
    return async(dispatch) => {
        // try to add the product
       dispatch(addProduct());

       try {
           // insert to DB
            await axiosClient.post('/products', product)
            // if everything goes well, update state
           dispatch(addProductOk(product));
           
           // alert
           Swal.fire('Product added', product.name, 'success');
       }
       catch (error) {
           // if error, change the state
           dispatch(addProductError(true));
            // alert
            Swal.fire('Error','There was an error adding the Product', 'error');
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

export const downloadProductsAction =  (product) => {
    return async(dispatch) => {

       dispatch(downloadProducts());

       try {
           const {data} = await axiosClient.get('/products');

            // if everything goes well, update state
           dispatch(downloadProductsOk(data));
           
       }
       catch (error) {
           // if error, change the state
           dispatch(downloadProductsError());
            // alert
            Swal.fire('Error','There was an error downloading products', 'error');
       }
       }
    }

    const downloadProducts = () => ({
        type: DOWNLOAD_PRODUCTS,
        payload: true
    });
    
    const downloadProductsOk = (products) => ({
        type: DOWNLOAD_PRODUCTS_OK,
        payload: products
    });
    
    const downloadProductsError = (errorState) => ({
        type: DOWNLOAD_PRODUCTS_ERROR,
        payload: true
    });

// Select and delete product

export const deleteProductAction = (id) => {
    return async(dispatch) => {
        dispatch(deleteProduct());

        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch(deleteProductOk(id));
            // alert
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        catch (error) {
            // if error, change the state
            dispatch(deleteProductError());
            // alert
            Swal.fire('Error','There was an error deleting the product', 'error');
        }
    }
}

const deleteProduct = (id) => ({
    type: PRODUCT_DELETE,
    payload: id
});

const deleteProductOk = () => ({
    type: PRODUCT_DELETE_OK,
});

const deleteProductError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true
});

// relate on taking the product we want to edit
export const productEdit = (product) => {
    return (dispatch) => {
        dispatch(productEditAction(product));
    }
}

const productEditAction = (product) => ({
    type: PRODUCT_EDIT,
    payload: product
})

// editing the product on the API
export const startProductEdit = (product) => {
    return async(dispatch) => {
        dispatch(startProductAction());

        try {
            const result = await axiosClient.put(`/products/${product.id}`, product);
            dispatch(productEditOk(result.data));
        }
        catch (e) {
            dispatch(productEditError());
        }
    }
}

const startProductAction = () => ({
    type: START_PRODUCT_EDIT
})

const productEditOk = (product) => ({
    type: PRODUCT_EDIT_OK,
    payload: product
});

const productEditError = () => ({
    type: PRODUCT_EDIT_ERROR,
    payload: true
});
