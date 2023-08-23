import { authSlice } from "../slices/auhtSlice";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  authSlice,
});
