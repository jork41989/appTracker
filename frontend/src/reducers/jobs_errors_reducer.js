import {RECEIVE_JOB_ERRORS} from '../actions/jobs_actions'

const _nullErrors = [];


const JobErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_JOB_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default JobErrorsReducer;