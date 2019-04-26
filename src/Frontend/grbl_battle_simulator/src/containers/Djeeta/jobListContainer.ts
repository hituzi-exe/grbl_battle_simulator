import { Action } from 'typescript-fsa';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { jobListAction } from '../../actions/Djeeta/jobListAction';
import { styles, JobList } from '../../components/contents/Djeeta/JobList';

import { withStyles } from '@material-ui/core/styles';

export interface JobListActions {
  selectJob: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    selectJob: (v: string) => dispatch(jobListAction.selectJob(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.djeeta);
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobList)
);