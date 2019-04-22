import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const currentJobAction = {
  changeRank: actionCreator<string>('ACTIONS_DJEETA_CHANGE_RANK'),
  changeJob: actionCreator<string>('ACTIONS_DJEETA_CHANGE_JOB'),
};
