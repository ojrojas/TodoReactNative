import {Login} from '../types/login.type';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export interface LoginType {
  type: typeof LOGIN;
  login: Login;
}

export interface LoginTypeSuccess {
  type: typeof LOGIN_SUCCESS;
  authToken: string;
}

export interface ErrorTypeLogin {
  type: typeof ERROR_LOGIN;
  error: Error;
}

export type LoginTypesActions = LoginType | LoginTypeSuccess | ErrorTypeLogin;
