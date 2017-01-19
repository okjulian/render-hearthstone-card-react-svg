import React from 'react';

import Layout from '../components/Layout';
import GithubMark from '../components/GithubMark';

export default () => <Layout>
  <h1>El Juli</h1>
  <p>Makes digital stuff</p>
  <p><a href="http://github.com/JulianMayorga"><GithubMark /></a></p>
  <p><a href="/render-a-hearthstone-card-using-react-and-svg">Render a hearthstone card using React and SVG</a></p>
  <style jsx>{`
    :global(html), :global(body), :global(.globalContainer) {
      width: 100vw;
      height: 100vh;
    }
    p {
      margin: 0;
    }
    p+p {
      text-indent: 0;
    }
  `}</style>
</Layout>;
