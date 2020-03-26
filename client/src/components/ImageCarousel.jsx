import React from 'react';
import axios from 'axios';
import Magnify from './Magnify.jsx'

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: false
        }
        this.handleZoom = this.handleZoom.bind(this);
    }

    handleZoom(){
        this.setState({
            zoom: !this.state.zoom
        })
    }

    render() {
        return (
            // console.log(this.props.image),
            <div className="popup-image">
                <Magnify image={this.props.image} onClick={this.handleZoom}/>
                <img className="large-product" src={this.props.image} />

                <button onClick={this.props.handlePrev} className="carouselPrev">
                    <div className="carouselArrowDiv_prev">
                        <svg viewBox="0 0 50 50"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
                        </svg>
                    </div>
                </button>

                <button onClick={this.props.handleNext} className="carouselNext">
                    <div className="carouselArrowDiv_next">
                        <svg viewBox="0 0 50 50"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
                        </svg>
                    </div>
                </button>
            </div>
        )
    }
}

export default ImageCarousel;