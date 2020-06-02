import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '25%',
        left: '25%',
        right: '25%',
        bottom: '50%',
        padding: '30px',
        overflow: 'hidden'
    }
};

class PayPal extends React.Component {
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
                <div className="paypal">
                  <div className="promo-callout2">


                    <div className="icon-wrapper2">
                      <svg className="usp-checkmark" data-di-rand="1585359780190">
                        <svg id="usp" viewBox="0 0 17 19"><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" d="M1.5 10.5l4 4 10-10"></path></svg>
                      </svg></div>
                    <div onClick={this.openModal} className="callout-content2">
                      <div className="promo-link2">
                        <a className="paypal-link">Buy now, pay over time with PayPal CREDIT</a>
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
                            <svg id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path></svg>
                        </svg>
                    </button>
                    <div>
                        <div className="learn-more-padding">
                            <h5 className="learn-more-header">
                                BUY NOW, PAY OVER TIME WITH PAYPAL CREDIT
                </h5>
                            <div className="learn-more-body">
                            Buy now, pay over time with PayPal CREDIT
                </div>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default PayPal;