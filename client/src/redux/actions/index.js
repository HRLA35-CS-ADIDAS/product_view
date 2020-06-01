import axios from 'axios';

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';

/*
  ========================================
  Fetch data
  ========================================
*/

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchProductsBegin)
    axios.get('/products')
      .then((response) => {
        const data = response.data
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

export const changeProduct = (allProducts, target) => ({
  type: CHANGE_PRODUCT,
  payload: { allProducts, target }
});

/*
  ========================================
  Next and previous arrows
  ========================================
*/

export const increaseArrow = (images) => {
  return {
    type: 'INCREASE',
    payload: images
  }
}

export const decreaseArrow = (images) => {
  return {
    type: 'DECREASE',
    payload: images
  }
}

export const setCount = (index) => {
  return {
    type: 'SET',
    payload: index
  }
}

/*
  ========================================
  Product Display Modal
  ========================================
*/

export const showDisplayModal = () => {
  return {
    type: 'SHOW_MODAL'
  };
};

export const hideDisplayModal = () => {
  return {
    type: 'HIDE_MODAL'
  };
};

/*
  ========================================
  Magnify
  ========================================
*/

export const magnifyIn = () => {
  return {
    type: 'IN'
  };
};

export const magnifyOut = () => {
  return {
    type: 'OUT'
  };
};

/*
  ========================================
  Size Selector
  ========================================
*/

export const toggleSize = () => {
  return {
    type: 'TOGGLE_SIZE'
  };
};

export const selectSize = (size) => {
  return {
    type: 'SELECT_SIZE',
    payload: {
      original: size,
      complete: null
    }
  };
};

export const showMessage = (selected) => {
  return {
    type: 'SHOW_MESSAGE',
    payload: selected
  };
};

/*
  ========================================
  Quantity Selector
  ========================================
*/

export const toggleQuan = () => {
  return {
    type: 'TOGGLE_QUAN'
  };
};

export const selectQuan = (quantity) => {
  return {
    type: 'SELECT_QUAN',
    payload: quantity
  };
};

/*
  ========================================
  Toggle heart icon
  ========================================
*/

export const fill = () => {
  return {
    type: 'TOGGLE_HEART'
  };
};

/*
  ========================================
  Bag Modal
  ========================================
*/

export const showBagModal = (selected) => {
  return {
    type: 'SHOW_BAG',
    payload: selected
  };
};

export const hideBagModal = () => {
  return {
    type: 'HIDE_BAG'
  };
};

export const updateBag = (size, quantity) => {
  return {
    type: 'ADD_BAG',
    payload: { size, quantity }
  };
};

/*
  ========================================
  Complete Look
  ========================================
*/

export const selectItem = (item) => {
  return {
    type: 'SELECT_ITEM',
    payload: item
  };
};

export const underlineItem = (item) => {
  return {
    type: 'UNDERLINE',
    payload: item
  };
};

export const handleDrop = () => {
  return {
    type: 'DROP_COMPLETE'
  };
};

export const openCompleteSize = () => {
  return {
    type: 'OPEN_COMPLETE_SIZE'
  };
};

export const openError = (selected) => {
  return {
    type: 'NO_SIZE_SELECTED',
    payload: selected
  };
};

export const selectCompleteSize = (size) => {
  return {
    type: 'SELECT_SIZE',
    payload: {
      complete: size
    }
  };
};

export const addCompleteItem = (price, quantity) => {
  return {
    type: 'ADD_COMPLETE_ITEM',
    payload: {
      price: price,
      quantity: quantity
    }
  };
};