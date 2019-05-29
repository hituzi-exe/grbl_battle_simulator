import * as React from 'react';
import { DjeetaUIState } from '../../../states/DjeetaUIState';
import { DjeetaState } from '../../../states/djeetaState';
import { JobListActions } from '../../../containers/Djeeta/jobListContainer';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronRight from '@material-ui/icons/ChevronRight';

interface OwnProps {}

type JobListProps = OwnProps & DjeetaUIState & DjeetaState & JobListActions;

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
    id: '1',
    icon: 'https://example.com/api/icon/1.jpg',
    name: 'job1',
    secondary: 'hoge',
  },
  {
    id: '2',
    icon: 'https://example.com/api/icon/2.jpg',
    name: 'job2',
    secondary: 'hoge',
  },
  {
    id: '3',
    icon: 'https://example.com/api/icon/3.jpg',
    name: 'job3',
    secondary: 'hoge',
  },
  {
    id: '4',
    icon: 'https://example.com/api/icon/4.jpg',
    name: 'job4',
    secondary: 'hoge',
  },
];

export const JobList: React.SFC<any> = (props: JobListProps & StylesProps) => {
  const { classes, showJobList } = props;

  return (
    <Paper className={classes.paper} style={{ display: showJobList ? '' : 'none' }}>
      <List subheader={<ListSubheader>ジョブ一覧</ListSubheader>}>
        <Divider light />
        {abilityList.map(({ id, icon, name, secondary }) => (
          <AbilityItem id={id} icon={icon} name={name} secondary={secondary} selectJob={props.selectJob} />
        ))}
      </List>
    </Paper>
  );
};

interface AbilityItemProps {
  id: string;
  icon: string;
  name: string;
  secondary: string;
}

//TODO ジョブ表示用の表示項目にすること。
// 画像、ジョブ名、得意武器、タイプは必要。
const AbilityItem: React.SFC<any> = (props: AbilityItemProps & JobListActions) => {
  const { id, icon, name, secondary, selectJob, ...other } = props;
  return (
    <React.Fragment key={name}>
      <ListItem button onClick={() => selectJob(name)}>
        <ListItemText primary={name} secondary={secondary} />
        <ChevronRight color="action" />
      </ListItem>
    </React.Fragment>
  );
};
