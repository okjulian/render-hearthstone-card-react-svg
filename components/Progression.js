import React, { PropTypes } from 'react';

export const Arrow = () => <svg className="arrow" width="137" height="242" viewBox="0 0 137 242">
  <g fill="none">
    <path
      d="M10.8 15.4C10.8 9.9 14 8.6 17.9 12.5L123.5 118C127.4 122 127.2 128.2 123.2 131.9L18.1 229.8C14.1 233.6 10.8 232.1 10.8 226.6L10.8 15.4Z" // eslint-disable-line
      style={{ strokeWidth: 20, stroke: '#000' }}
      />
  </g>
</svg>;

const Progression = ({ before, after }) => <div className="progression">
  <div className="before">{before}</div>
  <Arrow />
  <div className="after">{after}</div>
  <style jsx>{`
    .progression {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .before, .after {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    :global(.arrow) {
      transform: scale(0.5);
    }
    @media (max-width: 425px) {
      .progression {
        display: block;
      }
      .before {
        width: 100%;
      }
      .after {
        width: 100%;
      }
      :global(.arrow) {
        width: 100%;
        height: 100px;
        transform: rotate(90deg) scale(0.5);
      }
    }
    @media (min-width: 425px) {
      .progression :global(.arrow) {
        padding: 10px;
      }
    }
  `}</style>
</div>;

Progression.propTypes = {
  before: PropTypes.node,
  after: PropTypes.node,
};

export default Progression;
