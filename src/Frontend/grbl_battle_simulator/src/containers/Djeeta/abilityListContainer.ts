import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../../store';
import { abilityListAction } from '../../actions/Djeeta/abilityListAction';
import { styles, AbilityList } from '../../components/contents/Djeeta/AbilityList';

import { withStyles } from '@material-ui/core/styles';

export interface AbilityListActions {
  selectAbility: (v: string) => Action<string>;
  closeAbility: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    selectAbility: (v: string) => dispatch(abilityListAction.selectAbility(v)),
    closeAbility: (v: string) => dispatch(abilityListAction.closeAbility(v)),
  };
}

function mapStateToProps(appState: State) {
  return Object.assign({}, appState.djeeta, appState.djeetaUI);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AbilityList)
);
