import React from 'react';
import ReactModal from 'react-modal';
import ImageCarousel from './ImageCarousel.jsx';
import CompleteLook from '../Others/CompleteLook.jsx';
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

// class ProductDisplay extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showModal: false,
//             image: this.props.images[counter]
//         }
//         this.handlePrev = this.handlePrev.bind(this);
//         this.handleNext = this.handlePrev.bind(this);
//         this.openThumbnail = this.openThumbnail.bind(this);
//         this.openModal = this.openModal.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.images[0] !== this.state.image) {
//             this.setState({ image: nextProps.images[0] });
//         }
//     }

//     handlePrev() {
//         if (counter === 0) {
//             counter = this.props.images.length - 1;
//         } else {
//             counter = counter - 1;
//         }
//         this.setState({ image: this.props.images[counter] })
//     }

//     handleNext() {
//         if (counter === this.props.images.length - 1) {
//             counter = 0;
//         } else {
//             counter = counter + 1;
//         }
//         this.setState({ image: this.props.images[counter] })
//     }

//     openThumbnail(index) {
//         this.setState({ image: this.props.images[index] })
//     }

//     openModal(e) {
//         e.preventDefault()
//         this.setState({ showModal: true });
//     }

//     closeModal(e) {
//         e.preventDefault()
//         this.setState({ showModal: false });
//     }

//     render() {
//         return (
//             <div className="img-wrapper">
//                 <div className="shoe-element-container">

//                     <div className="mainImageBox">

//                         <img className="large-product" src={this.state.image} onClick={this.openModal} />


//                         <div className="left-arrow" onClick={this.handlePrev}>
//                             <svg className="left-drop-shadow" data-di-rand="1585287190386">

//                                 <svg className="arrow-right-long" viewBox="0 0 24 24">
//                                     <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
//                                 </svg>

//                             </svg>

//                             <svg className="gl-icon-arrow___1v3Xz" data-di-rand="1585287190386">
//                                 <svg className="arrow-right-long" viewBox="0 0 24 24">
//                                     <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
//                                 </svg>

//                             </svg>
//                         </div>

//                         <div className="right-arrow" onClick={this.handleNext}>
//                             <svg className="right-drop-shadow" data-di-rand="1585287190386">
//                                 <svg className="arrow-right-long" viewBox="0 0 24 24">
//                                     <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
//                             </svg>
//                             <svg className="gl-icon-arrow___1v3Xz" data-di-rand="1585287190386">
//                                 <svg className="arrow-right-long" viewBox="0 0 24 24">
//                                     <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
//                                 </svg>
//                             </svg>

//                         </div>

//                     </div>
//                     <div className="side-viewer">
//                         <div className="side-image-container">
//                             {this.props.images.map((sideImg) => {
//                                 return (
//                                     <div className="side-image-box">
//                                         <img className="side-image" src={sideImg} onClick={() => { this.openThumbnail(this.props.images.indexOf(sideImg)) }} />
//                                     </div>)
//                             })}
//                         </div>
//                     </div>

//                 </div >

//                 <ReactModal isOpen={this.state.showModal} className="modalImage" overlayClassName="Overlay-popup" onRequestClose={this.closeModal}>
//                     <button className="close-modal1" onClick={this.closeModal}>
//                         <svg className="close-icon" data-di-res-id="afd85625-1c771244" data-di-rand="1585384319810">
//                             <svg id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
//                         </svg>
//                     </button>
//                     <ImageCarousel closeButton={this.closeModal} images={this.props.images} image={this.state.image} handlePrev={this.handlePrev} handleNext={this.handleNext} />
//                 </ReactModal>

//                 {(this.props.matching_items === null) ? (null) : (
//                     <CompleteLook addPrice={this.props.addPrice} matching_items={this.props.matching_items} />
//                 )}


//             </div >

//         )
//     }
// }

// export default ProductDisplay;