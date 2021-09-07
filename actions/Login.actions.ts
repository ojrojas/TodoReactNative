import {Login} from '../types/login.type';
import {AppActions} from './app.actions';
import {
  ERROR_LOGIN,
  LOGIN,
  LOGIN_SUCCESS,
} from '../typesactions/login.typeactions';
import {Dispatch} from 'react';
import StorageService from '../services/storage.services';
import {Alert} from 'react-native';
import {ApiRequest} from '../services/api-request.services';

const urilogin = 'login';
const api = new ApiRequest();

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
    const response = await api.Post(urilogin, login);
    if (response.isAxiosError) {
      Alert.alert('Usuario y contraseña invalidos');
      dispatch(LoginError(response));
    } else {
      dispatch(LoginUserSuccess(response.data.auth_Token));
      if (response.data.auth_Token) {
        StorageService.setSessionToken(response.data.auth_Token);
      }
    }
  };
