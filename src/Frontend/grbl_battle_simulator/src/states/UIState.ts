import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { currentJobAction } from '../actions/Djeeta/currentJobAction';
import { jobListAction } from '../actions/Djeeta/jobListAction';
import { currentExAbilityAction } from '../actions/Djeeta/currentExAbilityAction';
import { currentFreeAbilityAction } from '../actions/Djeeta/currentFreeAbilityAction';
import { abilityListAction } from '../actions/Djeeta/abilityListAction';

export interface UIState {
  djeetaUI: DjeetaUIState;
}

export interface DjeetaUIState {
  showJobList: boolean;
  isJobChanging: boolean;
  showCurrentExAility: boolean;
  showCurrentFreeAility: boolean;
  showAbilityList: boolean;
  isExAbilityChanging: boolean;
  isFreeAbility1Changing: boolean;
  isFreeAbility2Changing: boolean;
  isFreeAbility3Changing: boolean;
  showLimitBounus: boolean;
  isLimitBounusChanging: boolean;
}

export const initialState: UIState = {
  djeetaUI: {
    showJobList: false,
    isJobChanging: false,
    showCurrentExAility: true,
    showCurrentFreeAility: false,
    showAbilityList: false,
    isExAbilityChanging: false,
    isFreeAbility1Changing: false,
    isFreeAbility2Changing: false,
    isFreeAbility3Changing: false,
    showLimitBounus: false,
    isLimitBounusChanging: false,
  },
};

export const uiReducer = reducerWithInitialState(initialState)
  .case(currentJobAction.changeJob, state => {
    return Object.assign({}, state, state.djeetaUI, {
      djeetaUI: {
        showJobList: true,
        isJobChanging: true,
        showAbilityList: false,
        isExAbilityChanging: false,
        isFreeAbility1Changing: false,
        isFreeAbility2Changing: false,
        isFreeAbility3Changing: false,
        showLimitBounus: false,
        isLimitBounusChanging: false,
      },
    });
  })
  .case(jobListAction.selectJob, (state, menuid) => {
    return Object.assign({}, state, { djeetaUI: { showJobList: false, isJobChanging: false } });
  })
  .case(jobListAction.closeJobList, state => {
    return Object.assign({}, state, {
      djeetaUI: {
        showJobList: false,
        isJobChanging: false,
        showCurrentExAility: state.djeetaUI.showCurrentExAility,
        showCurrentFreeAility: state.djeetaUI.showCurrentFreeAility,
      },
    });
  })
  .case(currentExAbilityAction.changeExAbility, state => {
    return Object.assign({}, state, {
      djeetaUI: {
        showJobList: false,
        isJobChanging: false,
        showAbilityList: true,
        showCurrentExAility: state.djeetaUI.showCurrentExAility,
        showCurrentFreeAility: state.djeetaUI.showCurrentFreeAility,
        isExAbilityChanging: true,
        isFreeAbility1Changing: false,
        isFreeAbility2Changing: false,
        isFreeAbility3Changing: false,
        showLimitBounus: false,
        isLimitBounusChanging: false,
      },
    });
  })
  .case(currentFreeAbilityAction.changeFreeAbility1, state => {
    return Object.assign({}, state, {
      djeetaUI: {
        showJobList: false,
        isJobChanging: false,
        showAbilityList: true,
        showCurrentExAility: state.djeetaUI.showCurrentExAility,
        showCurrentFreeAility: state.djeetaUI.showCurrentFreeAility,
        isExAbilityChanging: false,
        isFreeAbility1Changing: true,
        isFreeAbility2Changing: false,
        isFreeAbility3Changing: false,
        showLimitBounus: false,
        isLimitBounusChanging: false,
      },
    });
  })
  .case(abilityListAction.selectAbility, state => {
    return Object.assign({}, state, {
      djeetaUI: {
        showAbilityList: false,
        isExAbilityChanging: false,
        showCurrentExAility: state.djeetaUI.showCurrentExAility,
        showCurrentFreeAility: state.djeetaUI.showCurrentFreeAility,
      },
    });
  })
  .case(abilityListAction.closeAbility, state => {
    return Object.assign({}, state, {
      djeetaUI: {
        showAbilityList: false,
        isExAbilityChanging: false,
        showCurrentExAility: state.djeetaUI.showCurrentExAility,
        showCurrentFreeAility: state.djeetaUI.showCurrentFreeAility,
      },
    });
  })
  .case(currentJobAction.changeLimitBounus, state => {
    return Object.assign({}, state, {
      djeetaUI: {
        showJobList: false,
        isJobChanging: false,
        showAbilityList: false,
        showCurrentExAility: state.djeetaUI.showCurrentExAility,
        showCurrentFreeAility: state.djeetaUI.showCurrentFreeAility,
        isExAbilityChanging: false,
        isFreeAbility1Changing: false,
        isFreeAbility2Changing: false,
        isFreeAbility3Changing: false,
        showLimitBounus: true,
        isLimitBounusChanging: true,
      },
    });
  });
