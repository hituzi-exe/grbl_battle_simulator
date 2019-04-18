import { createStore, combineReducers } from 'redux';
import { hogeReducer, HogeState } from './states/hogeState';
import { sidebarReducer, SidebarState } from './states/sidebarState';
import { headerReducer, HeaderState } from './states/headerState';

export type AppState = {
  hoge: HogeState;
  sidebar: SidebarState;
  header: HeaderState;
};

const store = createStore(
  combineReducers<AppState>({
    hoge: hogeReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
  })
);

export default store;
