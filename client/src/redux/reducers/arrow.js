const arrowCounter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            if (state+1 >= action.payload.length){
                return 0
            }
            return state + 1
        case 'DECREASE':
            if (state-1 < 0){
            return action.payload.length - 1
            }
            return state - 1
        default:
            return state
    }
}

export default arrowCounter;