import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { hogeActions } from '../actions/hogeAction';
import { HogeComponent } from '../components/hogeComponent';
import { sidebarActions } from '../actions/sidebarAction';
// import { styles, SidebarComponent } from '../components/sidebarComponent';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

export interface HogeActions {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
}

export interface SidebarActions {
  selectDjeetaMenu: () => Action<void>;
  selectCharactersMenu: () => Action<void>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    selectDjeetaMenu: () => dispatch(sidebarActions.selectDjeetaMenu()),
    selectCharactersMenu: () => dispatch(sidebarActions.selectCharactersMenu())
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.hoge);
}

export default connect(mapStateToProps, mapDispatchToProps)(HogeComponent);
