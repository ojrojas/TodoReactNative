import {Login} from '../types/login.type';
import {
  LOGIN,
  LOGIN_SUCCESS,
  ERROR_LOGIN,
  LoginTypesActions,
} from '../typesactions/login.typeactions';

export interface LoginState {
  login: Login;
  authToken: string;
  error: Error;
}

const LoginStateInitial: LoginState = {
  login: {} as Login,
  authToken: '',
  error: {} as Error,
};

export const LoginReducer = (
  state: LoginState = LoginStateInitial,
  actions: LoginTypesActions,
): LoginState => {
  switch (actions.type) {
    case LOGIN:
      return {
        ...state,
        login: actions.login,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authToken: actions.authToken,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        error: actions.error,
      };
    default:
      return state;
  }
};
