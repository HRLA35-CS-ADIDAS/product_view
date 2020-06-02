const initialState = {
    name: null,
    price: null,
    size: [],
    image: null
}

const matchingItem = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_ITEM':
            return {
                name: action.payload.name,
                price: action.payload.price,
                size: action.payload.size,
                image: action.payload.image
            }
        default:
            return state
    }
}

export default matchingItem;