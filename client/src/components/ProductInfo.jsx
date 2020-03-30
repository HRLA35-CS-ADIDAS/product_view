import React from 'react';
import Price from './Price.jsx';
import Colors from './Colors.jsx';
import LearnMore from './LearnMore.jsx';
import FreeShipping from './FreeShipping.jsx';
import PayPal from './PayPal.jsx';
import SizeGuide from './SizeGuide.jsx';
import BagPopup from './BagPopup.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPrice: this.props.shoe.old_price,
      showSize: false,
      showQuan: false,
      selectedSize: null,
      quantity: 1,
      totalQuantity: 1,
      heart: false
    }
    this.handleSize = this.handleSize.bind(this);
    this.handleQuan = this.handleQuan.bind(this);
    this.handleBag = this.handleBag.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.selectQuan = this.selectQuan.bind(this);
    this.openSize = this.openSize.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
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

  openSize() {
    this.setState({
      showSize: true
    })
  }

  handleQuan(e) {
    e.preventDefault()
    this.setState({
      showQuan: !this.state.showQuan,
      showSize: false
    })
  }

  handleBag(e) {
    e.preventDefault()
    if (this.state.selectedSize === null) {
      this.setState({
        showSize: true,
        // totalQuantity: this.state.totalQuantity + this.state.quantity
      })
    } else {
      this.setState({
        totalQuantity: this.state.totalQuantity + this.state.quantity
      })
    }
  }
  //   } else {
  //     this.setState({
  //       showBag: !this.state.showBag
  //     })
  //   }
  // }

  selectSize(size) {
    this.setState({
      selectedSize: size
    })
  }

  selectQuan(num) {
    this.setState({
      quantity: num,
      showQuan: false,
      totalQuantity: this.state.totalQuantity + num
    })
  }

  toggleHeart(){
    this.setState({
      heart: !this.state.heart
    })
  }

  // openModal(e) {
  //   e.preventDefault()
  //   this.setState({ showModal: true });
  // }

  // closeModal(e) {
  //   e.preventDefault()
  //   this.setState({ showModal: false });
  // }

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
                  <LearnMore />
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
              <SizeGuide />


              <div className="size-container">
                <div className="size-container2">
                  <div className="size-container3">
                    <div className="size-container4">
                      <button onClick={this.handleSize} className="select-size">
                        <span className="select">
                          {(this.state.selectedSize === null) ? (<span className="select-inner">SELECT SIZE</span>) : (<span className="select-inner">{this.state.selectedSize}</span>)}

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
                                    <div onClick={() => this.selectSize(size)} className="button-item">
                                      <b>{size}</b>
                                    </div>
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

                        <ul className="quan-list">

                          {(this.state.quantity === 1) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(1) }}>1</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(1) }}>1</div>
                              </li>)}

                          {(this.state.quantity === 2) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(2) }}>2</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(2) }}>2</div>
                              </li>)}


                          {(this.state.quantity === 3) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(3) }}>3</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(3) }}>3</div>
                              </li>)}

                          {(this.state.quantity === 4) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(4) }}>4</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(4) }}>4</div>
                              </li>)}

                          {(this.state.quantity === 5) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(5) }}>5</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(5) }}>5</div>
                              </li>)}

                          {(this.state.quantity === 6) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(6) }}>6</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(6) }}>6</div>
                              </li>)}
                          {(this.state.quantity === 7) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(7) }}>7</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(7) }}>7</div>
                              </li>)}
                          {(this.state.quantity === 8) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(8) }}>8</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(8) }}>8</div>
                              </li>)}
                          {(this.state.quantity === 9) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(9) }}>9</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(9) }}>9</div>
                              </li>)}
                          {(this.state.quantity === 10) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { this.selectQuan(10) }}>10</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { this.selectQuan(10) }}>10</div>
                              </li>)}
                        </ul>


                      </div>) : (null)}

                    </div>

                  </div>

                </div>


              </div>
              <div className="bag-container">

                <BagPopup openSize={this.openSize} selectedSize={this.state.selectedSize} totalQuantity={this.state.totalQuantity} shoe={this.props.shoe} images={this.props.images} handleBag={this.handleBag} size={this.state.selectedSize} quantity={this.state.quantity} />
                <div onClick={this.toggleHeart} className="heart-div">
                  <div className="toggle-heart">
                    {(this.state.heart) ? (<svg className="gl-icon-active" data-auto-id="wishlist-icon" data-di-rand="1585474990403" data-di-res-id="b103962b-ab6a442f">
                    <svg id="wishlist-active" viewBox="0 0 20 24"><path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
                    </svg>) : (<svg className="gl-icon" data-auto-id="wishlist-icon" data-di-res-id="6361accf-4a701908" data-di-rand="1585359780189">
                      <svg id="wishlist-inactive" viewBox="0 0 20 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
                    </svg>)}
                  </div>
                </div>

              </div>
              <div className="bottom-links">
                <FreeShipping />
                <PayPal />



              </div>

            </form>






          </div>

        </div>

      </div >
    )
  }
}

export default ProductInfo;