import React from 'react';
import axios from 'axios';
import ProductDisplay from './ProductDisplay.jsx';
import ProductInfo from './ProductInfo.jsx'

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
                        currentShoe: results.data[(Math.floor(results.data.length * Math.random()))]
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
        for (var key in this.state.products) {
            if (this.state.products[key].carousel_images[0] === newImg) {
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
                    <div className="breadcrumb1">
                        <div className="breadcrumb2">
                            <div className="breadcrumb3">
                                <div className="breadcrumb4">
                                    <ol className="breadcrumb-list">
                                        <li className="breadcrumb-item1">
                                            <button type="button" className="back-button">
                                                <span className="back-span">
                                                <svg className="arrow-svg" data-di-res-id="9537fab3-3d816ff1" data-di-rand="1585287190385">
                                                <svg className="arrow-back" viewBox="0 0 16 24"><g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"><path d="M15 18v-6H2"></path><path d="M6.5 7l-5 5 5 5"></path></g></svg>
                                                </svg>
                                                
                                                BACK
                                            </span>
                                            </button>
                                        </li>
                                        <li className="breadcrumb-item">Home</li>
                                        <span> / </span>
                                        <li className="breadcrumb-item">Men</li>
                                        <span> / </span>
                                        <li className="breadcrumb-item">Shoes</li>
                                    </ol>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* onClick={() => {this.changeShoe("https://adidas-testbucket.s3-us-west-1.amazonaws.com/NMD_R1_Shoes_Black_FV7969_01_standard.jpg")}} */}
                    <div className="product-container">
                        <div className="background" />
                        <div className="inner-product-container">
                            {/* {console.log('hhh', this.state.currentShoe.carousel_images)} */}
                            <ProductDisplay shoe={this.state.currentShoe} images={this.state.currentShoe.carousel_images} />
                            <ProductInfo shoe={this.state.currentShoe} images={this.state.currentShoe.carousel_images} changeImage={this.changeShoe} />

                        </div>

                    </div>
                </div>
            )
        }

    }
}



export default App;