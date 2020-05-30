import React from 'react';
import ReactMagnify from 'react-image-magnify';
import { magnifyOut } from '../../redux/actions/index.js';
import { connect } from 'react-redux';

class Magnify extends React.Component {

    render() {

        const { zoomOut } = this.props;

        return (
            <div className="fluid" onClick={() => zoomOut()}>
                <ReactMagnify {...{
                    smallImage: {
                        src: this.props.image,
                        isFluidWidth: true,
                    },
                    largeImage: {
                        src: this.props.image,
                        width: 1600,
                        height: 1600,
                    },
                    imageStyle: { height: '600px' },
                    enlargedImagePosition: 'over',
                    lensStyle: {backgroundColor: 'rgba(0,0,0,.6)'},
                    cursorStyle: {cursor: 'cursor: url(https://www.adidas.com/glass/react/1a20ddb/assets/img/icon-adidas-cursor-zoomed.png), 100%;'}
                }}/>
        </div>
        )
    }
}
const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => {
    return {
        zoomOut: () => dispatch(magnifyOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Magnify);
