import {Login} from '../types/login.type';
import {AppActions} from './app.actions';
import {
  ERROR_LOGIN,
  LOGIN,
  LOGIN_SUCCESS,
} from '../typesactions/login.typeactions';
import {Dispatch} from 'react';
import {ApiRequest} from '../services/api-request.services';
import StorageService from '../services/storage.services';

const request = new ApiRequest();
const urilogin = 'login';

export const LoginUser = (login: Login): AppActions => ({
  type: LOGIN,
  login,
});

export const LoginUserSuccess = (authToken: string): AppActions => ({
  type: LOGIN_SUCCESS,
  authToken,
});

export const LoginError = (error: Error): AppActions => ({
  type: ERROR_LOGIN,
  error,
});

export const LoginUserAction =
  (login: Login) =>
  async (dispatch: Dispatch<AppActions>): Promise<void> => {
    dispatch(LoginUser(login));
    const response = await request.Post(urilogin, login);
    if (response.isAxiosError) {
      dispatch(LoginError(response));
    } else {
      dispatch(LoginUserSuccess(response.data.auth_Token));
      if (response.data.auth_Token) {
        StorageService.setSessionToken(response.data.auth_Token);
      }
    }
  };
