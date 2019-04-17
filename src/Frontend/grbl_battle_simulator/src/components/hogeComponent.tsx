import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';
import { hogeActions } from '../actions/hogeAction';

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
      <div>
        <div className="field">
          <input
            type="text"
            placeholder="name"
            value={this.props.name}
            onChange={(e) => this.props.updateName(e.target.value)}
            />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="email"
            value={this.props.email}
            onChange={(e) => this.props.updateEmail(e.target.value)}
            />
        </div>
      </div>
    );
  }
};