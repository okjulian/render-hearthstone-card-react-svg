// @flow

import React, { PropTypes } from 'react';

const CardElements = () => <div className="cardElements">
  <div className="cardElement"><img src={require("../static/GVG_096.jpg")} alt="" /></div>
  <div className="cardElement"><img src={require("../static/mNeutral.png")} alt="" /></div>
  <div className="cardElement"><img src={require("../static/gem.png")} alt="" /></div>
  <div className="cardElement"><img src={require("../static/race.png")} alt="" /></div>
  <div className="cardElement"><img src={require("../static/health.png")} alt="" /></div>
  <div className="cardElement"><img src={require("../static/attack.png")} alt="" /></div>
  <div className="cardElement"><img src={require("../static/rarity-common.png")} alt="" /></div>
  <div className="cardElement"><img src={require("../static/title.png")} alt="" /></div>
  <div className="cardElement"><img src={require("../static/bg-gvg.png")} alt="" /></div>
  <style>{`
    .cardElements {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-grow: 1;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 20px;
    }
    .cardElement {
      width: 33.3%;
      height: 33.3%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cardElement img {
      width: 100%;
    }
  `}</style>
</div>;

export default CardElements;
