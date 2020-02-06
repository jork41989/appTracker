import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import jobsReducer from './jobs_reducer'


export default combineReducers({
    users: usersReducer,
    jobs: jobsReducer
})
