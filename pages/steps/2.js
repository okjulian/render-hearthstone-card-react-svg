// @flow

import React from 'react';

import Layout from '../../components/Layout';
import Step from "../../steps/2";

const card = {
  id: 'GVG_096',
  title: 'Piloted Shredder',
  text: '<b>Deathrattle:</b> Summon a random 2-Cost minion.',
  race: 'Mech',
  rarity: 'common',
  set: 'gvg',
  cost: 4,
  strength: 4,
  health: 3,
};

export default () => <Layout title="2">
  <Step card={card} />
</Layout>;
