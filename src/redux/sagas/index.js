import {takeEvery, all} from 'redux-saga/effects'
import distanceSaga from './distanceSaga'

export default function* rootSaga() {
    yield all([
        takeEvery("REQUEST_DISTANCE",distanceSaga)
    ])
}