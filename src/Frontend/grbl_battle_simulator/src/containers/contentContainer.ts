import { connect } from 'react-redux';
import { AppState } from '../store';
import { ContentComponent } from '../components/ContentComponent';

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.sidebar);
}

export default connect(mapStateToProps)(ContentComponent);
