import React from 'react';
import Magnify from './Magnify.jsx'

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: false
        }
        this.handleZoom = this.handleZoom.bind(this);
    }

    handleZoom() {
        this.setState({
            zoom: !this.state.zoom
        })
    }

    render() {

        const totalImages = this.props.images.length

        return (
            <div>
                <div className="carousel">
                    <ul className="carousel-viewport">
                        <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
                            <div onClick={this.handleZoom}>
                                {this.state.zoom ? (<Magnify image={this.props.images[0]} onClick={this.handleZoom} />
                                ) : (
                                        <div className="fluid1">
                                            <div className="fluid__image-container">
                                                <img className="carousel-image" src={this.props.images[0]} onClick={this.handleZoom} />
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <button className="carousel__snapper_next">
                                <a href="#carousel__slide2" className="carousel__next">
                                    <div id="mar_carousel_next">
                                        <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                        </svg>
                                    </div>
                                </a>
                            </button>
                        </li>

                        <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
                            <div onClick={this.handleZoom}>
                                {this.state.zoom ? (<Magnify image={this.props.images[1]} onClick={this.handleZoom} />
                                ) : (
                                        <div className="fluid1">
                                            <div className="fluid__image-container">
                                                <img className="carousel-image" src={this.props.images[1]} onClick={this.zoomClickHandle} />
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <div className="carousel__snapper_prev">
                                <a href="#carousel__slide1" className="carousel__prev">
                                    <div id="mar_carousel_prev">
                                        <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel__snapper_next">
                                <a href="#carousel__slide3" className="carousel__next"><div id="mar_carousel_next">
                                    <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                    </svg>
                                </div></a>
                            </div>
                        </li>

                        <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
                            <div onClick={this.handleZoom}>
                                {this.state.zoom ? (<Magnify image={this.props.images[2]} onClick={this.handleZoom} />
                                ) : (
                                        <div className="fluid1">
                                            <div className="fluid__image-container">
                                                <img className="carousel-image" src={this.props.images[2]} onClick={this.zoomClickHandle} />
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <div className="carousel__snapper_prev">
                                <a href="#carousel__slide2" className="carousel__prev">
                                    <div id="mar_carousel_prev">
                                        <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel__snapper_next">
                                <a href="#carousel__slide4" className="carousel__next"><div id="mar_carousel_next">
                                    <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                    </svg>
                                </div></a>
                            </div>
                        </li>
                        <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
                            <div onClick={this.handleZoom}>
                                {this.state.zoom ? (<Magnify image={this.props.images[3]} onClick={this.handleZoom} />
                                ) : (
                                        <div className="fluid1">
                                            <div className="fluid__image-container">
                                                <img className="carousel-image" src={this.props.images[3]} onClick={this.zoomClickHandle} />
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <div className="carousel__snapper_prev">
                                <a href="#carousel__slide3" className="carousel__prev">
                                    <div id="mar_carousel_prev">
                                        <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
                            <div onClick={this.handleZoom}>
                                {this.state.zoom ? (<Magnify image={this.props.images[0]} onClick={this.handleZoom} />
                                ) : (
                                        <div className="fluid1">
                                            <div className="fluid__image-container">
                                                <img className="carousel-image" src={this.props.images[3]} onClick={this.zoomClickHandle} />
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <div className="carousel__snapper_prev">
                                <a href="#carousel__slide2" className="carousel__prev">
                                    <div id="mar_carousel_prev">
                                        <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel__snapper_next">
                                <a href="#carousel__slide4" className="carousel__next"><div id="mar_carousel_next">
                                    <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                                    </svg>
                                </div></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ImageCarousel;