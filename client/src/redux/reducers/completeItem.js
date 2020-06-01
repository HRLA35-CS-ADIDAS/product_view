const initialState = {
    price: 0,
    quantity: 0
}

const completeItem = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMPLETE_ITEM':
            if (action.payload.quantity === null){
                return {
                    price: 0,
                    quantity: 0
                }
            } if (typeof action.payload.quantity === 'string' && state.quantity === 0){
                return {
                    price: action.payload.price,
                    quantity: 1
                }
            } if (state.quantity > 0) {
                return {
                    price: ((state.quantity + 1) * action.payload.price),
                    quantity: state.quantity + 1
                }               
            }
        default:
            return state
    }
}

export default completeItem;