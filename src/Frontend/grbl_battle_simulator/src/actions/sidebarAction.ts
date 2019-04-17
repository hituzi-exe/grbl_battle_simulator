import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const sidebarActions = {
  selectMenu: actionCreator<string>('ACTIONS_SELECT_MENU')
};
