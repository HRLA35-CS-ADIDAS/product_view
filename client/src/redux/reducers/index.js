import heartToggle from './heart.js';
import product from './product.js';
import arrowCounter from './arrow.js';
import productModal from './productModal.js';
import magnify from './magnify.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    heartToggle,
    product,
    arrowCounter,
    productModal,
    magnify
});

export default allReducers;