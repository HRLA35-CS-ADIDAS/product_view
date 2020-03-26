import React, { Component } from 'react';
import axios from 'axios';
import ReactMagnify from 'react-image-magnify';

class Magnify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div className="fluid">
            <div className="fluid_container">
                <ReactMagnify {...{
                    smallImage: {
                        src: this.props.image,
                        isFluidWidth: true
                    },
                    largeImage: {
                        src: this.props.image,
                        width: 1600,
                        height: 1600,
                    },
                    imageStyle: { height: '600px' },
                    enlargedImagePosition: 'over',
                    lensStyle: {backgroundColor: 'rgba(0,0,0,.6)'}
                }}/>
            </div>
        </div>
        )
    }
}

export default Magnify;