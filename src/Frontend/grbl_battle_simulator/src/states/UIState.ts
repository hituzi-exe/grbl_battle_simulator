import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { currentJobAction } from '../actions/Djeeta/currentJobAction';
import { jobListAction } from '../actions/Djeeta/jobListAction';

export interface UIState {
  djeeta: DjeetaUIState;
}

export interface DjeetaUIState {
  showJobList: boolean;
  isJobChanging: boolean;
  showCurrentExAility: boolean;
  showAbilityList: boolean;
  isExAbilityChanging: boolean;
  showCurrentFreeAility: boolean;
  isFreeAbility1Changing: boolean;
  isFreeAbility2Changing: boolean;
  isFreeAbility3Changing: boolean;
  showLimitBounus: boolean;
  isLimitBounusChanging: boolean;
}

export const initialState: UIState = {
  djeeta: {
    showJobList: false,
    isJobChanging: false,
    showCurrentExAility: true,
    showAbilityList: false,
    isExAbilityChanging: false,
    showCurrentFreeAility: false,
    isFreeAbility1Changing: false,
    isFreeAbility2Changing: false,
    isFreeAbility3Changing: false,
    showLimitBounus: false,
    isLimitBounusChanging: false,
  },
};

export const uiReducer = reducerWithInitialState(initialState)
  .case(currentJobAction.changeJob, state => {
    return Object.assign({}, state, { showJobList: true, isJobChanging: true });
  })
  .case(jobListAction.selectJob, (state, menuid) => {
    return Object.assign({}, state, { showJobList: false, isJobChanging: false });
  })
  .case(jobListAction.closeJobList, state => {
    return Object.assign({}, state, { showJobList: false, isJobChanging: false });
  });
