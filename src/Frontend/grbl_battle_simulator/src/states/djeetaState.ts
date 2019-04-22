import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { currentJobAction } from '../actions/Djeeta/currentJobAction';

export interface DjeetaState {
  rank: number;
  currentJob: string;
  currentJobLv: number;
  forteWeapon1: string;
  forteWeapon2: string;
  jobType: string;
  HP: number;
  attack: number;
}

export const initialState: DjeetaState = {
  rank: 150,
  currentJob: 'ファイター',
  currentJobLv: 20,
  forteWeapon1: '剣',
  forteWeapon2: '斧',
  jobType: '特殊',
  HP: 999,
  attack: 9999,
};

export const djeetaReducer = reducerWithInitialState(initialState)
  .case(currentJobAction.changeRank, (state, rank) => {
    return Object.assign({}, state, { rank });
  })
  .case(currentJobAction.changeJob, (state, currentJob) => {
    return Object.assign({}, state, { currentJob });
  });
