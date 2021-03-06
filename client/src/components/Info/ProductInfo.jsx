import React from 'react';
import Price from './Price.jsx';
import Colors from './Colors.jsx';
import LearnMore from './LearnMore.jsx';
import FreeShipping from './FreeShipping.jsx';
import PayPal from './PayPal.jsx';
import SizeGuide from './SizeGuide.jsx';
import BagPopup from '../Bag-Related/BagPopup.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fill, toggleSize, selectSize, toggleQuan, selectQuan } from '../../redux/actions/index';
import { connect } from 'react-redux';

class ProductInfo extends React.Component {

  render() {
    const { fill, toggle, sizeDropdown, toggleSize, selectSize, selectedSize, showMessage, selectedQuan, selectQuan, toggleQuan, quanDropdown } = this.props;
    const { old_price, current_price, name, category, reviews, size } = this.props.data;

    var affirmPrice = current_price / 3
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
                  <span className="read-reviews">Read all {reviews} reviews</span>
                </div>
                <div className="type-div">
                  <div className="shoe-type">{category}</div>
                </div>

                <h1 className="shoe-name">{name}</h1>

                <Price oldPrice={old_price} newPrice={current_price} />

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
              <Colors />
            </div>

            <form className="bag-form">
              <SizeGuide />

              <div className="size-container">
                <div className="size-container2">
                  <div className="size-container3">
                    <div className="size-container4">
                      <button onClick={() => toggleSize()} className="select-size">
                        <span className="select">
                          {(selectedSize === null) ? (<span className="select-inner">SELECT SIZE</span>) : (<span className="select-inner">{selectedSize}</span>)}

                        </span>

                        {sizeDropdown ? (<svg className="open-dropdown" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                          <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                        </svg>) : (<svg className="gl-icon-gl-custom-dropdown__select-icon" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                          <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                        </svg>)}

                      </button>

                      {sizeDropdown ? (
                        <div className="dropdown-options">
                          <div className="square-list">
                            <ul className="size-menu">

                              {size.map((shoeSize) => {
                                return (
                                  <li className="size-item">
                                    <div onClick={() => { selectSize(shoeSize); toggleSize(); }} className="button-item">
                                      <b>{shoeSize}</b>
                                    </div>
                                  </li>
                                )
                              })}

                            </ul>
                            {showMessage ? (<div className="please">Please select your size</div>) : (null)}

                          </div>

                        </div>) : (null)}
                    </div>
                  </div>
                </div>

                <div className="quantity-selector">
                  <div className="inner-quantity">
                    <div className="quantity-dropdown">
                      <button onClick={() => toggleQuan()} className="quantity-button">
                        <span className="dropdown-number">
                          <span className="dropdown-inner-number">
                            {selectedQuan}
                          </span>
                        </span>
                        {quanDropdown ? (<svg className="open-dropdown" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                          <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                        </svg>) : (<svg className="gl-icon-gl-custom-dropdown__select-icon" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                          <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                        </svg>)}
                      </button>

                      {quanDropdown ? (<div className="quantity-dropdown-menu">

                        <ul className="quan-list">

                          {(selectedQuan === 1) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(1); toggleQuan(); }}>1</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(1); toggleQuan(); }}>1</div>
                              </li>)}

                          {(selectedQuan === 2) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(2); toggleQuan(); }}>2</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(2); toggleQuan(); }}>2</div>
                              </li>)}


                          {(selectedQuan === 3) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(3); toggleQuan(); }}>3</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(3); toggleQuan(); }}>3</div>
                              </li>)}

                          {(selectedQuan === 4) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(4); toggleQuan(); }}>4</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(4); toggleQuan(); }}>4</div>
                              </li>)}

                          {(selectedQuan === 5) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(5); toggleQuan(); }}>5</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(5); toggleQuan(); }}>5</div>
                              </li>)}

                          {(selectedQuan === 6) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(6); toggleQuan(); }}>6</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(6); toggleQuan(); }}>6</div>
                              </li>)}
                          {(selectedQuan === 7) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(7); toggleQuan(); }}>7</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(7); toggleQuan(); }}>7</div>
                              </li>)}
                          {(selectedQuan === 8) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(8); toggleQuan(); }}>8</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(8); toggleQuan(); }}>8</div>
                              </li>)}
                          {(selectedQuan === 9) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(9); toggleQuan(); }}>9</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(9); toggleQuan(); }}>9</div>
                              </li>)}
                          {(selectedQuan === 10) ? (
                            <li className="quantity-dropdown-item">
                              <div className="quantity-dropdown-button-clicked" onClick={() => { selectQuan(10); toggleQuan(); }}>10</div>
                            </li>) : (
                              <li className="quantity-dropdown-item">
                                <div className="quantity-dropdown-button" onClick={() => { selectQuan(10); toggleQuan(); }}>10</div>
                              </li>)}
                        </ul>
                      </div>) : (null)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bag-container">
                <BagPopup />
                <div onClick={() => fill()} className="heart-div">
                  <div className="toggle-heart">
                    {toggle ? (<svg className="gl-icon-active" data-auto-id="wishlist-icon" data-di-rand="1585474990403" data-di-res-id="b103962b-ab6a442f">
                      <svg id="wishlist-active" viewBox="0 0 20 24"><path fill="currentColor" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
                    </svg>) : (<svg className="gl-icon" data-auto-id="wishlist-icon" data-di-res-id="6361accf-4a701908" data-di-rand="1585359780189">
                      <svg id="wishlist-inactive" viewBox="0 0 20 24"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></svg>
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

const mapStateToProps = state => ({
  data: state.product.info,
  toggle: state.heartToggle,
  sizeDropdown: state.sizeDropdown,
  showMessage: state.sizeDropdown.message,
  selectedSize: state.selectedSize.original,
  quanDropdown: state.quanDropdown,
  selectedQuan: state.selectedQuan
});

const mapDispatchToProps = dispatch => {
  return {
    fill: () => dispatch(fill()),
    toggleSize: () => dispatch(toggleSize()),
    selectSize: (size) => dispatch(selectSize(size)),
    toggleQuan: () => dispatch(toggleQuan()),
    selectQuan: (quantity) => dispatch(selectQuan(quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);