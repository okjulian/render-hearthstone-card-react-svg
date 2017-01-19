// @flow

import React, { PropTypes } from 'react';

const CardElements = () => <div className="cardElements">
  <div className="cardElement"><img src="/static/GVG_096.jpg" alt="" /></div>
  <div className="cardElement"><img src="/static/mNeutral.png" alt="" /></div>
  <div className="cardElement"><img src="/static/gem.png" alt="" /></div>
  <div className="cardElement"><img src="/static/race.png" alt="" /></div>
  <div className="cardElement"><img src="/static/health.png" alt="" /></div>
  <div className="cardElement"><img src="/static/attack.png" alt="" /></div>
  <div className="cardElement"><img src="/static/rarity-common.png" alt="" /></div>
  <div className="cardElement"><img src="/static/title.png" alt="" /></div>
  <div className="cardElement"><img src="/static/bg-gvg.png" alt="" /></div>
  <style jsx>{`
    .cardElements {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-grow: 1;
      align-items: center;
    }
    .cardElement {
      width: 33%;
    }
    img {
      width: 100%;
    }
  `}</style>
</div>;

export default CardElements;
