import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../../views/pages/login/loginSlice';
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';
// const composedEnhancers = composeWithDevTools();


const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  }
});

export default store;