const magnify = (state = false, action) => {
    switch (action.type) {
        case 'IN':
            return true
        case 'OUT':
            return false
        default:
            return state
    }
}

export default magnify;