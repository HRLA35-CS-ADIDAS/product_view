import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem, underlineItem, handleDrop, showBagModal, openCompleteSize, selectCompleteSize, addCompleteItem, openError, updateBag, openPlease } from '../../redux/actions/index.js';

class CompleteLook extends React.Component {

    render() {

        const { selectItem, underlineItem, handleDrop, underlineContainer, dropDown, addComplete, show, completeSize, openSize, selectSize, selectedSize, openError, update, pleaseSelect, openPlease } = this.props;
        const { matching_items } = this.props.data;
        const { name, price, size, image } = this.props.matchingItem;

        const runUpdate = () => {
            if (selectedSize !== null){
                update('all', 'clear')
            }
        }

        return (
            <div className="complete-div">
                <h4 className="complete-heading">
                    complete the look
            </h4>
                <div className="complete-items">
                    <div className="complete-items-list">
                        {matching_items.map((item) => {
                            if (underlineContainer === item) {
                                return (
                                    <div onClick={() => handleDrop()} className="clicked-container">
                                        <div className="complete-product">
                                            <div onClick={() => {selectItem(item); underlineItem(item);}}>
                                            <img src={item.image} className="complete-image" />
                                        </div>
                                        <div className="complete-price-container">
                                            <div className="complete-price">
                                                ${item.price}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div onClick={()=> handleDrop()} className="complete-container">
                                        <div className="complete-product">
                                        <div onClick={() => {selectItem(item); underlineItem(item);}}>
                                            <img src={item.image} className="complete-image" />
                                        </div>
                                        <div className="complete-price-container">
                                            <div className="complete-price">
                                                ${item.price}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    {(dropDown) ? (<div className="completeDrop">
                        <div className="completeFlex">
                            <div className="image-container-2">
                                <div className="complete-img-2">
                                    <img src={image} className="fit-img" />
                                </div>
                            </div>
                            <div className="purchase-container">
                                <div className="complete-item-info">
                                    <h5 className="complete-h5">{name}</h5>
                                    <div></div>
                                    <p>${price}</p>
                                </div>
                                <div className="complete-item-buttons">

                                    <div className="size-container-complete">

                                        <button onClick={() => openSize()} className="select-size">
                                            <span className="select">
                                                {(selectedSize === null) ? (<span className="select-inner">SELECT SIZE</span>) : (<span className="select-inner">{selectedSize}</span>)}

                                            </span>

                                            {completeSize ? (<svg className="open-dropdown" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                                                <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                                            </svg>) : (<svg className="gl-icon-gl-custom-dropdown__select-icon" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                                                <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                                            </svg>)}

                                        </button>
                                        {completeSize ? (
                                            <div className="complete-dropdown-options">
                                                <div className="square-list">
                                                    <ul className="size-menu">

                                                        {size.map((size) => {
                                                            return (
                                                                <li className="size-item">
                                                                    <div onClick={() => {selectSize(size); openSize();}} className="button-item">
                                                                        <b>{size}</b>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })}


                                                    </ul>
                                                    {pleaseSelect ? (<div className="please">Please select your size</div>) : (null)}

                                                </div>

                                            </div>) : (null)}

                                    </div>

                                    <div onClick={() => {show(selectedSize); addComplete(price, selectedSize); openError(selectedSize); runUpdate(); openPlease(selectedSize);}} className="bag-button">
                                        <span className="before-button"></span>
                                        <span className="bag-text">ADD TO BAG</span>
                                        <svg className="gl-icon-gl-cta__icon" data-di-res-id="6361accf-c33aeebb" data-di-rand="1585359780189">
                                            <svg id="arrow-right-long" viewBox="0 0 24 24"><path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                                        </svg>
                                        <span className="after-button"></span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>) : (null)}
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.product.info,
    underlineContainer: state.underlineContainer,
    dropDown: state.completeDrop,
    matchingItem: state.matchingItem,
    completeSize: state.completeSize,
    selectedSize: state.selectedSize.complete,
    pleaseSelect: state.pleaseSelect
  });
  
  const mapDispatchToProps = dispatch => {
    return {
        selectItem: (item) => dispatch(selectItem(item)),
        underlineItem: (item) => dispatch(underlineItem(item)),
        handleDrop: () => dispatch(handleDrop()),
        show: (selected) => dispatch(showBagModal(selected)),
        openSize: () => dispatch(openCompleteSize()),
        selectSize: (size) => dispatch(selectCompleteSize(size)),
        addComplete: (price, quantity) => dispatch(addCompleteItem(price, quantity)),
        openError: (selected) => dispatch(openError(selected)),
        update: (size, quantity) => dispatch(updateBag(size, quantity)),
        openPlease: (selected) => dispatch(openPlease(selected))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CompleteLook);