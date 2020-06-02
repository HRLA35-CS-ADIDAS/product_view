const sizeDropdown = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SIZE':
            return !state
        case 'SHOW_MESSAGE':
            if(action.payload === null){
                return {
                    display: true,
                    message: true
                }
            }
        default:
            return state
    }
}

export default sizeDropdown;