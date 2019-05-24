import * as React from 'react';
import Grid from '@material-ui/core/Grid';

interface OwnProps {}

import { Character } from './Character';

export const Characters: React.SFC<any> = (props: any) => {
  return (
    <div>
      <Grid container spacing={16} justify="flex-start">
        <Grid item xs={3}>
          <Character />
        </Grid>
      </Grid>
    </div>
  );
};
