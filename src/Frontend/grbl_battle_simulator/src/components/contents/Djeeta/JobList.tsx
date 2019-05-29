import * as React from 'react';
import { DjeetaUIState } from '../../../states/DjeetaUIState';
import { DjeetaState } from '../../../states/djeetaState';
import { JobListActions } from '../../../containers/Djeeta/jobListContainer';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ChevronRight from '@material-ui/icons/ChevronRight';
import LooksOne from '@material-ui/icons/LooksOne';
import LooksTwo from '@material-ui/icons/LooksTwo';
import Looks3 from '@material-ui/icons/Looks3';
import Looks4 from '@material-ui/icons/Looks4';
import Filter1 from '@material-ui/icons/Filter1';
import Filter2 from '@material-ui/icons/Filter2';

interface OwnProps {}

type JobListProps = OwnProps & DjeetaUIState & DjeetaState & JobListActions;

interface StylesProps extends WithStyles<typeof styles> {}

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    indicator: {
      backgroundColor: 'white',
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
const jobList1 = [
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

const jobList2 = [
  {
    id: '10',
    icon: 'https://example.com/api/icon/1.jpg',
    name: 'job10',
    secondary: 'hoge',
  },
  {
    id: '11',
    icon: 'https://example.com/api/icon/2.jpg',
    name: 'job11',
    secondary: 'hoge',
  },
  {
    id: '12',
    icon: 'https://example.com/api/icon/3.jpg',
    name: 'job12',
    secondary: 'hoge',
  },
  {
    id: '13',
    icon: 'https://example.com/api/icon/4.jpg',
    name: 'job13',
    secondary: 'hoge',
  },
];

interface TabContainerProps {
  children?: React.ReactNode;
}
const TabContainer: React.SFC<any> = (props: TabContainerProps) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

export const JobList: React.SFC<any> = (props: JobListProps & StylesProps) => {
  const { classes, showJobList } = props;
  const [value, setValue] = React.useState(0);
  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.paper} style={{ display: showJobList ? '' : 'none' }}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
        <Tab icon={<LooksOne />} aria-label="1" />
        <Tab icon={<LooksTwo />} aria-label="2" />
        <Tab icon={<Looks3 />} aria-label="3" />
        <Tab icon={<Looks4 />} aria-label="4" />
        <Tab icon={<Filter1 />} aria-label="EX1" />
        <Tab icon={<Filter2 />} aria-label="EX2" />
      </Tabs>
      {value === 0 && (
        <List>
          {jobList1.map(({ id, icon, name, secondary }) => (
            <JobItem id={id} icon={icon} name={name} secondary={secondary} selectJob={props.selectJob} />
          ))}
        </List>
      )}
      {value === 1 && (
        <List>
          {jobList2.map(({ id, icon, name, secondary }) => (
            <JobItem id={id} icon={icon} name={name} secondary={secondary} selectJob={props.selectJob} />
          ))}
        </List>
      )}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
      {value === 3 && <TabContainer>Item Four</TabContainer>}
      {value === 4 && <TabContainer>Item EX1</TabContainer>}
      {value === 5 && <TabContainer>Item EX2</TabContainer>}
    </Paper>
  );
};

interface JobItemProps {
  id: string;
  icon: string;
  name: string;
  secondary: string;
}

//TODO ジョブ表示用の表示項目にすること。
// 画像、ジョブ名、得意武器、タイプは必要。
const JobItem: React.SFC<any> = (props: JobItemProps & JobListActions) => {
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
