import {ActionConstants} from '../constants';
// Agent List
export const petDetailsRequest = payload => {
  return {
    type: ActionConstants.PET_DETAILS_REQUEST,
    payload,
    res: false,
  };
};
export const petDetailsSuccess = data => {
  return {
    type: ActionConstants.PET_DETAILS_SUCCESS,
    data,
    res: true,
  };
};
export const petDetailsError = error => {
  return {
    type: ActionConstants.PET_DETAILS_ERROR,
    error,
    res: false,
  };
};
