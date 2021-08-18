import {all} from 'redux-saga/effects';
import {petRegisterWatcher} from './registration/saga';
import {petDetailsWatcher} from './pet-details/saga';
export default function* rootSaga() {
  yield all([petRegisterWatcher(), petDetailsWatcher()]);
}
