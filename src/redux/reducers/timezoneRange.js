const initialState = {
    timezonerange: ''
}

function timezoneRangeReducer (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_COUNTRY_LIST_IN_THE_RANGE':
            return{
                ...state,
                timezonerange: action.value
            }
        default:
            return state;
    }
}
export default timezoneRangeReducer;