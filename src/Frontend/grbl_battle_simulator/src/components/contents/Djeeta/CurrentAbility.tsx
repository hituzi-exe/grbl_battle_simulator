import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentAbilityActions } from '../../../containers/Djeeta/currentAbilityContainer';

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

type CurrentAbilityProps = OwnProps & DjeetaState & CurrentAbilityActions;

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

export const CurrentAbility: React.SFC<any> = (props: CurrentAbilityProps & StylesProps) => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography color="textPrimary" gutterBottom className={classes.title}>
        アビリティ
      </Typography>
      <Divider light />
      {abilityList.map(({ icon, name, secondary }) => (
        <AbilityItem icon={icon} name={name} secondary={secondary} />
      ))}

      <Typography color="textPrimary" gutterBottom className={classes.title}>
        Exアビリティ
      </Typography>
      <Divider light />
      {/* //TODO onClickへ仮の割り当て。アビリティ一覧画面作成後に変更すること。 */}
      <ExAbilityItem name={props.exAbility} changingAbility={props.changingAbility} onClick={props.changeExAbility} />
      <LimitBounusItem lbclass={props.lbclass} />
    </Paper>
  );
};

interface AbilityItemProps {
  icon: string;
  name: string;
  secondary: string;
  changingAbility: string;
  onClick(v: string): void;
}

const AbilityItem: React.SFC<any> = (props: AbilityItemProps & CurrentAbilityActions) => {
  const { icon, name, secondary, ...other } = props;
  return (
    <React.Fragment key={name}>
      <ListItem button>
        <ListItemText primary={name} secondary={secondary} />
      </ListItem>
    </React.Fragment>
  );
};

const ExAbilityItem: React.SFC<any> = (props: AbilityItemProps & CurrentAbilityActions) => {
  const { icon, name, secondary, changingAbility, onClick, ...other } = props;
  return (
    <React.Fragment key={name}>
      <ListItem button>
        <ListItemText primary={name} secondary={secondary} />
        <Button variant={changingAbility === '' ? 'outlined' : 'contained'} color="primary" onClick={() => onClick('')}>
          <ChevronRight />
        </Button>
      </ListItem>
    </React.Fragment>
  );
};

interface LimitBounusItemProps {
  lbclass: number;
  onClick(v: string): void;
}

const LimitBounusItem: React.SFC<any> = (props: LimitBounusItemProps & CurrentAbilityActions) => {
  const { lbclass, onClick, ...other } = props;
  return (
    <React.Fragment key={name}>
      <ListItem button>
        <ListItemText primary={'Limit Bounus Class' + lbclass} />
        {/* //TODO onClickは仮置きのイベント。あとで置き換える。 */}
        <Button variant="outlined" color="primary" onClick={() => alert(lbclass)}>
          <ChevronRight />
        </Button>
      </ListItem>
    </React.Fragment>
  );
};
