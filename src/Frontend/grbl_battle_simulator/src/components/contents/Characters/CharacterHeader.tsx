import * as React from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import MoreVertIcon from '@material-ui/icons/MoreVert';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: 16,
      display: 'flex',
      alignItems: 'center',
    },
    content: {
      flex: '1 1 auto',
    },
    action: {
      flex: '0 0 auto',
      alignSelf: 'flex-start',
      marginTop: -8,
      marginRight: -8,
    },
    rarity: {
      marginRight: 16,
    },
  });

interface StylesProps extends WithStyles<typeof styles> {}
interface CharacterProps {
  rarity: 'R' | 'SR' | 'SSR';
  title: string;
  name: string;
  type: '攻撃' | '防御' | '回復' | '特殊' | 'バランス';
}

const CharacterHeader: React.SFC<any> = (props: CharacterProps & StylesProps) => {
  const { rarity, title, name, classes } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.rarity}>
        {/* TODO R,SR,SSRの画像表示するように。 */}
        <Avatar aria-label="Recipe">{rarity}</Avatar>
      </Grid>
      <Grid item className={classes.content}>
        <Typography variant="subtitle2" color="textSecondary">
          [{title}]
        </Typography>
        <Typography variant="body1">{name}</Typography>
      </Grid>
      <Grid item className={classes.action}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CharacterHeader);
