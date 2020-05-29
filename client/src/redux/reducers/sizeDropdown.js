// const initialState = {
//     display: false,
//     selectedSize: null,
//     message: false
// };

const sizeDropdown = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SIZE':
            return !state
        case 'SHOW_MESSAGE':
            return {
                display: true,
                message: true
            }
        default:
            return state
    }
}

// const sizeDropdown = (state = false, action) => {
//     switch (action.type) {
//         case 'TOGGLE_SIZE':
//             return !state
//         case 'SHOW_MESSAGE':
//             return {
//                 display: true,
//                 message: true
//             }
//         default:
//             return state
//     }
// }

export default sizeDropdown;