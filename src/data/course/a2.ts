import type { Lesson } from '../../domain';

export const A2: Lesson[] = [
  {
    id: 'temps', lvl: 'A2', icon: '🕰️', t: 'L\'heure, les jours, les mois',
    goal: 'Dire l\'heure à la lao (le système en 4 tranches), les jours, les mois et fixer un moment.',
    blocks: [
      { h: 'Le système traditionnel : la journée en tranches', p: `À l'oral, les Lao découpent la journée en <b>tranches</b>, chacune avec son mot. Le système 24 h (<i>ໂມງ</i> + nombre) existe, mais c'est le système en tranches que tu entendras partout.
<div class="tbl"><table><tr><th>Heures</th><th>Formule</th><th>Exemple</th></tr><tr><td>6h – 11h</td><td>X ໂມງເຊົ້າ (matin)</td><td>ແປດໂມງເຊົ້າ = 8h</td></tr><tr><td>12h</td><td>ທ່ຽງ / ທ່ຽງວັນ (midi)</td><td>ທ່ຽງ</td></tr><tr><td>13h – 15h</td><td>ບ່າຍ X ໂມງ (après-midi)</td><td>ບ່າຍສອງໂມງ = 14h</td></tr><tr><td>16h – 18h</td><td>X ໂມງແລງ (fin d'après-midi)</td><td>ຫົກໂມງແລງ = 18h</td></tr><tr><td>19h – 23h</td><td>X ທຸ່ມ (soir, on recompte de 1)</td><td>ສອງທຸ່ມ = 20h</td></tr><tr><td>0h</td><td>ທ່ຽງຄືນ (minuit)</td><td>ທ່ຽງຄືນ</td></tr><tr><td>1h – 5h</td><td>ຕີ X (nuit, « frapper »)</td><td>ຕີສາມ = 3h</td></tr></table></div>` },
      { h: 'Dire l\'heure', ex: `ຈັກໂມງແລ້ວ?|jak mong laeo?|quelle heure est-il ?
ເຈັດໂມງເຊົ້າ|jet mong xao|7h du matin
ສິບໂມງເຄິ່ງ|sip mong kheung|10h30
ທ່ຽງ|thiang|midi
ບ່າຍໂມງ|bai mong|13h
ບ່າຍສາມໂມງ|bai sam mong|15h
ຫ້າໂມງແລງ|ha mong laeng|17h
ໜຶ່ງທຸ່ມ|neung thoum|19h
ສາມທຸ່ມ|sam thoum|21h
ຕີສອງ|ti song|2h du matin
ແປດໂມງສິບຫ້ານາທີ|paet mong sip ha nathi|8h15`,
        warn: 'Ne dis pas « ສິບເກົ້າໂມງ » (19h) à l\'oral : on te comprendra, mais un Lao dira ໜຶ່ງທຸ່ມ. Le 24h s\'utilise surtout pour les horaires officiels (bus, avion).' },
      { h: 'Les moments de la journée', ex: `ຕອນເຊົ້າ|ton xao|le matin
ຕອນທ່ຽງ|ton thiang|à midi
ຕອນບ່າຍ|ton bai|l'après-midi
ຕອນແລງ|ton laeng|en fin de journée
ຕອນຄ່ຳ|ton kham|le soir (crépuscule)
ກາງຄືນ|kang kheun|la nuit
ມື້ນີ້|meu ni|aujourd'hui
ມື້ວານ|meu van|hier
ມື້ອື່ນ|meu eun|demain
ມື້ຮື|meu heu|après-demain` },
      { h: 'Les jours de la semaine', p: `Tous commencent par <b>ວັນ</b> (van, jour), avec un nom d'origine sanskrite (planètes).`,
        ex: `ວັນຈັນ|van jan|lundi
ວັນອັງຄານ|van angkhan|mardi
ວັນພຸດ|van phout|mercredi
ວັນພະຫັດ|van phahat|jeudi
ວັນສຸກ|van souk|vendredi
ວັນເສົາ|van sao|samedi
ວັນອາທິດ|van athit|dimanche
ອາທິດໜ້າ|athit na|la semaine prochaine
ອາທິດແລ້ວ|athit laeo|la semaine dernière` },
      { h: 'Les 12 mois', ex: `ມັງກອນ|mangkon|janvier
ກຸມພາ|koumpha|février
ມີນາ|mina|mars
ເມສາ|mesa|avril
ພຶດສະພາ|pheutsapha|mai
ມິຖຸນາ|mithouna|juin
ກໍລະກົດ|kolakot|juillet
ສິງຫາ|singha|août
ກັນຍາ|kanya|septembre
ຕຸລາ|toula|octobre
ພະຈິກ|phajik|novembre
ທັນວາ|thanva|décembre`,
        tip: 'Avril (ເມສາ) = Pi Mai, le Nouvel An lao (14-16 avril) : trois jours de batailles d\'eau dans tout le pays. Réserve tout à l\'avance !' },
      { h: 'Fixer un rendez-vous', dlg: `Kham|ມື້ອື່ນວ່າງບໍ?|meu eun vang bo?|Tu es libre demain ?
Toi|ຕອນເຊົ້າບໍ່ວ່າງ, ຕອນບ່າຍວ່າງ|ton xao bo vang, ton bai vang|Pas le matin, mais l'après-midi oui.
Kham|ບ່າຍສາມໂມງໄດ້ບໍ?|bai sam mong dai bo?|15h, ça va ?
Toi|ໄດ້. ພົບກັນຢູ່ໃສ?|dai. phop kan you sai?|D'accord. On se retrouve où ?
Kham|ຢູ່ຮ້ານກາເຟແຄມຂອງ|you han kafe khaem khong|Au café au bord du Mékong.
Toi|ໂອເຄ, ແລ້ວພົບກັນ!|o khe, laeo phop kan!|OK, à demain !` }
    ]
  },
  {
    id: 'classificateurs', lvl: 'A2', icon: '🏷️', t: 'Les classificateurs',
    goal: 'Compter n\'importe quoi grâce aux classificateurs, et utiliser « ce », « ce…-là ».',
    blocks: [
      { h: 'Le principe', p: `En lao, on ne dit pas « 2 chats », mais <b>« chat 2 corps »</b>. Le classificateur dépend de la forme ou de la nature de l'objet. Ordre : <b>nom + nombre + classificateur</b>.`,
        ex: `ແມວສອງໂຕ|maeo song to|deux chats
ເບຍສາມແກ້ວ|bia sam kaeo|trois bières (verres)
ເບຍສອງຕຸກ|bia song touk|deux bières (bouteilles)
ຄົນຫ້າຄົນ|khon ha khon|cinq personnes` },
      { h: 'Les 12 indispensables', ex: `ຄົນ|khon|personnes
ໂຕ|to|animaux, vêtements, meubles, lettres
ອັນ|an|objets en général (joker !)
ໜ່ວຍ|nouay|objets ronds, fruits, appareils, pays
ຄັນ|khan|véhicules, parapluies, cuillères
ຫຼັງ|lang|maisons, bâtiments
ຫົວ|houa|livres
ແກ້ວ|kaeo|verres
ຖ້ວຍ|thouay|bols, tasses
ຈານ|jan|assiettes, plats
ຫ້ອງ|hong|pièces, chambres
ໃບ|bai|feuilles, billets, tickets, sacs` },
      { h: 'Le « un » se place après', p: `Pour « un », le nombre ໜຶ່ງ se met <b>après</b> le classificateur : « une personne » = ຄົນໜຶ່ງ. Et souvent, on le supprime.`,
        ex: `ໝາໂຕໜຶ່ງ|ma to neung|un chien
ເອົາເຝີຖ້ວຍໜຶ່ງ|ao feu thouay neung|une soupe, s'il vous plaît
ເອົາຖ້ວຍໜຶ່ງ|ao thouay neung|un bol (de ça)` },
      { h: 'Ce, cette, ce…-là', p: `<b>Nom + classificateur + ນີ້ / ນັ້ນ / ພຸ້ນ</b> (ici, là, là-bas au loin).`,
        ex: `ລົດຄັນນີ້|lot khan ni|cette voiture-ci
ເຮືອນຫຼັງນັ້ນ|heuan lang nan|cette maison-là
ຄົນນັ້ນແມ່ນໃຜ?|khon nan maen phai?|qui est cette personne ?
ອັນນີ້|an ni|ceci
ອັນນັ້ນ|an nan|cela
ອັນພຸ້ນ|an phoun|celui-là, là-bas
ເອົາອັນນີ້|ao an ni|je prends celui-ci` },
      { h: 'Combien ? (ຈັກ + classificateur)', ex: `ມີຈັກຄົນ?|mi jak khon?|vous êtes combien ?
ເອົາຈັກຈານ?|ao jak jan?|combien d'assiettes ?
ມີລົດຈັກຄັນ?|mi lot jak khan?|combien de voitures ?
ທຸກຄົນ|thouk khon|tout le monde
ບາງຄົນ|bang khon|certaines personnes`,
        tip: 'Tu as oublié le classificateur ? Utilise ອັນ (an) pour les objets et ໂຕ (to) pour les animaux. On te comprendra toujours.' }
    ]
  },
  {
    id: 'resto', lvl: 'A2', icon: '🍜', t: 'Au restaurant',
    goal: 'Commander, demander moins pimenté, comprendre la carte et payer.',
    blocks: [
      { h: 'Commander : ເອົາ … ແດ່', p: `La formule clé : <b>ເອົາ</b> (ao, prendre) + plat + <b>ແດ່</b> (dae, s'il te plaît, adoucisseur).`,
        ex: `ນ້ອງ!|nong!|(appeler le serveur)
ຂໍເມນູແດ່|kho menou dae|la carte, s'il vous plaît
ເອົາເຝີໜຶ່ງຖ້ວຍ|ao feu neung thouay|une soupe de nouilles
ເອົາລາບໄກ່ແດ່|ao lap kai dae|un larb de poulet, s'il vous plaît
ເອົາເຂົ້າໜຽວສອງກະຕິບ|ao khao niao song katip|deux paniers de riz gluant
ເອົາອັນນີ້|ao an ni|je prends ça (en pointant)
ມີຫຍັງແນະນຳບໍ?|mi nyang nae nam bo?|vous recommandez quoi ?` },
      { h: 'Le piment !', ex: `ເຜັດບໍ?|phet bo?|c'est piquant ?
ບໍ່ເອົາເຜັດ|bo ao phet|sans piment
ເຜັດໜ້ອຍໜຶ່ງ|phet noy neung|un peu piquant
ເຜັດກາງ|phet kang|moyennement piquant
ກິນເຜັດບໍ່ໄດ້|kin phet bo dai|je ne supporte pas le piment
ເຜັດຫຼາຍ!|phet lai!|très piquant !`,
        warn: '« Un peu » piquant pour un Lao = très piquant pour un Européen. Commence par ບໍ່ເອົາເຜັດ, et ajoute du piment toi-même.' },
      { h: 'Les plats à connaître', ex: `ລາບ|lap|larb, salade de viande hachée aux herbes
ຕຳໝາກຫຸ່ງ|tam mak houng|salade de papaye pilée
ເຂົ້າໜຽວ|khao niao|riz gluant
ເຝີ|feu|soupe de nouilles (pho lao)
ເຂົ້າປຸ້ນ|khao poun|vermicelles sauce coco
ປີ້ງໄກ່|ping kai|poulet grillé
ເອາະລາມ|o lam|ragoût de Luang Prabang
ແຈ່ວບອງ|jaeo bong|pâte de piment
ເຂົ້າຈີ່|khao ji|sandwich baguette
ໄສ້ອົ່ວ|sai oua|saucisse lao` },
      { h: 'Boire', ex: `ນ້ຳເປົ່າ|nam pao|eau plate
ນ້ຳກ້ອນ|nam kon|glaçons
ບໍ່ໃສ່ນ້ຳກ້ອນ|bo sai nam kon|sans glaçons
ເບຍລາວ|bia lao|Beerlao
ກາເຟລາວ|kafe lao|café lao (avec lait concentré)
ກາເຟດຳ|kafe dam|café noir
ນ້ຳໝາກພ້າວ|nam mak phao|eau de coco
ໝົດແກ້ວ!|mot kaeo!|cul sec !
ຕ້ານ!|tan!|santé !` },
      { h: 'Exprimer ton avis et payer', ex: `ແຊບຫຼາຍ!|xaep lai!|très bon !
ແຊບຊ້ອຍ|xaep xoy|super délicieux (familier)
ອີ່ມແລ້ວ|im laeo|je n'ai plus faim
ໄລ່ເງິນແດ່|lai ngeun dae|l'addition, s'il vous plaît
ເກັບເງິນແດ່|kep ngeun dae|l'addition (autre façon)
ທັງໝົດເທົ່າໃດ?|thang mot thao dai?|ça fait combien en tout ?
ຫໍ່ກັບບ້ານໄດ້ບໍ?|ho kap ban dai bo?|je peux emporter ?`,
        tip: 'Le riz gluant se mange avec la main droite : forme une petite boule, puis trempe-la dans les plats. Ne remets jamais le riz entamé dans le panier commun.' },
      { h: 'Dialogue au restaurant', dlg: `Serveuse|ເອົາຫຍັງ?|ao nyang?|Qu'est-ce que vous prenez ?
Toi|ເອົາຕຳໝາກຫຸ່ງໜຶ່ງຈານ, ບໍ່ເອົາເຜັດເດີ້|ao tam mak houng neung jan, bo ao phet de|Une salade de papaye, sans piment hein.
Serveuse|ໃສ່ປາແດກບໍ?|sai pa daek bo?|Avec de la sauce de poisson fermenté ?
Toi|ໃສ່ໜ້ອຍໜຶ່ງ. ແລະເຂົ້າໜຽວກະຕິບໜຶ່ງ|sai noy neung. lae khao niao katip neung|Un peu. Et un panier de riz gluant.
Serveuse|ດື່ມຫຍັງບໍ?|deum nyang bo?|Vous buvez quelque chose ?
Toi|ເບຍລາວໜຶ່ງຕຸກ, ໃສ່ນ້ຳກ້ອນ|bia lao neung touk, sai nam kon|Une Beerlao, avec glaçons.` }
    ]
  },
  {
    id: 'marche', lvl: 'A2', icon: '🛍️', t: 'Au marché',
    goal: 'Acheter, choisir, comparer les prix et négocier avec le sourire.',
    blocks: [
      { h: 'Les verbes d\'achat', ex: `ຊື້|xeu|acheter
ຂາຍ|khai|vendre
ມີ … ຂາຍບໍ?|mi … khai bo?|vous vendez … ?
ເບິ່ງກ່ອນ|beung kon|je regarde d'abord
ລອງໄດ້ບໍ?|long dai bo?|je peux essayer ?
ເອົາອັນນີ້|ao an ni|je prends celui-ci
ບໍ່ເອົາ|bo ao|je n'en veux pas` },
      { h: 'Prix et négociation', ex: `ເທົ່າໃດ?|thao dai?|combien ?
ກິໂລລະເທົ່າໃດ?|kilo la thao dai?|combien le kilo ?
ແພງ|phaeng|cher
ຖືກ|theuk|bon marché
ແພງໂພດ|phaeng phot|trop cher
ຫຼຸດໄດ້ບໍ?|loud dai bo?|vous pouvez baisser ?
ຫຼຸດໃຫ້ແດ່|loud hai dae|faites-moi une réduction
ລາຄາສຸດທ້າຍ|lakha sout thai|dernier prix`,
        tip: 'Négocie au marché et pour les souvenirs, pas dans les épiceries ni pour la nourriture à prix fixe. Toujours avec un sourire : une négociation agressive fait « perdre la face ». Si ça bloque, remercie et pars ; souvent on te rappelle !' },
      { h: 'Tailles, couleurs, quantités', ex: `ໃຫຍ່|nyai|grand
ນ້ອຍ|noy|petit
ມີໃຫຍ່ກວ່ານີ້ບໍ?|mi nyai kwa ni bo?|vous avez plus grand ?
ມີສີອື່ນບໍ?|mi si eun bo?|vous avez d'autres couleurs ?
ເຄິ່ງກິໂລ|kheung kilo|un demi-kilo
ອີກໜ້ອຍໜຶ່ງ|ik noy neung|encore un peu
ພໍແລ້ວ|pho laeo|ça suffit` },
      { h: 'Fruits du marché', ex: `ໝາກມ່ວງ|mak mouang|mangue
ໝາກກ້ວຍ|mak kouay|banane
ໝາກນັດ|mak nat|ananas
ໝາກໂມ|mak mo|pastèque
ໝາກພ້າວ|mak phao|noix de coco
ໝາກຂາມ|mak kham|tamarin
ໝາກງາມ|mak ngam|rambutan`,
        tip: 'ໝາກ (mak) = « fruit » : il précède presque tous les noms de fruits. Tu le reconnaîtras sur tous les étals.' },
      { h: 'Dialogue : acheter des mangues', dlg: `Toi|ເອື້ອຍ, ໝາກມ່ວງກິໂລລະເທົ່າໃດ?|euay, mak mouang kilo la thao dai?|Grande sœur, combien le kilo de mangues ?
Vendeuse|ກິໂລລະຊາວພັນ|kilo la xao phan|20 000 le kilo.
Toi|ຫວານບໍ?|van bo?|Elles sont sucrées ?
Vendeuse|ຫວານຫຼາຍ! ລອງຊີມເບິ່ງ|van lai! long xim beung|Très ! Goûte.
Toi|ແຊບແທ້. ເອົາສອງກິໂລ, ສາມສິບຫ້າພັນໄດ້ບໍ?|xaep thae. ao song kilo, sam sip ha phan dai bo?|Délicieux. Deux kilos pour 35 000 ?
Vendeuse|ໄດ້, ເອົາໄປ|dai, ao pai|D'accord, c'est pour toi.` }
    ]
  },
  {
    id: 'transport', lvl: 'A2', icon: '🛺', t: 'Se déplacer',
    goal: 'Prendre un tuk-tuk, demander son chemin, comprendre les directions.',
    blocks: [
      { h: 'Les transports', ex: `ລົດຕຸກຕຸກ|lot touk touk|tuk-tuk
ລົດຈຳໂບ້|lot jambo|grand tuk-tuk
ລົດເມ|lot me|bus
ລົດໄຟ|lot fai|train
ເຮືອບິນ|heua bin|avion
ເຮືອ|heua|bateau
ລົດຈັກ|lot jak|moto, scooter
ລົດຖີບ|lot thip|vélo
ສະຖານີລົດເມ|sathani lot me|gare routière
ສະໜາມບິນ|sanam bin|aéroport` },
      { h: 'Prendre un tuk-tuk', p: `Négocie <b>toujours le prix avant de monter</b>. Pour LOCA, Grab ou équivalent, le prix est fixé à l'avance.`,
        ex: `ໄປຕະຫຼາດເຊົ້າເທົ່າໃດ?|pai talat xao thao dai?|combien pour le marché du matin ?
ໄປສະໜາມບິນ|pai sanam bin|à l'aéroport
ຈອດຢູ່ນີ້|jot you ni|arrêtez-vous ici
ຈອດແດ່|jot dae|arrêtez-vous, s'il vous plaît
ໄປຊ້າໆແດ່|pai xa xa dae|plus lentement, s'il vous plaît
ຮອດແລ້ວບໍ?|hot laeo bo?|on est arrivés ?` },
      { h: 'Les directions', ex: `ໄປຊື່ໆ|pai xeu xeu|tout droit
ລ້ຽວຊ້າຍ|liao xai|tournez à gauche
ລ້ຽວຂວາ|liao khoua|tournez à droite
ກັບລົດ|kap lot|faites demi-tour
ຢູ່ທາງຊ້າຍ|you thang xai|à gauche
ກົງກັນຂ້າມ|kong kan kham|en face
ທາງແຍກ|thang nyaek|carrefour
ໄຟແດງ|fai daeng|feu rouge
ໃກ້ (ໃກ້ໆ)|kai (kai kai)|près (≠ ໄກ loin)
ໄກ|kai|loin (≠ ໃກ້ près)`,
        warn: 'ໃກ້ (près) et ໄກ (loin) se romanisent pareil, mais le ton est opposé : ໃກ້ est descendant et bref, ໄກ est montant. Écoute-les 10 fois de suite ! En cas de doute, ajoute un geste.' },
      { h: 'Demander son chemin', ex: `… ຢູ່ໃສ?|… you sai?|où est … ?
ໄປ … ແນວໃດ?|pai … naeo dai?|comment aller à … ?
ໄກບໍ?|kai bo?|c'est loin ?
ຍ່າງໄປໄດ້ບໍ?|nyang pai dai bo?|on peut y aller à pied ?
ໃຊ້ເວລາດົນບໍ?|xai vela don bo?|ça prend longtemps ?
ຫຼົງທາງ|long thang|je suis perdu` },
      { h: 'Dialogue avec un chauffeur', dlg: `Toi|ລຸງ, ໄປວັດສີສະເກດເທົ່າໃດ?|loung, pai vat sisaket thao dai?|Oncle, combien pour le Vat Sisaket ?
Chauffeur|ສາມສິບພັນ|sam sip phan|30 000.
Toi|ຊາວພັນໄດ້ບໍ? ໃກ້ໆນີ້ເອງ|xao phan dai bo? kai kai ni eng|20 000 ? C'est tout près.
Chauffeur|ຊາວຫ້າພັນ, ຂຶ້ນມາ|xao ha phan, kheun ma|25 000, montez.
Toi|ໂອເຄ. ລ້ຽວຂວາຢູ່ທາງແຍກເດີ້|o khe. liao khoua you thang nyaek de|OK. Tournez à droite au carrefour.
Chauffeur|ຮອດແລ້ວ!|hot laeo!|On est arrivés !` }
    ]
  },
  {
    id: 'hotel', lvl: 'A2', icon: '🏨', t: 'À l\'hôtel',
    goal: 'Réserver une chambre, poser des questions pratiques et régler un problème.',
    blocks: [
      { h: 'Réserver', ex: `ມີຫ້ອງວ່າງບໍ?|mi hong vang bo?|vous avez une chambre libre ?
ຫ້ອງຕຽງດຽວ|hong tiang diao|chambre à un lit
ຫ້ອງຕຽງຄູ່|hong tiang khou|chambre à deux lits
ຄືນໜຶ່ງເທົ່າໃດ?|kheun neung thao dai?|combien la nuit ?
ພັກສາມຄືນ|phak sam kheun|je reste trois nuits
ລວມອາຫານເຊົ້າບໍ?|louam ahan xao bo?|petit-déjeuner inclus ?
ເບິ່ງຫ້ອງກ່ອນໄດ້ບໍ?|beung hong kon dai bo?|je peux voir la chambre ?` },
      { h: 'Les équipements', ex: `ແອ|ae|climatisation
ພັດລົມ|phat lom|ventilateur
ນ້ຳຮ້ອນ|nam hon|eau chaude
ວາຍຟາຍ|vai fai|wifi
ລະຫັດວາຍຟາຍແມ່ນຫຍັງ?|lahat vai fai maen nyang?|quel est le code wifi ?
ກະແຈ|kachae|clé
ຜ້າເຊັດໂຕ|pha xet to|serviette` },
      { h: 'Signaler un problème', ex: `ແອບໍ່ເຢັນ|ae bo yen|la clim ne refroidit pas
ບໍ່ມີນ້ຳຮ້ອນ|bo mi nam hon|pas d'eau chaude
ໄຟດັບ|fai dap|la lumière ne marche plus / coupure
ວາຍຟາຍໃຊ້ບໍ່ໄດ້|vai fai xai bo dai|le wifi ne marche pas
ມີຍຸງຫຼາຍ|mi nyoung lai|il y a beaucoup de moustiques
ປ່ຽນຫ້ອງໄດ້ບໍ?|pian hong dai bo?|je peux changer de chambre ?`,
        tip: 'Exprime un problème calmement, avec le sourire et ແດ່. Hausser le ton fait perdre la face aux deux parties et bloque toute solution. Ici, la douceur est toujours plus efficace.' },
      { h: 'Le départ', ex: `ເຊັກເອົາກີ່ໂມງ?|xek ao ki mong?|le check-out est à quelle heure ?
ຝາກກະເປົາໄວ້ໄດ້ບໍ?|fak kapao vai dai bo?|je peux laisser mes bagages ?
ເອີ້ນລົດໃຫ້ແດ່|eun lot hai dae|appelez-moi un taxi, s'il vous plaît` },
      { h: 'Dialogue à la réception', dlg: `Toi|ສະບາຍດີ, ມີຫ້ອງວ່າງບໍ?|sabaidi, mi hong vang bo?|Bonjour, vous avez une chambre ?
Réception|ມີ. ຈັກຄົນ?|mi. jak khon?|Oui. Pour combien de personnes ?
Toi|ສອງຄົນ, ຕຽງຄູ່. ຄືນໜຶ່ງເທົ່າໃດ?|song khon, tiang khou. kheun neung thao dai?|Deux, lits jumeaux. Combien la nuit ?
Réception|ສອງແສນກີບ, ລວມອາຫານເຊົ້າ|song saen kip, louam ahan xao|200 000 kips, petit-déjeuner inclus.
Toi|ມີແອບໍ?|mi ae bo?|Il y a la clim ?
Réception|ມີ. ນີ້ກະແຈ, ຫ້ອງສອງສູນຫ້າ|mi. ni kachae, hong song soun ha|Oui. Voici la clé, chambre 205.` }
    ]
  },
  {
    id: 'sante', lvl: 'A2', icon: '💊', t: 'Santé et pharmacie',
    goal: 'Expliquer un symptôme, acheter des médicaments et gérer une urgence.',
    blocks: [
      { h: 'Où aller', ex: `ໂຮງໝໍ|hong mo|hôpital
ຄລີນິກ|khlinik|clinique
ຮ້ານຂາຍຢາ|han khai ya|pharmacie
ທ່ານໝໍ|than mo|médecin
ໝໍແຂ້ວ|mo khaeo|dentiste
ລົດໂຮງໝໍ|lot hong mo|ambulance` },
      { h: 'Dire où on a mal : ເຈັບ + partie du corps', ex: `ເຈັບຫົວ|jep houa|j'ai mal à la tête
ເຈັບທ້ອງ|jep thong|j'ai mal au ventre
ເຈັບຄໍ|jep kho|j'ai mal à la gorge
ເຈັບແຂ້ວ|jep khaeo|j'ai mal aux dents
ເຈັບຫຼັງ|jep lang|j'ai mal au dos
ເຈັບຢູ່ນີ້|jep you ni|j'ai mal ici` },
      { h: 'Les symptômes', ex: `ເປັນໄຂ້|pen khai|avoir de la fièvre
ຖອກທ້ອງ|thok thong|avoir la diarrhée
ຮາກ|hak|vomir
ໄອ|ai|tousser
ເປັນຫວັດ|pen vat|être enrhumé
ວິນຫົວ|vin houa|avoir des vertiges
ແພ້|phae|être allergique
ແພ້ຢາ|phae ya|allergique aux médicaments
ຍຸງກັດ|nyoung kat|piqûre de moustique` },
      { h: 'À la pharmacie', ex: `ມີຢາແກ້ເຈັບຫົວບໍ?|mi ya kae jep houa bo?|vous avez un médicament contre le mal de tête ?
ຢາແກ້ໄຂ້|ya kae khai|médicament contre la fièvre
ກິນມື້ລະຈັກເທື່ອ?|kin meu la jak theua?|combien de fois par jour ?
ກິນມື້ລະສາມເທື່ອຫຼັງອາຫານ|kin meu la sam theua lang ahan|trois fois par jour après les repas
ຢາກັນຍຸງ|ya kan nyoung|anti-moustique`,
        warn: 'Pour toute fièvre forte après une piqûre de moustique (dengue, paludisme), consulte un médecin rapidement. Les hôpitaux de Vientiane sont limités : pour les cas graves, on traverse souvent vers Nong Khai ou Udon Thani en Thaïlande.' },
      { h: 'Urgences', ex: `ຊ່ວຍແດ່!|xouay dae!|à l'aide !
ໂທຫາລົດໂຮງໝໍແດ່|tho ha lot hong mo dae|appelez une ambulance
ເກີດອຸບັດຕິເຫດ|keut oubattihet|il y a eu un accident
ຂ້ອຍບໍ່ສະບາຍ|khoy bo sabai|je suis malade
ດ່ວນ!|douan!|urgent !` },
      { h: 'Dialogue à la pharmacie', dlg: `Pharmacienne|ເປັນຫຍັງ?|pen nyang?|Qu'est-ce qui ne va pas ?
Toi|ຖອກທ້ອງ ແຕ່ມື້ວານ|thok thong tae meu van|J'ai la diarrhée depuis hier.
Pharmacienne|ເປັນໄຂ້ນຳບໍ?|pen khai nam bo?|Vous avez aussi de la fièvre ?
Toi|ບໍ່ເປັນ, ແຕ່ເຈັບທ້ອງໜ້ອຍໜຶ່ງ|bo pen, tae jep thong noy neung|Non, mais un peu mal au ventre.
Pharmacienne|ກິນຢານີ້ມື້ລະສອງເທື່ອ, ດື່ມນ້ຳຫຼາຍໆ|kin ya ni meu la song theua, deum nam lai lai|Prenez ça deux fois par jour, et buvez beaucoup.
Toi|ຂອບໃຈຫຼາຍໆ|khop jai lai lai|Merci beaucoup.` }
    ]
  }
];
