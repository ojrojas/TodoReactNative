import {combineReducers} from 'redux';
import {LoginReducer} from '../reducers/loginReducer';

export const rootReducer = combineReducers({
  login: LoginReducer,
});

export type AppStateTodo = ReturnType<typeof rootReducer>;
