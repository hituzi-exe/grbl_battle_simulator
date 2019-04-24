import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentAbilityActions } from '../../../containers/Djeeta/currentAbilityContainer';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import tmpIcon from '../../../images/tmpIcon.png';

interface OwnProps {}

type CurrentAbilityProps = OwnProps & DjeetaState & CurrentAbilityActions;

interface StylesProps extends WithStyles<typeof styles> {}

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
//TODO Storeへ移動すること
const abilityList = [
  {
    icon: 'https://example.com/api/icon/1.jpg',
    name: 'ability1',
    secondary:
      'ここにアビリティの詳しい説明文をだらだらと表示させる予定。三行以上は表示できるのかしら？書けば書くほどアビリティ欄が縦に伸びていく様子',
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
      <ListItem>
        <img src={tmpIcon} alt="icon" />
        <ListItemText primary={name} secondary={secondary} />
      </ListItem>
    </React.Fragment>
  );
};
