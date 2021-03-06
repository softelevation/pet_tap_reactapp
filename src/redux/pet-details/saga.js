import {ActionConstants} from '../constants';
import {petDetailsError, petDetailsSuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../store/api-client';
import {APIURL} from '../../utils/constants';
import {onDisplayNotification} from '../../utils/mobile-utils';
export function* request(action) {
  try {
    // const response = yield call(paymentApi, action.payload);
    const response = yield call(
      apiCall,
      'GET',
      `${APIURL.petDetails}/${action.payload}`,
    );
    if (response.status === 1) {
      yield put(petDetailsSuccess(response.data));
    } else {
      yield put(petDetailsError(response));
      onDisplayNotification('Error', response.message, false);
    }
  } catch (err) {
    onDisplayNotification('Error', err.response.message, false);
    yield put(petDetailsError());
  }
}
export function* petDetailsWatcher() {
  yield all([takeLatest(ActionConstants.PET_DETAILS_REQUEST, request)]);
}
export default petDetailsWatcher;
