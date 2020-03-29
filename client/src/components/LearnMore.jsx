import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '25%',
        left: '25%',
        right: '25%',
        bottom: '40%',
        padding: '30px',
        overflow: 'hidden'
    }
};

class LearnMore extends React.Component {
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
            <div className="learn-box">
                <button onClick={this.openModal} className="learn-more">Learn More</button>
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
                PAYING IN INSTALLMENTS
                </h5>
                <div className="learn-more-body">
                Want to spread the cost of your order with adidas? Select ‘Affirm’ as your payment method at checkout, and you can pay in three interest-free installments, with no hidden fees. Following a quick eligibility check, you’re all set!<br />
                  <br />
                  You will be redirected to Affirm's website.​
                  <br />
                  <br />
                  Subject to eligibility check and approval. Estimated payment amount excludes taxes and shipping fees. Payment options are provided by Cross River Bank, Member FDIC.​
                </div>
              </div>
            </div>
          </ReactModal>
          </div>
        )
    }
}

export default LearnMore;