import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const djeetaAction = {
  changeRank: actionCreator<number>('ACTIONS_DJEETA_CHANGE_RANK'),
  changeJob: actionCreator<string>('ACTIONS_DJEETA_CHANGE_JOB'),
};
