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
  <h1>
    Render a hearthstone card using React and SVG.
  </h1>
  <Card
    className="first"
    card={cardTitle}
    />
  <section className="introduction">
    <p>Ever wondered how to render a hearthstone card using React and SVG?</p>
    <p>What are you saying? That question is too specific? Well ... even if you've never asked yourself that, now you have the opportunity to learn about how to mix and mingle Hearthstone, SVG and React. Let's get right into it!</p>
    <p>We'll start from a couple of spare card assets, mix that styled text and end up with a beautiful SVG and React powered mech-goblin card.</p>
    <Progression
      before={<CardElements />}
      after={<Card card={card} />}
      />
  </section>
  <section>
    <h2>Layout card elements</h2>
    <p>The first task we have to do is to turn all the separate card elements like cost, frame and title into something that looks like a card. How do we do that? Well we have several options to layout elements and we have to choose one of them. We could arrange them using <code>position: relative</code>, we could use flexbox to compose those elements together or we could arrange them using SVG.</p>
    <p>CSS has some great tools to layout elements, like <code>position: relative;</code> or flexbox, but I think that SVG is just better suited to laying out the separate elements that make up our card. SVG has a wide array of editors that let us arrange stuff visually instead of playing with raw pixels or playing with flexbox properties. Also SVG markup can be easily embedded into React components.</p>
    <p>Composing together the elements and exporting the result we can achieve a neat card frame like the following:</p>
    <Progression
      before={<CardElements />}
      after={<StylableCard card={card} hide={['gem', 'race', 'health', 'strength', 'title', 'text', 'clip']} />}
      />
    <p>And here is the created React component:</p>
    <Snippet>{`
const Card = () =>
  <svg className="card" viewBox="0 0 751 1041">
    <title>Card</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" type="MSPage">
      <g id="Card" type="MSLayerGroup" transform="translate(-14.000000, -59.000000)">
        <image id="GVG_096" type="MSBitmapLayer" x="117" y="78" width="563" height="563" href={\`/static/\${id}.jpg\`} />
        <image id="mNeutral" type="MSBitmapLayer" x="0" y="0" width="764" height="1100" href="/static/mNeutral.png" />
        <g id="Gem" transform="translate(18.000000, 81.000000)">
          <image id="gem" type="MSBitmapLayer" x="0" y="0" width="179" height="177" href="/static/gem.png" />
        </g>
        <g id="Race" transform="translate(132.000000, 940.000000)">
          <image id="race" type="MSBitmapLayer" x="0" y="0" width="529" height="106" href="/static/race.png" />
        </g>
        <g id="Health" transform="translate(598.000000, 882.000000)">
          <image id="health" type="MSBitmapLayer" x="0" y="0" width="167" height="218" href="/static/health.png" />
        </g>
        <g id="Attack" transform="translate(0.000000, 862.000000)">
          <image id="attack" type="MSBitmapLayer" x="0" y="0" width="214" height="238" href="/static/attack.png" />
        </g>
        <image id="rarity-common" type="MSBitmapLayer" x="329" y="606" width="146" height="146" href={\`/static/rarity-\${rarity}.png\`} />
        <image id="title" type="MSBitmapLayer" x="91" y="544" width="608" height="144" href="/static/title.png" />
        <image id="bg-gvg" type="MSBitmapLayer" x="258" y="726" width="281" height="244" href={\`/static/bg-\${set}.png\`} />
      </g>
    </g>
  </svg>
  `}</Snippet>
    <p>SVG editors are so nice to lay stuff out visually, I did not miss <code>{'position: absolute;'}</code> or its pixels at all.</p>
  </section>
  <section>
    <h2>Round the card image</h2>
    <p>We have a card frame that looks almost exactly as a Hearthstone frame, except for the ugly square border around the card image. How can we remove that?</p>
    <p>Easy! Using SVG's <code>{'<clipPath />'}</code>. To clip an SVG element based on another, we can add it a clipPath attribute referencing another element. So we'll add <code>{'clipPath="url(#image-clip-path)"'}</code> to our Piloted Shredder image.</p>
    <Progression
      before={<StylableCard card={card} hide={['gem', 'race', 'health', 'strength', 'title', 'text', 'clip']} />}
      after={<StylableCard card={card} hide={['gem', 'race', 'health', 'strength', 'title', 'text']} />}
      />
    <Snippet>{`
const Card = () =>
  <svg className="card" viewBox="0 0 751 1041">
    <defs>
      <clipPath id="image-clip-path">
        <ellipse id="card-clip" cx="390.5" cy="356.5" rx="217.5" ry="292.5" />
      </clipPath>
    </defs>
    <g id="Card" type="MSLayerGroup" transform="translate(-14.000000, -59.000000)">
      <image clipPath="url(#image-clip-path)" id="GVG_096" type="MSBitmapLayer" x="117" y="78" width="563" height="563" href={\`/static/\${id}.jpg\`} />
      ...
    </g>
  </svg>
  `}</Snippet>
    <p>Thank god that border is gone!</p>
  </section>
  <section>
    <h2>Show variable text</h2>
    <p>This card frame only needs some card text and it will look exactly like a real card! Fortunately it{'\''}s very easy to add text to it, we just add some svg <code>text</code> tags and interpolate its value with JSX.</p>
    <Progression
      before={<StylableCard card={card} hide={['gem', 'race', 'health', 'strength', 'title', 'text']} />}
      after={<StylableCard card={card} noFont noFlow />}
      />
    <Snippet>{`
const Card = ({ card: { cost } }) =>
  <svg className="card" viewBox="0 0 751 1041">
    <g id="Card" type="MSLayerGroup" transform="translate(-14.000000, -59.000000)">
      ...
      <g id="Gem" transform="translate(18.000000, 81.000000)">
        <image id="gem" type="MSBitmapLayer" x="0" y="0" width="179" height="177" href="/static/gem.png" />
        <text id="value" stroke="#000000" strokeWidth="13px" fill="#D8D8D8" type="MSTextLayer" fontSize="164" fontWeight="400" alignment="middle">
          <tspan x="48.1914062" y="142" fill="#FFF">{cost}</tspan>
        </text>
      </g>
      ...
    </g>
  </svg>
  `}</Snippet>
    <p>The sky's the limit now that we've introduced variable text onto the card!</p>
  </section>
  <section>
    <h2>Styling the text</h2>
    <p>Sure, the card has some text now. But it looks nothing like the real hearthstone text. It needs some spice and style, so we{'\''}ll go ahead and add it.</p>
    <p>Turns out the magic sauce that makes hearthstone text look like hearthstone text is the Belwe font! We'll set the text to use this font family, give it a white fill and a thick black border and that's it!</p>
    <Progression
      before={<StylableCard card={card} noFont noFlow />}
      after={<StylableCard card={card} noFlow />}
      />
    <Snippet>{`
<text id="value" fontFamily="Belwe" stroke="#000000" strokeWidth="13px" fill="#D8D8D8" type="MSTextLayer" fontSize="164" fontWeight="400" alignment="middle">
  <tspan x="48.1914062" y="142" fill="#FFF">{cost}</tspan>
</text>
    `}</Snippet>
    <p>That's some good looking hearthstone looking text!</p>
  </section>
  <section>
    <h2>Making the title flow through</h2>
    <p>Now those are some really good looking cost, health and strength values! But that title looks too stiff, it doesn{'\''}t look quite right, it shouldn't be drawn in a straight line; so we{'\''}ll make it flow by following an imaginary squiggly line.</p>
    <p>Again SVG gives us the right tool for the job, this time in the form of <code>{'textPath'}</code>, who can make text be rendered along the shape of a <code>{'<path>'}</code>. So I created in my SVG editor a <code>{'<path'}</code> with <code>{'fill="none"'}</code> and referenced it in the title using <code>{'textPath'}</code>.</p>
    <Progression
      before={<StylableCard card={card} noFlow />}
      after={<StylableCard card={card} />}
      />
    <Snippet>{`
<image id="title" type="MSBitmapLayer" x="91" y="544" width="608" height="144" href="/static/title.png" />
<path d="M132.136068,658.415668 L158.602985,658.415668 L195.542113,654.574341 L239.403219,646.250954 L286.712401,636.537631 L330.569125,627.824309 L370.500212,621.544734 L417.380027,616.536918 L468.965349,612.62111 L514.245993,612.065751 L561.730426,611.499499 L603.168677,613.11738 L633.386442,620.9085" id="title-path" />
<text fontSize="50px" textAnchor="middle" fill="white" stroke="black" strokeWidth="10px" paintOrder="stroke" letterSpacing="3px" fontFamily="Belwe" fontWeight="400">
  <textPath className="text" startOffset="50%" xlinkHref="#title-path">{title}</textPath>
</text>
    `}</Snippet>
    <p>Title's got some sick flow now!</p>
  </section>
  <section>
    <h2>Wrapping up the text</h2>
    <p>We{'\''}ve been trying to ignore the fact that the card{'\''}s body text has html tags and does not wrap around the card edges. That{'\''}s the last detail that we need to make our bag of images and text look exactly like a hearthstone card.</p>
    <p>Using HTML this would be as simple as putting the card text inside a div, but there is not a simple way to make automatically wrapped text in SVG. Even though this cannot be easily done in SVG, we can effortlesly embed an HTML snippet in our SVG markup using <code>{`<foreignObject />`}</code>.</p>
    <p>Another thing we have to do is transform our HTML string into a react element. Fortunately this can be easily and safely done using <a href="https://github.com/aknuds1/html-to-react">html-to-react</a>.</p>
    <Progression
      before={<StylableCard card={card} />}
      after={<Card card={card} />}
      />
    <p>This is how we parse the card text string into a component and embed it using <code>{`<foreignObject />`}</code>.</p>
    <Snippet>{`
<image id="bg-gvg" type="MSBitmapLayer" x="258" y="726" width="281" height="244" href={\`/static/bg-\${set}.png\`} />
<foreignObject x="130" y="726" width="520" height="230" fontSize="50px" textAlign="center">
  <div className="text-container" xmlns="http://www.w3.org/1999/xhtml">
    {parser.parse(\`<div class="text" style="vertical-align: middle; height: 100%; display: table-cell;">\${text}</div>\`)}
  </div>
</foreignObject>
    `}</Snippet>
    <p>It's a wrap!</p>
  </section>
  <section>
    <p>We went from a few spare parts to a beautifully rendered Hearthstone card and learned some SVG and React tricks in the process. We learned that SVG is great at generating visual content, that React is great at giving dynamism to SVG and also saw that rendering a hearthstone card using both tools is really simple.</p>
    <p>Check out the <a href="https://github.com/JulianMayorga/eljuli/blob/master/components/Card.js">source code</a> if you want to see the final result!</p>
  </section>
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
