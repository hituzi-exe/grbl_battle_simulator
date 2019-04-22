import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { currentJobAction } from '../../actions/Djeeta/currentJobAction';
import { styles, CurrentJob } from '../../components/contents/Djeeta/CurrentJob';

import { withStyles } from '@material-ui/core/styles';

export interface CurrentJobActions {
  changeRank: (v: string) => Action<string>;
  changeJob: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    changeRank: (v: string) => dispatch(currentJobAction.changeRank(v)),
    changeJob: (v: string) => dispatch(currentJobAction.changeJob(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.djeeta);
}

// export default withStyles(styles)(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(CurrentJob)
// );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentJob);
