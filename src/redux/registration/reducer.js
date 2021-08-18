import {ActionConstants} from '../constants';
const initialState = {
  loading: false,
  data: [],
  error: '',
  isSuccess: false,
};
export function petRegistered(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.PET_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case ActionConstants.PET_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        isSuccess: true,
      };
    case ActionConstants.PET_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        isSuccess: false,
      };
    default:
      return state;
  }
}

export default petRegistered;
