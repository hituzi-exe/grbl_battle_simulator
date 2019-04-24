import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { currentExAbilityAction } from '../../actions/Djeeta/currentExAbilityAction';
import { styles, CurrentExAbility } from '../../components/contents/Djeeta/CurrentExAbility';

import { withStyles } from '@material-ui/core/styles';

export interface CurrentExAbilityActions {
  changeExAbility: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeExAbility: (v: string) => dispatch(currentExAbilityAction.changeExAbility(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.djeeta);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrentExAbility)
);
