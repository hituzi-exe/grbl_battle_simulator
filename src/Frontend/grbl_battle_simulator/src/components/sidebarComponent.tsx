import * as React from 'react';

import { initialState, SidebarState } from '../states/sidebarState';
import { SidebarActions } from '../containers/sidebarContainer';
import { sidebarActions } from '../actions/sidebarAction';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface OwnProps {}
type SidebarProps = OwnProps & SidebarState & SidebarActions;

export class SidebarComponent extends React.Component<SidebarProps> {
  public static defaultProps: SidebarProps = 
    Object.assign({}, initialState, sidebarActions);

  public render() {
    return (
      <Drawer variant="permanent" >
        <List disablePadding>
          <ListItem>
            Battle Simulator
          </ListItem>
          {this.props.categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem>
                <ListItemText>
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId }) => (
                <ListItem
                  button
                  dense
                  key={childId}
                  onClick={(e) => this.props.selectMenu(childId)}
                >
                  {/* <ListItemIcon>{icon}</ListItemIcon> */}
                  <ListItemText>
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
              <Divider/>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
};
