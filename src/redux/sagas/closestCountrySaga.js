import { call, put } from "redux-saga/effects";
import { fetchApi } from "../../api/api";
import closestCountryfunc from "../../functions/closestCountryfunc";
import { receivedClosestCountry } from "../actions";

function* getClosestCountry(action) {
  // console.log(action)
  try {
    const data = yield call(fetchApi);

    const closestCountry = closestCountryfunc(data, action.value.countryName);

    console.log(("result:", closestCountry));
    yield put(receivedClosestCountry(closestCountry));
  } catch (error) {
    console.log(error);
  }
}

export default getClosestCountry;
