import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { sidebarActions } from '../actions/sidebarAction';

export interface SidebarState {
  active: string;
}

export const initialState: SidebarState = {
  active: 'Djeeta',
};

export const sidebarReducer = reducerWithInitialState(initialState).case(sidebarActions.selectMenu, (state, menuid) => {
  return Object.assign({}, state, { active: menuid });
});
