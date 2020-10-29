const initialState = {
    distance: '0'
}

const distanceReducer = (state = initialState, action) => {
  switch (action.type) {
            case 'RECEIVE_DISTANCE':
                return {
                  ...state,
                  distance: action.value
                }
      default:
          return state;
  }
}

export default distanceReducer;