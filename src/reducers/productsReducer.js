/* eslint-disable import/no-anonymous-default-export */
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
  PRODUCT_EDIT_OK,
  PRODUCT_EDIT_ERROR,
} from "../types";

// each reducer has its own state
const initialState = {
  products: [],
  error: null,
  loading: false,
  editProduct: null,
  deleteProduct: null,
};

export default (state = initialState, action) => {
  // the whole reducer is a Switch
  switch (action.type) {
    case ADD_PRODUCT:
    case DOWNLOAD_PRODUCTS:
      return {
        ...state,
        loading: action.payload, // sent from the actions
        error: false,
      };
    case ADD_PRODUCT_OK:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
        error: false,
      };
    case ADD_PRODUCT_ERROR:
    case DOWNLOAD_PRODUCTS_ERROR:
    case PRODUCT_DELETE_ERROR:
        case PRODUCT_EDIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DOWNLOAD_PRODUCTS_OK:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };
    case PRODUCT_DELETE:
      return {
        ...state,
        loading: false,
        error: false,
        deleteProduct: action.payload,
      };
    case PRODUCT_DELETE_OK:
      return {
        ...state,
        // get products that are not the product that we deleted
        products: state.products.filter(
          (product) => product._id !== state.deleteProduct
        ),
        deleteProduct: null,
      };
    case PRODUCT_EDIT:
      return {
        ...state,
        editProduct: action.payload,
      };
      case PRODUCT_EDIT_OK:
        return {
          ...state,
          editProduct: null,
            products: state.products.map((product) =>
              product._id === action.payload._id ? product = action.payload : product
            ),
        };
    default:
      return state;
  }
};
