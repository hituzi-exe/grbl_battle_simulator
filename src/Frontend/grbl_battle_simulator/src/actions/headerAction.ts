import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const headerActions = {
  login: actionCreator<void>('ACTIONS_HEADER_LOGIN'),
  logout: actionCreator<void>('ACTIONS_HEADER_LOGOUT'),
};
