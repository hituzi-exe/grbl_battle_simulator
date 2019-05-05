import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { currentFreeAbilityAction } from '../../actions/Djeeta/currentFreeAbilityAction';
import { styles, CurrentFreeAbility } from '../../components/contents/Djeeta/CurrentFreeAbility';

import { withStyles } from '@material-ui/core/styles';

export interface CurrentFreeAbilityActions {
  changeFreeAbility1: (v: string) => Action<string>;
  changeFreeAbility2: (v: string) => Action<string>;
  changeFreeAbility3: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeFreeAbility1: (v: string) => dispatch(currentFreeAbilityAction.changeFreeAbility1(v)),
    changeFreeAbility2: (v: string) => dispatch(currentFreeAbilityAction.changeFreeAbility2(v)),
    changeFreeAbility3: (v: string) => dispatch(currentFreeAbilityAction.changeFreeAbility3(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.djeeta);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrentFreeAbility)
);
