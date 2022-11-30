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
    'gangplank',
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

  const agressiveChampions = [];
  const passiveChampions = [];

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
    if (character.id === 'Gangplank') {
      character.classType = 'DuelAssassin';
    }
    if (character.id === 'Kayle') {
      character.classType = 'BattleMage';
    }
    if (character.id === 'Singed') {
      character.classType = 'BattleMage';
    }
  });

  return newChampions;
};

export default useUpdate;
