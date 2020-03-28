import React from 'react';
import axios from 'axios';
import Price from './Price.jsx';
import Colors from './Colors.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPrice: this.props.shoe.old_price,
      showSize: false,
      showQuan: false,
      selectedSize: null,
      quantity: 1
    }
    this.handleSize = this.handleSize.bind(this);
    this.handleQuan = this.handleQuan.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.selectQuan = this.selectQuan.bind(this);
  }

  handleSize(e) {
    e.preventDefault()
    if (this.state.showSize) {
      this.setState({
        showSize: !this.state.showSize,
        showQuan: false
      })
    } else {
      this.setState({
        showSize: !this.state.showSize,
        showQuan: false
      })
    }
  }

  handleQuan(e) {
    e.preventDefault()
    this.setState({
      showQuan: !this.state.showQuan,
      showSize: false
    })
  }

  selectSize(e, size) {
    e.stopImmediatePropagation()
    // console.log(size)

    }

  selectQuan(num) {
    console.log(num)
  }

  render() {



    var affirmPrice = this.props.shoe.current_price / 3

    return (
      <div className="product-description">
        <div className="product-description-box">
          <div className="product-information">

            <div className="name-info">

              <div className="top-section">

                <div className="review-section">
                  <div id="star-box">
                    <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path className="gl-star-rating__outline" fill="black" stroke="currentColor" strokeMiterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                    </svg>
                    <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path className="gl-star-rating__outline" fill="black" stroke="currentColor" strokeMiterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                    </svg>
                    <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path className="gl-star-rating__outline" fill="black" stroke="currentColor" strokeMiterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                    </svg>
                    <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path className="gl-star-rating__outline" fill="black" stroke="currentColor" strokeMiterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                    </svg>
                    <svg className="stars" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-res-id="110c95ee-8fb3a8b3" data-di-rand="1581107329323">
                      <path className="gl-star-rating__outline" fill="none" stroke="currentColor" strokeMiterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                    </svg>
                  </div>
                  <span className="read-reviews">Read all {this.props.shoe.reviews} reviews</span>
                </div>
                <div className="type-div">
                  <div className="shoe-type">{this.props.shoe.category}</div>
                </div>

                <h1 className="shoe-name">{this.props.shoe.name}</h1>

                <Price oldPrice={this.props.shoe.old_price} newPrice={this.props.shoe.current_price} />

                <div className="installment-message">
                  <div className="installment-message-row">
                    <span className="affirm">or 3 interest-free payments of </span>
                    <span className="installment-price">${affirmPrice.toFixed(2)}</span>
                    <span className="affirm"> with Affirm.</span>

                  </div>
                  <div className="learn-box">
                    <button className="learn-more">Learn More</button>
                  </div>
                </div>

                <div className="promotion">
                  <h5 className="sale">30% off sitewide sale</h5>
                  <div className="code-box">
                    <span>Use code: MARCH30 to get 30% off on full price and sale products. Some exclusions apply.</span>
                  </div>
                </div>
              </div>
            </div>




            <div className="color-chooser">
              <Colors shoe={this.props.shoe} images={this.props.images} changeImage={this.props.changeImage} />
            </div>

            <form className="bag-form">
              <div className="size-guide-container">
                <div className="size-guide">
                  <svg className="gl-icon-gl-icon--size-communication" data-di-res-id="3d102a33-2fb4d1f3" data-di-rand="1585301057992">
                    <svg className="size-guider" viewBox="0 0 19 19"><g fill="none" stroke="currentColor" stroke-miterlimit="10"><path d="M.5 6.5h18v6H.5z"></path><path stroke-linecap="square" d="M3.5 12.5v-3m3 3v-2m3 2v-3m6 3v-3m-3 3v-2"></path></g></svg>

                  </svg>
                  Size Guide</div>
              </div>


              <div className="size-container">
                <div className="size-container2">
                  <div className="size-container3">
                    <div className="size-container4">
                      <button onClick={this.handleSize} className="select-size">
                        <span className="select">
                          <span className="select-inner">SELECT SIZE</span>
                        </span>

                        {this.state.showSize ? (<svg className="open-dropdown" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                          <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                        </svg>) : (<svg className="gl-icon-gl-custom-dropdown__select-icon" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                          <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                        </svg>)}

                      </button>

                      {this.state.showSize ? (
                        <div className="dropdown-options">
                          <div className="square-list">
                            <ul className="size-menu">

                              {this.props.shoe.size.map((size) => {
                                return (
                                  <li className="size-item">
                                    <button onClick={() => {this.selectSize(size)}} className="button-item">
                                      {size}
                                    </button>
                                  </li>
                                )
                              })}

                            </ul>

                          </div>

                        </div>) : (null)}
                    </div>
                  </div>
                </div>

                <div className="quantity-selector">
                  <div className="inner-quantity">
                    <div className="quantity-dropdown">
                      <button onClick={this.handleQuan} className="quantity-button">
                        <span className="dropdown-number">
                          <span className="dropdown-inner-number">
                            {this.state.quantity}
                          </span>
                        </span>
                        {this.state.showQuan ? (<svg className="open-dropdown" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                          <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                        </svg>) : (<svg className="gl-icon-gl-custom-dropdown__select-icon" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                          <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                        </svg>)}
                      </button>

                      {this.state.showQuan ? (<div className="quantity-dropdown-menu">
                        <ul>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button" onClick={() => {this.selectQuan(1)}}>1</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">2</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">3</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">4</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">5</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">6</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">7</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">8</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">9</button>
                          </li>
                          <li className="quantity-dropdown-item">
                            <button className="quantity-dropdown-button">10</button>
                          </li>
                        </ul>


                      </div>) : (null)}

                    </div>

                  </div>

                </div>


              </div>
              <div className="bag-container">
                <button className="bag-button">
                  <span className="before-button"></span>
                  <span className="bag-text">ADD TO BAG</span>
                  <svg className="gl-icon-gl-cta__icon" data-di-res-id="6361accf-c33aeebb" data-di-rand="1585359780189">
                    <svg id="arrow-right-long" viewBox="0 0 24 24"><path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                  </svg>
                  <span className="after-button"></span>
                </button>
                <div className="heart-div">
                  <div className="toggle-heart">
                    <svg className="gl-icon" data-auto-id="wishlist-icon" data-di-res-id="6361accf-4a701908" data-di-rand="1585359780189">
                      <svg id="wishlist-inactive" viewBox="0 0 20 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
                    </svg>
                  </div>
                </div>

              </div>
              <div className="bottom-links">

                <div className="shipping">
                  <div className="promo-callout">
                    <div className="icon-wrapper">
                      <svg className="car1" data-di-rand="1585359780190">
                        <svg id="usp-delivery" viewBox="0 0 19 19"><g fill="none" stroke="currentColor" stroke-miterlimit="10"><path d="M13.42 13.5H9.5"></path><path stroke-linecap="square" d="M4.5 5.5h10l4 3v5h-2M6.5 13.5h-2m0-6h-4"></path><circle cx="8" cy="13" r="1.5"></circle><circle cx="15" cy="13" r="1.5"></circle><path stroke-linecap="square" d="M1.5 9.5h3m-2 2h2"></path></g></svg>
                      </svg>
                    </div>
                    <div className="callout-content">
                      <div className="promo-link">
                        <a className="free-shipping">
                          FREE SHIPPING OVER $49 + FREE RETURNS & EXCHANGES

                      </a>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="paypal">
                  <div className="promo-callout2">


                    <div className="icon-wrapper2">
                      <svg className="usp-checkmark" data-di-rand="1585359780190">
                        <svg id="usp" viewBox="0 0 17 19"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" d="M1.5 10.5l4 4 10-10"></path></svg>
                      </svg></div>
                    <div className="callout-content2">
                      <div className="promo-link2">
                        <a className="paypal-link">Buy now, pay over time with PayPal CREDIT</a>
                      </div>
                    </div>
                  </div>
                </div>



              </div>

            </form>






          </div>

        </div>

      </div >
    )
  }
}

export default ProductInfo;