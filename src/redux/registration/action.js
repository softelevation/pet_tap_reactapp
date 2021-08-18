import {ActionConstants} from '../constants';
// Agent List
export const petRegistrationRequest = payload => {
  return {
    type: ActionConstants.PET_REGISTER_REQUEST,
    payload,
    res: false,
  };
};
export const petRegistrationSuccess = data => {
  return {
    type: ActionConstants.PET_REGISTER_SUCCESS,
    data,
    res: true,
  };
};
export const petRegistrationError = error => {
  return {
    type: ActionConstants.PET_REGISTER_ERROR,
    error,
    res: false,
  };
};
