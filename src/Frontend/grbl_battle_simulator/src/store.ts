import { createStore, combineReducers } from 'redux';
import { hogeReducer, HogeState } from './states/hogeState';
import { sidebarReducer, SidebarState } from './states/sidebarState';
import { headerReducer, HeaderState } from './states/headerState';
import { djeetaReducer, DjeetaState } from './states/djeetaState';

export type AppState = {
  hoge: HogeState;
  sidebar: SidebarState;
  header: HeaderState;
  djeeta: DjeetaState;
};

const store = createStore(
  combineReducers<AppState>({
    hoge: hogeReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    djeeta: djeetaReducer,
  })
);

export default store;
