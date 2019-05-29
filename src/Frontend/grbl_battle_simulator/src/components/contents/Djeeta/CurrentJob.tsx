import * as React from 'react';
import { DjeetaUIState } from '../../../states/DjeetaUIState';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentJobActions } from '../../../containers/Djeeta/currentJobContainer';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import ChevronRight from '@material-ui/icons/ChevronRight';

interface OwnProps {}

type CurrentJobProps = OwnProps & DjeetaUIState & DjeetaState & CurrentJobActions;

interface StylesProps extends WithStyles<typeof styles> {}

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    paper: {
      padding: theme.spacing.unit * 2,
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

export const CurrentJob: React.SFC<any> = (props: CurrentJobProps & StylesProps) => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography color="textPrimary" gutterBottom>
        ジョブ
      </Typography>
      <Divider light />
      <Grid container spacing={8} alignItems="center">
        <Grid item>
          <Typography color="textSecondary">Rank</Typography>
        </Grid>

        <Grid item>
          <TextField
            id="standard-number"
            value={props.rank}
            onChange={e => props.changeRank(e.target.value)}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="none"
          />
        </Grid>
        <Grid item>
          <Typography color="inherit">{props.currentJob}</Typography>
        </Grid>
        <Grid item>
          <Typography color="inherit">LV{props.currentJobLv}</Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={16} alignItems="center">
        <Grid item xs>
          <img className={classes.img} alt="jobImg" src="/static/images/grid/complex.jpg" />
        </Grid>

        <Grid item xs={6} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <JobSutatus label="得意武器" value={props.forteWeapon1 + ',' + props.forteWeapon2} />
              <JobSutatus label="タイプ" value={props.jobType} />
              <JobSutatus label="HP" value={props.HP} />
              <JobSutatus label="攻撃力" value={props.attack} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="flex-end" spacing={16}>
        <Grid item>
          {/* //TODO onClickへは仮の割り当て。ジョブ一覧画面作成後に変更すること。 */}
          <Button size="small" color="primary" onClick={e => props.changeLimitBounus('')}>
            Limit Bounus
          </Button>
          <Button size="small" color="primary" onClick={e => props.changeJob('')}>
            Job Change
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

interface JobSutatusProps {
  label: string;
  value: string;
}

const JobSutatus: React.SFC<any> = (props: JobSutatusProps) => {
  const { label, value } = props;
  return (
    <div>
      <Grid item xs container direction="row" justify="space-between">
        <Grid item>
          <Typography color="textSecondary">{label}</Typography>
        </Grid>
        <Grid item>
          <Typography>{value}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
