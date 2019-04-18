import * as React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

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
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PublicIcon from '@material-ui/icons/Public';
import WhatshotIcon from '@material-ui/icons/Whatshot';

//TODO Storeに移動させる
const categories = [
  {
    id: 'Settings',
    children: [
      { id: 'Djeeta', icon: <PersonIcon />, active: true },
      { id: 'Characters', icon: <PeopleIcon /> },
      { id: 'Weapon', icon: <AppsIcon /> },
      { id: 'Summon', icon: <PublicIcon /> },
      { id: 'Enemy', icon: <WhatshotIcon /> },
    ],
  },
  {
    id: 'Battle',
    children: [{ id: 'Battle', icon: <PlayarrowIcon /> }],
  },
  {
    id: 'Help',
    children: [{ id: 'help', icon: <QuestionAnswerIcon /> }],
  },
];

const styles = (theme: any) =>
  createStyles({
    categoryHeader: {
      paddingTop: 16,
      paddingBottom: 16,
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 4,
      paddingBottom: 4,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: 16,
      paddingBottom: 16,
    },
    firebase: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.common.white,
    },
    itemActionable: {
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      color: 'inherit',
      fontSize: theme.typography.fontSize,
      '&$textDense': {
        fontSize: theme.typography.fontSize,
      },
    },
    textDense: {},
    divider: {
      marginTop: theme.spacing.unit * 2,
    },
  });

export interface Props extends WithStyles<typeof styles> {}

function Sidebar(props: Props) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
          Battle Simulator
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                button
                dense
                key={childId}
                className={classNames(classes.item, classes.itemActionable, active && classes.itemActiveItem)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Sidebar);
