import heartToggle from './heart.js';
import product from './product.js'
import arrowCounter from './arrow.js'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    heartToggle,
    product,
    arrowCounter
});

export default allReducers;