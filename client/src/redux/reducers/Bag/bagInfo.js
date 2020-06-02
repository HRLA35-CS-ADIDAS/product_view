const initialState = {
    totalSize: null,
    totalQuan: 0
}

const bagInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BAG':
            if (state.totalSize === null && action.payload.size !== 'all' && action.payload.quantity !== 'clear') {
                return {
                    totalSize: action.payload.size,
                    totalQuan: action.payload.quantity
                }
            } if (action.payload.size === 'all' && action.payload.quantity === 'clear'){
                return {
                    totalSize: 'not null',
                    totalQuan: state.totalQuan + 1   
                }
            }
            else {
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

