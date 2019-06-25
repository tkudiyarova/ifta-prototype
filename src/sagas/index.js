import { put, takeEvery } from 'redux-saga/effects'
import actions from "../actions";

export function* iftaSaga() {
  console.log('IFTA Sagas here!')
}

export function* sagaWatcher() {
  yield takeEvery('SAMPLE_ASYNC_ACTION', iftaSaga);
}
