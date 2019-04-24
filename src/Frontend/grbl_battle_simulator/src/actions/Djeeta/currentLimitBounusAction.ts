import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const currentLimitBounusAction = {
  changeLimitBounus: actionCreator<string>('ACTIONS_DJEETA_CHANGE_LIMIT_BOUNUS'),
};
