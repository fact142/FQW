import { auth, logIn, signUp } from '../../APIs/userApi';
import { setUser } from '../reducers/userReducer';

export const authentication = () => async (dispatch) => {
  const response = await auth();
  await dispatch(setUser(response));
};

export const login = (email, password) => async (dispatch) => {
  const data = await logIn(email, password);
  localStorage.setItem('token', data.token);
  const response = await auth();
  dispatch(setUser(response));
};

export const signup = (username, lastname, email, password) => async (dispatch) => {
  await signUp(username, lastname, email, password)
}
