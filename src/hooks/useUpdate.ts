import { ICharacter } from './../models/ICharacter';

const useUpdate = ({ champions }: { champions: ICharacter[] | [] }) => {
  const newChampions = JSON.parse(JSON.stringify(champions));

  const juggerWarriors = [
    'aatrox',
    'darius',
    'DrMundo',
    'garen',
    'illaoi',
    'mordekaiser',
    'nasus',
    'sett',
    'shyvana',
    'gnar',
    'trundle',
    'udyr',
    'urgot',
    'volibear',
    'yorick',
  ];
  const diverWarriors = [
    'kled',
    'Camille',
    'diana',
    'elise',
    'Belveth',
    'hecarim',
    'irelia',
    'JarvanIV',
    'leeSin',
    'olaf',
    'pantheon',
    'rekSai',
    'renekton',
    'rengar',
    'skarner',
    'vi',
    'warwick',
    'MonkeyKing',
    'XinZhao',
  ];
  const battleMage = [
    'gragas',
    'kayle',
    'teemo',
    'singed',
    'azir',
    'anivia',
    'AurelionSol',
    'cassiopeia',
    'karthus',
    'malzahar',
    'rumble',
    'ryze',
    'swain',
    'taliyah',
    'viktor',
    'vladimir',
  ];
  const artMage = ['jayce', 'lux', 'varus', 'Velkoz', 'xerath', 'ziggs', 'heimerdinger'];
  const boomMage = [
    'lillia',
    'kennen',
    'fiddlesticks',
    'Ahri',
    'annie',
    'brand',
    'karma',
    'leblanc',
    'lissandra',
    'lux',
    'neeko',
    'orianna',
    'seraphine',
    'sylas',
    'syndra',
    'TwistedFate',
    'veigar',
    'vex',
    'zoe',
  ];
  const duelsAssassins = [
    'Gangplank',
    'fiora',
    'gwen',
    'jax',
    'kSante',
    'kayn',
    'masterYi',
    'nilah',
    'riven',
    'sylas',
    'tryndamere',
    'viego',
    'yasuo',
    'yone',
  ];
  const moveAssassins = [
    'nidalee',
    'quinn',
    'graves',
    'akali',
    'akshan',
    'diana',
    'ekko',
    'evelynn',
    'fizz',
    'kassadin',
    'katarina',
    'khazix',
    'kayn',
    'nocturne',
    'pyke',
    'qiyana',
    'rengar',
    'shaco',
    'talon',
    'yone',
    'zed',
  ];
  const controlSupport = ['bard', 'ivern', 'morgana', 'neeko', 'pyke', 'rakan', 'thresh', 'zyra'];
  const buffSupport = [
    'zilean',
    'janna',
    'karma',
    'lulu',
    'nami',
    'Renata',
    'senna',
    'seraphine',
    'sona',
    'soraka',
    'taric',
    'yuumi',
  ];
  const diverTanks = [
    'Chogath',
    'alistar',
    'Amumu',
    'leona',
    'malphite',
    'maokai',
    'nautilus',
    'nunu',
    'ornn',
    'rammus',
    'rell',
    'sejuani',
    'sion',
    'zac',
  ];
  const deffTanks = [
    'braum',
    'blitzcrank',
    'galio',
    'kSante',
    'poppy',
    'shen',
    'TahmKench',
    'taric',
  ];

  const agressiveChampions = [
    'aatrox',
    'ahri',
    'akali',
    'akshan',
    'amumu',
    'bard',
    'blitzcrank',
    'brand',
    'camille',
    'darius',
    'diana',
    'draven',
    'ekko',
    'evelynn',
    'ezreal',
    'fiora',
    'fizz',
    'gwen',
    'hecarim',
    'irelia',
    'jax',
    'anivia',
    'ashe',
    'azir',
    'kalista',
    'khazix',
    'katarina',
    'kindred',
    'kled',
    'leblanc',
    'leesin',
    'leona',
    'lillia',
    'lucian',
    'lux',
    'masteryi',
    'mordekaiser',
    'nautilus',
    'neeko',
    'nidalee',
    'illaoi',
    'graves',
    'gnar',
    'garen',
    'gangplank',
    'nilah',
    'olaf',
    'nocturne',
    'ornn',
    'pantheon',
    'poppy',
    'pyke',
    'qiyana',
    'quinn',
    'reksai',
    'rakan',
    'renekton',
    'rell',
    'rengar',
    'riven',
    'samira',
    'senna',
    'sett',
    'shaco',
    'sivir',
    'swain',
    'sylas',
    'tahmkench',
    'taliyah',
    'talon',
    'taric',
    'thresh',
    'tristana',
    'trundle',
    'tryndamere',
    'udyr',
    'urgot',
    'vayne',
    'vex',
    'vi',
    'viego',
    'vladimir',
    'volibear',
    'warwick',
    'monkeyking',
    'xayah',
    'xerath',
    'xinzhao',
    'yasuo',
    'yone',
    'zac',
    'zed',
    'ziggs',
    'zyra',
    'zoe',
  ];
  const passiveChampions = [
    'lissanda',
    'zilean',
    'zeri',
    'yorick',
    'shen',
    'sejuani',
    'anivia',
    'aphelios',
    'ashe',
    'aurelionsol',
    'azir',
    'braum',
    'chogath',
    'braum',
    'heimerdinger',
    'ivern',
    'jinx',
    'karma',
    'karthus',
    'kayle',
    'kennen',
    'kogmaw',
    'lulu',
    'malphite',
    'malzahar',
    'maokai',
    'missfortune',
    'morgana',
    'nasus',
    'nami',
    'gragas',
    'nunu',
    'orianna',
    'renata',
    'rumble',
    'ryze',
    'seraphine',
    'shyvana',
    'singed',
    'sion',
    'skarner',
    'sona',
    'soraka',
    'syndra',
    'teemo',
    'twistedfate',
    'twitch',
    'veigar',
    'varus',
    'velkoz',
    'viktor',
    'yuumi',
  ];
  const normalChampions = [
    'zyra',
    'zilean',
    'ziggs',
    'zeri',
    'yorick',
    'yone',
    'yasuo',
    'xerath',
    'xayah',
    'warwick',
    'volibear',
    'vladimir',
    'vex',
    'velkoz',
    'vayne',
    'varus',
    'urgot',
    'udyr',
    'twitch',
    'twistedfate',
    'tryndamere',
    'teemo',
    'taric',
    'tahmkench',
    'syndra',
    'sett',
    'skarner',
    'sivir',
    'sion',
    'singed',
    'shyvana',
    'shen',
    'seraphine',
    'senna',
    'sejuani',
    'ryze',
    'rell',
    'rumble',
    'riven',
    'renekton',
    'renata',
    'nilah',
    'rammus',
    'poppy',
    'ornn',
    'neeko',
    'nautilus',
    'nasus',
    'nami',
    'morgana',
    'mordekaiser',
    'missfortune',
    'lux',
    'lucian',
    'lissanda',
    'leona',
    'kogmaw',
    'kennen',
    'khazix',
    'chogath',
    'kayn',
    'aphelios',
    'kassadin',
    'anivia',
    'irelia',
    'gwen',
    'aatrox',
    'kaisa',
    'ksante',
    'jhin',
    'jayce',
    'jarvaniv',
    'alistar',
    'anivia',
    'belveth',
    'caitlyn',
    'cassiopeia',
    'corki',
    'drmundo',
    'elise',
    'fiddlesticks',
    'galio',
    'gangplank',
    'garen',
    'gragas',
    'gnar',
    'graves',
    'illaoi',
  ];

  newChampions.forEach((character: ICharacter) => {
    if (character.tags.some((tag: string) => tag === 'Fighter')) {
      if (juggerWarriors.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'JuggernautWarrior';
      }
      if (diverWarriors.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'DiverWarrior';
      }
    }
    if (character.tags.some((tag: string) => tag === 'Assassin')) {
      if (duelsAssassins.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'DuelAssassin';
      }
      if (moveAssassins.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'MoveAssassin';
      }
    }
    if (character.tags.some((tag: string) => tag === 'Mage')) {
      if (battleMage.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'BattleMage';
      }
      if (artMage.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'ArtMage';
      }
      if (boomMage.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'BoomMage';
      }
    }
    if (character.tags.some((tag: string) => tag === 'Tank')) {
      if (diverTanks.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'DiverTank';
      }
      if (deffTanks.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'DeffTank';
      }
    }
    if (character.tags.some((tag: string) => tag === 'Marksman')) {
      character.classType = 'Marksman';
    }
    if (character.tags.some((tag: string) => tag === 'Support')) {
      if (controlSupport.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'ControlSupport';
      }
      if (buffSupport.some((el) => el.toLowerCase() === character.id.toLowerCase())) {
        character.classType = 'BuffSupport';
      }
    }
    character.aggressive = [];
  });

  newChampions.forEach((character: ICharacter) => {
    if (agressiveChampions.includes(character.id.toLowerCase())) {
      character.aggressive.push('aggressive');
    }
    if (passiveChampions.includes(character.id.toLowerCase())) {
      character.aggressive.push('passive');
    }
    if (normalChampions.includes(character.id.toLowerCase())) {
      character.aggressive.push('normal');
    }
  });

  return newChampions;
};

export default useUpdate;
