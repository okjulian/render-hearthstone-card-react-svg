import React from "react";

const StylableCard = ({
  card: { title, id, rarity, set, cost, race, health, strength, text }
}) =>
  <svg viewBox="0 0 751 1041">
    <title>Card</title>
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
        <image
          id="GVG_096"
          type="MSBitmapLayer"
          x="117"
          y="78"
          width="563"
          height="563"
          href={`/static/${id}.jpg`}
          clipPath="url(#image-clip-path)"
        />
        <image
          id="mNeutral"
          type="MSBitmapLayer"
          x="0"
          y="0"
          width="764"
          height="1100"
          href="/static/mNeutral.png"
        />
        <g id="Gem" transform="translate(18.000000, 81.000000)">
          <image
            id="gem"
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="179"
            height="177"
            href="/static/gem.png"
          />
          <text
            id="value"
            stroke="#000000"
            strokeWidth="13px"
            fill="#D8D8D8"
            type="MSTextLayer"
            fontFamily="Belwe"
            paintOrder="stroke"
            fontSize="164"
            fontWeight="400"
            alignment="middle"
          >
            <tspan x="48.1914062" y="142" fill="#FFF">
              {cost}
            </tspan>
          </text>
        </g>
        <g id="Race" transform="translate(132.000000, 940.000000)">
          <image
            id="race"
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="529"
            height="106"
            href="/static/race.png"
          />
          <text
            id="Mech"
            stroke="#000000"
            strokeWidth="7px"
            fill="#D8D8D8"
            fontFamily="Belwe"
            paintOrder="stroke"
            fontSize="48"
            fontWeight="400"
            alignment="middle"
          >
            <tspan x="208.644531" y="79.9140625" fill="#FFF">
              {race}
            </tspan>
          </text>
        </g>
        <g id="Health" transform="translate(598.000000, 882.000000)">
          <image
            id="health"
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="167"
            height="218"
            href="/static/health.png"
          />
          <text
            id="value"
            stroke="#000000"
            strokeWidth="13px"
            fill="#D8D8D8"
            type="MSTextLayer"
            fontFamily="Belwe"
            paintOrder="stroke"
            fontSize="160"
            fontWeight="400"
            alignment="middle"
          >
            <tspan x="60" y="160" fill="#FFF">
              {health}
            </tspan>
          </text>
        </g>
        <g id="Attack" transform="translate(0.000000, 862.000000)">
          <image
            id="attack"
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="214"
            height="238"
            href="/static/attack.png"
          />
          <text
            id="value"
            stroke="#000000"
            strokeWidth="13px"
            fill="#D8D8D8"
            type="MSTextLayer"
            fontFamily="Belwe"
            paintOrder="stroke"
            fontSize="160"
            fontWeight="400"
            alignment="middle"
          >
            <tspan x="80" y="178" fill="#FFF">
              {strength}
            </tspan>
          </text>
        </g>
        <image
          id="rarity-common"
          type="MSBitmapLayer"
          x="329"
          y="606"
          width="146"
          height="146"
          href={`/static/rarity-${rarity}.png`}
        />
        <image
          id="title"
          type="MSBitmapLayer"
          x="91"
          y="544"
          width="608"
          height="144"
          href="/static/title.png"
        />
        <text
          x="400"
          y="625"
          fontSize="50px"
          textAnchor="middle"
          fill="white"
          stroke="black"
          strokeWidth="10px"
          paintOrder="stroke"
          letterSpacing="3px"
          fontFamily="Belwe"
          fontWeight="400"
        >
          {title}
        </text>
        <image
          id="bg-gvg"
          type="MSBitmapLayer"
          x="258"
          y="726"
          width="281"
          height="244"
          href={`/static/bg-${set}.png`}
        />
        <text
          x="130"
          y="826"
          width="520"
          height="230"
          fontSize="50px"
          fill="black"
          textAlign="center"
          color="black"
        >
          {text}
        </text>
      </g>
    </g>
    <style jsx>{`
      @font-face {
        font-family: 'Belwe';
        src: url('/static/belwe/BelweBoldBT.ttf') format('truetype');
      }
    `}</style>
  </svg>;

export default StylableCard;
