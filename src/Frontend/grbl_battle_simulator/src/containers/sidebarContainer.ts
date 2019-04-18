import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { sidebarActions } from '../actions/sidebarAction';
import { SidebarComponent } from '../components/sidebarComponent';

export interface SidebarActions {
  selectMenu: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    selectMenu: (v: string) => dispatch(sidebarActions.selectMenu(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.sidebar);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarComponent);
