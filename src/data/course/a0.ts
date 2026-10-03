import type { Lesson } from '../../domain';

const CONSONANTS = `
ກ|k|ໄກ່|kai · poulet|M
ຂ|kh|ໄຂ່|khai · œuf|H
ຄ|kh|ຄວາຍ|khouay · buffle|B
ງ|ng|ງົວ|ngoua · bœuf|B
ຈ|j|ຈອກ|jok · verre|M
ສ|s|ເສືອ|seua · tigre|H
ຊ|x|ຊ້າງ|xang · éléphant|B
ຍ|ny|ຍຸງ|nyoung · moustique|B
ດ|d|ເດັກ|dek · enfant|M
ຕ|t|ຕາ|ta · œil|M
ຖ|th|ຖົງ|thong · sac|H
ທ|th|ທຸງ|thoung · drapeau|B
ນ|n|ນົກ|nok · oiseau|B
ບ|b|ແບ້|bae · chèvre|M
ປ|p|ປາ|pa · poisson|M
ຜ|ph|ເຜິ້ງ|pheung · abeille|H
ຝ|f|ຝົນ|fon · pluie|H
ພ|ph|ພູ|phou · montagne|B
ຟ|f|ໄຟ|fai · feu|B
ມ|m|ແມວ|maeo · chat|B
ຢ|y|ຢາ|ya · médicament|M
ຣ|r|ຣົດ|rot · voiture (mots savants)|B
ລ|l|ລີງ|ling · singe|B
ວ|v|ວີ|vi · éventail|B
ຫ|h|ໄຫ|hai · jarre|H
ອ|o|ໂອ|o · bol|M
ຮ|h|ເຮືອນ|heuan · maison|B`;

const VOWELS = `
ອະ|a|ອະ|a bref|court
ອາ|aa|ອາ|a long|long
ອິ|i|ອິ|i bref|court
ອີ|ii|ອີ|i long|long
ອຶ|eu|ອຶ|eu bref (lèvres étirées)|court
ອື|euu|ອື|eu long|long
ອຸ|ou|ອຸ|ou bref|court
ອູ|ouu|ອູ|ou long|long
ເອະ|é|ເອະ|é bref|court
ເອ|éé|ເອ|é long|long
ແອະ|è|ແອະ|è bref (très ouvert)|court
ແອ|èè|ແອ|è long|long
ໂອະ|o|ໂອະ|o fermé bref|court
ໂອ|oo|ໂອ|o fermé long|long
ເອາະ|ò|ເອາະ|o ouvert bref|court
ອໍ|òò|ອໍ|o ouvert long|long
ເອີ|eu|ເອີ|eu de « peur », long|long
ເອຍ|ia|ເອຍ|ia|diphtongue
ເອືອ|eua|ເອືອ|eua|diphtongue
ອົວ|oua|ອົວ|oua|diphtongue
ໄອ|ai|ໄອ|aï|composée
ໃອ|ai|ໃອ|aï (une vingtaine de mots)|composée
ເອົາ|ao|ເອົາ|ao|composée
ອຳ|am|ອຳ|am|composée`;

const FINALS = `
ກ|-k|ນົກ|nok · oiseau|morte
ດ|-t|ເຈັດ|jet · sept|morte
ບ|-p|ສິບ|sip · dix|morte
ງ|-ng|ສອງ|song · deux|vivante
ນ|-n|ກິນ|kin · manger|vivante
ມ|-m|ສາມ|sam · trois|vivante
ຍ|-y|ສວຍ|souay · joli|vivante
ວ|-o|ແມວ|maeo · chat|vivante`;

const DIGITS = `
໐|0|ສູນ|soun|chiffre
໑|1|ໜຶ່ງ|neung|chiffre
໒|2|ສອງ|song|chiffre
໓|3|ສາມ|sam|chiffre
໔|4|ສີ່|si|chiffre
໕|5|ຫ້າ|ha|chiffre
໖|6|ຫົກ|hok|chiffre
໗|7|ເຈັດ|jet|chiffre
໘|8|ແປດ|paet|chiffre
໙|9|ເກົ້າ|kao|chiffre`;

