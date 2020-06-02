import React from 'react';
import ReactModal from 'react-modal';
import ImageCarousel from './ImageCarousel.jsx';
import CompleteLook from '../Bag-Related/CompleteLook.jsx';
import { connect } from 'react-redux';
import { increaseArrow, decreaseArrow, setCount, showDisplayModal, hideDisplayModal, magnifyOut } from '../../redux/actions/index';

class ProductDisplay extends React.Component {


    render() {
        const { images, count, increment, decrement, modalStatus, show, hide, setCount, zoomOut, matching_items } = this.props;


        if (images === undefined) {
            return (
                <p>Loading...</p>
            )
        }

        return (
            <div className="img-wrapper">
                <div className="shoe-element-container">
                    <div className="mainImageBox">
                        <img className="large-product" src={images[count]} onClick={show} />

                        <div className="left-arrow" onClick={() => decrement(this.props)}>
                            <svg className="left-drop-shadow" data-di-rand="1585287190386">

                                <svg className="arrow-right-long" viewBox="0 0 24 24">
                                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
                                </svg>

                            </svg>

                            <svg className="gl-icon-arrow___1v3Xz" data-di-rand="1585287190386">
                                <svg className="arrow-right-long" viewBox="0 0 24 24">
                                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
                                </svg>

                            </svg>
                        </div>

                        <div className="right-arrow" onClick={() => increment(this.props)}>
                            <svg className="right-drop-shadow" data-di-rand="1585287190386">
                                <svg className="arrow-right-long" viewBox="0 0 24 24">
                                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path></svg>
                            </svg>
                            <svg className="gl-icon-arrow___1v3Xz" data-di-rand="1585287190386">
                                <svg className="arrow-right-long" viewBox="0 0 24 24">
                                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
                                </svg>
                            </svg>

                        </div>

                    </div>
                    <div className="side-viewer">
                        <div className="side-image-container">
                            {images.map((sideImg) => {
                                return (
                                    <div className="side-image-box">
                                        <img className="side-image" src={sideImg} onClick={() => setCount(images.indexOf(sideImg))} />
                                    </div>)
                            })}
                        </div>
                    </div>

                </div >

                <ReactModal isOpen={modalStatus} className="modalImage" overlayClassName="Overlay-popup" onRequestClose={hide}>
                    <button className="close-modal1" onClick={() => {hide(); zoomOut();}}>
                        <svg className="close-icon" data-di-res-id="afd85625-1c771244" data-di-rand="1585384319810">
                            <svg id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                        </svg>
                    </button>
                    <ImageCarousel hide={hide} images={images} />
                </ReactModal>

                {(matching_items === null) ? (null) : (
                    <CompleteLook />
                )}


            </div >

        )
    }
}

const mapStateToProps = state => ({
    count: state.arrowCounter,
    modalStatus: state.productModal
});

const mapDispatchToProps = dispatch => {
    return {
        increment: (ownProps) => dispatch(increaseArrow(ownProps.images)),
        decrement: (ownProps) => dispatch(decreaseArrow(ownProps.images)),
        setCount: (num) => dispatch(setCount(num)),
        show: () => dispatch(showDisplayModal()),
        hide: () => dispatch(hideDisplayModal()),
        zoomOut: () => dispatch(magnifyOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay);