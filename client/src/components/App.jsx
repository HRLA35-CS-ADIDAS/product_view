import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions/index.js'
import ProductDisplay from './Display/ProductDisplay.jsx';
import ProductInfo from './Info/ProductInfo.jsx'

class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchData());
    }
    
    render() {
        const { error, loading, data } = this.props;
        const { carousel_images, matching_items } = data

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <Fragment>
                <div className="breadcrumb1">
                    <div className="breadcrumb2">
                        <div className="breadcrumb3">
                            <div className="breadcrumb4">
                                <ol className="breadcrumb-list">
                                    <li className="breadcrumb-item1">
                                        <button type="button" className="back-button">
                                            <span className="back-span">
                                                <svg className="arrow-svg" data-di-res-id="9537fab3-3d816ff1" data-di-rand="1585287190385">
                                                    <svg className="arrow-back" viewBox="0 0 16 24"><g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"><path d="M15 18v-6H2"></path><path d="M6.5 7l-5 5 5 5"></path></g></svg>
                                                </svg>

                                                BACK
                                            </span>
                                        </button>
                                    </li>
                                    <li className="breadcrumb-item">Home</li>
                                    <span> / </span>
                                    <li className="breadcrumb-item">{data.gender}</li>
                                    <span> / </span>
                                    <li className="breadcrumb-item">{data.type}</li>
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="product-container">
                    <div className="background" />
                    <div className="inner-product-container">
                        <ProductDisplay shoe={data} images={carousel_images} matching_items={matching_items} />
                        <ProductInfo/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    data: state.product.info,
    loading: state.product.loading,
    error: state.product.error
});

export default connect(mapStateToProps)(App);