import distanceReducer from './distance'
import closestCountryReducer from './closestCountry'
import timezoneRangeReducer from './timezoneRange'
import characterReducer from './characters';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  distance : distanceReducer,
  closestCountry : closestCountryReducer,
  timezoneRange: timezoneRangeReducer,
  charRCcountryList: characterReducer
});

export default allReducers;