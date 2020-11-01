const initialState = {
    closestCountry: ''
}

function closestCountryReducer(state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_CLOSESTCOUNTRY':
            return{
                ...state,
                closestCountry: action.value
            }
        default:
            return state;
    }
}
export default closestCountryReducer;