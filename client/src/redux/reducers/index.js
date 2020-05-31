import heartToggle from './heart.js';
import product from './product.js';
import arrowCounter from './arrow.js';
import productModal from './productModal.js';
import magnify from './magnify.js';
import sizeDropdown from './sizeDropdown.js';
import selectedSize from './selectedSize.js';
import quanDropdown from './quanDropdown.js';
import selectedQuan from './selectedQuan.js';
import bagModal from './bagModal.js';
import bagInfo from './bagInfo.js';
import underlineContainer from './underlineContainer.js';
import completeDrop from './completeDrop.js';
import matchingItem from './matchingItem.js';
import completeSize from './completeSize.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    heartToggle,
    product,
    arrowCounter,
    productModal,
    magnify,
    sizeDropdown,
    selectedSize,
    quanDropdown,
    selectedQuan,
    bagInfo,
    bagModal,
    underlineContainer,
    completeDrop,
    matchingItem,
    completeSize
});

export default allReducers;