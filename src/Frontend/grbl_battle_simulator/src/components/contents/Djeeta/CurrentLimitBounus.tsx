import * as React from 'react';
import { DjeetaUIState } from '../../../states/DjeetaUIState';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentLimitBounusActions } from '../../../containers/Djeeta/currentLimitBounusContainer';

import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';

import tmpIcon from '../../../images/tmpIcon.png';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    paper: {
      padding: theme.spacing.unit * 2,
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

//TODO
const limitBounusList = [
  {
    id: '1',
    icon: tmpIcon,
    name: 'lb1',
    secondary: 'hoge',
  },
  {
    id: '2',
    icon: tmpIcon,
    name: 'lb2',
    secondary: 'hoge',
  },
  {
    id: '3',
    icon: tmpIcon,
    name: 'lb3',
    secondary: 'hoge',
  },
  {
    id: '4',
    icon: tmpIcon,
    name: 'lb4',
    secondary: 'hoge',
  },
  {
    id: '5',
    icon: tmpIcon,
    name: 'lb5',
    secondary: 'hoge',
  },
  {
    id: '6',
    icon: tmpIcon,
    name: 'lb6',
    secondary: 'hoge',
  },
  {
    id: '2',
    icon: tmpIcon,
    name: 'lb2',
    secondary: 'hoge',
  },
  {
    id: '3',
    icon: tmpIcon,
    name: 'lb3',
    secondary: 'hoge',
  },
  {
    id: '4',
    icon: tmpIcon,
    name: 'lb4',
    secondary: 'hoge',
  },
  {
    id: '5',
    icon: tmpIcon,
    name: 'lb5',
    secondary: 'hoge',
  },
  {
    id: '6',
    icon: tmpIcon,
    name: 'lb6',
    secondary: 'hoge',
  },
  {
    id: '2',
    icon: tmpIcon,
    name: 'lb2',
    secondary: 'hoge',
  },
  {
    id: '3',
    icon: tmpIcon,
    name: 'lb3',
    secondary: 'hoge',
  },
  {
    id: '4',
    icon: tmpIcon,
    name: 'lb4',
    secondary: 'hoge',
  },
  {
    id: '5',
    icon: tmpIcon,
    name: 'lb5',
    secondary: 'hoge',
  },
  {
    id: '6',
    icon: tmpIcon,
    name: 'lb6',
    secondary: 'hoge',
  },
  {
    id: '2',
    icon: tmpIcon,
    name: 'lb2',
    secondary: 'hoge',
  },
  {
    id: '3',
    icon: tmpIcon,
    name: 'lb3',
    secondary: 'hoge',
  },
  {
    id: '4',
    icon: tmpIcon,
    name: 'lb4',
    secondary: 'hoge',
  },
  {
    id: '5',
    icon: tmpIcon,
    name: 'lb5',
    secondary: 'hoge',
  },
  {
    id: '6',
    icon: tmpIcon,
    name: 'lb6',
    secondary: 'hoge',
  },
  {
    id: '2',
    icon: tmpIcon,
    name: 'lb2',
    secondary: 'hoge',
  },
  {
    id: '3',
    icon: tmpIcon,
    name: 'lb3',
    secondary: 'hoge',
  },
  {
    id: '4',
    icon: tmpIcon,
    name: 'lb4',
    secondary: 'hoge',
  },
  {
    id: '5',
    icon: tmpIcon,
    name: 'lb5',
    secondary: 'hoge',
  },
  {
    id: '6',
    icon: tmpIcon,
    name: 'lb6',
    secondary: 'hoge',
  },
  {
    id: '2',
    icon: tmpIcon,
    name: 'lb2',
    secondary: 'hoge',
  },
  {
    id: '3',
    icon: tmpIcon,
    name: 'lb3',
    secondary: 'hoge',
  },
  {
    id: '4',
    icon: tmpIcon,
    name: 'lb4',
    secondary: 'hoge',
  },
  {
    id: '5',
    icon: tmpIcon,
    name: 'lb5',
    secondary: 'hoge',
  },
  {
    id: '6',
    icon: tmpIcon,
    name: 'lb6',
    secondary: 'hoge',
  },
];

interface OwnProps {}
interface StylesProps extends WithStyles<typeof styles> {}
type CurrentAbilityProps = OwnProps & DjeetaUIState & DjeetaState & CurrentLimitBounusActions & StylesProps;

export const CurrentLimitBounus: React.SFC<any> = (props: CurrentAbilityProps) => {
  const { classes, showLimitBounus } = props;

  return (
    <Paper className={classes.paper} style={{ display: showLimitBounus ? '' : 'none' }}>
      <Grid item container direction="row" justify="space-between">
        <Grid item>
          <Typography color="textPrimary" gutterBottom>
            Limit Bounus
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="textSecondary">★20/20</Typography>
        </Grid>
      </Grid>
      <Divider light />

      <Grid container direction="row">
        <Grid item xs={8}>
          <Grid container direction="row">
            {/* //TODO onClickへ仮の割り当て。アビリティ一覧画面作成後に変更すること。 */}
            {limitBounusList.map(({ id, icon, name, secondary }) => (
              <Grid item>
                <LimitBounusItem id={id} icon={icon} name={name} secondary={secondary} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Typography color="textPrimary" gutterBottom>
            能力強化一覧
          </Typography>
          {limitBounusList.map(({ id, icon, name, secondary }) => (
            <Typography color="textSecondary" gutterBottom>
              {name}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

interface LimitBounusItemProps {
  lbclass: number;
  onClick(v: string): void;
}

const LimitBounusItem: React.SFC<any> = (props: LimitBounusItemProps & CurrentLimitBounusActions) => {
  //const { lbclass, onClick, changeLimitBounus, ...other } = props;
  return (
    <Button>
      <Grid container direction="column">
        <Grid item>
          <img src={tmpIcon} alt="icon" />
        </Grid>
        <Grid item>
          <Typography color="textSecondary">★★★</Typography>
        </Grid>
      </Grid>
    </Button>
  );
};
