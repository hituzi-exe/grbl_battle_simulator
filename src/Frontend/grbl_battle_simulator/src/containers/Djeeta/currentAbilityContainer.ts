import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../../store';
import { currentAbilityAction } from '../../actions/Djeeta/currentAbilityAction';
import { styles, CurrentAbility } from '../../components/contents/Djeeta/CurrentAbility';

import { withStyles } from '@material-ui/core/styles';

export interface CurrentAbilityActions {
  changeFreeAbility1: (v: string) => Action<string>;
  changeFreeAbility2: (v: string) => Action<string>;
  changeFreeAbility3: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeFreeAbility1: (v: string) => dispatch(currentAbilityAction.changeFreeAbility1(v)),
    changeFreeAbility2: (v: string) => dispatch(currentAbilityAction.changeFreeAbility2(v)),
    changeFreeAbility3: (v: string) => dispatch(currentAbilityAction.changeFreeAbility3(v)),
  };
}

function mapStateToProps(appState: State) {
  return Object.assign({}, appState.djeeta);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrentAbility)
);
