const completeSize = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_COMPLETE_SIZE':
            return !state
        case 'NO_SIZE_SELECTED':
            if (action.payload === null){
                return true
            } else {
                return false
            }
        default:
            return state
    }
}

export default completeSize;