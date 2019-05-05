import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const currentFreeAbilityAction = {
  changeFreeAbility1: actionCreator<string>('ACTIONS_DJEETA_CHANGE_FREE_ABILITY1'),
  changeFreeAbility2: actionCreator<string>('ACTIONS_DJEETA_CHANGE_FREE_ABILITY2'),
  changeFreeAbility3: actionCreator<string>('ACTIONS_DJEETA_CHANGE_FREE_ABILITY3'),
};
