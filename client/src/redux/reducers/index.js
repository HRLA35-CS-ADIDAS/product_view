import heartToggle from './heart.js';
import product from './product.js'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    heartToggle,
    product
});

export default allReducers;