import loginReducer from '../../views/pages/login/loginSlice';
import { combineReducers } from '@reduxjs/toolkit';


// const rootReducer = (state = {}, action) => {
//   return {
//     login: loginReducer(state.login, action),
//   };
// };

const rootReducer = combineReducers({
  login: loginReducer,
})
export default rootReducer
