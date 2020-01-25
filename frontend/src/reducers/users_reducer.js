
import { RECEIVE_SINGLE_USER } from "../actions/users_actions"
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
  Object.freeze(state);

  let userId;
  let user;
  let newState;

  switch (action.type) {

    case RECEIVE_SINGLE_USER:
      return Object.assign({}, state, { [action.user.data.id]: action.user.data })

    default:
      return state;
  }
}