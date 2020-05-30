const initalState = {
    totalSize: null,
    totalQuan: null
}

const bagInfo = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_BAG':
            if (state.totalSize === null) {
                return {
                    totalSize: action.payload.size,
                    totalQuan: action.payload.quantity
                }
            } else {
                return {
                    totalSize: action.payload.size,
                    totalQuan: state.totalQuan + action.payload.quantity
                }
            }
        default:
            return state
    }
}

export default bagInfo;