export const A0: Lesson[] = [
  {
    id: 'methode', lvl: 'A0', icon: '🧭', t: 'Comment marche le lao',
    goal: 'Comprendre la logique de la langue et adopter la bonne méthode dès le premier jour.',
    blocks: [
      { h: 'Le lao en une phrase', p: `Le lao (<i>ພາສາລາວ</i>) est parlé par environ 7 millions de personnes au Laos, et compris par plus de 20 millions de personnes dans l'Isan (nord-est de la Thaïlande). C'est une langue <b>tonale</b>, <b>isolante</b> (les mots ne changent jamais de forme) et <b>analytique</b> (le sens vient de l'ordre des mots et de petits mots-outils).` },
      { h: 'La bonne nouvelle : pas de grammaire « à apprendre par cœur »', p: `Le lao n'a <b>ni conjugaison, ni genre, ni pluriel, ni article, ni accord</b>. Un verbe ne change jamais : <i>ໄປ</i> (pai) veut dire « je vais, tu allais, ils iront ». Le temps est donné par le contexte ou par un petit mot placé avant ou après. Un nom ne change jamais non plus : <i>ໝາ</i> = « un chien, le chien, des chiens ».`,
        ex: `ຂ້ອຍໄປ|khoy pai|je vais / je suis allé (selon le contexte)
ຂ້ອຍໄປແລ້ວ|khoy pai laeo|je suis (déjà) parti
ຂ້ອຍຊິໄປ|khoy xi pai|je vais y aller
ມື້ວານຂ້ອຍໄປ|meu van khoy pai|hier, je suis allé
ໝາສາມໂຕ|ma sam to|trois chiens` },
      { h: 'L\'ordre des mots : comme en français, ou presque', p: `Sujet + Verbe + Complément, comme en français. Deux différences à retenir tout de suite :<br>• l'adjectif se place <b>après</b> le nom (« maison grande ») ;<br>• le possesseur aussi (« livre de moi »), et on peut même omettre <i>ຂອງ</i> (de).`,
        ex: `ບ້ານໃຫຍ່|ban nyai|grande maison
ປຶ້ມຂອງຂ້ອຍ|peum khong khoy|mon livre
ແມ່ຂ້ອຍ|mae khoy|ma mère (ຂອງ omis, très courant)
ຂ້ອຍກິນເຂົ້າ|khoy kin khao|je mange (du riz)
ລົດຄັນນີ້ງາມ|lot khan ni ngam|cette voiture est belle` },
      { h: 'Le sujet disparaît souvent', p: `À l'oral, les Lao <b>omettent le sujet</b> quand il est évident. « Tu vas où ? » se dit simplement « vas où ? ». Ce n'est pas impoli, c'est naturel. Toi aussi, tu peux le faire.`,
        ex: `ໄປໃສ?|pai sai?|(tu) vas où ?
ໄປຕະຫຼາດ|pai talat|(je) vais au marché
ກິນແລ້ວບໍ?|kin laeo bo?|(tu) as mangé ?` },
      { h: 'Le vrai défi : les tons', p: `Le lao de Vientiane a <b>6 tons</b>. La même syllabe « ma » peut signifier <i>venir</i>, <i>chien</i> ou <i>cheval</i> selon la mélodie de la voix. Bonne nouvelle : l'écriture lao <b>indique toujours le ton</b>, et le contexte aide énormément. Un Lao te comprendra même avec des tons imparfaits si la phrase est claire.`,
        ex: `ມາ|ma|venir
ໝາ|ma|chien
ມ້າ|ma|cheval` },
      { h: 'Lire la romanisation de ce site', p: `<div class="tbl"><table><tr><th>Lettres</th><th>Se prononce</th><th>Exemple</th></tr><tr><td>k, p, t</td><td>sans souffle, comme en français (k de « kilo »)</td><td>ກາ ka</td></tr><tr><td>kh, ph, th</td><td>avec un souffle d'air, comme en anglais « key »</td><td>ຂາ kha</td></tr><tr><td>b, d</td><td>comme en français</td><td>ບໍ່ bo</td></tr><tr><td>j</td><td>« tch » doux, sans souffle</td><td>ຈອກ jok</td></tr><tr><td>x / s</td><td>« s » (x = consonne basse, s = haute)</td><td>ຊ້າງ xang</td></tr><tr><td>ny</td><td>« gn » de « montagne »</td><td>ຍາກ nyak</td></tr><tr><td>ng</td><td>« ng » de « parking », même en début de mot</td><td>ງາມ ngam</td></tr><tr><td>v</td><td>entre « v » et « w »</td><td>ວັດ vat</td></tr><tr><td>ou / eu / ae</td><td>« ou » / « eu » / « è » ouvert</td><td>ຫູ hou</td></tr></table></div>`,
        warn: 'La romanisation n\'indique PAS les tons. C\'est une béquille pour démarrer : l\'audio et l\'écriture lao font foi. Vise à lire le lao d\'ici la leçon 7.' },
      { h: 'Ta méthode (prouvée par la recherche en acquisition)', p: `1. <b>Écoute d'abord</b> : clique sur chaque exemple, au moins 3 fois.<br>2. <b>Imite à voix haute</b> (shadowing) : répète en même temps que la voix, en copiant la mélodie.<br>3. <b>Mode quiz</b> : cache la traduction et teste-toi.<br>4. <b>Révision espacée</b> : reviens sur une leçon après 1 jour, 3 jours, 7 jours.<br>5. <b>Utilise tout de suite</b> : chaque phrase apprise doit être dite à un Lao dans la semaine.`,
        tip: '15 minutes par jour battent 3 heures le dimanche. Le cerveau consolide pendant le sommeil : la régularité est ton meilleur allié.' }
    ]
  },
  {
    id: 'sons', lvl: 'A0', icon: '👄', t: 'Les sons qui n\'existent pas en français',
    goal: 'Entraîner ta bouche aux 5 sons qui trahissent un débutant.',
    blocks: [
      { h: '1. Le « ng » en début de mot', p: `En français, « ng » n'existe qu'en fin de mot (parking). En lao, il commence des mots très courants. Astuce : dis « parking-a » puis supprime « parki ». Ta langue doit toucher le fond du palais, pas le bout des dents.`,
        ex: `ງາມ|ngam|beau
ງົວ|ngoua|bœuf
ເງິນ|ngeun|argent
ງ່າຍ|ngai|facile
ງ່ວງ|ngouang|avoir sommeil` },
      { h: '2. Avec ou sans souffle', p: `Place ta main devant ta bouche. <b>k, p, t</b> : aucun souffle (comme en français). <b>kh, ph, th</b> : un petit souffle d'air. Cette différence change le sens !`,
        ex: `ປາ|pa|poisson (sans souffle)
ພາ|pha|emmener (avec souffle)
ຕາ|ta|œil (sans souffle)
ທາງ|thang|chemin (avec souffle)
ກາ|ka|corbeau (sans souffle)
ຄາ|kha|coincé (avec souffle)`,
        warn: '« ph » ne se prononce JAMAIS « f » ! ພູ (phou, montagne) commence comme « p » + souffle. Le son « f » s\'écrit ຝ ou ຟ.' },
      { h: '3. Les finales « avalées »', p: `En fin de syllabe, <b>-k, -t, -p</b> ne sont pas relâchés : la bouche se ferme mais aucun son ne sort. Dis « bac » en t'arrêtant net avant le « c ». C'est ce qui donne au lao son rythme saccadé.`,
        ex: `ນົກ|nok|oiseau
ເຈັດ|jet|sept
ສິບ|sip|dix
ຫົກ|hok|six
ແປດ|paet|huit` },
      { h: '4. Le « eu » aux lèvres étirées', p: `Le son <i>ອື</i> n'est ni « ou » ni « i » : dis « ou » puis <b>étire les lèvres en sourire</b> sans bouger la langue. Indispensable pour : main, nom, acheter, mois.`,
        ex: `ມື|meu|main
ຊື່|xeu|nom
ຊື້|xeu|acheter
ເດືອນ|deuan|mois
ມື້|meu|jour` },
      { h: '5. Voyelles courtes et longues', p: `Une voyelle longue dure presque deux fois plus longtemps. Exagère au début : c'est ce qui sépare « entrer » et « blanc ».`,
        ex: `ເຂົ້າ|khao|riz ; entrer (court)
ຂາວ|khao|blanc (long)
ຜິດ|phit|faux (court)
ຜີ|phi|fantôme (long)` },
      { h: 'Entraînement', p: `Lis cette phrase lentement, puis à vitesse normale : « Le chien vient chercher de l'argent ».`,
        ex: `ໝາມາຊອກຫາເງິນ|ma ma xok ha ngeun|le chien vient chercher de l'argent` }
    ]
  },
  {
    id: 'consonnes', lvl: 'A0', icon: '🔤', t: 'Les 27 consonnes',
    goal: 'Reconnaître chaque consonne, son son et sa classe (haute, moyenne, basse).',
    blocks: [
      { h: 'Un mot-clé par lettre', p: `Comme « A comme Arbre », chaque consonne lao a son mot-clé, que les enfants lao récitent à l'école. Clique sur une lettre pour entendre son mot. La pastille indique sa <b>classe</b> : <span class="cls H">H</span> haute, <span class="cls M">M</span> moyenne, <span class="cls B">B</span> basse. La classe servira à trouver le ton.`, grid: CONSONANTS },
      { h: 'Retenir les classes en 2 minutes', p: `<b>Moyennes (8)</b> : ກ ຈ ດ ຕ ບ ປ ຢ ອ — phrase mnémotechnique : « <i>kai jok dek ta bae pa ya o</i> ».<br><b>Hautes (6)</b> : ຂ ສ ຖ ຜ ຝ ຫ — « <i>khai seua thong pheung fon hai</i> ».<br><b>Basses (13)</b> : toutes les autres.`,
        tip: 'Astuce visuelle : plusieurs paires haute/basse ont le même son : ຂ/ຄ (kh), ສ/ຊ (s), ຖ/ທ (th), ຜ/ພ (ph), ຝ/ຟ (f), ຫ/ຮ (h). Seul le ton les distingue.' },
      { h: 'Les paires jumelles', ex: `ຂາ|kha|jambe (ຂ haute)
ຄາ|kha|coincé (ຄ basse)
ສາມ|sam|trois (ສ haute)
ຊາມ|xam|(pas un mot : juste pour l'oreille)
ເສືອ|seua|tigre (ສ haute)
ຊື້|xeu|acheter (ຊ basse)` },
      { h: 'Le ຫ magique (ຫ + basse = haute)', p: `Les consonnes basses ງ ຍ ນ ມ ລ ວ n'ont pas de jumelle haute. Pour en créer une, on place un <b>ຫ muet</b> devant. Certaines combinaisons ont même fusionné en une seule lettre : <b>ໜ</b> (= ຫນ) et <b>ໝ</b> (= ຫມ), et <b>ຫຼ</b> (= ຫລ).`,
        ex: `ໝາ|ma|chien (ໝ = haute)
ມາ|ma|venir (ມ = basse)
ໜ້າ|na|visage
ຫຼາຍ|lai|beaucoup
ຫວານ|van|sucré
ຫຍັງ|nyang|quoi
ຫງາຍ|ngai|sur le dos (renversé)` },
      { h: 'Le ອ silencieux', p: `Une syllabe lao commence toujours par une consonne. Quand un mot commence par une voyelle, on écrit <b>ອ</b> muet comme support (comme le « h » muet français).`,
        ex: `ອາຫານ|ahan|nourriture
ອີກ|ik|encore
ອ້າຍ|ay|grand frère
ອຸ່ນ|oun|tiède` }
    ]
  },
  {
    id: 'voyelles', lvl: 'A0', icon: '🎵', t: 'Les voyelles',
    goal: 'Lire les voyelles autour de la consonne et distinguer courtes et longues.',
    blocks: [
      { h: 'Elles s\'enroulent autour de la consonne', p: `Une voyelle lao peut s'écrire <b>avant, après, au-dessus ou en dessous</b> de la consonne, et parfois des deux côtés à la fois. Ici, ອ sert de support muet. Mais on prononce <b>toujours la consonne d'abord</b>, quelle que soit la position écrite : <i>ເກ</i> se lit « ké », pas « ék ».`, grid: VOWELS },
      { h: 'Lire dans le bon ordre', ex: `ໄປ|pai|aller (ໄ écrit avant, lu après ປ)
ແມ່|mae|mère
ໂຕ|to|corps ; toi
ເກົ່າ|kao|vieux
ຫົວ|houa|tête` },
      { h: 'La voyelle cachée', p: `Dans une syllabe fermée, certaines voyelles <b>changent de forme ou disparaissent</b>. La plus fréquente : <i>ົ</i> (o court) s'écrit au-dessus, et un « o » sans aucun signe entre deux consonnes se lit « o ».`,
        ex: `ຄົນ|khon|personne (ົ = o court)
ລົດ|lot|voiture
ນົມ|nom|lait
ສວນ|souan|jardin (ວ = « oua »)
ເມືອງ|meuang|ville` },
      { h: 'Court ou long ? Ça change tout', ex: `ເຂົ້າ|khao|riz ; entrer
ຂາວ|khao|blanc
ຂ່າວ|khao|nouvelles
ກິນ|kin|manger
ກີບ|kip|kip (monnaie)`,
        warn: 'Ne confonds pas ໄ et ໃ : même son « aï », mais ໃ n\'apparaît que dans une vingtaine de mots très fréquents (ໃຈ, ໃຫ້, ໃໝ່, ໃຜ, ໃສ, ໃຊ້, ໃກ້, ໃຫຍ່, ໃນ…). Apprends-les comme des images.' }
    ]
  },
  {
    id: 'syllabe', lvl: 'A0', icon: '🧩', t: 'La syllabe : finales vivantes et mortes',
    goal: 'Décomposer n\'importe quelle syllabe lao et savoir si elle est « vivante » ou « morte ».',
    blocks: [
      { h: 'La structure', p: `Toute syllabe = <b>consonne initiale + voyelle (+ consonne finale) (+ marque de ton)</b>. Seules 8 consonnes peuvent terminer une syllabe. Clique pour entendre.`, grid: FINALS },
      { h: 'Vivante ou morte ?', p: `<b>Morte</b> : finit par <b>-k, -t, -p</b>, ou par une <b>voyelle courte</b> sans finale. Le son est coupé net.<br><b>Vivante</b> : finit par une voyelle longue ou par <b>-ng, -n, -m, -y, -o</b>. Le son peut se prolonger.<br>Cette distinction sert à trouver le ton (leçon suivante).`,
        ex: `ປາ|pa|poisson (vivante : voyelle longue)
ກິນ|kin|manger (vivante : -n)
ສິບ|sip|dix (morte : -p)
ເດັກ|dek|enfant (morte : -k)
ຈະ|ja|futur (morte : voyelle courte)` },
      { h: 'Décomposer pas à pas', p: `Prenons <i>ເມືອງ</i> (ville) : ມ (m, basse) + ເ-ືອ (eua) + ງ (-ng, finale vivante) → « meuang ». Prenons <i>ຕະຫຼາດ</i> (marché) : ຕະ (ta) + ຫຼາ (la, haute grâce à ຫ) + ດ (-t, morte) → « ta-lat ».`,
        ex: `ເມືອງ|meuang|ville
ຕະຫຼາດ|talat|marché
ໂຮງແຮມ|hong haem|hôtel
ສະໜາມບິນ|sanam bin|aéroport` },
      { h: 'Les chiffres lao', p: `On les voit sur les plaques, les billets et les panneaux officiels, même si les chiffres arabes dominent au quotidien.`, grid: DIGITS }
    ]
  },
  {
    id: 'tons', lvl: 'A0', icon: '📈', t: 'Les 6 tons sans douleur',
    goal: 'Comprendre la règle des tons, puis les entendre et les reproduire grâce aux paires minimales.',
    blocks: [
      { h: 'Le principe', p: `Le ton d'une syllabe dépend de 3 choses :<br>1. <b>la classe</b> de la consonne initiale (H, M ou B) ;<br>2. <b>vivante ou morte</b> (et pour les mortes : voyelle courte ou longue) ;<br>3. <b>la marque de ton</b> éventuelle : <i>ໄມ້ເອກ</i> ່ ou <i>ໄມ້ໂທ</i> ້ (et rarement ໊ ou ໋).` },
      { h: 'Le tableau (lao de Vientiane)', p: `<div class="tbl"><table><tr><th></th><th>Vivante</th><th>Morte courte</th><th>Morte longue</th><th>avec ່</th><th>avec ້</th></tr><tr><td><span class="cls H">H</span></td><td>montant</td><td>haut</td><td>bas-descendant</td><td>moyen</td><td>bas-descendant</td></tr><tr><td><span class="cls M">M</span></td><td>bas-montant</td><td>haut</td><td>bas-descendant</td><td>bas</td><td>haut-descendant</td></tr><tr><td><span class="cls B">B</span></td><td>haut</td><td>moyen</td><td>haut-descendant</td><td>moyen</td><td>haut-descendant</td></tr></table></div>`,
        warn: 'Les noms des tons varient selon les manuels, et les tons eux-mêmes changent selon la région (Vientiane, Luang Prabang, Savannakhet, Champassak). Ce tableau est une carte simplifiée : ton oreille est le vrai juge.' },
      { h: 'Les 6 mélodies, en images', p: `• <b>Montant</b> : comme une question surprise en français, « Ah ? »<br>• <b>Bas-montant</b> : part bas, remonte légèrement.<br>• <b>Haut</b> : aigu et plat, légèrement tendu.<br>• <b>Moyen</b> : ta voix normale, plate.<br>• <b>Bas-descendant</b> : grave, comme un soupir.<br>• <b>Haut-descendant</b> : comme un ordre ferme, « Non ! »` },
      { h: 'Paires minimales : écoute en boucle', ex: `ມາ|ma|venir
ໝາ|ma|chien
ມ້າ|ma|cheval
ໃກ້|kai|près
ໄກ|kai|loin
ໄກ່|kai|poulet
ໄຂ່|khai|œuf
ເສືອ|seua|tigre
ເສື້ອ|seua|chemise
ຂາ|kha|jambe
ຄ່າ|kha|valeur, prix
ຂ້າ|kha|tuer
ຄ້າ|kha|commercer
ຫົວ|houa|tête ; rire
ຂາວ|khao|blanc
ຂ່າວ|khao|nouvelles
ເຂົ້າ|khao|riz` },
      { h: 'Appliquer la règle : 4 exemples résolus', p: `• <i>ມາ</i> : ມ basse, vivante, sans marque → <b>haut</b>.<br>• <i>ໝາ</i> : ໝ haute, vivante, sans marque → <b>montant</b>.<br>• <i>ມ້າ</i> : ມ basse + ້ → <b>haut-descendant</b>.<br>• <i>ປາ</i> : ປ moyenne, vivante, sans marque → <b>bas-montant</b>.`,
        ex: `ປາ|pa|poisson
ປ່າ|pa|forêt
ປ້າ|pa|tante` },
      { h: 'Exercice de survie', p: `Lis à voix haute : « le chien vient, le cheval vient ». Si un Lao sourit, c'est que tu as confondu ! C'est normal : les tons s'acquièrent par l'imitation répétée, pas par les règles.`,
        ex: `ໝາມາ|ma ma|le chien arrive
ມ້າມາ|ma ma|le cheval arrive
ໄກ່ໄຂ່|kai khai|la poule pond
ເສື້ອເສືອ|seua seua|la chemise du tigre`,
        tip: 'Exercice quotidien : mets la vitesse à ×0.6, écoute une paire minimale, ferme les yeux, devine laquelle c\'est. 5 minutes par jour pendant 2 semaines suffisent à « débloquer » ton oreille.' }
    ]
  },
  {
    id: 'lire', lvl: 'A0', icon: '📖', t: 'Lire tes premiers mots',
    goal: 'Déchiffrer seul des mots courants, des enseignes et des menus.',
    blocks: [
      { h: 'La méthode en 4 étapes', p: `1. Trouve la <b>consonne initiale</b> (et sa classe).<br>2. Repère la <b>voyelle</b> (autour de la consonne).<br>3. Regarde la <b>finale</b> (vivante ou morte).<br>4. Ajoute la <b>marque de ton</b>.<br>Puis écoute pour vérifier.` },
      { h: 'Mots du quotidien à déchiffrer', p: `Essaie de lire chaque mot <b>avant</b> de cliquer.`,
        ex: `ນ້ຳ|nam|eau
ປາ|pa|poisson
ບ້ານ|ban|maison
ລາວ|lao|lao ; il, elle
ກິນ|kin|manger
ໄປ|pai|aller
ດີ|di|bon
ແມວ|maeo|chat
ລົດ|lot|voiture
ເບຍ|bia|bière` },
      { h: 'Ce que tu verras dans la rue', ex: `ຮ້ານອາຫານ|han ahan|restaurant
ໂຮງແຮມ|hong haem|hôtel
ຫ້ອງນ້ຳ|hong nam|toilettes
ທາງເຂົ້າ|thang khao|entrée
ທາງອອກ|thang ok|sortie
ເປີດ|peut|ouvert
ປິດ|pit|fermé
ຫ້າມສູບຢາ|ham soup ya|interdit de fumer` },
      { h: 'Deux signes spéciaux', p: `<b>ໆ</b> (ໄມ້ຍົກ) répète le mot précédent : <i>ຊ້າໆ</i> = « xa xa ». <b>ຯ</b> abrège un mot long, comme « etc. » ou le nom de Vientiane sur les panneaux officiels.`,
        ex: `ຊ້າໆ|xa xa|lentement
ໄວໆ|vai vai|vite
ເລື້ອຍໆ|leuay leuay|souvent` },
      { h: 'Pas d\'espaces entre les mots !', p: `Le lao s'écrit <b>sans espace entre les mots</b>. L'espace marque la fin d'une phrase ou d'une idée (comme notre point). Au début, c'est déroutant : cherche les mots que tu connais, ils servent de repères.`,
        ex: `ຂ້ອຍຢາກກິນເຂົ້າໜຽວ|khoy yak kin khao niao|je veux manger du riz gluant`,
        tip: 'Félicitations : tu as les bases pour lire tout le lao ! Le reste du cours affiche toujours écriture + romanisation : essaie de lire le lao en premier, et ne regarde la romanisation qu\'en dernier recours.' }
    ]
  }
];
