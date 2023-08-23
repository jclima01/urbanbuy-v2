import axios from "axios";
import { authSlice } from "../slices/auhtSlice";

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export default authSlice.reducer;

/* Actions */

export const authLogin = (email, password) => async (dispatch) => {
  dispatch(loginStart());

  try {
    const {data} = await axios.post(
      `http://localhost:2800/clientAdmin/login`,
      {
        email,
        password,
      }
    );
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const authRegister = (fullName, email, password) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const {data} = await axios.get(
      `http://localhost:2800/clientAdmin/register`,
      {
        fullName,
        email,
        password,
      }
    );
      console.log(data)
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};
