import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { abilityAction } from '../../actions/Djeeta/abilityAction';
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
    changeFreeAbility1: (v: string) => dispatch(abilityAction.changeFreeAbility1(v)),
    changeFreeAbility2: (v: string) => dispatch(abilityAction.changeFreeAbility2(v)),
    changeFreeAbility3: (v: string) => dispatch(abilityAction.changeFreeAbility3(v)),
    changeExAbility: (v: string) => dispatch(abilityAction.changeExAbility(v)),
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
