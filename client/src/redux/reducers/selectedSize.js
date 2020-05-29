const selectedSize = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_SIZE':
            return action.payload
        default:
            return state
    }
}

export default selectedSize;