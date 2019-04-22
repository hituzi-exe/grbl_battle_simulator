import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { AbilityActions } from '../../../containers/Djeeta/abilityContainer';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronRight from '@material-ui/icons/ChevronRight';

interface OwnProps {}

type AbilityProps = OwnProps & DjeetaState & AbilityActions;

interface StylesProps extends WithStyles<typeof styles> {}

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    paper: {
      maxWidth: 360,
    },
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
//TODO Storeへ移動すること
const abilityList = [
  {
    icon: 'https://example.com/api/icon/1.jpg',
    name: 'ability1',
    secondary: 'hoge',
  },
  {
    icon: 'https://example.com/api/icon/2.jpg',
    name: 'ability2',
    secondary: 'hoge',
  },
  {
    icon: 'https://example.com/api/icon/3.jpg',
    name: 'ability3',
    secondary: 'hoge',
  },
];

//TODO Storeへ移動すること
const exAbilityList = [
  {
    icon: 'https://example.com/api/icon/1.jpg',
    name: 'ability1',
    secondary: 'hoge',
  },
];

export const Ability: React.SFC<any> = (props: AbilityProps & StylesProps) => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography color="textPrimary" gutterBottom className={classes.title}>
        Ability
      </Typography>
      <Divider light />
      {abilityList.map(({ icon, name, secondary }) => (
        <AbilityItem icon={icon} name={name} secondary={secondary} />
      ))}

      <Typography color="textPrimary" gutterBottom className={classes.title}>
        FreeAbility
      </Typography>
      <Divider light />
      <ExAbilityItem name={props.exAbility} onChange={props.changeExAbility} />
    </Paper>
  );
};

interface AbilityItemProps {
  icon: string;
  name: string;
  secondary: string;
  onChange(v: string): void;
}

const AbilityItem: React.SFC<any> = (props: AbilityItemProps & AbilityActions) => {
  const { icon, name, secondary, ...other } = props;
  return (
    <React.Fragment key={name}>
      <ListItem button>
        <ListItemText primary={name} secondary={secondary} />
      </ListItem>
    </React.Fragment>
  );
};

const ExAbilityItem: React.SFC<any> = (props: AbilityItemProps & AbilityActions) => {
  const { icon, name, secondary, onChange, ...other } = props;
  return (
    <React.Fragment key={name}>
      <ListItem button>
        <ListItemText primary={name} secondary={secondary} />
        <Button variant="outlined" color="primary" onClick={() => onChange('hoge2')}>
          <ChevronRight />
        </Button>
      </ListItem>
    </React.Fragment>
  );
};
