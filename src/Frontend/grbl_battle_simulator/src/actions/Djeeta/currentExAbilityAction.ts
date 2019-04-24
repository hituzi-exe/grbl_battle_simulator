import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const currentExAbilityAction = {
  changeExAbility: actionCreator<string>('ACTIONS_DJEETA_CHANGE_EX_ABILITY1'),
};
