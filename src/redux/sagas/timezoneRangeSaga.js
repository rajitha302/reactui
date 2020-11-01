import {call, put} from 'redux-saga/effects'
import { fetchApi } from "../../api/api";
import timezonerangefunc from "../../functions/timezonerangefunc"
import {receiveTimezoneCountries} from '../actions'

function *timezoneRangeSaga(action) {
    try {
        const data = yield call(fetchApi);

        const getCountiresInRange = timezonerangefunc(data, action.value)

        yield put(receiveTimezoneCountries(getCountiresInRange));

    }catch (error){
        console.error(error);
    }
}

export default timezoneRangeSaga
