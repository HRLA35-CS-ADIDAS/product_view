import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
// import ImageModal from './ImageModal.jsx';

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
    }

    handlePrev(){
        if (counter === 0){
            counter = this.props.images.length - 1;
        } else {
            counter = counter - 1;
        }
        this.setState({image: this.props.images[counter]})
    }

    handleNext(){
        if (counter === this.props.images.length - 1){
            counter = 0;
        } else {
            counter = counter + 1;
        }
        this.setState({image: this.props.images[counter]})
    }

    openThumbnail(index){
        this.setState({image: this.props.images[index]})
    }

    render() {
        return (
            <div className="shoe-element-container">
                <div className="side-image-container">
                    {this.props.images.map((sideImg) => {
                        return (
                        <div className="side-image-box">
                            {/* {var index = this.props.images.indexOf(sideImg))} */}
                            <img className="side-image" src={sideImg} onClick = {()=>{this.openThumbnail(this.props.images.indexOf(sideImg))}}/>
                        </div>)})}
                </div>
                <div className="mainImageBox">
                    <button onClick={this.handlePrev} className="mainPrev">
                        <div className="mainArrowDiv_prev">
                            <svg viewBox="0 0 50 50"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
                            </svg>
                        </div>
                    </button>
                    <div className="product-image">
                        <img className="large-product" src={this.state.image} />
                    </div>
                    <button onClick={this.handleNext} className="mainNext">
                        <div className="mainArrowDiv_next">
                            <svg viewBox="0 0 50 50"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default ProductDisplay;