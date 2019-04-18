import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { sidebarActions } from '../actions/sidebarAction';
import { styles, SidebarComponent } from '../components/sidebarComponent';

import { withStyles } from '@material-ui/core/styles';

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

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SidebarComponent)
);
