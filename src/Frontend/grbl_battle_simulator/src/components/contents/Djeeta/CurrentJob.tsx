import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentJobActions } from '../../../containers/Djeeta/currentJobContainer';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ChevronRight from '@material-ui/icons/ChevronRight';

interface OwnProps {}

type CurrentJobProps = OwnProps & DjeetaState & CurrentJobActions;

interface StylesProps extends WithStyles<typeof styles> {}

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    paper: {
      maxWidth: 360,
      maxHeight: 360,
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
      <Grid item xs container direction="column" spacing={16}>
        <Grid container spacing={8} alignItems="center">
          <Grid item>
            <Typography color="textSecondary">Rank</Typography>
          </Grid>

          <Grid item xs>
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
            <Typography color="inherit">LV20</Typography>
          </Grid>
        </Grid>

        <Grid container direction="row" spacing={16} alignItems="center">
          <Grid item xs>
            <img className={classes.img} alt="jobImg" src="/static/images/grid/complex.jpg" />
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <JobSutatus label="得意武器" value="剣,斧" />
                <JobSutatus label="タイプ" value="特殊" />
                <JobSutatus label="HP" value="999" />
                <JobSutatus label="攻撃力" value="9999" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justify="flex-end" spacing={16}>
          <Grid item>
            <Button size="small" color="inherit" onClick={e => props.changeJob('')}>
              ジョブ選択
              <ChevronRight />
            </Button>
          </Grid>
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
