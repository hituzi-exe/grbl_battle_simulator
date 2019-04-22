import * as React from 'react';
import { DjeetaState } from '../../../states/djeetaState';
import { CurrentJobActions } from '../../../containers/Djeeta/currentJobContainer';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

interface OwnProps {}

type CurrentJobProps = OwnProps & DjeetaState & CurrentJobActions;

export const styles = () =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });

export const CurrentJob: React.SFC<any> = (props: CurrentJobProps) => {
  return (
    <div>
      CurrentJob
      <div className="field">
        <input type="number" placeholder="rank" value={props.rank} onChange={e => props.changeRank(e.target.value)} />
      </div>
    </div>
  );
};
