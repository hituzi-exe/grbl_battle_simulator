import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { sidebarActions } from '../actions/sidebarAction';

export interface SidebarState {
  active: string,
  categories: {
    [categories: number]: {
      id: string,
      children: {
        [children: number]: {id: string};
      };
    }
  }
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
  .case(sidebarActions.selectDjeetaMenu, (state) => {
    return Object.assign({}, state, { active: 'Djeeta' });
  })
  .case(sidebarActions.selectCharactersMenu, (state) => {
    return Object.assign({}, state, { active: 'Characters' });
  });
