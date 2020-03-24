import React from 'react';
import axios from 'axios';
// import ProductDisplay from './ProductDisplay.jsx';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      }

    }
    render() {
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
        <li classNameName="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">/ Men</li>
        <li className="breadcrumb-item">/ Shoes</li>
      </ol>
    </div>
  </div>

  <div className="product-container">
    <div className="inner-product-container">

      <div className="product-image">
        <img className="large-product" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/b1577321810f4b95b61ea9f30181cff7_9366/Marquee_Boost_Low_Shoes_Grey_G26214_06_standard.jpg"/>
      </div>
    
      <div className="product-description">
        <div className="product-description-box">
          <div className="product-information">
            <span className="reviews">reviews/stars</span>
            <div id="star-box">
              <svg classNameName="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path className="gl-star-rating__outline" fill="black" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
              </svg>
              <svg classNameName="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path classNameName="gl-star-rating__outline" fill="black" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
              </svg>
              <svg classNameName="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path classNameName="gl-star-rating__outline" fill="black" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
              </svg>
              <svg classNameName="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path classNameName="gl-star-rating__outline" fill="black" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
              </svg>
              <svg classNameName="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path classNameName="gl-star-rating__outline" fill="none" stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
              </svg>
            </div>
            <h2 className="shoe-type">MEN'S BASKETBALL</h2>
            <h3 className="shoe-name">MARQUEE BOOST LOW SHOES</h3>

            <div className="price-div">
              <span className="new-price">$60</span>
              <span className="old-price">$120</span>
            </div>

            <div className="installment-message">
              <span className="affirm">or 3 interest-free payments of </span>
              <span className="installment-price">$20.00</span>
              <span className="affirm"> with Affirm.</span>
              <div className="learn-box">
                <span className="learn-more">Learn More</span>
              </div>
            </div>

            <div className="promotion">
              <h5 className="sale">30% off sitewide sale</h5>
              <div className="code-box">
                <span>Use code: MARCH30 to get 30% off on full price and sale products. Some exclusions apply.</span>
              </div>
            </div>

            <div className="colors">
              <h5 className="available-colors">Available Colors</h5>
              <span className="color-types">carbon / glow green / grey</span>
            </div>

            <div className="cart-options">
              <div className="size-guide-container">
                <span className="size-guide">Size Guide</span>
              </div>
              <div className="size-container">
                <button className="select-size">
                  <span>SELECT SIZE</span>
                  <span className="dropdown"></span>
                </button>
                <button className="quantity">quantity</button>
              </div>
              <div className="bag-container">
                <button className="add">ADD TO BAG</button>
                <button className="heart"></button>
              </div>
              <div id="shipping">
                FREE SHIPPING OVER $49 + FREE RETURNS & EXCHANGES
              </div>
              <div id="paypal">
                Buy now, pay over time with PayPal CREDIT
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



export default App;