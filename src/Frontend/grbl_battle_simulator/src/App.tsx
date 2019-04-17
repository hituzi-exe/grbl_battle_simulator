import * as React from 'react';
import HogeContainer from './containers/hogeContainer';
import SidebarContainer from './containers/sidebarContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SidebarContainer />
      </div>
    );
  }
}

export default App;
