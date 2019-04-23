import * as React from 'react';
// import { HogeState } from '../../states/hogeState';
// import { HogeActions } from '../../containers/hogeContainer';
//import { CurrentJob } from './CurrentJob';
import CurrentJob from '../../../containers/Djeeta/currentJobContainer';
import CurrentAbility from '../../../containers/Djeeta/currentAbilityContainer';

interface OwnProps {}

// type HogeProps = OwnProps & HogeState & HogeActions;

// export const Djeeta: React.SFC<any> = (props: HogeProps) => {
export const Djeeta: React.SFC<any> = (props: any) => {
  return (
    <div>
      <CurrentJob />
      <CurrentAbility />
    </div>
  );
};
