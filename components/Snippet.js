// @flow

import React, { PropTypes } from 'react';

const Snippet = ({ children }: { children: any }) => <pre>
  <code className="language-js">
    {children}
  </code>
  <style jsx>{`
    pre {
      width: 80vw;
      max-height: 50vh;
      overflow: auto;
      line-height: 28px;
    }
    pre code {
      word-wrap: normal;
      white-space: pre;
    }
  `}</style>
</pre>;

Snippet.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Snippet;
