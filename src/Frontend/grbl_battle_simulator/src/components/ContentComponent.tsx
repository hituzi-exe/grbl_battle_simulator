import * as React from 'react';

import { Route } from 'react-router-dom';
import { AppState } from '../states/AppState';

import { Summary } from './contents/Summary';

import { Djeeta } from './contents/Djeeta';
import { Characters } from './contents/Characters';
import { Weapon } from './contents/Weapon';
import { Summon } from './contents/Summon';
import { Enemy } from './contents/Enemy';

import { Battle } from './contents/Battle';

import { Config } from './contents/Config';
import { Help } from './contents/Help';

interface OwnProps {}

type ContentProps = OwnProps & AppState;

export const ContentComponent: React.SFC<any> = (props: ContentProps) => {
  return (
    <div>
      <Route exact path="/" component={Summary} />
      <Route path="/Djeeta" component={Djeeta} />
      <Route path="/Characters" component={Characters} />
      <Route path="/Weapon" component={Weapon} />
      <Route path="/Summon" component={Summon} />
      <Route path="/Enemy" component={Enemy} />
      <Route path="/Battle" component={Battle} />
      <Route path="/Config" component={Config} />
      <Route path="/Help" component={Help} />
    </div>
  );
};
