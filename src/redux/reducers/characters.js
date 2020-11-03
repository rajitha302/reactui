const initialState = {
    countryList: ''
}

function characterReducer(state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_CHARACTER_RELEVENT_COUNTRIES':
            return{
                ...state,
                countryList: action.value
            }
        default:
            return state;
    }
}
export default characterReducer;