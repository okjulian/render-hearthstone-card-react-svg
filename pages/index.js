// @flow

import React from 'react';
import Head from 'next/head';

import Card from '../components/Card';
import StylableCard from '../components/StylableCard';
import CardElements from '../components/CardElements';
import Snippet from '../components/Snippet';
import Progression from '../components/Progression';
import Layout from '../components/Layout';

const cardTitle = {
  id: 'GVG_096',
  title: 'React + SVG',
  text: 'Render a hearthstone card using <b>React</b> and <b>SVG</b>.',
  race: 'Tech',
  rarity: 'common',
  set: 'gvg',
  cost: 4,
  strength: 4,
  health: 3,
};

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

export default () => <Layout title="Render a hearthstone card using React and SVG">
  <Head>
    <link rel="stylesheet" href="/static/prism.css" />
    <script src="/static/prism.js" />
  </Head>
  <Progression
    before={<CardElements />}
    after={<Card card={card} />}
  />
  <style jsx>{`
    :global(body) {
      margin-top: 1em;
      margin-left: 3em;
      margin-right: 3em;
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 5em;
    }
    h1 {
      font-size: 3em;
    }
    p {
      width: 100%;
      font-size: 1.5em;
    }
    :global(.card.first) {
      height: 75vh;
    }
    :global(.cardElements) {
      width: 30vw;
    }
    :global(.progression) :global(.card) {
      width: 30vw;
    }
    :global(.stylable-card) {
      width: 30vw;
    }
    @media (min-width: 425px) {
      :global(body) {
        max-width: 70vw;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media (max-width: 425px) {
      :global(.stylable-card) {
        max-height: 90vh;
        width: 100%;
      }
      :global(.card) {
        max-height: 90vh;
        width: 100%;
      }
    }
  `}</style>
</Layout>;
