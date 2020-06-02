const pleaseSelect = (state = false, action) => {
    switch (action.type) {
        case 'PLEASE_SELECT':
            if(action.payload !== undefined){
                return true
            }
        default:
            return state
    }
}

export default pleaseSelect;