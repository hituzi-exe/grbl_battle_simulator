import * as React from 'react';
import { DjeetaUIState } from '../../../states/DjeetaUIState';
import { DjeetaState } from '../../../states/djeetaState';

import { CurrentExAbilityActions } from '../../../containers/Djeeta/currentExAbilityContainer';

import { AbilityItem } from './AbilityItem';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import tmpIcon from '../../../images/tmpIcon.png';

interface OwnProps {}
interface StylesProps extends WithStyles<typeof styles> {}

type CurrentExAbilityProps = OwnProps & DjeetaUIState & DjeetaState & CurrentExAbilityActions & StylesProps;

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
const exAbilityList = [
  {
    icon: 'https://example.com/api/icon/1.jpg',
    name: 'ability1',
    secondary: 'hoge',
  },
];

export const CurrentExAbility: React.SFC<any> = (props: CurrentExAbilityProps) => {
  const { classes, showCurrentExAility } = props;

  return (
    <Paper className={classes.paper} style={{ display: showCurrentExAility ? '' : 'none' }}>
      <Typography color="textPrimary" gutterBottom className={classes.title}>
        Exアビリティ
      </Typography>
      <Divider light />
      {/* //TODO onClickへ仮の割り当て。アビリティ一覧画面作成後に変更すること。 */}
      <AbilityItem
        icon={tmpIcon}
        name={props.exAbility}
        changingAbility={props.changingAbility}
        onClick={props.changeExAbility}
      />
    </Paper>
  );
};
