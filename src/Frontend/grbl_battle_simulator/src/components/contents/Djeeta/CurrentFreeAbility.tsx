import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentFreeAbilityActions } from '../../../containers/Djeeta/currentFreeAbilityContainer';

import { AbilityItem } from './AbilityItem';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

interface OwnProps {}

type CurrentFreeAbilityProps = OwnProps & DjeetaState & CurrentFreeAbilityActions;

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

export const CurrentFreeAbility: React.SFC<any> = (props: CurrentFreeAbilityProps & StylesProps) => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography color="textPrimary" gutterBottom className={classes.title}>
        Freeアビリティ
      </Typography>
      <Divider light />
      {/* //TODO onClickへ仮の割り当て。アビリティ一覧画面作成後に変更すること。 */}
      <AbilityItem
        name={props.freeAbility1}
        changingAbility={props.changingAbility}
        onClick={props.changeFreeAbility1}
      />
      <AbilityItem
        name={props.freeAbility2}
        changingAbility={props.changingAbility}
        onClick={props.changeFreeAbility2}
      />
      <AbilityItem
        name={props.freeAbility3}
        changingAbility={props.changingAbility}
        onClick={props.changeFreeAbility3}
      />
    </Paper>
  );
};
