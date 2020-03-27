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
            currentShoe: null
        }
        this.changeShoe = this.changeShoe.bind(this)
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        axios.get('/products')
            .then((results) => {
                if (this.state.currentShoe === null) {
                    this.setState({
                        products: results.data,
                        currentShoe: results.data[0]
                    })
                } else {
                    this.setState({
                        products: results.data
                    })
                }
            }
            )
            .catch((err) => console.log(err))
    }

    changeShoe(newImg) {
        // for(var key in this.state.products){
        //     console.log(key)
        // }
        // console.log(this.state.products[key])
        // console.log(this.state.currentShoe)
        for(var key in this.state.products){
            if(this.state.products[key].carousel_images[0] === newImg){
                this.setState({
                    currentShoe: this.state.products[key]
                })
            }
        }
    }

    render() {
        if (this.state.products.length === 0) {
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
                    {/* onClick={() => {this.changeShoe("https://adidas-testbucket.s3-us-west-1.amazonaws.com/NMD_R1_Shoes_Black_FV7969_01_standard.jpg")}} */}
                    <div className="product-container">
                        <div className="inner-product-container">
                            {/* {console.log('hhh', this.state.currentShoe.carousel_images)} */}
                            <ProductDisplay images={this.state.currentShoe.carousel_images} />
                            <ProductInfo shoe={this.state.currentShoe} images={this.state.currentShoe.carousel_images} changeImage={this.changeShoe}/>

                        </div>

                    </div>
                </div>
            )
        }

    }
}



export default App;