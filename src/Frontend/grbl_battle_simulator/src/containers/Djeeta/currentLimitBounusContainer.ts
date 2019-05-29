import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../../store';
import { currentLimitBounusAction } from '../../actions/Djeeta/currentLimitBounusAction';
import { styles, CurrentLimitBounus } from '../../components/contents/Djeeta/CurrentLimitBounus';

import { withStyles } from '@material-ui/core/styles';

export interface CurrentLimitBounusActions {
  changeLimitBounus: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeLimitBounus: (v: string) => dispatch(currentLimitBounusAction.changeLimitBounus(v)),
  };
}

function mapStateToProps(appState: State) {
  return Object.assign({}, appState.djeeta, appState.djeetaUI);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrentLimitBounus)
);
