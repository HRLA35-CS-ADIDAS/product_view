import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';

class ProductDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <div>
                <div className="side-image-container">
                    {this.props.images.map((sideImg) =>
                    <div className = "side-image-box"> 
                     <img className="side-image" src={sideImg}/>
                     </div>)}
                     </div>
            <div className="product-image">
                <img className="large-product" src={this.props.images[0]} />
            </div>
            </div>
        )
    }
}

export default ProductDisplay;