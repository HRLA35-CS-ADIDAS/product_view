const initialState = {
    original: null,
    complete: null
}

const selectedSize = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_SIZE':
            if (action.payload.complete === null){
                return {
                    original: action.payload.original,
                    complete: state.complete
                }
            } else {
                return {
                        original: state.original,
                        complete: action.payload.complete
                }
            }
        default:
            return state
    }
}

export default selectedSize;