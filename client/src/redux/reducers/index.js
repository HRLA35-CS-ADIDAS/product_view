import heartToggle from './Selectables/heart.js';
import product from './product.js';
import arrowCounter from './Product Display/arrow.js';
import productModal from './Product Display/productModal.js';
import magnify from './Product Display/magnify.js';
import sizeDropdown from './Selectables/sizeDropdown.js';
import selectedSize from './Selectables/selectedSize.js';
import quanDropdown from './Selectables/quanDropdown.js';
import selectedQuan from './Selectables/selectedQuan.js';
import bagModal from './Bag/bagModal.js';
import bagInfo from './Bag/bagInfo.js';
import underlineContainer from './Complete Look/underlineContainer.js';
import completeDrop from './Complete Look/completeDrop.js';
import matchingItem from './Complete Look/matchingItem.js';
import completeSize from './Complete Look/completeSize.js';
import completeItem from './Complete Look/completeItem.js';
import pleaseSelect from './Complete Look/pleaseSelect.js';
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
    completeSize,
    completeItem,
    pleaseSelect
});

export default allReducers;