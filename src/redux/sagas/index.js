import {takeEvery, all} from 'redux-saga/effects'
import distanceSaga from './distanceSaga'
import closestCountrySaga from './closestCountrySaga'
import timezoneRangeSaga from './timezoneRangeSaga'
import characterSaga from './characterSaga'

export default function* rootSaga() {
    yield all([
        takeEvery("REQUEST_DISTANCE",distanceSaga),
        takeEvery("REQUEST_CLOSESTCOUNTRY",closestCountrySaga),
        takeEvery("REQUEST_COUNTRY_LIST_IN_THE_RANGE",timezoneRangeSaga),
        takeEvery("REQUEST_CHARACTER_RELEVENT_COUNTRIES",characterSaga)
    ])
}