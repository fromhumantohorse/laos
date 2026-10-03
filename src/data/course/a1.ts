import type { Lesson } from '../../domain';

export const A1: Lesson[] = [
  {
    id: 'saluer', lvl: 'A1', icon: '🙏', t: 'Saluer comme un Lao',
    goal: 'Dire bonjour, merci, au revoir avec le nop, et comprendre les vraies salutations du quotidien.',
    blocks: [
      { h: 'ສະບາຍດີ : la formule magique', p: `<i>ສະບາຍດີ</i> (sabaidi) signifie littéralement « bien-être bon ». Il sert à la fois de <b>bonjour, bonsoir et au revoir</b>, à toute heure. Il n'existe pas de « bonjour » différent pour le matin ou le soir.`,
        ex: `ສະບາຍດີ|sabaidi|bonjour / au revoir
ສະບາຍດີບໍ?|sabaidi bo?|ça va ?
ສະບາຍດີ, ເຈົ້າເດ?|sabaidi, jao de?|ça va, et toi ?
ບໍ່ຄ່ອຍສະບາຍ|bo khoy sabai|pas trop bien` },
      { h: 'Le nop (ນົບ)', p: `On salue en joignant les mains à hauteur de poitrine et en inclinant légèrement la tête. <b>Plus les mains sont hautes, plus le respect est grand</b> : menton pour un aîné, front pour un moine. Le plus jeune salue en premier. Un enfant ou un serveur te fait le nop ? Un simple sourire et un hochement de tête suffisent.`,
        warn: 'Ne fais pas le nop à tout le monde avec insistance (serveurs, enfants) : c\'est étrange, voire gênant pour eux. Et ne touche jamais la tête de quelqu\'un, même d\'un enfant.' },
      { h: 'Ce que les Lao disent VRAIMENT', p: `Dans la rue, entre connaissances, on dit rarement « sabaidi ». On demande plutôt où tu vas ou si tu as mangé. <b>Ce ne sont pas des questions indiscrètes</b> : ce sont des salutations. Réponds vaguement, avec un sourire.`,
        ex: `ໄປໃສມາ?|pai sai ma?|tu reviens d'où ? (salutation)
ໄປໃສ?|pai sai?|tu vas où ?
ໄປທຽວ|pai thiao|je me balade
ກິນເຂົ້າແລ້ວບໍ?|kin khao laeo bo?|tu as mangé ? (= ça va ?)
ກິນແລ້ວ|kin laeo|oui, j'ai mangé
ຍັງ|nyang|pas encore` },
      { h: 'Merci, pardon, de rien', ex: `ຂອບໃຈ|khop jai|merci
ຂອບໃຈຫຼາຍໆ|khop jai lai lai|merci beaucoup
ຂອບໃຈເດີ້|khop jai de|merci hein (chaleureux)
ບໍ່ເປັນຫຍັງ|bo pen nyang|de rien / pas grave
ຂໍໂທດ|kho thot|pardon, excusez-moi
ຂໍໂທດເດີ້|kho thot de|désolé (doux)`,
        tip: 'ບໍ່ເປັນຫຍັງ (bo pen nyang) est LA philosophie lao : « ce n\'est rien ». Retard, erreur, pluie : bo pen nyang. Tu l\'entendras 50 fois par jour.' },
      { h: 'Dire au revoir', ex: `ລາກ່ອນ|la kon|adieu (formel, rare à l'oral)
ໄປກ່ອນເດີ້|pai kon de|j'y vais (le plus courant)
ພົບກັນໃໝ່|phop kan mai|à la prochaine
ແລ້ວພົບກັນ|laeo phop kan|à plus tard
ໂຊກດີ|xok di|bonne chance / bon voyage
ເດີນທາງປອດໄພ|deun thang pot phai|bon voyage (sûr)` },
      { h: 'Dialogue au marché du matin', dlg: `Vendeuse|ສະບາຍດີ, ໄປໃສມາ?|sabaidi, pai sai ma?|Bonjour, tu viens d'où ?
Toi|ໄປທຽວມາ. ສະບາຍດີບໍ?|pai thiao ma. sabaidi bo?|Je me baladais. Ça va ?
Vendeuse|ສະບາຍດີ. ກິນເຂົ້າແລ້ວບໍ?|sabaidi. kin khao laeo bo?|Ça va. Tu as mangé ?
Toi|ຍັງເທື່ອ|nyang theua|Pas encore.
Vendeuse|ມາກິນເຂົ້າປຽກນຳກັນ!|ma kin khao piak nam kan!|Viens manger une soupe de riz avec nous !
Toi|ຂອບໃຈຫຼາຍໆເດີ້|khop jai lai lai de|Merci beaucoup !` }
    ]
  },
  {
    id: 'presenter', lvl: 'A1', icon: '🙋', t: 'Se présenter',
    goal: 'Dire ton nom, ta nationalité, ton métier, ton âge, et poser les mêmes questions.',
    blocks: [
      { h: 'Ton nom', p: `<i>ຊື່</i> (xeu) = nom / s'appeler. Pas besoin de verbe « être » : « Je nom Paul ».`,
        ex: `ຂ້ອຍຊື່ປອນ|khoy xeu Pon|je m'appelle Paul
ເຈົ້າຊື່ຫຍັງ?|jao xeu nyang?|comment tu t'appelles ?
ຊື່ຫຍັງ?|xeu nyang?|ton nom ? (familier)
ຍິນດີທີ່ໄດ້ຮູ້ຈັກ|nyin di thi dai hou jak|enchanté` },
      { h: 'Ta nationalité', p: `<i>ຄົນ</i> (khon) = personne + nom du pays. <i>ມາຈາກ</i> (ma jak) = venir de.`,
        ex: `ຂ້ອຍເປັນຄົນຝຣັ່ງ|khoy pen khon falang|je suis français(e)
ມາຈາກປະເທດໃດ?|ma jak pathet dai?|tu viens de quel pays ?
ມາຈາກແບນຊິກ|ma jak baen xik|je viens de Belgique
ຄົນສະວິດ|khon saviet|Suisse (personne)
ຄົນການາດາ|khon kanada|Canadien(ne)`,
        warn: 'ຝຣັ່ງ (falang) veut dire « Français », mais aussi « étranger occidental » en général ! Si on t\'appelle « falang » dans la rue, ce n\'est pas insultant, c\'est juste descriptif.' },
      { h: 'Ton âge et ton métier', ex: `ອາຍຸຈັກປີ?|ayou jak pi?|tu as quel âge ?
ອາຍຸສາມສິບປີ|ayou sam sip pi|j'ai 30 ans
ເຮັດວຽກຫຍັງ?|het viak nyang?|tu fais quel travail ?
ເປັນຄູ|pen khou|je suis prof
ເປັນນັກທ່ອງທ່ຽວ|pen nak thong thiao|je suis touriste
ເປັນນັກຮຽນ|pen nak hian|je suis étudiant(e)`,
        tip: 'Demander l\'âge est NORMAL au Laos : c\'est indispensable pour savoir quel pronom utiliser (grand frère, petite sœur, oncle…). Ne sois pas choqué, et réponds sans gêne.' },
      { h: 'Ta situation', ex: `ແຕ່ງງານແລ້ວບໍ?|taeng ngan laeo bo?|tu es marié(e) ?
ແຕ່ງແລ້ວ|taeng laeo|oui, marié(e)
ຍັງບໍ່ທັນແຕ່ງ|nyang bo than taeng|pas encore marié(e)
ມີລູກບໍ?|mi louk bo?|tu as des enfants ?
ມີລູກສອງຄົນ|mi louk song khon|j'ai deux enfants`,
        warn: 'Ne réponds jamais « non, jamais » à « marié ? » : on dit ຍັງ (pas encore). Pour un Lao, le mariage est une évidence future. « Jamais » sonne triste.' },
      { h: 'Dialogue : première rencontre', dlg: `Noy|ສະບາຍດີ! ເຈົ້າຊື່ຫຍັງ?|sabaidi! jao xeu nyang?|Bonjour ! Tu t'appelles comment ?
Toi|ຂ້ອຍຊື່ປອນ. ເຈົ້າເດ?|khoy xeu Pon. jao de?|Paul. Et toi ?
Noy|ຂ້ອຍຊື່ນ້ອຍ. ມາຈາກໃສ?|khoy xeu Noy. ma jak sai?|Noy. Tu viens d'où ?
Toi|ມາຈາກຝຣັ່ງ. ມາທ່ຽວລາວ|ma jak falang. ma thiao lao|De France. Je visite le Laos.
Noy|ເວົ້າລາວເກັ່ງເດີ້!|vao lao keng de!|Tu parles bien lao !
Toi|ໜ້ອຍໜຶ່ງ, ກຳລັງຮຽນຢູ່|noy neung, kamlang hian you|Un peu, j'apprends.` }
    ]
  },
  {
    id: 'pronoms', lvl: 'A1', icon: '👥', t: 'Pronoms : qui dit quoi à qui',
    goal: 'Choisir le bon « je » et le bon « tu » selon l\'âge et la relation, comme un Lao.',
    blocks: [
      { h: 'Les pronoms de base', ex: `ຂ້ອຍ|khoy|je (neutre, universel)
ເຈົ້າ|jao|tu, vous (poli, sûr)
ລາວ|lao|il, elle
ພວກເຮົາ|phouak hao|nous
ເຮົາ|hao|nous ; je (familier)
ພວກເຈົ້າ|phouak jao|vous (pluriel)
ພວກເຂົາ|phouak khao|ils, elles` },
      { h: 'Le secret : les termes de parenté', p: `Au quotidien, les Lao utilisent surtout des <b>termes familiaux à la place des pronoms</b>, même avec des inconnus. On s'appelle grand frère, petite sœur, oncle, tante… selon l'âge estimé.`,
        ex: `ອ້າຍ|ay|grand frère (homme un peu plus âgé)
ເອື້ອຍ|euay|grande sœur (femme un peu plus âgée)
ນ້ອງ|nong|petit(e) frère/sœur (plus jeune : serveurs…)
ລຸງ|loung|oncle (homme plus âgé que tes parents)
ປ້າ|pa|tante (femme plus âgée que tes parents)
ພໍ່ຕູ້|pho tou|grand-père (vieil homme)
ແມ່ຕູ້|mae tou|grand-mère (vieille femme)`,
        tip: 'Pour appeler un serveur ou une serveuse : ນ້ອງ ! (nong). Pour une vendeuse d\'âge mûr : ເອື້ອຍ ou ປ້າ. Dans le doute, rajeunis la personne : ເອື້ອຍ plutôt que ປ້າ fait toujours plaisir.' },
      { h: 'Parler de soi avec ces termes', p: `On peut aussi se désigner soi-même par son rôle : un aîné dit « ອ້າຍ » (grand frère) pour dire « je ».`,
        ex: `ນ້ອງ, ເອົາເບຍແດ່|nong, ao bia dae|(petite sœur), une bière s'il te plaît
ເອື້ອຍ, ອັນນີ້ເທົ່າໃດ?|euay, an ni thao dai?|(grande sœur), ça coûte combien ?
ອ້າຍຊິໄປກ່ອນເດີ້|ay xi pai kon de|(grand frère =) je vais y aller
ລຸງ, ໄປຕະຫຼາດເຊົ້າເທົ່າໃດ?|loung, pai talat xao thao dai?|(oncle), combien pour le marché du matin ?` },
      { h: 'Pronoms familiers (avec prudence)', ex: `ກູ|kou|je (très familier, entre amis proches)
ມຶງ|meung|tu (très familier ; insultant sinon)
ໂຕ|to|toi (amical, entre jeunes)
ເພິ່ນ|pheun|il/elle (respectueux : aîné, moine)`,
        warn: 'ກູ/ມຶງ sont normaux entre amis très proches mais extrêmement grossiers avec n\'importe qui d\'autre. Ne les utilise jamais tant que tu ne maîtrises pas les codes.' },
      { h: 'Les titres de politesse', ex: `ທ້າວ|thao|Monsieur (devant le prénom)
ນາງ|nang|Madame / Mademoiselle
ທ່ານ|than|Monsieur/Madame (très formel, officiel)
ອາຈານ|achan|professeur (titre respectueux)`,
        tip: 'On utilise TOUJOURS le prénom, jamais le nom de famille. M. Somphone Keo se dit « ທ້າວສົມພອນ » ou simplement « ອ້າຍສົມພອນ ».' }
    ]
  },
  {
    id: 'famille', lvl: 'A1', icon: '👨‍👩‍👧', t: 'La famille',
    goal: 'Parler de ta famille et comprendre le système lao, plus précis que le français.',
    blocks: [
      { h: 'Le noyau', ex: `ຄອບຄົວ|khop khoua|famille
ພໍ່|pho|père
ແມ່|mae|mère
ພໍ່ແມ່|pho mae|parents
ລູກ|louk|enfant (de quelqu'un)
ລູກຊາຍ|louk xai|fils
ລູກສາວ|louk sao|fille
ຜົວ|phoua|mari
ເມຍ|mia|épouse (courant)
ແຟນ|faen|petit(e) ami(e) ; conjoint` },
      { h: 'Frères et sœurs : l\'âge compte', p: `Le lao distingue toujours <b>aîné ou cadet</b>. Il n'y a pas de mot unique pour « frère ».`,
        ex: `ອ້າຍ|ay|grand frère
ເອື້ອຍ|euay|grande sœur
ນ້ອງຊາຍ|nong xai|petit frère
ນ້ອງສາວ|nong sao|petite sœur
ພີ່ນ້ອງ|phi nong|frères et sœurs ; cousins ; proches
ລູກຜູ້ກົກ|louk phou kok|l'aîné(e)
ລູກຫຼ້າ|louk la|le/la benjamin(e)` },
      { h: 'Grands-parents : côté père ou mère ?', p: `Le lao précise le côté de la famille. Côté <b>père</b> : ປູ່/ຍ່າ. Côté <b>mère</b> : ພໍ່ຕູ້/ແມ່ຕູ້.`,
        ex: `ປູ່|pou|grand-père paternel
ຍ່າ|nya|grand-mère paternelle
ພໍ່ຕູ້|pho tou|grand-père maternel
ແມ່ຕູ້|mae tou|grand-mère maternelle
ຫຼານ|lan|petit-enfant ; neveu, nièce` },
      { h: 'Oncles, tantes, belle-famille', ex: `ລຸງ|loung|oncle (aîné des parents)
ປ້າ|pa|tante (aînée des parents)
ອາວ|ao|oncle (cadet du père)
ອາ|a|tante (cadette du père)
ນ້າ|na|oncle/tante (cadet(te) de la mère)
ພໍ່ເຖົ້າ|pho thao|beau-père
ແມ່ເຖົ້າ|mae thao|belle-mère
ລູກເຂີຍ|louk kheuy|gendre
ລູກໃພ້|louk phai|belle-fille` },
      { h: 'Parler de sa famille', ex: `ມີອ້າຍເອື້ອຍນ້ອງຈັກຄົນ?|mi ay euay nong jak khon?|tu as combien de frères et sœurs ?
ມີນ້ອງສາວຄົນໜຶ່ງ|mi nong sao khon neung|j'ai une petite sœur
ພໍ່ແມ່ຢູ່ໃສ?|pho mae you sai?|où vivent tes parents ?
ຢູ່ຝຣັ່ງ|you falang|en France
ເປັນລູກຄົນດຽວ|pen louk khon diao|je suis enfant unique`,
        tip: 'La famille élargie vit souvent sous le même toit. Le gendre s\'installe traditionnellement chez les parents de sa femme : c\'est souvent la fille cadette qui hérite de la maison et s\'occupe des parents.' },
      { h: 'Dialogue : photo de famille', dlg: `Mai|ນີ້ແມ່ນໃຜ?|ni maen phai?|C'est qui, ça ?
Toi|ແມ່ນນ້ອງສາວຂ້ອຍ|maen nong sao khoy|C'est ma petite sœur.
Mai|ງາມຫຼາຍ! ລາວອາຍຸຈັກປີ?|ngam lai! lao ayou jak pi?|Très jolie ! Elle a quel âge ?
Toi|ຊາວຫ້າປີ. ແຕ່ງງານແລ້ວ|xao ha pi. taeng ngan laeo|25 ans. Elle est mariée.
Mai|ມີຫຼານແລ້ວບໍ?|mi lan laeo bo?|Tu as déjà des neveux ?
Toi|ຍັງ, ຍັງບໍ່ທັນມີ|nyang, nyang bo than mi|Pas encore.` }
    ]
  },
  {
    id: 'phrase', lvl: 'A1', icon: '🧱', t: 'Construire une phrase',
    goal: 'Maîtriser être, avoir, la négation, et les 3 marqueurs de temps.',
    blocks: [
      { h: '« Être » : trois mots différents', p: `<b>ເປັນ</b> (pen) : être + métier, rôle, état (« je suis prof », « être malade »).<br><b>ແມ່ນ</b> (maen) : être = identifier, « c'est » (« c'est mon livre »).<br><b>ຢູ່</b> (you) : être à un endroit, habiter.<br>Avec un adjectif : <b>aucun verbe</b> ! « Je fatigué. »`,
        ex: `ຂ້ອຍເປັນຄູ|khoy pen khou|je suis professeur
ເປັນໄຂ້|pen khai|avoir de la fièvre
ນີ້ແມ່ນບ້ານຂ້ອຍ|ni maen ban khoy|c'est ma maison
ຂ້ອຍຢູ່ວຽງຈັນ|khoy you viang jan|j'habite à Vientiane
ຂ້ອຍເມື່ອຍ|khoy meuay|je suis fatigué
ອາຫານແຊບ|ahan xaep|la nourriture est délicieuse` },
      { h: 'Avoir : ມີ', p: `<i>ມີ</i> (mi) = avoir, et aussi « il y a ».`,
        ex: `ຂ້ອຍມີເງິນ|khoy mi ngeun|j'ai de l'argent
ມີເບຍບໍ?|mi bia bo?|il y a de la bière ?
ມີ|mi|oui, il y en a
ບໍ່ມີ|bo mi|non, il n'y en a pas
ມີຄົນຫຼາຍ|mi khon lai|il y a beaucoup de monde` },
      { h: 'La négation : ບໍ່ devant', p: `Mets <b>ບໍ່</b> (bo) devant le verbe ou l'adjectif. C'est tout.`,
        ex: `ບໍ່ຮູ້|bo hou|je ne sais pas
ບໍ່ເຂົ້າໃຈ|bo khao jai|je ne comprends pas
ບໍ່ເຜັດ|bo phet|pas épicé
ບໍ່ແມ່ນ|bo maen|ce n'est pas ça ; non
ບໍ່ຢາກໄປ|bo yak pai|je ne veux pas y aller`,
        warn: 'Pour nier ເປັນ et ແມ່ນ devant un nom, on dit ບໍ່ແມ່ນ : « ຂ້ອຍບໍ່ແມ່ນຄູ » (je ne suis pas prof), pas « ບໍ່ເປັນຄູ ».' },
      { h: 'Le temps : 3 petits mots', p: `<b>ແລ້ວ</b> (laeo), après le verbe : c'est fait, accompli.<br><b>ຊິ / ຈະ</b> (xi / ja), avant le verbe : futur, intention. ຊິ à l'oral, ຈະ à l'écrit.<br><b>ກຳລັງ … ຢູ່</b> (kamlang … you) : en train de.<br><b>ເຄີຍ</b> (kheuy), avant le verbe : avoir déjà fait (expérience).`,
        ex: `ກິນແລ້ວ|kin laeo|j'ai mangé
ຊິໄປຫຼວງພະບາງ|xi pai louang phabang|je vais aller à Luang Prabang
ກຳລັງກິນເຂົ້າຢູ່|kamlang kin khao you|je suis en train de manger
ເຄີຍໄປລາວບໍ?|kheuy pai lao bo?|tu es déjà allé au Laos ?
ບໍ່ເຄີຍ|bo kheuy|jamais
ຍັງບໍ່ທັນກິນ|nyang bo than kin|je n'ai pas encore mangé` },
      { h: 'Vouloir, pouvoir, devoir', ex: `ຢາກໄປ|yak pai|je veux y aller
ຢາກກິນເຝີ|yak kin feu|j'ai envie d'une soupe de nouilles
ໄປໄດ້|pai dai|je peux y aller
ເວົ້າລາວໄດ້ບໍ?|vao lao dai bo?|tu sais parler lao ?
ຕ້ອງໄປ|tong pai|je dois y aller
ບໍ່ຕ້ອງ|bo tong|pas besoin`,
        tip: 'ໄດ້ (dai) = pouvoir se place APRÈS le verbe : « aller-pouvoir ». C\'est une des erreurs les plus fréquentes des francophones.' }
    ]
  },
  {
    id: 'questions', lvl: 'A1', icon: '❓', t: 'Poser des questions',
    goal: 'Poser toutes les questions essentielles et répondre oui/non à la lao.',
    blocks: [
      { h: 'Oui/non : ບໍ en fin de phrase', p: `Ajoute <b>ບໍ</b> (bo, ton différent de ບໍ່ négation) à la fin. Pour répondre, <b>il n'y a pas de « oui » universel</b> : on répète le verbe !`,
        ex: `ແຊບບໍ?|xaep bo?|c'est bon ?
ແຊບ|xaep|(oui) c'est bon
ບໍ່ແຊບ|bo xaep|(non) pas bon
ໄປບໍ?|pai bo?|tu y vas ?
ໄປ|pai|(oui) j'y vais` },
      { h: 'Les autres formes de question', ex: `ແມ່ນບໍ?|maen bo?|c'est ça ? n'est-ce pas ?
ແມ່ນແລ້ວ|maen laeo|oui, c'est ça
ໄປແລ້ວບໍ?|pai laeo bo?|tu y es déjà allé ?
ໄປຫຼືບໍ່?|pai leu bo?|tu y vas ou pas ?
ໄປຫຼືຍັງ?|pai leu nyang?|tu es parti ou pas encore ?
ຢາກໄດ້ອັນນີ້ຫຼືອັນນັ້ນ?|yak dai an ni leu an nan?|tu veux celui-ci ou celui-là ?` },
      { h: 'Les mots interrogatifs (en fin de phrase !)', p: `Le mot interrogatif se met <b>à la place de l'info manquante</b>, souvent à la fin.`,
        ex: `ຫຍັງ|nyang|quoi
ໃຜ|phai|qui
ໃສ|sai|où
ເມື່ອໃດ / ຕອນໃດ|meua dai / ton dai|quand
ເປັນຫຍັງ|pen nyang|pourquoi
ແນວໃດ|naeo dai|comment
ເທົ່າໃດ|thao dai|combien (prix, quantité)
ຈັກ + classificateur|jak|combien (comptable)
ອັນໃດ|an dai|lequel` },
      { h: 'En situation', ex: `ນີ້ແມ່ນຫຍັງ?|ni maen nyang?|c'est quoi, ça ?
ຫ້ອງນ້ຳຢູ່ໃສ?|hong nam you sai?|où sont les toilettes ?
ໄປແນວໃດ?|pai naeo dai?|on y va comment ?
ເປັນຫຍັງບໍ່ມາ?|pen nyang bo ma?|pourquoi tu n'es pas venu ?
ມາຮອດຕອນໃດ?|ma hot ton dai?|tu es arrivé quand ?
ອັນນີ້ເທົ່າໃດ?|an ni thao dai?|ça coûte combien ?
ມີຈັກຄົນ?|mi jak khon?|vous êtes combien ?
ອັນນີ້ເອີ້ນວ່າຫຍັງ?|an ni eun va nyang?|comment ça s'appelle ?`,
        tip: 'La question la plus utile pour apprendre : « ອັນນີ້ພາສາລາວເອີ້ນວ່າຫຍັງ? » (comment on dit ça en lao ?). Pointe un objet et demande !' },
      { h: 'Les 3 « oui » polis', ex: `ເຈົ້າ|jao|oui (poli, universel)
ໂດຍ|doy|oui (très respectueux)
ແມ່ນ|maen|oui, c'est exact
ໂອເຄ|o khe|OK (très courant)`,
        warn: 'ເຈົ້າ (jao) veut dire « tu » ET « oui poli » selon le ton et la position. En début de réponse, c\'est un oui.' }
    ]
  },
  {
    id: 'nombres', lvl: 'A1', icon: '🔢', t: 'Les nombres',
    goal: 'Compter de 0 à 1 000 000, comprendre les prix en kips et négocier.',
    blocks: [
      { h: 'De 0 à 10', ex: `ສູນ|soun|0
ໜຶ່ງ|neung|1
ສອງ|song|2
ສາມ|sam|3
ສີ່|si|4
ຫ້າ|ha|5
ຫົກ|hok|6
ເຈັດ|jet|7
ແປດ|paet|8
ເກົ້າ|kao|9
ສິບ|sip|10` },
      { h: 'De 11 à 99 : 2 exceptions seulement', p: `C'est logique : dizaine + unité. Deux pièges : <b>11, 21, 31… finissent en ເອັດ</b> (et), et <b>20 se dit ຊາວ</b> (xao), pas « deux-dix ».`,
        ex: `ສິບເອັດ|sip et|11
ສິບສອງ|sip song|12
ຊາວ|xao|20
ຊາວເອັດ|xao et|21
ສາມສິບ|sam sip|30
ສາມສິບເອັດ|sam sip et|31
ສີ່ສິບຫ້າ|si sip ha|45
ເກົ້າສິບເກົ້າ|kao sip kao|99` },
      { h: 'Les grands nombres', ex: `ຮ້ອຍ|hoy|100
ສອງຮ້ອຍ|song hoy|200
ພັນ|phan|1 000
ສອງພັນຫ້າຮ້ອຍ|song phan ha hoy|2 500
ໝື່ນ|meun|10 000
ສິບພັນ|sip phan|10 000 (oral, très courant)
ແສນ|saen|100 000
ລ້ານ|lan|1 000 000` },
      { h: 'Les prix en kips (ກີບ)', p: `Le kip a peu de valeur : on parle vite en dizaines de milliers. Les Lao disent souvent <b>« ສິບພັນ » (dix mille)</b> plutôt que ໝື່ນ, et omettent « kips ».`,
        ex: `ຫ້າສິບພັນ|ha sip phan|50 000 kips
ຊາວພັນ|xao phan|20 000 kips
ແສນຫ້າ|saen ha|150 000 (abréviation)
ສອງແສນ|song saen|200 000 kips
ລ້ານກີບ|lan kip|un million de kips`,
        tip: '« ແສນຫ້າ » (saen ha) = 150 000 : le chiffre après le grand nombre ajoute une unité inférieure. Même logique pour « ພັນສອງ » (phan song) = 1 200.' },
      { h: 'Les ordinaux', p: `<i>ທີ</i> (thi) + nombre = ordinal.`,
        ex: `ທີໜຶ່ງ|thi neung|premier
ທີສອງ|thi song|deuxième
ເທື່ອທຳອິດ|theua tham it|la première fois
ຊັ້ນສາມ|xan sam|3e étage` },
      { h: 'Négocier au marché', dlg: `Toi|ອັນນີ້ເທົ່າໃດ?|an ni thao dai?|Combien, celui-ci ?
Vendeuse|ແສນສອງ|saen song|120 000.
Toi|ແພງໂພດ! ຫຼຸດໄດ້ບໍ?|phaeng phot! loud dai bo?|Trop cher ! Vous pouvez baisser ?
Vendeuse|ແສນໜຶ່ງເອົາບໍ?|saen neung ao bo?|100 000, ça va ?
Toi|ແປດສິບພັນໄດ້ບໍ?|paet sip phan dai bo?|80 000, c'est possible ?
Vendeuse|ເກົ້າສິບພັນ, ລາຄາສຸດທ້າຍ|kao sip phan, lakha sout thai|90 000, dernier prix.
Toi|ໂອເຄ, ເອົາ|o khe, ao|OK, je le prends.` }
    ]
  }
];
