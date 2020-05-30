const completeDrop = (state = false, action) => {
    switch(action.type){
        case 'DROP_COMPLETE':
            return true
        default:
            return state
    }
}

export default completeDrop;