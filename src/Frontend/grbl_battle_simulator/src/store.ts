import { createStore, combineReducers } from 'redux';
import { appReducer, AppState } from './states/AppState';
import { uiReducer, UIState } from './states/UIState';
import { djeetaReducer, DjeetaState } from './states/djeetaState';

export type State = {
  app: AppState;
  ui: UIState;
  djeeta: DjeetaState;
};

const store = createStore(
  combineReducers<State>({
    app: appReducer,
    ui: uiReducer,
    djeeta: djeetaReducer,
  })
);

export default store;
