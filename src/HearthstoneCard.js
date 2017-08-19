import React from "react";
import { Parser } from "html-to-react";

import belwe from "../static/BelweBoldBT.ttf";

const parser = new Parser();

export const Card = ({ children }) =>
  <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 751 1041">
    <defs>
      <clipPath id="image-clip-path">
        <ellipse id="card-clip" cx="390.5" cy="356.5" rx="217.5" ry="292.5" />
      </clipPath>
    </defs>
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      type="MSPage"
    >
      <g
        id="Card"
        type="MSLayerGroup"
        transform="translate(-14.000000, -59.000000)"
      >
        {/*
      Rendering order is important.
      If we don't put Frame first, then it will not let us see the elements that are behind it.
      Order should always be: Image, Frame, Cost, Race, Health, Strength, Rarity, Title, Set and Text.
      We can solve this in different ways:
      * Put them in the correct place. This is what we are doing right now because it's the simplest option.
      * Use z-index
      * Reorder children by type
    */}
        {children}
      </g>
    </g>
    <style>{`
  @font-face {
    font-family: 'Belwe';
    src: url(${belwe}) format('truetype');
  }
`}</style>
  </svg>;

export const Frame = () =>
  <image
    id="mNeutral"
    type="MSBitmapLayer"
    x="0"
    y="0"
    width="764"
    height="1100"
    href={require("../static/mNeutral.png")}
  />;

export const Cost = ({ children, fontFamily }) =>
  <g id="Gem" transform="translate(18.000000, 81.000000)">
    <image
      id="gem"
      type="MSBitmapLayer"
      x="0"
      y="0"
      width="179"
      height="177"
      href={require("../static/gem.png")}
    />
    {children &&
      <text
        id="value"
        stroke="#000000"
        strokeWidth="13px"
        fill="#D8D8D8"
        type="MSTextLayer"
        fontFamily={fontFamily || "sans-serif"}
        paintOrder="stroke"
        fontSize="164"
        fontWeight="400"
        alignment="middle"
      >
        <tspan x="48.1914062" y="142" fill="#FFF">
          {children}
        </tspan>
      </text>}
  </g>;

export const Image = ({ id, clip }) =>
  <image
    id="GVG_096"
    type="MSBitmapLayer"
    x="117"
    y="78"
    width="563"
    height="563"
    href={require(`../static/${id}.jpg`)}
    clipPath={clip && "url(#image-clip-path)"}
  />;

export const Title = ({ children, fontFamily, flow }) =>
  <g>
    <image
      id="title"
      type="MSBitmapLayer"
      x="91"
      y="544"
      width="608"
      height="144"
      href={require("../static/title.png")}
    />
    <path
      d="M132.136068,658.415668 L158.602985,658.415668 L195.542113,654.574341 L239.403219,646.250954 L286.712401,636.537631 L330.569125,627.824309 L370.500212,621.544734 L417.380027,616.536918 L468.965349,612.62111 L514.245993,612.065751 L561.730426,611.499499 L603.168677,613.11738 L633.386442,620.9085"
      id="title-path"
    />
    {children &&
      <text
        x={flow ? "0" : "400"}
        y={flow ? "0" : "625"}
        fontSize="50px"
        textAnchor="middle"
        fill="white"
        stroke="black"
        strokeWidth="10px"
        paintOrder="stroke"
        letterSpacing="3px"
        fontFamily={fontFamily || "sans-serif"}
        fontWeight="400"
      >
        {flow
          ? <textPath
              className="text"
              startOffset="50%"
              xlinkHref="#title-path"
            >
              {children}
            </textPath>
          : children}
      </text>}
  </g>;

export const Rarity = ({ id }) =>
  <image
    id="rarity-common"
    type="MSBitmapLayer"
    x="329"
    y="606"
    width="146"
    height="146"
    href={require(`../static/rarity-${id}.png`)}
  />;

export const Set = ({ id }) =>
  <image
    id="bg-gvg"
    type="MSBitmapLayer"
    x="258"
    y="726"
    width="281"
    height="244"
    href={require(`../static/bg-${id}.png`)}
  />;

export const Text = ({ children, rich }) => {
  if (rich) {
    return (
      <foreignObject
        x="130"
        y="726"
        width="520"
        height="230"
        fontSize="50px"
        textAlign="center"
        color="black"
      >
        <div
          className="text-container"
          style={{
            textAlign: "center",
            display: "table",
            height: "100%",
            fontFamily: "serif",
            fontSize: 50,
            lineHeight: "initial"
          }}
        >
          {parser.parse(
            `<div class="text" style="vertical-align: middle; height: 100%; display: table-cell;">${children}</div>`
          )}
        </div>
      </foreignObject>
    );
  }
  return (
    <text
      x="130"
      y="826"
      width="520"
      height="230"
      fontSize="50px"
      fill="black"
      textAlign="center"
      color="black"
      fontFamily="serif"
      fontSize={50}
      lineHeight="initial"
    >
      {children}
    </text>
  );
};

export const Strength = ({ children, fontFamily }) =>
  <g id="Attack" transform="translate(0.000000, 862.000000)">
    <image
      id="attack"
      type="MSBitmapLayer"
      x="0"
      y="0"
      width="214"
      height="238"
      href={require("../static/attack.png")}
    />
    {children &&
      <text
        id="value"
        stroke="#000000"
        strokeWidth="13px"
        fill="#D8D8D8"
        type="MSTextLayer"
        fontFamily={fontFamily || "sans-serif"}
        paintOrder="stroke"
        fontSize="160"
        fontWeight="400"
        alignment="middle"
      >
        <tspan x="80" y="178" fill="#FFF">
          {children}
        </tspan>
      </text>}
  </g>;

export const Health = ({ children, fontFamily }) =>
  <g id="Health" transform="translate(598.000000, 882.000000)">
    <image
      id="health"
      type="MSBitmapLayer"
      x="0"
      y="0"
      width="167"
      height="218"
      href={require("../static/health.png")}
    />
    {children &&
      <text
        id="value"
        stroke="#000000"
        strokeWidth="13px"
        fill="#D8D8D8"
        type="MSTextLayer"
        fontFamily={fontFamily || "sans-serif"}
        paintOrder="stroke"
        fontSize="160"
        fontWeight="400"
        alignment="middle"
      >
        <tspan x="60" y="160" fill="#FFF">
          {children}
        </tspan>
      </text>}
  </g>;

export const Race = ({ children, fontFamily }) =>
  <g id="Race" transform="translate(132.000000, 940.000000)">
    <image
      id="race"
      type="MSBitmapLayer"
      x="0"
      y="0"
      width="529"
      height="106"
      href={require("../static/race.png")}
    />
    {children &&
      <text
        id="Mech"
        stroke="#000000"
        strokeWidth="7px"
        fill="#D8D8D8"
        fontFamily={fontFamily || "sans-serif"}
        paintOrder="stroke"
        fontSize="48"
        fontWeight="400"
        alignment="middle"
      >
        <tspan x="208.644531" y="79.9140625" fill="#FFF">
          {children}
        </tspan>
      </text>}
  </g>;
