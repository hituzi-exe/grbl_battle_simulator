import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { currentJobAction } from '../actions/Djeeta/currentJobAction';
import { currentAbilityAction } from '../actions/Djeeta/currentAbilityAction';
import { currentExAbilityAction } from '../actions/Djeeta/currentExAbilityAction';
import { abilityListAction } from '../actions/Djeeta/abilityListAction';

export interface DjeetaState {
  rank: number;
  currentJob: string;
  currentJobLv: number;
  forteWeapon1: string;
  forteWeapon2: string;
  jobType: string;
  HP: number;
  attack: number;
  changingAbility: '' | 'freeAbility1' | 'freeAbility2' | 'freeAbility3' | 'exAbility';
  exAbility: string;
  freeAbility1: string;
  freeAbility2: string;
  freeAbility3: string;
  lbclass: number;
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
  changingAbility: '',
  exAbility: 'hoge1',
  freeAbility1: 'hoge1',
  freeAbility2: 'hoge2',
  freeAbility3: 'hoge3',
  lbclass: 10,
};

export const djeetaReducer = reducerWithInitialState(initialState)
  .case(currentJobAction.changeRank, (state, rank) => {
    //TODO HP,攻撃力更新ロジックも入れること。
    return Object.assign({}, state, { rank });
  })
  .case(currentJobAction.changeJob, (state, currentJob) => {
    return Object.assign({}, state, { currentJob });
  })
  .case(currentAbilityAction.changeFreeAbility1, (state, freeAbility1) => {
    return Object.assign({}, state, { changingAbility: 'freeAbility1' });
  })
  .case(currentAbilityAction.changeFreeAbility2, (state, freeAbility2) => {
    return Object.assign({}, state, { changingAbility: 'freeAbility2' });
  })
  .case(currentAbilityAction.changeFreeAbility3, (state, freeAbility3) => {
    return Object.assign({}, state, { changingAbility: 'freeAbility3' });
  })
  .case(currentExAbilityAction.changeExAbility, (state, exAbility) => {
    return Object.assign({}, state, { changingAbility: 'exAbility' });
  })
  .case(abilityListAction.selectAbility, (state, id) => {
    switch (state.changingAbility) {
      case 'exAbility':
        return Object.assign({}, state, { exAbility: id, changingAbility: '' });
      case 'freeAbility1':
        return Object.assign({}, state, { freeAbility1: id, changingAbility: '' });
      case 'freeAbility2':
        return Object.assign({}, state, { freeAbility2: id, changingAbility: '' });
      case 'freeAbility3':
        return Object.assign({}, state, { freeAbility3: id, changingAbility: '' });
      default:
        return Object.assign({}, state);
    }
  });
