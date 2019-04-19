import * as React from 'react';

import { SidebarState } from '../states/sidebarState';

import { Djeeta } from './contents/Djeeta';
import { Characters } from './contents/Characters';
import { Weapon } from './contents/Weapon';
import { Summon } from './contents/Summon';
import { Enemy } from './contents/Enemy';

import { Battle } from './contents/Battle';

import { Config } from './contents/Config';
import { Help } from './contents/Help';

interface OwnProps {}

type ContentProps = OwnProps & SidebarState;

const contents = (active: string) => {
  switch (active) {
    case 'Djeeta':
      return <Djeeta />;
    case 'Characters':
      return <Characters />;
    case 'Weapon':
      return <Weapon />;
    case 'Summon':
      return <Summon />;
    case 'Enemy':
      return <Enemy />;
    case 'Battle':
      return <Battle />;
    case 'Config':
      return <Config />;
    case 'Help':
      return <Help />;
  }
};

export const ContentComponent: React.SFC<any> = (props: ContentProps) => {
  const { active } = props;

  return <div> {contents(active)}</div>;
};
