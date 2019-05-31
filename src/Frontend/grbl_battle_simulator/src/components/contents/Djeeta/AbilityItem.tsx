import * as React from 'react';
import { CurrentFreeAbilityActions } from '../../../containers/Djeeta/currentFreeAbilityContainer';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronRight from '@material-ui/icons/ChevronRight';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    paper: {},
    title: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 100,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });

interface StylesProps extends WithStyles<typeof styles> {}

export interface AbilityItemProps {
  icon: string;
  name: string;
  secondary: string;
  changingAbility: string;
  onClick(v: string): void;
}

export const AbilityItem: React.SFC<any> = (props: AbilityItemProps & StylesProps & CurrentFreeAbilityActions) => {
  const { icon, name, secondary, changingAbility, onClick } = props;
  return (
    <React.Fragment key={name}>
      <ListItem>
        <img src={icon} alt="icon" />
        <ListItemText primary={name} secondary={secondary} />
        <Button variant={changingAbility === '' ? 'outlined' : 'contained'} color="primary" onClick={() => onClick('')}>
          <ChevronRight />
        </Button>
      </ListItem>
    </React.Fragment>
  );
};

export default withStyles(styles)(AbilityItem);
