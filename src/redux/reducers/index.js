import distanceReducer from './distance'
import closestCountryReducer from './closestCountry'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  distance : distanceReducer,
  closestCountry : closestCountryReducer
});

export default allReducers;