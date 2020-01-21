import { getUser, getCurUser } from '../util/user_api_util';


export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';





export const receiveAUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
})







export const getTheCurUser = () => (dispatch) => {
  
  return (getCurUser().then(user => dispatch(receiveAUser(user))))
}