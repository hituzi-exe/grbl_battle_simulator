import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { headerActions } from '../actions/headerAction';

export interface HeaderState {
  login: boolean;
}

export const initialState: HeaderState = {
  login: false,
};

export const sidebarReducer = reducerWithInitialState(initialState)
  .case(headerActions.login, state => {
    return Object.assign({}, state, { login: true });
  })
  .case(headerActions.logout, state => {
    return Object.assign({}, state, { login: false });
  });
