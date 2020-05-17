import axios from 'axios';

export const fill = () => {
    return {
        type: 'TOGGLE'
    };
};

export function loadData(){
    return(dispatch)=>{
        return axios.get('/products')
        .then((response)=>{
            dispatch(populateData(response.data))
        })
    }
}