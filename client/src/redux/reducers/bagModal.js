const bagModal = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_BAG':
            if (action.payload !== null) {
                return true
            }
        case 'HIDE_BAG':
            return false
        default:
            return state
    }
}

export default bagModal;