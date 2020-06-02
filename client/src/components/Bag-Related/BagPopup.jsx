import React, { Fragment } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { showMessage, showBagModal, hideBagModal, updateBag } from '../../redux/actions/index';


const customStyles = {
    content: {
        top: '15%',
        left: '25%',
        right: '25%',
        bottom: '20%',
        padding: '20px',
        overflow: 'hidden'
    }
};

class BagPopup extends React.Component {

    render() {
        const { showMessage, selectedSize, bagModal, show, hide, selectedQuan, update } = this.props;
        const { carousel_images, name, current_price, available_colors } = this.props.data;
        const { totalQuan } = this.props.bagInfo;
        const { price, quantity } = this.props.completeItem;

        if (carousel_images === undefined) {
            return (
                <p>Loading...</p>
            )
        }

        return (
            <Fragment>
                <button className="bag-button" onClick={() => { showMessage(selectedSize); show(selectedSize); update(selectedSize, selectedQuan); }}>
                    <span className="before-button"></span>
                    <span className="bag-text">ADD TO BAG</span>
                    <svg className="gl-icon-gl-cta__icon" data-di-res-id="6361accf-c33aeebb" data-di-rand="1585359780189">
                        <svg id="arrow-right-long" viewBox="0 0 24 24"><path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                    </svg>
                    <span className="after-button"></span>
                </button>
                <ReactModal
                    isOpen={bagModal}
                    style={customStyles}
                    overlayClassName="Overlay"
                    onRequestClose={hide}
                >
                    <button className="close-modal" onClick={() => hide()}>
                        <svg className="close-icon" data-di-res-id="afd85625-1c771244" data-di-rand="1585384319810">
                            <svg id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                        </svg>
                    </button>
                    <div className="bag-modal">
                        <h5 className="bag-success">Successfully added to bag!</h5>
                        <div className="add-to-bag-modal">
                            <div className="bag-modal2">
                                <div className="left-column">
                                    <div className="left-column-items">
                                        <div className="left-image-div">
                                            <img src={carousel_images[0]} className="bag-img" />
                                        </div>
                                        <div className="column-info">
                                            <h5 className="column-title">
                                                {name}
                                            </h5>
                                            <div className="buy-price">
                                                ${current_price}
                                            </div>
                                            <div className="buy-font">
                                                Color: {available_colors.map((color) => {
                                                if (color === available_colors[available_colors.length - 1]) {
                                                    return (<p>{color}</p>)
                                                } else {
                                                    return (<p>{color} /</p>)
                                                }
                                            })}
                                            </div>
                                            <div className="buy-font">
                                                Size: {selectedSize}
                                                <br />
                                                Quantity: {selectedQuan}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="right-column">
                                    <div className="right-column-items">
                                        <h3 className="column-title-bag">
                                            Your Bag
                                            </h3>
                                        <div className="bag-quan">
                                            {totalQuan} Items
                                        </div>
                                        <div className="price-rows">
                                            <div className="price-row">
                                                Total Product Cost:
                                                {(selectedSize !== null) ?
                                                    (<div className="amount">
                                                        ${(current_price * (totalQuan-quantity)) + (price)}
                                                    </div>)
                                                    :
                                                    ((<div className="amount">
                                                        ${(price)}
                                                    </div>))}
                                            </div>
                                            <div className="price-row">
                                                Total Delivery Cost:
                                                <div className="amount">
                                                    FREE
                                                </div>
                                            </div>

                                        </div>
                                        <div className="price-rows2">
                                            <h5 className="price-row2">
                                                Total:
                                                <h5 className="amount2">
                                                {(selectedSize !== null) ?
                                                    (<div className="amount">
                                                        ${(current_price * (totalQuan-quantity)) + (price)}
                                                    </div>)
                                                    :
                                                    ((<div className="amount">
                                                        ${(price)}
                                                    </div>))}
                                                </h5>
                                            </h5>
                                            <div className="installments">
                                                Installment options
                                            </div>
                                            <div className="installments1">
                                                Prefer to spread out the payment? Select ‘Affirm’ at checkout to pay in 3 interest-free installments of ${((current_price * totalQuan) / 3).toFixed(2)}.
                                            </div>

                                            <div className="view-bag-button">
                                                <span className="before-button"></span>
                                                <span className="bag-text">VIEW BAG</span>
                                                <svg className="gl-icon-gl-cta__icon" data-di-res-id="6361accf-c33aeebb" data-di-rand="1585359780189">
                                                    <svg id="arrow-right-long" viewBox="0 0 24 24"><path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                                                </svg>
                                                <span className="after-button"></span>
                                            </div>

                                            <div className="view-bag-button2">
                                                <span className="bag-text">GO TO CHECKOUT</span>
                                                <svg className="gl-icon-gl-cta__icon" data-di-res-id="6361accf-c33aeebb" data-di-rand="1585359780189">
                                                    <svg id="arrow-right-long" viewBox="0 0 24 24"><path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" color="black" stroke-miterlimit="10" stroke-width="2"></path></svg>
                                                </svg>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </ReactModal>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    data: state.product.info,
    bagModal: state.bagModal,
    bagInfo: state.bagInfo,
    selectedSize: state.selectedSize.original,
    selectedQuan: state.selectedQuan,
    completeItem: state.completeItem
});

const mapDispatchToProps = dispatch => {
    return {
        showMessage: (selected) => dispatch(showMessage(selected)),
        show: (selected) => dispatch(showBagModal(selected)),
        update: (size, quantity) => dispatch(updateBag(size, quantity)),
        hide: () => dispatch(hideBagModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagPopup);