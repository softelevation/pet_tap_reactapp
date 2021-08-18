import {combineReducers} from 'redux';
import petRegistered from './registration/reducer';
import petDetails from './pet-details/reducer';
import location from './location/reducer';

const rootreducer = combineReducers({
  petRegistered,
  petDetails,
  location,
});
export default rootreducer;
