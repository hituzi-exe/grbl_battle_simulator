import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentLimitBounusActions } from '../../../containers/Djeeta/currentLimitBounusContainer';

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

type CurrentAbilityProps = OwnProps & DjeetaState & CurrentLimitBounusActions;

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

export const CurrentLimitBounus: React.SFC<any> = (props: CurrentAbilityProps & StylesProps) => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography color="textPrimary" gutterBottom className={classes.title}>
        Limit Bounus
      </Typography>
      <Divider light />
      {/* //TODO onClickへ仮の割り当て。アビリティ一覧画面作成後に変更すること。 */}
      <LimitBounusItem lbclass={props.lbclass} changeLimitBounus={props.changeLimitBounus} />
    </Paper>
  );
};

interface LimitBounusItemProps {
  lbclass: number;
  onClick(v: string): void;
}

const LimitBounusItem: React.SFC<any> = (props: LimitBounusItemProps & CurrentLimitBounusActions) => {
  const { lbclass, onClick, changeLimitBounus, ...other } = props;
  return (
    <React.Fragment key={name}>
      <ListItem button>
        <ListItemText primary={'Limit Bounus Class' + lbclass} />
        {/* //TODO onClickは仮置きのイベント。あとで置き換える。 */}
        <Button variant="outlined" color="primary" onClick={() => changeLimitBounus(name)}>
          <ChevronRight />
        </Button>
      </ListItem>
    </React.Fragment>
  );
};
