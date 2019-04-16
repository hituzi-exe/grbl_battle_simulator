import { createStore, combineReducers } from 'redux';
import { hogeReducer, HogeState } from './states/hogeState';
import { sidebarReducer, SidebarState } from './states/sidebarState';

export type AppState = {
  hoge: HogeState,
  sidebar: SidebarState
};

const store = createStore(
  combineReducers<AppState>({
    hoge: hogeReducer,
    sidebar: sidebarReducer
  })
);

export default store;