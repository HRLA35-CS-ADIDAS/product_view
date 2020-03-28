import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import ImageCarousel from './ImageCarousel.jsx';

var counter = 0;

class ProductDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            image: this.props.images[counter]

        }
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handlePrev.bind(this);
        this.openThumbnail = this.openThumbnail.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.images[0] !== this.state.image) {
            this.setState({ image: nextProps.images[0] });
        }
    }

    handlePrev() {
        if (counter === 0) {
            counter = this.props.images.length - 1;
        } else {
            counter = counter - 1;
        }
        this.setState({ image: this.props.images[counter] })
    }

    handleNext() {
        if (counter === this.props.images.length - 1) {
            counter = 0;
        } else {
            counter = counter + 1;
        }
        this.setState({ image: this.props.images[counter] })
    }

    openThumbnail(index) {
        this.setState({ image: this.props.images[index] })
    }

    openModal(e) {
        e.preventDefault()
        this.setState({ showModal: true });
    }

    closeModal(e) {
        e.preventDefault()
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="img-wrapper">
                <div className="shoe-element-container">

                    <div className="mainImageBox">

                        {/* <div className="product-image"> */}
                        <img className="large-product" src={this.state.image} onClick={this.openModal} />
                        {/* </div> */}

                        <div className="left-arrow" onClick={this.handlePrev}>
                            <svg className="left-drop-shadow" data-di-rand="1585287190386">

                                <svg className="arrow-right-long" viewBox="0 0 24 24">
                                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                </svg>

                            </svg>

                            <svg className="gl-icon-arrow___1v3Xz" data-di-rand="1585287190386">
                                <svg className="arrow-right-long" viewBox="0 0 24 24">
                                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                </svg>

                            </svg>
                        </div>

                        <div className="right-arrow" onClick={this.handleNext}>
                            <svg className="right-drop-shadow" data-di-rand="1585287190386">
                                <svg className="arrow-right-long" viewBox="0 0 24 24">
                                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                            </svg>
                            <svg className="gl-icon-arrow___1v3Xz" data-di-rand="1585287190386">
                                <svg className="arrow-right-long" viewBox="0 0 24 24">
                                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                </svg>
                            </svg>

                        </div>

                    </div>
                    <div className="side-viewer">
                        <div className="side-image-container">
                            {this.props.images.map((sideImg) => {
                                return (
                                    <div className="side-image-box">
                                        <img className="side-image" src={sideImg} onClick={() => { this.openThumbnail(this.props.images.indexOf(sideImg)) }} />
                                    </div>)
                            })}
                        </div>
                    </div>

                </div >
                    <ReactModal isOpen={this.state.showModal} className="modalImage" overlayClassName="Overlay" onRequestClose={this.closeModal}>
                        <button className="close-modal" onClick={this.closeModal}>
                            <svg className="close-icon" data-di-res-id="afd85625-1c771244" data-di-rand="1585384319810">
                                <svg id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                            </svg>
                        </button>
                        <ImageCarousel closeButton={this.closeModal} images={this.props.images} image={this.state.image} handlePrev={this.handlePrev} handleNext={this.handleNext} />
                    </ReactModal>
            </div >

        )
    }
}

export default ProductDisplay;

                    // <ReactModal isOpen={this.state.showModal} className="modalImage" overlayClassName="Overlay" onRequestClose={this.closeModal}>
                    //     <button onClick={this.closeModal} id="mainModalButton"><span id="closeButton">✕</span></button>
                    //     <ImageCarousel images={this.props.images} image={this.state.image} handlePrev={this.handlePrev} handleNext={this.handleNext} />
                    // </ReactModal>