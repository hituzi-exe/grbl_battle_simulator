import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentAbilityActions } from '../../../containers/Djeeta/currentAbilityContainer';

import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import tmpIcon from '../../../images/tmpIcon.png';

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

interface OwnProps {}
interface StylesProps extends WithStyles<typeof styles> {}
type CurrentAbilityProps = OwnProps & DjeetaState & CurrentAbilityActions & StylesProps;

export const CurrentAbility: React.SFC<any> = (props: CurrentAbilityProps) => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Typography color="textPrimary" gutterBottom className={classes.title}>
        アビリティ
      </Typography>
      <Divider light />
      {props.abilityList.map(({ icon, name, secondary }) => (
        <AbilityItem icon={icon} name={name} secondary={secondary} />
      ))}
    </Paper>
  );
};

interface AbilityItemProps {
  icon: string;
  name: string;
  secondary: string;
  isChangingAbility: boolean;
  onClick(v: string): void;
}

//TODO AbilityList.tsxと共通化すること
const AbilityItem: React.SFC<any> = (props: AbilityItemProps & CurrentAbilityActions) => {
  //fix warning
  //const { icon, name, secondary } = props;
  const { name, secondary } = props;

  return (
    <React.Fragment key={name}>
      <ListItem>
        <img src={tmpIcon} alt="icon" />
        <ListItemText primary={name} secondary={secondary} />
      </ListItem>
    </React.Fragment>
  );
};
