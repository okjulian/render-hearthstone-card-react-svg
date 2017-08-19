# Hearthstone card using React and SVG

Usage:

```
import React, { Component } from "react";

import {
  Card,
  Frame,
  Cost,
  Image,
  Title,
  Set,
  Rarity,
  Text,
  Strength,
  Health,
  Race
} from "./HearthstoneCard";

const PilotedShredder = () =>
  <Card>
    <Image id="GVG_096" clip />
    <Frame />
    <Cost fontFamily="Belwe">4</Cost>
    <Race fontFamily="Belwe">Mech</Race>
    <Health fontFamily="Belwe">3</Health>
    <Strength fontFamily="Belwe">4</Strength>
    <Rarity id="common" />
    <Title fontFamily="Belwe" flow>Piloted Shredder</Title>
    <Set id="gvg" />
    <Text rich>
      {"<b>Deathrattle:</b> Summon a random 2-Cost minion."}
    </Text>
  </Card>;
```
