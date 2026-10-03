import type { Lesson } from '../../domain';

export const C1: Lesson[] = [
  {
    id: 'lecture', lvl: 'C1', icon: '📰', t: 'Lire un texte suivi',
    goal: 'Lire un texte authentique sans romanisation, puis vérifier phrase par phrase.',
    blocks: [
      { h: 'Le texte', p: `<p class="lo" style="font-size:1.5rem;line-height:2.2">ຂ້ອຍຊື່ນາງ. ຂ້ອຍຢູ່ວຽງຈັນ. ທຸກມື້ຂ້ອຍຕື່ນຕອນຫົກໂມງເຊົ້າ ແລ້ວໄປຕະຫຼາດກັບແມ່. ຕອນທ່ຽງ ພວກເຮົາກິນເຂົ້າໜຽວກັບລາບ. ຕອນແລງ ຂ້ອຍມັກໄປຍ່າງຫຼິ້ນແຄມຂອງ.</p>Lis d'abord seul, à voix haute. Repère les espaces : ils séparent les idées, pas les mots.` },
      { h: 'Vérification phrase par phrase', ex: `ຂ້ອຍຊື່ນາງ|khoy xeu nang|je m'appelle Nang
ຂ້ອຍຢູ່ວຽງຈັນ|khoy you viang jan|j'habite à Vientiane
ທຸກມື້ຂ້ອຍຕື່ນຕອນຫົກໂມງເຊົ້າ|thouk meu khoy teun ton hok mong xao|chaque jour je me lève à 6h du matin
ແລ້ວໄປຕະຫຼາດກັບແມ່|laeo pai talat kap mae|puis je vais au marché avec ma mère
ຕອນທ່ຽງ ພວກເຮົາກິນເຂົ້າໜຽວກັບລາບ|ton thiang phouak hao kin khao niao kap lap|à midi, nous mangeons du riz gluant et du larb
ຕອນແລງ ຂ້ອຍມັກໄປຍ່າງຫຼິ້ນແຄມຂອງ|ton laeng khoy mak pai nyang lin khaem khong|le soir, j'aime me promener au bord du Mékong` },
      { h: 'Deuxième texte : la ville', p: `<p class="lo" style="font-size:1.5rem;line-height:2.2">ວຽງຈັນເປັນນະຄອນຫຼວງຂອງລາວ. ເມືອງນີ້ບໍ່ໃຫຍ່ປານໃດ ແຕ່ມີວັດງາມໆຫຼາຍແຫ່ງ. ຄົນລາວໃຈດີ ແລະ ມັກຍິ້ມ. ຖ້າເຈົ້າມາທ່ຽວ ຢ່າລືມກິນຕຳໝາກຫຸ່ງເດີ້!</p>`,
        ex: `ວຽງຈັນເປັນນະຄອນຫຼວງຂອງລາວ|viang jan pen nakhon louang khong lao|Vientiane est la capitale du Laos
ເມືອງນີ້ບໍ່ໃຫຍ່ປານໃດ|meuang ni bo nyai pan dai|cette ville n'est pas très grande
ແຕ່ມີວັດງາມໆຫຼາຍແຫ່ງ|tae mi vat ngam ngam lai haeng|mais il y a beaucoup de beaux temples
ຄົນລາວໃຈດີ ແລະ ມັກຍິ້ມ|khon lao jai di lae mak nyim|les Lao sont gentils et souriants
ຖ້າເຈົ້າມາທ່ຽວ ຢ່າລືມກິນຕຳໝາກຫຸ່ງເດີ້|tha jao ma thiao ya leum kin tam mak houng de|si tu viens visiter, n'oublie pas de manger une salade de papaye !`,
        tip: 'Relis ces textes chaque jour pendant une semaine, en lisant le lao avant de cliquer. Le jour où tu les comprends sans aide, tu as franchi un cap.' },
      { h: 'Interdire et conseiller', ex: `ຢ່າ|ya|ne … pas (impératif négatif)
ຢ່າລືມ|ya leum|n'oublie pas
ຢ່າເຮັດແນວນັ້ນ|ya het naeo nan|ne fais pas ça
ຫ້າມ|ham|interdit
ຄວນ|khouan|on devrait
ບໍ່ຄວນ|bo khouan|on ne devrait pas
ຄວນໄປແຕ່ເຊົ້າ|khouan pai tae xao|il vaut mieux y aller tôt` }
    ]
  },
  {
    id: 'proverbes', lvl: 'C1', icon: '🪷', t: 'Proverbes et sagesse',
    goal: 'Comprendre et placer les proverbes que tout Lao connaît.',
    blocks: [
      { h: 'Les classiques', ex: `ນ້ຳຂຶ້ນໃຫ້ຮີບຕັກ|nam kheun hai hip tak|puise quand l'eau monte (saisis ta chance)
ຊ້າໆໄດ້ພ້າສອງເຫຼັ້ມ|xa xa dai pha song lem|lentement, on obtient deux machettes (rien ne sert de courir)
ໄປໃຫ້ເຖິງ ມາໃຫ້ຮອດ|pai hai theung ma hai hot|va jusqu'au bout, reviens à bon port (persévère)
ໄກ່ເຫັນຕີນງູ ງູເຫັນນົມໄກ່|kai hen tin ngou ngou hen nom kai|la poule voit les pattes du serpent… (chacun connaît les secrets de l'autre)
ຢູ່ບ້ານທ່ານ ຢ່ານິ່ງດູດາຍ|you ban than ya ning dou dai|chez autrui, ne reste pas les bras croisés`,
        warn: 'Les proverbes ont des variantes selon les régions et les familles. Si un Lao te corrige, c\'est sa version : adopte-la avec le sourire.' },
      { h: 'Les expressions imagées du quotidien', ex: `ປາກຫວານ|pak van|beau parleur (bouche sucrée)
ໜ້າບາງ|na bang|susceptible, timide (visage fin)
ໜ້າໜາ|na na|culotté (visage épais)
ຫົວແຂງ|houa khaeng|têtu (tête dure)
ຫູເບົາ|hou bao|crédule (oreille légère)
ມືໄວ|meu vai|voleur (main rapide)
ຕາບອດໄດ້ແວ່ນ|ta bot dai vaen|donner de la confiture aux cochons (l'aveugle reçoit des lunettes)` },
      { h: 'La philosophie bouddhiste au quotidien', ex: `ບຸນ|boun|mérite (karma positif)
ບາບ|bap|péché, mauvais karma
ກຳ|kam|karma
ເປັນກຳຂອງເຂົາ|pen kam khong khao|c'est son karma
ທຳບຸນໄດ້ບຸນ|tham boun dai boun|qui fait le bien reçoit le bien
ບໍ່ເປັນຫຍັງ|bo pen nyang|ce n'est rien (lâcher prise)`,
        tip: 'Placer un proverbe au bon moment impressionne beaucoup plus qu\'une grammaire parfaite. Commence par « ຊ້າໆໄດ້ພ້າສອງເຫຼັ້ມ » : il est connu de tous et toujours bien reçu.' }
    ]
  },
  {
    id: 'soutenu', lvl: 'C1', icon: '🎩', t: 'Le registre soutenu',
    goal: 'Comprendre le lao des médias, des discours et de l\'administration.',
    blocks: [
      { h: 'Oral courant vs soutenu', p: `Le lao formel emprunte massivement au <b>pali et au sanskrit</b>, comme le français au latin. On le trouve à la télévision, dans les journaux, à l'administration et dans les discours.`,
        ex: `ຮັບປະທານ|hap pa than|manger (soutenu ; oral : ກິນ)
ພັກຜ່ອນ|phak phon|se reposer (oral : ນອນ)
ເສຍຊີວິດ|sia xivit|décéder (oral : ຕາຍ)
ທີ່ພັກອາໄສ|thi phak asai|domicile (oral : ບ້ານ)
ບໍ່ສະບາຍ|bo sabai|être souffrant (oral : ເຈັບ)
ງົບປະມານ|ngop pa man|budget` },
      { h: 'Les formules officielles', ex: `ຮຽນທ່ານ|hian than|Monsieur/Madame (en-tête de lettre)
ດ້ວຍຄວາມເຄົາລົບ|douay khouam khao lop|avec respect (formule finale)
ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ|sathalanalat paxathipatai paxaxon lao|République démocratique populaire lao
ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນະຖາວອນ|santiphap ekalat paxathipatai ekaphap vatthanathavon|devise nationale : paix, indépendance, démocratie, unité, prospérité
ກະຊວງ|kaxouang|ministère
ລັດຖະບານ|latthaban|gouvernement` },
      { h: 'Le vocabulaire des médias', ex: `ຂ່າວ|khao|nouvelles
ເສດຖະກິດ|setthakit|économie
ສັງຄົມ|sangkhom|société
ການສຶກສາ|kan seuksa|éducation
ສິ່ງແວດລ້ອມ|sing vaet lom|environnement
ພັດທະນາ|phatthana|développer
ປະຊາຊົນ|paxaxon|peuple, population
ກອງປະຊຸມ|kong paxoum|réunion, conférence` },
      { h: 'Le vocabulaire royal et religieux', p: `Pour les moines, un vocabulaire spécial existe (ລາຊາສັບ). On ne te demandera pas de le produire, mais savoir le reconnaître est précieux.`,
        ex: `ສະເຫວີຍ|savoey|manger (pour un moine)
ຈຳວັດ|jamvat|dormir (pour un moine)
ອາຕະມາ|atama|je (dit par un moine)
ຍາທ່ານ|nya than|vénérable (s'adresser à un moine)`,
        warn: 'Utiliser un mot soutenu dans un contexte familier sonne ridicule ou ironique. « ຮັບປະທານ » au resto avec des amis fera rire tout le monde !' }
    ]
  },
  {
    id: 'dialectes', lvl: 'C1', icon: '🗺️', t: 'Régions et dialectes',
    goal: 'Savoir que le lao varie selon les régions et ne pas être déstabilisé.',
    blocks: [
      { h: 'Un pays, plusieurs lao', p: `Ce cours enseigne le <b>lao de Vientiane</b>, norme de facto (télévision, administration). Mais les tons et une partie du vocabulaire varient :<br>• <b>Nord</b> (Luang Prabang) : mélodie très différente, chantante, et quelques mots propres.<br>• <b>Centre</b> (Vientiane, Khammouane) : la référence.<br>• <b>Sud</b> (Savannakhet, Paksé, Champassak) : tons différents, débit souvent plus rapide.<br>• <b>Isan</b> (Thaïlande) : lao très proche, mêlé de thaï.<br>Le Laos compte aussi environ <b>50 ethnies officielles</b> (Hmong, Khmu, Tai Dam…) avec leurs propres langues.` },
      { h: 'Parler neutre', warn: 'Ces variations sont réelles mais complexes : n\'essaie pas d\'imiter un accent régional. Parle le lao de Vientiane : il est compris partout et perçu comme neutre.' },
      { h: 'Réagir quand tu ne comprends pas', ex: `ເວົ້າຊ້າໆແດ່|vao xa xa dae|parle lentement, s'il te plaît
ເວົ້າອີກເທື່ອໜຶ່ງໄດ້ບໍ?|vao ik theua neung dai bo?|tu peux répéter ?
ໝາຍຄວາມວ່າແນວໃດ?|mai khouam va naeo dai?|ça veut dire quoi ?
ສຳນຽງແຂວງໃດ?|samniang khaeng dai?|c'est l'accent de quelle province ?
ຄົນແຂວງໃດ?|khon khaeng dai?|tu viens de quelle province ?` }
    ]
  },
  {
    id: 'thai', lvl: 'C1', icon: '🇹🇭', t: 'Lao et thaï : les faux amis',
    goal: 'Comprendre la proximité avec le thaï et éviter les confusions vexantes.',
    blocks: [
      { h: 'Langues sœurs', p: `Le lao et le thaï sont très proches : environ 70 % de vocabulaire commun et une grammaire quasi identique. Beaucoup de Lao comprennent le thaï grâce à la télévision thaïe. <b>Mais l'inverse est rarement vrai</b>, et parler thaï à un Lao peut être perçu comme condescendant.` },
      { h: 'Différences du quotidien', ex: `ຂອບໃຈ|khop jai|merci (thaï : khop khoun)
ບໍ່ເປັນຫຍັງ|bo pen nyang|pas grave (thaï : mai pen rai)
ບໍ່|bo|non (thaï : mai)
ແຊບ|xaep|délicieux (thaï : aroi)
ເວົ້າ|vao|parler (thaï : phout)
ງາມ|ngam|beau (thaï : souay)
ຫຼາຍ|lai|beaucoup (thaï : mak)
ເຂົ້າໜຽວ|khao niao|riz gluant (même mot !)`,
        warn: 'Ne dis jamais à un Lao que le lao est « un dialecte du thaï ». C\'est une langue nationale à part entière, avec sa propre écriture, et le sujet est très sensible.' },
      { h: 'Les faux amis piégeux', ex: `ແຊບ|xaep|délicieux (en Isan aussi ; pas en thaï central)
ມ່ວນ|mouan|amusant (en thaï : rare)
ເຊົາ|xao|arrêter (en thaï : louer)`,
        tip: 'Si tu as appris le thaï avant, tu as une longueur d\'avance, mais « laoïse » systématiquement : bo plutôt que mai, xaep plutôt que aroi. Les Lao apprécient énormément cet effort.' }
    ]
  }
];
