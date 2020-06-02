const heartToggle = (state = false, action) => {
    switch(action.type){
        case 'TOGGLE_HEART':
            return !state
        default:
            return state
    }
}

export default heartToggle;