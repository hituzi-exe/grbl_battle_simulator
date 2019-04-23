import * as React from 'react';
// import { HogeState } from '../../states/hogeState';
// import { HogeActions } from '../../containers/hogeContainer';
//import { CurrentJob } from './CurrentJob';
import Grid from '@material-ui/core/Grid';

import CurrentJob from '../../../containers/Djeeta/currentJobContainer';
import CurrentAbility from '../../../containers/Djeeta/currentAbilityContainer';
import AbilityList from '../../../containers/Djeeta/abilityListContainer';

interface OwnProps {}

// type HogeProps = OwnProps & HogeState & HogeActions;

// export const Djeeta: React.SFC<any> = (props: HogeProps) => {
export const Djeeta: React.SFC<any> = (props: any) => {
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item>
          <CurrentJob />
          <CurrentAbility />
        </Grid>
        <Grid item>
          <AbilityList />
        </Grid>
        <Grid item>
          <AbilityList />
        </Grid>
      </Grid>
    </div>
  );
};
