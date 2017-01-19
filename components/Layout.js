import React from 'react';
import Head from 'next/head';

export default ({ children, title }) => <div className="globalContainer">
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
      />
    <meta
      name="viewport"
      content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)"
      />
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/typeplate-starter-kit/3.0.2/css/typeplate.min.css"
      />
  </Head>
  {children}
  <style jsx>{`
    .globalContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    :global(p) + :global(p) {
      text-indent: 0;
      margin-top: 0;
    }
  `}</style>
</div>;
