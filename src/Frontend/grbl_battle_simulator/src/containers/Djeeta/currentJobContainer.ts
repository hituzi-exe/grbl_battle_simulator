import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { djeetaAction } from '../../actions/djeetaAction';
import { styles, CurrentJob } from '../../components/contents/Djeeta/CurrentJob';

import { withStyles } from '@material-ui/core/styles';

export interface CurrentJobActions {
  changeRank: (v: number) => Action<number>;
  changeJob: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeRank: (v: number) => dispatch(djeetaAction.changeRank(v)),
    changeJob: (v: string) => dispatch(djeetaAction.changeJob(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.djeeta);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CurrentJob)
);
