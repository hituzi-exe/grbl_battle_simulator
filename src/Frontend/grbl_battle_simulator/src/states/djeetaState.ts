import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { currentJobAction } from '../actions/Djeeta/currentJobAction';
import { currentAbilityAction } from '../actions/Djeeta/currentAbilityAction';
import { currentExAbilityAction } from '../actions/Djeeta/currentExAbilityAction';
import { currentFreeAbilityAction } from '../actions/Djeeta/currentFreeAbilityAction';
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
  abilityList: {
    icon: string;
    name: string;
    secondary: string;
  }[];

  ability1: string;
  ability2: string;
  ability3: string;
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
  abilityList: [
    {
      icon: 'https://example.com/api/icon/1.jpg',
      name: 'ability1',
      secondary: 'ここにアビリティの詳しい説明文をだらだらと表示させる予定。',
    },
    {
      icon: 'https://example.com/api/icon/2.jpg',
      name: 'ability2',
      secondary: 'hoge',
    },
    {
      icon: 'https://example.com/api/icon/3.jpg',
      name: 'ability3',
      secondary: 'hoge',
    },
  ],
  changingAbility: '',
  ability1: 'hoge1',
  ability2: 'hoge2',
  ability3: 'hoge3',
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
  .case(currentFreeAbilityAction.changeFreeAbility1, (state, exAbility) => {
    return Object.assign({}, state, { changingAbility: 'freeAbility1' });
  })
  .case(currentFreeAbilityAction.changeFreeAbility2, (state, exAbility) => {
    return Object.assign({}, state, { changingAbility: 'freeAbility2' });
  })
  .case(currentFreeAbilityAction.changeFreeAbility2, (state, exAbility) => {
    return Object.assign({}, state, { changingAbility: 'freeAbility3' });
  })
  .case(abilityListAction.selectAbility, (state, id) => {
    const getAbility = (changingAbility: DjeetaState['changingAbility']) => {
      switch (changingAbility) {
        case 'exAbility':
          return { exAbility: id, changingAbility: '' };
        case 'freeAbility1':
          return { freeAbility1: id, changingAbility: '' };
        case 'freeAbility2':
          return { freeAbility2: id, changingAbility: '' };
        case 'freeAbility3':
          return { freeAbility3: id, changingAbility: '' };
        default:
          return {};
      }
    };

    return Object.assign({}, state, getAbility(state.changingAbility));
  });
