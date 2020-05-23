import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from '../actions/index';

  const initialState = {
    info: [],
    loading: false,
    error: null
  };

const productReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          info: [],
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          error: null,
          loading: false,
          info: action.payload.data
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          loading: false,
          error: action.payload.error,
          info: []
        };
  
      default:
        return state;
    }
  }

  export default productReducer;