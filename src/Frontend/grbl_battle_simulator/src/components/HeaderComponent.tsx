import * as React from 'react';

import { createStyles, WithStyles } from '@material-ui/core/styles';

import { AppState } from '../states/AppState';
import { HeaderActions } from '../containers/headerContainer';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

export const styles = () =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });

interface OwnProps {}
interface StylesProps extends WithStyles<typeof styles> {}
type HeaderProps = OwnProps & AppState & HeaderActions & StylesProps;

export const HeaderComponent: React.SFC<any> = (props: HeaderProps) => {
  const { classes, isLogin } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow} />
        {isLogin && (
          <Button color="inherit" onClick={e => props.logout()}>
            Logout
          </Button>
        )}
        {!isLogin && (
          <Button color="inherit" onClick={e => props.login()}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
