import { createStore, combineReducers } from 'redux';
import { hogeReducer, HogeState } from './states/hogeState';
import { appReducer, AppState } from './states/AppState';
import { djeetaReducer, DjeetaState } from './states/djeetaState';

export type State = {
  hoge: HogeState;
  app: AppState;
  djeeta: DjeetaState;
};

const store = createStore(
  combineReducers<State>({
    hoge: hogeReducer,
    app: appReducer,
    djeeta: djeetaReducer,
  })
);

export default store;
