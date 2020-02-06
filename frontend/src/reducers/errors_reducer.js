import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import JobErrorsReducer from './jobs_errors_reducer';


export default combineReducers({
  session: SessionErrorsReducer,
  jobs: JobErrorsReducer
});