import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { headerActions } from '../actions/headerAction';

export interface HeaderState {
  isLogin: boolean;
}

export const initialState: HeaderState = {
  isLogin: false,
};

export const headerReducer = reducerWithInitialState(initialState)
  .case(headerActions.login, state => {
    return Object.assign({}, state, { isLogin: true });
  })
  .case(headerActions.logout, state => {
    return Object.assign({}, state, { isLogin: false });
  });
