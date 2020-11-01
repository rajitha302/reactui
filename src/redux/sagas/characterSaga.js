import {call, put} from 'redux-saga/effects'
import { fetchApi } from "../../api/api";
import characterfunc from "../../functions/characterfunc"
import { receiveCharacterRC } from '../actions';

function *characterSaga(action) {
    try {
        const data = yield call(fetchApi);
     
        const countryList = characterfunc(data, action.value.letters);

        // console.log(countryList);
    
        yield put(receiveCharacterRC(countryList));
    
    }catch(error) {
    console.log(error)
    }
    
    }
    
    export default characterSaga;