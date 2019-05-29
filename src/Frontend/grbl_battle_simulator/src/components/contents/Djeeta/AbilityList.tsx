import * as React from 'react';
import { DjeetaUIState } from '../../../states/DjeetaUIState';
import { DjeetaState } from '../../../states/djeetaState';
import { AbilityListActions } from '../../../containers/Djeeta/abilityListContainer';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronRight from '@material-ui/icons/ChevronRight';

interface OwnProps {}

type AbilityListProps = OwnProps & DjeetaUIState & DjeetaState & AbilityListActions;

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
    name: 'ability1',
    secondary: 'hoge',
  },
  {
    id: '2',
    icon: 'https://example.com/api/icon/2.jpg',
    name: 'ability2',
    secondary: 'hoge',
  },
  {
    id: '3',
    icon: 'https://example.com/api/icon/3.jpg',
    name: 'ability3',
    secondary: 'hoge',
  },
  {
    id: '4',
    icon: 'https://example.com/api/icon/4.jpg',
    name: 'ability4',
    secondary: 'hoge',
  },
];

export const AbilityList: React.SFC<any> = (props: AbilityListProps & StylesProps) => {
  const { classes, showAbilityList } = props;

  return (
    <Paper className={classes.paper} style={{ display: showAbilityList ? '' : 'none' }}>
      <List subheader={<ListSubheader>アビリティ一覧</ListSubheader>}>
        <Button size="small" color="primary" onClick={e => props.closeAbility('')}>
          close
        </Button>
        <Divider light />
        {abilityList.map(({ id, icon, name, secondary }) => (
          <AbilityItem id={id} icon={icon} name={name} secondary={secondary} selectAbility={props.selectAbility} />
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

//TODO CurrentAbility.tsxと共通化すること
const AbilityItem: React.SFC<any> = (props: AbilityItemProps & AbilityListActions) => {
  const { id, icon, name, secondary, selectAbility, ...other } = props;
  return (
    <React.Fragment key={name}>
      <ListItem button onClick={() => selectAbility(name)}>
        <ListItemText primary={name} secondary={secondary} />
        <ChevronRight color="action" />
      </ListItem>
    </React.Fragment>
  );
};
