import { createStore, combineReducers } from 'redux';
import { appReducer, AppState } from './states/AppState';
import { djeetaReducer, DjeetaState } from './states/djeetaState';

export type State = {
  app: AppState;
  djeeta: DjeetaState;
};

const store = createStore(
  combineReducers<State>({
    app: appReducer,
    djeeta: djeetaReducer,
  })
);

export default store;
