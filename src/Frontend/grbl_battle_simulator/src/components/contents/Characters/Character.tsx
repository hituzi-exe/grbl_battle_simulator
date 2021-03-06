import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentJobActions } from '../../../containers/Djeeta/currentJobContainer';

import CharacterHeader from './CharacterHeader';

import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';

import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

import tmpIcon from '../../../images/Character400x157.png';

export const styles = (theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

interface OwnProps {}
interface StylesProps extends WithStyles<typeof styles> {}
type CurrentCharacterProps = OwnProps & DjeetaState & CurrentJobActions & StylesProps;

export const Character: React.SFC<any> = (props: CurrentCharacterProps) => {
  //const { classes } = props;

  return (
    <Card>
      <CharacterHeader rarity={'R'} name={'name'} title={'title'} />

      <img src={tmpIcon} alt="icon" />
      {/* <CharacterMedia src={tmpIcon} /> */}

      <CardContent>
        <Typography component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      {/* <CardActions className={classes.actions} disableActionSpacing> */}
      <CardActions disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

// <CharacterStatus />
// <CharacterActions />

// interface CharacterProps {
//   rarity: 'R' | 'SR' | 'SSR';
//   title: string;
//   name: string;
//   type: '攻撃' | '防御' | '回復' | '特殊' | 'バランス';
// }
