import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../store';
import { hogeActions } from '../actions/hogeAction';
import { HogeComponent } from '../components/hogeComponent';

export interface HogeActions {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    updateName: (v: string) => dispatch(hogeActions.updateName(v)),
    updateEmail: (v: string) => dispatch(hogeActions.updateEmail(v)),
  };
}

function mapStateToProps(appState: State) {
  return Object.assign({}, appState.hoge);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HogeComponent);
