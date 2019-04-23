import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { currentAbilityAction } from '../../actions/Djeeta/currentAbilityAction';
import { styles, Ability } from '../../components/contents/Djeeta/Ability';

import { withStyles } from '@material-ui/core/styles';

export interface AbilityActions {
  changeFreeAbility1: (v: string) => Action<string>;
  changeFreeAbility2: (v: string) => Action<string>;
  changeFreeAbility3: (v: string) => Action<string>;
  changeExAbility: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeFreeAbility1: (v: string) => dispatch(currentAbilityAction.changeFreeAbility1(v)),
    changeFreeAbility2: (v: string) => dispatch(currentAbilityAction.changeFreeAbility2(v)),
    changeFreeAbility3: (v: string) => dispatch(currentAbilityAction.changeFreeAbility3(v)),
    changeExAbility: (v: string) => dispatch(currentAbilityAction.changeExAbility(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.djeeta);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Ability)
);
