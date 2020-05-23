import axios from 'axios';

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fill = () => {
    return {
        type: 'TOGGLE'
    };
};

export const fetchData = () => {
    return(dispatch)=>{
        dispatch(fetchProductsBegin)
        axios.get('/products')
        .then((response)=>{
            const data = response.data[(Math.floor(response.data.length * Math.random()))]
            dispatch(fetchProductsSuccess(data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductsFailure(errorMsg))
        });
    }
}

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { data }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});