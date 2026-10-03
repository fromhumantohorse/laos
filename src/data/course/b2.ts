import type { Lesson } from '../../domain';

export const B2: Lesson[] = [
  {
    id: 'jai', lvl: 'B2', icon: '❤️', t: 'Les expressions en ໃຈ',
    goal: 'Comprendre la psychologie lao à travers les expressions du « cœur ».',
    blocks: [
      { h: 'Le cœur, centre de tout', p: `Là où le français utilise des mots abstraits, le lao combine <b>ໃຈ</b> (jai) avec un adjectif ou un verbe. Ordre : <b>ໃຈ + X</b> décrit un caractère durable, <b>X + ໃຈ</b> décrit une émotion passagère.`,
        ex: `ໃຈດີ|jai di|gentil (caractère)
ດີໃຈ|di jai|content (émotion)
ໃຈຮ້ອນ|jai hon|impulsif
ຮ້ອນໃຈ|hon jai|anxieux, pressé` },
      { h: 'Le caractère', ex: `ໃຈກວ້າງ|jai kwang|généreux (cœur large)
ໃຈແຄບ|jai khaep|mesquin (cœur étroit)
ໃຈອ່ອນ|jai on|sensible, facile à convaincre
ໃຈແຂງ|jai khaeng|dur, insensible
ໃຈເຢັນ|jai yen|calme, posé
ໃຈດຳ|jai dam|méchant, égoïste (cœur noir)
ໃຈງ່າຍ|jai ngai|influençable, facile
ໃຈບຸນ|jai boun|charitable` },
      { h: 'Les émotions', ex: `ດີໃຈ|di jai|heureux
ເສຍໃຈ|sia jai|triste ; désolé
ນ້ອຍໃຈ|noy jai|vexé, blessé
ສົນໃຈ|son jai|s'intéresser à
ແນ່ໃຈ|nae jai|être sûr
ເຂົ້າໃຈ|khao jai|comprendre (entrer dans le cœur)
ຕັດສິນໃຈ|tat sin jai|décider
ໄວ້ໃຈ|vai jai|faire confiance
ພໍໃຈ|pho jai|satisfait
ອຸ່ນໃຈ|oun jai|rassuré` },
      { h: 'En contexte', ex: `ບໍ່ຕ້ອງນ້ອຍໃຈເດີ້|bo tong noy jai de|ne sois pas vexé, hein
ເຈົ້າແນ່ໃຈບໍ?|jao nae jai bo?|tu es sûr ?
ຍັງຕັດສິນໃຈບໍ່ໄດ້|nyang tat sin jai bo dai|je n'arrive pas encore à décider
ຂ້ອຍໄວ້ໃຈເຈົ້າ|khoy vai jai jao|je te fais confiance
ເສຍໃຈນຳເດີ້|sia jai nam de|mes condoléances`,
        warn: '« ນ້ອຍໃຈ » est un sentiment très lao : une vexation silencieuse. Un Lao vexé ne le dira pas, il deviendra simplement plus distant. Sois attentif aux signes.' }
    ]
  },
  {
    id: 'rue', lvl: 'B2', icon: '🛵', t: 'Le lao de la rue',
    goal: 'Comprendre l\'argot, les raccourcis et le parler rapide des jeunes Lao.',
    blocks: [
      { h: 'Les contractions de l\'oral rapide', p: `À vitesse normale, les mots fusionnent et des syllabes disparaissent.`,
        ex: `ບໍ່ເປັນຫຍັງ|bo pen nyang|pas de souci (souvent avalé en « bpennyang »)
ຊິໄປ|xi pai|je vais y aller (ຊິ remplace ຈະ à l'oral)
ຫຍັງ?|nyang?|quoi ? (pour ແມ່ນຫຍັງ)
ເຮັດຫຍັງຢູ່?|het nyang you?|tu fais quoi ?
ຢູ່ໃສ?|you sai?|t'es où ?
ກິນເຂົ້າຍັງ?|kin khao nyang?|t'as mangé ? (pour ກິນເຂົ້າແລ້ວບໍ)` },
      { h: 'L\'argot et le familier', ex: `ໝູ່|mou|pote
ສະໜຸກ|sanouk|fun, amusant
ມ່ວນ|mouan|amusant, chouette
ມ່ວນຫຼາຍ|mouan lai|trop bien
ຄັກ|khak|super, cool
ແຊບຊ້ອຍ|xaep xoy|trop bon
ເມົາ|mao|ivre
ຂີ້ຄ້ານ|khi khan|flemmard
ບ້າ|ba|fou (attention, peut vexer)
ໂອ້ຍ ບໍ່ໄຫວ|oy bo vai|j'en peux plus` },
      { h: 'Les exclamations', ex: `ໂອ້ຍ!|oy!|aïe ! oh là là !
ໂອ້!|o!|oh !
ຫວ່າ!|va!|quoi ?! (surprise)
ອຸ້ຍ!|oui!|oups !
ໂອ້ຍໜໍ!|oy no!|ah là là ! (exaspération)` },
      { h: 'La fête : boun et beerlao', ex: `ບຸນ|boun|fête traditionnelle ; mérite
ໄປທ່ຽວບຸນ|pai thiao boun|aller à une fête
ລຳວົງ|lam vong|danse en cercle
ໝົດແກ້ວ!|mot kaeo!|cul sec !
ເອົາອີກ!|ao ik!|encore !
ບໍ່ໄຫວແລ້ວ|bo vai laeo|je n'en peux plus`,
        tip: 'En soirée, on boit souvent dans un seul verre qui passe de main en main, avec un « serveur » attitré qui le remplit. Refuser complètement est délicat : bois une petite gorgée, et dis « ໜ້ອຍໜຶ່ງເດີ້ » (juste un peu).' },
      { h: 'Dialogue entre amis', dlg: `Tou|ຄືນນີ້ເຮັດຫຍັງ?|kheun ni het nyang?|Tu fais quoi ce soir ?
Toi|ບໍ່ຮູ້ຄືກັນ. ມີຫຍັງມ່ວນໆບໍ?|bo hou kheu kan. mi nyang mouan mouan bo?|Je sais pas. Y a un truc sympa ?
Tou|ມີບຸນຢູ່ວັດ, ໄປເທາະ!|mi boun you vat, pai tho!|Il y a une fête au temple, on y va !
Toi|ຄັກ! ຊິໄປຈັກໂມງ?|khak! xi pai jak mong?|Cool ! On y va à quelle heure ?
Tou|ສອງທຸ່ມ. ເອົາລົດຈັກມາເດີ້|song thoum. ao lot jak ma de|20h. Prends ton scooter, hein.` }
    ]
  },
  {
    id: 'formation', lvl: 'B2', icon: '🧬', t: 'Fabriquer des mots',
    goal: 'Deviner le sens de milliers de mots grâce aux préfixes et composés lao.',
    blocks: [
      { h: 'Les noms abstraits : ຄວາມ et ການ', p: `<b>ຄວາມ</b> + adjectif ou verbe d'état → nom abstrait (qualité, sentiment).<br><b>ການ</b> + verbe d'action → nom d'action ou de domaine.`,
        ex: `ຄວາມຮັກ|khouam hak|l'amour
ຄວາມສຸກ|khouam souk|le bonheur
ຄວາມງາມ|khouam ngam|la beauté
ຄວາມຈິງ|khouam jing|la vérité
ການຮຽນ|kan hian|les études
ການເມືອງ|kan meuang|la politique
ການກິນ|kan kin|l'alimentation
ການທ່ອງທ່ຽວ|kan thong thiao|le tourisme` },
      { h: 'Les personnes : ນັກ, ຊ່າງ, ຜູ້, ຄົນ', ex: `ນັກຮຽນ|nak hian|élève
ນັກທ່ອງທ່ຽວ|nak thong thiao|touriste
ນັກຮ້ອງ|nak hong|chanteur
ຊ່າງຕັດຜົມ|xang tat phom|coiffeur
ຊ່າງແປງລົດ|xang paeng lot|mécanicien
ຜູ້ຈັດການ|phou jat kan|directeur
ຜູ້ຍິງ|phou nying|femme
ຄົນຂັບລົດ|khon khap lot|chauffeur` },
      { h: 'Les lieux : ໂຮງ, ຮ້ານ, ບ່ອນ', ex: `ໂຮງຮຽນ|hong hian|école
ໂຮງໝໍ|hong mo|hôpital
ໂຮງງານ|hong ngan|usine
ຮ້ານກາເຟ|han kafe|café
ຮ້ານຕັດຜົມ|han tat phom|salon de coiffure
ບ່ອນຈອດລົດ|bon jot lot|parking` },
      { h: 'Les qualités : ໜ້າ, ເປັນຕາ, ຂີ້', p: `<b>ໜ້າ</b> + verbe = « digne de » (-able).<br><b>ເປັນຕາ</b> + verbe = « qui donne envie de » (très oral).<br><b>ຂີ້</b> + verbe = défaut, tendance négative.`,
        ex: `ໜ້າຮັກ|na hak|mignon (aimable)
ໜ້າສົນໃຈ|na son jai|intéressant
ເປັນຕາຢ້ານ|pen ta yan|effrayant
ເປັນຕາກິນ|pen ta kin|appétissant
ເປັນຕາຮັກ|pen ta hak|adorable
ຂີ້ຕົວະ|khi toua|menteur
ຂີ້ອາຍ|khi ai|timide
ຂີ້ຖີ່|khi thi|radin` },
      { h: 'Les composés imagés', p: `Beaucoup de mots sont des <b>images littérales</b> : un vrai plaisir à décoder !`,
        ex: `ນ້ຳຕາ|nam ta|larmes (eau d'œil)
ນ້ຳໃຈ|nam jai|générosité (eau du cœur)
ລົດໄຟ|lot fai|train (voiture à feu)
ຕູ້ເຢັນ|tou yen|frigo (armoire froide)
ໝໍ້ໄຟ|mo fai|batterie (pot à électricité)
ແມ່ນ້ຳ|mae nam|fleuve (mère des eaux)
ຕາເວັນ|ta ven|soleil (œil du jour)`,
        tip: 'Face à un mot inconnu, découpe-le : tu devineras souvent le sens. ໂຮງ + ກິນ + ເຂົ້າ ? Facile : le réfectoire !' }
    ]
  },
  {
    id: 'refus', lvl: 'B2', icon: '🎭', t: 'L\'art du non indirect',
    goal: 'Refuser, critiquer et négocier sans faire perdre la face.',
    blocks: [
      { h: 'Pourquoi on ne dit jamais « non »', p: `Dans la culture lao, un refus direct fait <b>perdre la face</b> (ເສຍໜ້າ) aux deux interlocuteurs. On préfère l'ambiguïté polie. Un « oui » peut donc signifier « j'ai entendu », et un « peut-être » signifie souvent « non ».` },
      { h: 'Refuser poliment', ex: `ຊິເບິ່ງກ່ອນເດີ້|xi beung kon de|je vais voir (= probablement non)
ເທື່ອໜ້າເດີ້|theua na de|la prochaine fois, hein
ບໍ່ເປັນຫຍັງ, ຂອບໃຈ|bo pen nyang, khop jai|ça va, merci (= non merci)
ອີ່ມແລ້ວ|im laeo|je suis rassasié (refuser à manger)
ບໍ່ຄ່ອຍວ່າງ|bo khoy vang|je ne suis pas très libre
ຄືຊິບໍ່ທັນ|kheu xi bo than|je crains de ne pas avoir le temps
ຂໍຄິດເບິ່ງກ່ອນ|kho khit beung kon|laisse-moi réfléchir` },
      { h: 'Décoder les « oui » lao', ex: `ໂອເຄ ໂອເຄ|o khe o khe|OK OK (souvent : j'ai compris, sans plus)
ເຈົ້າ ເຈົ້າ|jao jao|oui oui (politesse, pas un engagement)
ອາດຈະໄດ້|at ja dai|c'est peut-être possible (= difficile)
ຍາກໜ້ອຍໜຶ່ງ|nyak noy neung|c'est un peu difficile (= non)`,
        warn: 'Si on te répond « ຍາກໜ້ອຍໜຶ່ງ » (un peu difficile), n\'insiste pas : c\'est un refus. Insister mettrait ton interlocuteur dans l\'embarras.' },
      { h: 'Critiquer avec douceur', ex: `ບໍ່ຄ່ອຍແຊບປານໃດ|bo khoy xaep pan dai|pas terrible (doux)
ອາດຈະດີກວ່າຖ້າ…|at ja di kwa tha…|ce serait peut-être mieux si…
ລອງເຮັດແບບນີ້ເບິ່ງບໍ?|long het baep ni beung bo?|et si tu essayais comme ça ?
ບໍ່ເປັນຫຍັງ, ເທື່ອໜ້າໃໝ່|bo pen nyang, theua na mai|pas grave, la prochaine fois` },
      { h: 'Dialogue : une invitation déclinée', dlg: `Kéo|ມື້ອື່ນມາກິນເຂົ້າຢູ່ບ້ານເດີ້!|meu eun ma kin khao you ban de!|Viens dîner à la maison demain !
Toi|ຂອບໃຈຫຼາຍໆ. ແຕ່ມື້ອື່ນຄືຊິບໍ່ຄ່ອຍວ່າງ|khop jai lai lai. tae meu eun kheu xi bo khoy vang|Merci beaucoup. Mais demain, je crains de ne pas être très libre.
Kéo|ໂອ້ຍ, ໜ້າເສຍດາຍ|oy, na sia dai|Oh, dommage.
Toi|ເທື່ອໜ້າແນ່ນອນເດີ້|theua na nae non de|La prochaine fois, c'est sûr.
Kéo|ໂອເຄ, ບໍ່ເປັນຫຍັງ|o khe, bo pen nyang|OK, pas de souci.` }
    ]
  },
  {
    id: 'culture', lvl: 'B2', icon: '🛕', t: 'Culture et savoir-vivre',
    goal: 'Comprendre les codes sociaux, religieux et les fêtes pour ne jamais commettre d\'impair.',
    blocks: [
      { h: 'Le corps : la tête et les pieds', p: `• La <b>tête</b> est sacrée : on ne la touche jamais, même celle d'un enfant.<br>• Les <b>pieds</b> sont impurs : ne pointe jamais quelqu'un ou un Bouddha avec les pieds ; ne les pose pas sur une table.<br>• On <b>retire ses chaussures</b> en entrant dans une maison et dans un temple.<br>• On passe <b>courbé</b> devant des personnes assises plus âgées.` },
      { h: 'Au temple (ວັດ)', ex: `ວັດ|vat|temple
ພະ|pha|moine ; Bouddha
ສາມະເນນ|samanen|novice
ໃສ່ບາດ|sai bat|offrande du matin aux moines
ຕັກບາດ|tak bat|offrande (Luang Prabang)
ເຮັດບຸນ|het boun|faire des mérites
ໄຫວ້ພະ|vai pha|prier, saluer le Bouddha`,
        warn: 'Une femme ne doit jamais toucher un moine ni lui tendre un objet directement : elle le pose devant lui ou sur un tissu. Au temple, épaules et genoux couverts.' },
      { h: 'Le baci (ບາສີ)', p: `Cérémonie centrale de la vie lao (mariage, naissance, départ, retour, guérison). On croit que l'être humain a <b>32 esprits vitaux</b> (ຂວັນ, khouan) qui peuvent s'échapper. L'officiant les rappelle, puis chacun noue des <b>fils de coton blanc</b> au poignet des autres en prononçant des vœux. On garde les fils au moins 3 jours.`,
        ex: `ບາສີສູ່ຂວັນ|basi sou khouan|cérémonie de rappel des esprits
ຜູກແຂນ|phouk khaen|nouer les fils au poignet
ຂໍໃຫ້ໂຊກດີ|kho hai xok di|je te souhaite bonne chance
ຂໍໃຫ້ມີສຸຂະພາບແຂງແຮງ|kho hai mi soukhaphap khaeng haeng|je te souhaite une bonne santé` },
      { h: 'Les grandes fêtes', ex: `ປີໃໝ່ລາວ|pi mai lao|Nouvel An lao (avril)
ສຸກສັນວັນປີໃໝ່|souk san van pi mai|bonne année !
ບຸນທາດຫຼວງ|boun that louang|fête du That Luang (novembre)
ບຸນຊ່ວງເຮືອ|boun xouang heua|courses de pirogues
ບຸນບັ້ງໄຟ|boun bang fai|fête des fusées (mai)
ບຸນອອກພັນສາ|boun ok phansa|fin du carême bouddhiste` },
      { h: 'À table et chez l\'habitant', p: `• Attends que le plus âgé commence à manger.<br>• On ne finit pas totalement son assiette chez l'hôte (sinon on te ressert !).<br>• Offrir ou recevoir : <b>avec la main droite</b>, ou les deux mains pour plus de respect.<br>• Un cadeau ne s'ouvre pas devant celui qui l'offre.`,
        tip: 'Le sourire lao n\'exprime pas toujours la joie : il peut cacher la gêne, la désapprobation ou l\'embarras. En cas de malaise, souris aussi et dédramatise : bo pen nyang.' }
    ]
  }
];
