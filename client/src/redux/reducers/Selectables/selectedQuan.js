const selectedQuan = (state = 1, action) => {
    switch (action.type) {
        case 'SELECT_QUAN':
            return action.payload
        default:
            return state
    }
}

export default selectedQuan;