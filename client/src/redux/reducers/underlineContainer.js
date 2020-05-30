const underlineContainer = (state = null, action) => {
    switch(action.type){
        case 'UNDERLINE':
            return action.payload
        default:
            return state
    }
}

export default underlineContainer;