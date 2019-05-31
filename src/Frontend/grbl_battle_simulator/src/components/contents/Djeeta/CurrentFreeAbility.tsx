import * as React from 'react';
import { DjeetaUIState } from '../../../states/DjeetaUIState';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentFreeAbilityActions } from '../../../containers/Djeeta/currentFreeAbilityContainer';

import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { AbilityItem } from './AbilityItem';
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
type CurrentFreeAbilityProps = OwnProps & DjeetaState & DjeetaUIState & CurrentFreeAbilityActions & StylesProps;

export const CurrentFreeAbility: React.SFC<any> = (props: CurrentFreeAbilityProps) => {
  const { classes, showCurrentFreeAility } = props;

  return (
    <Paper className={classes.paper} style={{ display: showCurrentFreeAility ? '' : 'none' }}>
      <Typography color="textPrimary" gutterBottom className={classes.title}>
        Freeアビリティ
      </Typography>
      <Divider light />
      {/* //TODO onClickへ仮の割り当て。アビリティ一覧画面作成後に変更すること。 */}
      <AbilityItem
        icon={tmpIcon}
        name={props.freeAbility1}
        changingAbility={props.changingAbility}
        onClick={props.changeFreeAbility1}
      />
      <AbilityItem
        icon={tmpIcon}
        name={props.freeAbility2}
        changingAbility={props.changingAbility}
        onClick={props.changeFreeAbility2}
      />
      <AbilityItem
        icon={tmpIcon}
        name={props.freeAbility3}
        changingAbility={props.changingAbility}
        onClick={props.changeFreeAbility3}
      />
    </Paper>
  );
};
