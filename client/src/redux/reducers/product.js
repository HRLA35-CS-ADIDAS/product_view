import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CHANGE_PRODUCT
} from '../actions/index';

const initialState = {
  info: [],
  loading: false,
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
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
        info: action.payload.data[(Math.floor(action.payload.data.length * Math.random()))],
        allShoes: action.payload.data
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        error: action.payload.error,
        info: []
      };

    case CHANGE_PRODUCT:
      for (var key in action.payload.allProducts) {
        if (action.payload.allProducts[key].carousel_images[0] === action.payload.target) {
          return {
            error: null,
            loading: false,
            info: action.payload.allProducts[key],
            allShoes: action.payload.allProducts

          }
        }
      };

    default:
      return state;
  }
}

export default productReducer;