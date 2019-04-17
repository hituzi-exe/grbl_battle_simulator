import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { sidebarActions } from '../actions/sidebarAction';

export interface SidebarState {
  active: string,
  categories: {
    id: string,
    children: {
      id: string,
    }[]
  }[]
}

export interface Categorie {
  id: string,
  children: Child[]
}

export interface Child {
  id: string,
}

export const initialState: SidebarState = {
  active: 'Djeeta',
  categories: [
    {
      id: 'Settings',
      children: [
        { id: 'Djeeta' },
        { id: 'Characters' },
        { id: 'Weapon' },
        { id: 'Summon' },
        { id: 'Enemy' },
      ],
    },
    {
      id: 'Battle',
      children: [
        { id: 'Battle' },
      ],
    },
    {
      id: 'Help',
      children: [
        { id: 'help' },
      ],
    },
  ]
};

export const sidebarReducer = reducerWithInitialState(initialState)
  .case(sidebarActions.selectMenu, (state, menuid) => {
    return Object.assign({}, state, {active: menuid});
  });
