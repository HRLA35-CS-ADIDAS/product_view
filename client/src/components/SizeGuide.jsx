import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '10%',
        left: '15%',
        right: '15%',
        bottom: '10%',
        padding: '30px',
    }
};

class SizeGuide extends React.Component {
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
                <div className="size-guide-container">
                    <div onClick={this.openModal} className="size-guide">
                        <svg className="gl-icon-gl-icon--size-communication" data-di-res-id="3d102a33-2fb4d1f3" data-di-rand="1585301057992">
                            <svg className="size-guider" viewBox="0 0 19 19"><g fill="none" stroke="currentColor" stroke-miterlimit="10"><path d="M.5 6.5h18v6H.5z"></path><path stroke-linecap="square" d="M3.5 12.5v-3m3 3v-2m3 2v-3m6 3v-3m-3 3v-2"></path></g></svg>
                        </svg>
              Size Guide</div>
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
                    <div className="learn-more-padding">
                        <img src="https://adidas-testbucket.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-28+at+3.10.02+PM.jpg" className="static-image" />
                        <img src="https://adidas-testbucket.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-28+at+3.10.34+PM.jpg" className="static-image" />
                        <img src="https://adidas-testbucket.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-28+at+3.10.46+PM.jpg" className="static-image" />
                    </div>
                </ReactModal>
            </div >
        )
    }
}

export default SizeGuide;