import * as React from 'react';
// import { HogeState } from '../../states/hogeState';
// import { HogeActions } from '../../containers/hogeContainer';
//import { CurrentJob } from './CurrentJob';
import CurrentJob from '../../../containers/Djeeta/currentJobContainer';
import Ability from '../../../containers/Djeeta/abilityContainer';

interface OwnProps {}

// type HogeProps = OwnProps & HogeState & HogeActions;

// export const Djeeta: React.SFC<any> = (props: HogeProps) => {
export const Djeeta: React.SFC<any> = (props: any) => {
  return (
    <div>
      <CurrentJob />
      <Ability />
    </div>
  );
};
