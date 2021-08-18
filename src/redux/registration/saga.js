import {ActionConstants} from '../constants';
import {petRegistrationError, petRegistrationSuccess} from './action';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {apiCall} from '../store/api-client';
import {APIURL, RouteConstants} from '../../utils/constants';
import * as Navigation from '../../routes/NavigationService';
import {onDisplayNotification} from '../../utils/mobile-utils';
export function* request(action) {
  try {
    // const response = yield call(paymentApi, action.payload);
    const response = yield call(
      apiCall,
      'POST',
      APIURL.registered,
      action.payload,
    );
    if (response.status === 1) {
      yield put(petRegistrationSuccess(response.data));
      Navigation.navigate(RouteConstants.NFCMANAGER);
    } else {
      yield put(petRegistrationError(response));
      onDisplayNotification('Error', response.message, false);
    }
  } catch (err) {
    yield put(petRegistrationError());
    onDisplayNotification('Error', err.response.message, false);
  }
}
export function* petRegisterWatcher() {
  yield all([takeLatest(ActionConstants.PET_REGISTER_REQUEST, request)]);
}
export default petRegisterWatcher;
