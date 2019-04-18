import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { headerActions } from '../actions/headerAction';
import { styles, HeaderComponent } from '../components/HeaderComponent';

import { withStyles } from '@material-ui/core/styles';

export interface HeaderActions {
  login: () => Action<string>;
  logout: () => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    login: () => dispatch(headerActions.login()),
    logout: () => dispatch(headerActions.logout()),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.header, appState.sidebar);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderComponent)
);
