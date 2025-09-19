import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
// later add carReducer, bookingReducer etc.

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
