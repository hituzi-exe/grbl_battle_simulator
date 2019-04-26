import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import CurrentJob from '../../../containers/Djeeta/currentJobContainer';
import CurrentAbility from '../../../containers/Djeeta/currentAbilityContainer';
import CurrentExAbility from '../../../containers/Djeeta/currentExAbilityContainer';
import CurrentLimitBounus from '../../../containers/Djeeta/currentLimitBounusContainer';

import AbilityList from '../../../containers/Djeeta/abilityListContainer';
import JobList from '../../../containers/Djeeta/jobListContainer';

export const Djeeta: React.SFC<any> = (props: any) => {
  return (
    <div>
      <Grid container spacing={16} justify="flex-start">
        <Grid item xs={3}>
          <Grid container xs="auto" direction="column" spacing={16}>
            <Grid item key="CurrentJob">
              <CurrentJob />
            </Grid>
            <Grid item>
              <CurrentAbility />
            </Grid>
            <Grid item>
              <CurrentExAbility />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid container xs="auto" direction="column" spacing={16}>
            <Grid item>
              <JobList />
            </Grid>
            <Grid item>
              <AbilityList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container xs="auto" direction="column" spacing={16}>
            <Grid item>
              <CurrentLimitBounus />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
