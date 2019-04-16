import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { hogeActions } from '../actions/hogeAction';

export interface SidebarState {
  name: string;
  email: string;
}

const initialState: SidebarState = {
  name: '',
  email: ''
};

export const sidebarReducer = reducerWithInitialState(initialState)
  .case(hogeActions.updateName, (state, name) => {
    return Object.assign({}, state, { name });
  })
  .case(hogeActions.updateEmail, (state, email) => {
    return Object.assign({}, state, { email });
  });
