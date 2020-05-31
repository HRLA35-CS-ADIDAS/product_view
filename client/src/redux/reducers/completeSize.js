const completeSize = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_COMPLETE_SIZE':
            return !state
        default:
            return state
    }
}

export default completeSize;