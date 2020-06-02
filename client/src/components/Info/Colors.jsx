import React from 'react';
import { connect } from 'react-redux';
import { changeProduct } from '../../redux/actions/index.js';

class Colors extends React.Component {

    render() {
        const { data, allShoes, change } = this.props;
        const { carousel_images, available_colors, related_shoes } = data;

        if (available_colors === undefined) {
            return (
                <p>Loading...</p>
            )
        }

        return (
            <div>
                <div className="colors">
                    <h5 className="available-colors">Available Colors</h5>
                    <span className="color-types">{available_colors.join(' / ')}</span>
                </div>

                <div className="color-wrapper">

                    {related_shoes.map((shoeOption) => {

                        if (shoeOption === carousel_images[0]) {
                            return (<div className="selection-box" onClick={() => { change(allShoes, shoeOption)}}>

                                <div className="tick-icon">
                                    <svg class="check-icon" data-di-res-id="b2f2def1-1a5917fc" data-di-rand="1585212244738">
                                        <svg id="checkmark" viewBox="0 0 19 19"><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" d="M2.5 10.5l4 4 10-10"></path></svg>
                                    </svg>
                                </div>


                                <div style={{
                                    backgroundImage: "url(" + `${shoeOption}` + ")"
                                }}
                                    className="circle-image">
                                </div>
                            </div>)
                        } else {
                            return (
                                <div className="selection-box" onClick={() => { change(allShoes, shoeOption)}}>

                                    <div style={{
                                        backgroundImage: "url(" + `${shoeOption}` + ")"
                                    }}
                                        className="circle-image">
                                    </div>
                                </div>
                            )
                        }

                    }

                    )}
                </div>
            </div >

        )
    }
}

const mapStateToProps = state => ({
    data: state.product.info,
    allShoes: state.product.allShoes
});

const mapDispatchToProps = dispatch => {
    return {
        change: (allProducts, target) => dispatch(changeProduct(allProducts, target))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);