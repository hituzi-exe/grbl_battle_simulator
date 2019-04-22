import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { djeetaAction } from '../actions/djeetaAction';

export interface DjeetaState {
  rank: number;
  currentJob: string;
}

export const initialState: DjeetaState = {
  rank: 150,
  currentJob: 'ファイター',
};

export const djeetaReducer = reducerWithInitialState(initialState)
  .case(djeetaAction.changeRank, (state, rank) => {
    return Object.assign({}, state, { rank });
  })
  .case(djeetaAction.changeJob, (state, job) => {
    return Object.assign({}, state, { job });
  });
