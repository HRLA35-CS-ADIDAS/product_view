import React from 'react';
import axios from 'axios';
import ProductDisplay from './ProductDisplay.jsx';
import ProductInfo from './ProductInfo.jsx'
import Axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentShoe: {}
        }
    }

    componentDidMount() {
        this.getProducts();
    }
    
    getProducts() {
        axios.get('/products')
        .then((results) => this.setState({
            products: results.data,
            currentShoe: results.data[0]
        })
        )
        .catch((err) => console.log(err))
    }

    render() {
        if (this.state.products.length === 0){
            return (<p>Loading...</p>)
        } else {
            return (
            <div>
                <div className="breadcrumb-container">
                    <div className="container">
                        <ol className="breadcrumb-list">
                            <li className="breadcrumb-item1">
                                <button type="button" className="back-button">
                                    BACK
          </button>
                            </li>
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item">/ Men</li>
                            <li className="breadcrumb-item">/ Shoes</li>
                        </ol>
                    </div>
                </div>

                <div className="product-container">
                    <div className="inner-product-container">
                    {/* {console.log('hhh', this.state.currentShoe.carousel_images)} */}
                        <ProductDisplay images={this.state.currentShoe.carousel_images}/>
                        <ProductInfo shoe={this.state.currentShoe}/>

                    </div>

                </div>
            </div>
        )
            }

    }
}



export default App;