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
            <div className="modal-root">
                
                <Magnify image={this.props.image} onClick={this.handleZoom}/>
                <div className="full-modal">
                    {/* button */}
                    <div className="dialog" aria-model="true">
                        <div className="main-modal"></div>
                    </div>
                    <button className="close-modal" onClick={this.props.closeButton}>
                    <svg className="close-icon" data-di-res-id="afd85625-1c771244" data-di-rand="1585384319810">
                    <svg id="close" viewBox="0 0 18 24"><path d="M17 4l-8 8 8 8M1 4l8 8-8 8" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                    </svg>
                    </button>
                    <div className="zoom-modal-content">
                        <div className="main-content">
                            <div className="carousel-wrapper">
                                <div className="carousel-overflow">
                                    <div className="carousel-content">
                                        <div className="carousel-row">
                                            <div className="carousel-slider">
                                                <img className="carousel-image" src={this.props.image}/>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    
    export default ImageCarousel;
    // <div className="popup-image">
    //     <Magnify image={this.props.image} onClick={this.handleZoom}/>
    //     <img className="large-product" src={this.props.image} />

    //     <button onClick={this.props.handlePrev} className="carouselPrev">
    //         <div className="carouselArrowDiv_prev">
    //             <svg viewBox="0 0 50 50"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
    //             </svg>
    //         </div>
    //     </button>

    //     <button onClick={this.props.handleNext} className="carouselNext">
    //         <div className="carouselArrowDiv_next">
    //             <svg viewBox="0 0 50 50"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path>
    //             </svg>
    //         </div>
    //     </button>
    // </div>