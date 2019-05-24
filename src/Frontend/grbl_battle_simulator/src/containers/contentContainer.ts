import { connect } from 'react-redux';
import { State } from '../store';
import { ContentComponent } from '../components/ContentComponent';

function mapStateToProps(appState: State) {
  return Object.assign({}, appState.app);
}

export default connect(mapStateToProps)(ContentComponent);
