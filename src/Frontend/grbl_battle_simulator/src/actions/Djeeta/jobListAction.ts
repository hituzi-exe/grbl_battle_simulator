import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const jobListAction = {
  selectJob: actionCreator<string>('ACTIONS_DJEETA_SELECT_JOB'),
  closeJobList: actionCreator<string>('ACTIONS_DJEETA_CLOSE_JOB'),
};
