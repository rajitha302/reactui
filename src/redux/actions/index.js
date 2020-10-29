export const requestDistance = (onchangestate) => {
    console.log("heelo frm action")
    return {
        type: 'REQUEST_DISTANCE',
        value: onchangestate
    }
};

export const receiveDistance = (calculateddistance) => {
    return {
        type: 'RECEIVE_DISTANCE',
        value: calculateddistance
    }
};