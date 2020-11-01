import fetchApi from '../../api/api';
import {call, put} from 'redux-saga/effects'
import {receiveDistance} from '..//actions/'
import distancefunc from '../../functions/distancefunc'


function* getDistance(action) {
console.log(action)
    console.log('hello from saga')
    try {
    const data = yield call(fetchApi);

    const cnamefrom = yield data.find(
        (countryName) => countryName.name === action.value.from
    )

    const cnameto = yield data.find(
        (countryName) => countryName.name === action.value.to
    )

    // const cnamefrom = (data) => {
    //     return data.find(action.value.from)
    // }

    const distanceCal = yield distancefunc(
        cnamefrom.latlng[0],
        cnamefrom.latlng[1],
        cnameto.latlng[0],
        cnameto.latlng[1],
        "K"
    )

    console.log(distanceCal)

    yield put(receiveDistance(distanceCal))

} catch (error) {
console.log(error)
}
}

export default getDistance