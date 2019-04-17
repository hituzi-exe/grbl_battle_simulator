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

import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';
import PlayarrowIcon from '@material-ui/icons/PlayArrow';
import PublicIcon from '@material-ui/icons/Public';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SettingsIcon from '@material-ui/icons/Settings';

interface OwnProps {}
type SidebarProps = OwnProps & SidebarState & SidebarActions;

export class SidebarComponent extends React.Component<SidebarProps> {
  public static defaultProps: SidebarProps = 
    Object.assign({}, initialState, sidebarActions);

  private categories = [
      {
        id: 'Settings',
        children: [
          { id: 'Djeeta', icon: <PersonIcon/> },
          { id: 'Characters', icon: <PeopleIcon/> },
          { id: 'Weapon', icon: <AppsIcon/> },
          { id: 'Summon', icon: <PublicIcon/> },
          { id: 'Enemy', icon: <WhatshotIcon/> },
        ],
      },
      {
        id: 'Battle',
        children: [
          { id: 'Battle', icon: <PlayarrowIcon/> },
        ],
      },
      {
        id: 'Config',
        children: [
          { id: 'config', icon: <SettingsIcon/> },
          { id: 'help', icon: <QuestionAnswerIcon/> },
        ],
      },
    ]

  public render() {
    return (
      <Drawer variant="permanent" >
        <List disablePadding>
          <ListItem>
            Battle Simulator
          </ListItem>
          {this.categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem>
                <ListItemText>
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon }) => (
                <ListItem
                  button
                  dense
                  key={childId}
                  onClick={(e) => this.props.selectMenu(childId)}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
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
