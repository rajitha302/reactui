export const requestDistance = (onchangestate) => {
  return {
    type: "REQUEST_DISTANCE",
    value: onchangestate,
  };
};

export const receiveDistance = (calculateddistance) => {
  return {
    type: "RECEIVE_DISTANCE",
    value: calculateddistance,
  };
};

export const requestClosestCountry = (onChangeState) => {
  return {
    type: "REQUEST_CLOSESTCOUNTRY",
    value: onChangeState,
  };
};

export const receivedClosestCountry = (closestCountry) => {
  return {
    type: "RECEIVE_CLOSESTCOUNTRY",
    value: closestCountry,
  };
};

export const requestTimezoneCountries = (onChangeState) => {
  return {
    type: "REQUEST_COUNTRY_LIST_IN_THE_RANGE",
    value: onChangeState,
  };
};

export const receiveTimezoneCountries = (getCountiresInRange) => {
  return {
    type: "RECEIVE_COUNTRY_LIST_IN_THE_RANGE",
    value: getCountiresInRange,
  };
};

export const requestCharacterRC = (onChangeState) => {
  return {
    type: "REQUEST_CHARACTER_RELEVENT_COUNTRIES",
    value: onChangeState,
  };
};

export const receiveCharacterRC = (countryList) => {
  return {
    type: "RECEIVE_CHARACTER_RELEVENT_COUNTRIES",
    value: countryList,
  };
};
