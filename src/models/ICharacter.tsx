export interface ICharacter {
  version: string | number;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: IInfo;
  image: IImage;
  tags: string[];
  partype: string;
  stats: IStats;
  classType?: string;
  aggressive: string[];
}

type IStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

type IInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

type IImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
