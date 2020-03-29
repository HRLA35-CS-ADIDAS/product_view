import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '25%',
        left: '25%',
        right: '25%',
        bottom: '37%',
        padding: '30px',
        overflow: 'hidden'
    }
};

class FreeShipping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
            <div>
                <div className="shipping">
                    <div className="promo-callout">
                        <div className="icon-wrapper">
                            <svg className="car1" data-di-rand="1585359780190">
                                <svg id="usp-delivery" viewBox="0 0 19 19"><g fill="none" stroke="currentColor" stroke-miterlimit="10"><path d="M13.42 13.5H9.5"></path><path stroke-linecap="square" d="M4.5 5.5h10l4 3v5h-2M6.5 13.5h-2m0-6h-4"></path><circle cx="8" cy="13" r="1.5"></circle><circle cx="15" cy="13" r="1.5"></circle><path stroke-linecap="square" d="M1.5 9.5h3m-2 2h2"></path></g></svg>
                            </svg>
                        </div>
                        <div onClick={this.openModal} className="callout-content">
                            <div className="promo-link">
                                <a className="free-shipping">
                                    FREE SHIPPING OVER $49 + FREE RETURNS & EXCHANGES
                      </a>
                            </div>

                        </div>
                    </div>
                </div>
                
                <ReactModal
                    isOpen={this.state.showModal}
                    style={customStyles}
                    overlayClassName="Overlay"
                    onRequestClose={this.closeModal}
                >
                    <button className="close-modal" onClick={this.closeModal}>
                        <svg className="close-icon" data-di-res-id="afd85625-1c771244" data-di-rand="1585384319810">
                            <svg id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                        </svg>
                    </button>
                    <div>
                        <div className="learn-more-padding">
                            <h5 className="learn-more-header">
                                FREE SHIPPING OVER $49 + FREE RETURNS & EXCHANGES
                </h5>
                            <span>FREE SHIPPING OVER $49 + FREE RETURNS & EXCHANGES</span>

                            <div className="learn-more-body">
                                <br />
                                Spend over $49 and shipping is free! Creators Club members unlock free shipping on any order. Sign up or Login.
                                If you are not completely satisfied with your adidas.com purchase, for any reason, we will offer you a free return or exchange within 90 days of purchase. Some restrictions apply.
                                Check out our Return Policy for more details.
                                <br />
                                <div className="learn-box">
                                    <br/>
                                    <a href="https://www.adidas.com/us/help?hcid=HCID_RETURN_REFUND"><button className="learn-more">Learn More</button></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default FreeShipping;