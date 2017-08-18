// @flow

import React from 'react';

import Layout from '../../components/Layout';
import Step from "../../steps/1";

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

export default () => <Layout title="1">
  <Step card={card} />
</Layout>;


/**
 * TODO: Make Card declarative so I don't have to do this hide and noFlow nonsense
 * This should be <Card><Art id="GVG_096" /></Card>
 */
// export default props => <StylableCard noFlow noFont hide={["clip", "gem", "race", "health", "strength", "title", "text"]} {...props} />;

