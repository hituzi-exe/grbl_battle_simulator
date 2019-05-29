import { createStore, combineReducers } from 'redux';
import { appReducer, AppState } from './states/AppState';
import { djeetaUIReducer, DjeetaUIState } from './states/DjeetaUIState';
import { djeetaReducer, DjeetaState } from './states/djeetaState';

export type State = {
  app: AppState;
  djeeta: DjeetaState;
  djeetaUI: DjeetaUIState;
};

const store = createStore(
  combineReducers<State>({
    app: appReducer,
    djeeta: djeetaReducer,
    djeetaUI: djeetaUIReducer,
  })
);

export default store;
