import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { headerActions } from '../actions/headerAction';
import { sidebarActions } from '../actions/sidebarAction';

export interface AppState {
  isLogin: boolean;
  activeMenu: string;
}

export const initialState: AppState = {
  isLogin: false,
  activeMenu: 'Djeeta',
};

export const appReducer = reducerWithInitialState(initialState)
  .case(headerActions.login, state => {
    return Object.assign({}, state, { isLogin: true });
  })
  .case(headerActions.logout, state => {
    return Object.assign({}, state, { isLogin: false });
  })
  .case(sidebarActions.selectMenu, (state, menuid) => {
    return Object.assign({}, state, { activeMenu: menuid });
  });
