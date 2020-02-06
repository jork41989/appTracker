import {RECEIVE_JOB} from '../actions/jobs_actions'
import merge from 'lodash/merge';

const jobsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState;
  let job;

  switch(action.type){
    case RECEIVE_JOB:
      job = action.job;
      newState = merge({}, state, {[job._id]: job})
      return newState
    default:
      return state;
  }

}

export default jobsReducer;