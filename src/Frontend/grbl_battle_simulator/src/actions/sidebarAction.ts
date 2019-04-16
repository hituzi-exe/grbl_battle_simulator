import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

//TODO まずは二つだけで動作確認する
export const sidebarActions = {
  selectDjeetaMenu: actionCreator<void>('ACTIONS_SELECT_DJEETA_MENU'),
  selectCharactersMenu: actionCreator<void>('ACTIONS_SELECT_CHARACTORS_MENU')
};
// DjeetaView:{},
// CharactersView:{},
// WeaponView:{},
// SummonView:{},
// EnemyView:{},
// BattleView:{},