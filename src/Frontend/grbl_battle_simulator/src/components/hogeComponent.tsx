import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';
import { hogeActions } from '../actions/hogeAction';
import Paperbase from './Paperbase'

interface OwnProps {}

type HogeProps = OwnProps & HogeState & HogeActions;

export class HogeComponent extends React.Component<HogeProps> {
  public static defaultProps: HogeProps = {
    name: "",
    email: "",
    updateName: hogeActions.updateName,
    updateEmail: hogeActions.updateEmail,
  };
  
  public render() {
    return (
      <Paperbase />
    );
  }
};