import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { currentJobAction } from '../actions/Djeeta/currentJobAction';
import { jobListAction } from '../actions/Djeeta/jobListAction';
import { currentExAbilityAction } from '../actions/Djeeta/currentExAbilityAction';
import { currentFreeAbilityAction } from '../actions/Djeeta/currentFreeAbilityAction';
import { abilityListAction } from '../actions/Djeeta/abilityListAction';

export interface DjeetaUIState {
  showCurrentExAility: boolean;
  showCurrentFreeAility: boolean;
  showJobList: boolean;
  showAbilityList: boolean;
  showLimitBounus: boolean;
  isJobChanging: boolean;
  isExAbilityChanging: boolean;
  isFreeAbility1Changing: boolean;
  isFreeAbility2Changing: boolean;
  isFreeAbility3Changing: boolean;
  isLimitBounusChanging: boolean;
}

export const initialState: DjeetaUIState = {
  showCurrentExAility: true,
  showCurrentFreeAility: false,
  showJobList: false,
  showAbilityList: false,
  showLimitBounus: false,
  isJobChanging: false,
  isExAbilityChanging: false,
  isFreeAbility1Changing: false,
  isFreeAbility2Changing: false,
  isFreeAbility3Changing: false,
  isLimitBounusChanging: false,
};

export const djeetaUIReducer = reducerWithInitialState(initialState)
  .case(currentJobAction.changeJob, state => {
    return Object.assign({}, state, {
      showJobList: true,
      showAbilityList: false,
      showLimitBounus: false,
      isJobChanging: true,
      isExAbilityChanging: false,
      isFreeAbility1Changing: false,
      isFreeAbility2Changing: false,
      isFreeAbility3Changing: false,
      isLimitBounusChanging: false,
    });
  })
  .case(jobListAction.selectJob, state => {
    return Object.assign({}, state, { showJobList: false, isJobChanging: false });
  })
  .case(jobListAction.closeJobList, state => {
    return Object.assign({}, state, { showJobList: false, isJobChanging: false });
  })
  .case(currentExAbilityAction.changeExAbility, state => {
    return Object.assign({}, state, {
      showJobList: false,
      showAbilityList: true,
      showLimitBounus: false,
      isJobChanging: false,
      isExAbilityChanging: true,
      isFreeAbility1Changing: false,
      isFreeAbility2Changing: false,
      isFreeAbility3Changing: false,
      isLimitBounusChanging: false,
    });
  })
  .case(currentFreeAbilityAction.changeFreeAbility1, state => {
    return Object.assign({}, state, {
      showJobList: false,
      isJobChanging: false,
      showAbilityList: true,
      isExAbilityChanging: false,
      isFreeAbility1Changing: true,
      isFreeAbility2Changing: false,
      isFreeAbility3Changing: false,
      showLimitBounus: false,
      isLimitBounusChanging: false,
    });
  })
  .case(abilityListAction.selectAbility, state => {
    return Object.assign({}, state, { showAbilityList: false, isExAbilityChanging: false });
  })
  .case(abilityListAction.closeAbility, state => {
    return Object.assign({}, state, { showAbilityList: false, isExAbilityChanging: false });
  })
  .case(currentJobAction.changeLimitBounus, state => {
    return Object.assign({}, state, {
      showJobList: false,
      isJobChanging: false,
      showAbilityList: false,
      isExAbilityChanging: false,
      isFreeAbility1Changing: false,
      isFreeAbility2Changing: false,
      isFreeAbility3Changing: false,
      showLimitBounus: true,
      isLimitBounusChanging: true,
    });
  });
