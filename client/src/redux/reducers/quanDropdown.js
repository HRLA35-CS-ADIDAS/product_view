const quanDropdown = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_QUAN':
            return !state
        default:
            return state
    }
}

export default quanDropdown;