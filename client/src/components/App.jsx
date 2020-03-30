import React from 'react';
import axios from 'axios';
import ProductDisplay from './ProductDisplay.jsx';
import ProductInfo from './ProductInfo.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentShoe: null,
            price: 0,
            item: 0
        }
        this.changeShoe = this.changeShoe.bind(this);
        this.addPrice = this.addPrice.bind(this);
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
        for (var key in this.state.products) {
            if (this.state.products[key].carousel_images[0] === newImg) {
                this.setState({
                    currentShoe: this.state.products[key]
                })
            }
        }
    }

    addPrice(price) {
        this.setState({
            price: price,
            item: this.state.item + 1
        })
    }

    render() {
        if (this.state.products.length === 0) {
            return (<p>Loading...</p>)
        } else {
            return (
                <div>
                    {console.log(this.state.price)}
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
                                        <li className="breadcrumb-item">{this.state.currentShoe.gender}</li>
                                        <span> / </span>
                                        <li className="breadcrumb-item">{this.state.currentShoe.type}</li>
                                    </ol>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="product-container">
                        <div className="background" />
                        <div className="inner-product-container">
                            <ProductDisplay addPrice={this.addPrice} shoe={this.state.currentShoe} images={this.state.currentShoe.carousel_images} matching_items={this.state.currentShoe.matching_items} />
                            <ProductInfo price={this.state.price} item={this.state.item} shoe={this.state.currentShoe} images={this.state.currentShoe.carousel_images} changeImage={this.changeShoe} />
                        </div>
                    </div>
                </div>
            )
        }

    }
}



export default App;