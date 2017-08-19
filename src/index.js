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
import CardElements from "./CardElements";

export const StepZero = () => <CardElements />;

export const StepOne = () =>
  <Card>
    <Image id="GVG_096" />
    <Frame />
    <Cost />
    <Race />
    <Health />
    <Strength />
    <Rarity id="common" />
    <Title />
    <Set id="gvg" />
    <Text />
  </Card>;

export const StepTwo = () =>
  <Card>
    <Image id="GVG_096" clip />
    <Frame />
    <Cost />
    <Race />
    <Health />
    <Strength />
    <Rarity id="common" />
    <Title />
    <Set id="gvg" />
    <Text />
  </Card>;

export const StepThree = () =>
  <Card>
    <Image id="GVG_096" clip />
    <Frame />
    <Cost>4</Cost>
    <Race>Mech</Race>
    <Health>3</Health>
    <Strength>4</Strength>
    <Rarity id="common" />
    <Title>Piloted Shredder</Title>
    <Set id="gvg" />
    <Text>
      {"<b>Deathrattle:</b> Summon a random 2-Cost minion."}
    </Text>
  </Card>;

export const StepFour = () =>
  <Card>
    <Image id="GVG_096" clip />
    <Frame />
    <Cost fontFamily="Belwe">4</Cost>
    <Race fontFamily="Belwe">Mech</Race>
    <Health fontFamily="Belwe">3</Health>
    <Strength fontFamily="Belwe">4</Strength>
    <Rarity id="common" />
    <Title fontFamily="Belwe">Piloted Shredder</Title>
    <Set id="gvg" />
    <Text>
      {"<b>Deathrattle:</b> Summon a random 2-Cost minion."}
    </Text>
  </Card>;

export const StepFive = () =>
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
    <Text>
      {"<b>Deathrattle:</b> Summon a random 2-Cost minion."}
    </Text>
  </Card>;

export const StepSix = () =>
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

export * from "./HearthstoneCard";

export default {
  StepZero,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
};
