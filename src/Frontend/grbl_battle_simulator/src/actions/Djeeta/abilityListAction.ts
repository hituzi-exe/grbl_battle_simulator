import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const abilityListAction = {
  selectAbility: actionCreator<string>('ACTIONS_DJEETA_SELECT_ABILITY'),
};
