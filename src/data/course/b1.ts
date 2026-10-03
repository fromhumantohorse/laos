import type { Lesson } from '../../domain';

export const B1: Lesson[] = [
  {
    id: 'particules', lvl: 'B1', icon: '✨', t: 'Les particules : l\'âme de l\'oral',
    goal: 'Maîtriser les particules de fin de phrase qui donnent ton, émotion et politesse.',
    blocks: [
      { h: 'Pourquoi c\'est essentiel', p: `Une phrase lao sans particule sonne <b>sèche, voire impolie</b>, comme un télégramme. Les particules de fin de phrase ne changent pas le sens : elles ajoutent <b>l'émotion, la douceur, l'insistance</b>. C'est ce qui fait sonner un étranger « naturel ».` },
      { h: 'Douceur et politesse', ex: `ແດ່|dae|s'il te plaît (adoucit une demande)
ເດີ້|de|hein, d'accord ? (chaleureux, très courant)
ເນາະ|no|n'est-ce pas ? (recherche d'accord)
ເຈົ້າ|jao|particule polie (surtout féminine)
ຊ່ວຍແດ່|xouay dae|aide-moi, s'il te plaît
ໄປກ່ອນເດີ້|pai kon de|j'y vais, hein
ມື້ນີ້ຮ້ອນເນາະ|meu ni hon no|il fait chaud aujourd'hui, hein ?` },
      { h: 'Insistance et émotion', ex: `ແທ້|thae|vraiment
ແທ້ໆ|thae thae|vraiment vraiment
ໂພດ|phot|trop (excessif)
ຫຼາຍ|lai|très, beaucoup
ແຊບແທ້ໆ|xaep thae thae|vraiment délicieux
ງາມຫຼາຍເນາະ|ngam lai no|c'est très beau, hein
ແມ່ນແລ້ວ|maen laeo|exactement !` },
      { h: 'Question, surprise, impatience', ex: `ບໍ|bo|? (question oui/non)
ເບາະ|bo|ah bon ? (surprise, vérification)
ຕີ້|ti|n'est-ce pas ? (confirmation)
ແມ່ນບໍ|maen bo|c'est ça ?
ຊັ້ນບໍ?|xan bo?|ah, c'est comme ça ?
ແທ້ບໍ?|thae bo?|vraiment ?
ເອີ|eu|euh, oui (hésitation, accord)
ໂອ້ຍ!|oy!|aïe ! oh là là !`,
        warn: 'Particules et intonation se combinent : ໄປເບາະ (tu y vas, vraiment ?) n\'a pas le même effet que ໄປບໍ (tu y vas ?). Écoute comment les Lao les utilisent avant de les généraliser.' },
      { h: 'Ordres et invitations', ex: `ເລີຍ|leuy|vas-y ! (encouragement)
ກິນເລີຍ|kin leuy|mange donc !
ມາເລີຍ|ma leuy|viens donc !
ສາ|sa|donc (adoucit un ordre)
ໄປສາ|pai sa|vas-y donc
ເທາະ|tho|allez, faisons… (proposition)
ໄປເທາະ|pai tho|allez, on y va` },
      { h: 'Dialogue : l\'oral naturel', dlg: `Bee|ມື້ນີ້ຮ້ອນແທ້ເນາະ|meu ni hon thae no|Il fait vraiment chaud aujourd'hui, hein !
Toi|ແມ່ນແລ້ວ, ຮ້ອນໂພດ!|maen laeo, hon phot!|Grave, beaucoup trop chaud !
Bee|ໄປກິນນ້ຳປັ່ນເທາະ|pai kin nam pan tho|Allez, on va boire un smoothie.
Toi|ດີເລີຍ! ເຈົ້າຈ່າຍເບາະ?|di leuy! jao jai bo?|Super ! C'est toi qui paies, alors ?
Bee|ຮ່າໆໆ ເອີ, ມາເລີຍ|ha ha ha, eu, ma leuy|Haha, ok, viens !` }
    ]
  },
  {
    id: 'comparer', lvl: 'B1', icon: '⚖️', t: 'Comparer et décrire',
    goal: 'Comparer, exprimer le superlatif, l\'égalité et décrire avec nuance.',
    blocks: [
      { h: 'Plus que : ກວ່າ', p: `Adjectif + <b>ກວ່າ</b> (kwa) + élément comparé.`,
        ex: `ໃຫຍ່ກວ່າ|nyai kwa|plus grand
ອັນນີ້ຖືກກວ່າ|an ni theuk kwa|celui-ci est moins cher
ລາວສູງກວ່າຂ້ອຍ|lao soung kwa khoy|il est plus grand que moi
ດີກວ່າ|di kwa|mieux
ຫຼວງພະບາງງາມກວ່າ|louang phabang ngam kwa|Luang Prabang est plus beau` },
      { h: 'Le plus : ທີ່ສຸດ', ex: `ດີທີ່ສຸດ|di thi sout|le meilleur
ແພງທີ່ສຸດ|phaeng thi sout|le plus cher
ຮ້ານນີ້ແຊບທີ່ສຸດ|han ni xaep thi sout|ce resto est le meilleur
ສຸດຍອດ|sout nyot|génial, au top` },
      { h: 'Égalité et similitude', ex: `ເທົ່າກັນ|thao kan|autant, pareil (quantité)
ຄືກັນ|kheu kan|pareil, identique
ຄື …|kheu …|comme …
ບໍ່ຄືກັນ|bo kheu kan|différent
ສູງເທົ່າກັນ|soung thao kan|aussi grand
ຂ້ອຍກໍຄືກັນ|khoy ko kheu kan|moi aussi` },
      { h: 'Nuancer : les intensificateurs', ex: `ໜ້ອຍໜຶ່ງ|noy neung|un peu
ພໍສົມຄວນ|pho som khouan|assez, plutôt
ຫຼາຍ|lai|très
ແທ້ໆ|thae thae|vraiment
ໂພດ|phot|trop
ຄັກ|khak|super (familier)
ບໍ່ປານໃດ|bo pan dai|pas tellement
ບໍ່ຄ່ອຍ|bo khoy|pas trop, pas vraiment`,
        tip: 'ບໍ່ຄ່ອຍ + adjectif est la façon polie de dire « non » : « ບໍ່ຄ່ອຍແຊບ » (pas terrible) au lieu de « ບໍ່ແຊບ » (pas bon), trop direct.' },
      { h: 'Redoubler : l\'adjectif doux', p: `Redoubler un adjectif avec <b>ໆ</b> adoucit ou intensifie selon le contexte, très courant à l'oral.`,
        ex: `ຊ້າໆ|xa xa|tout doucement
ດີໆ|di di|bien, comme il faut
ນ້ອຍໆ|noy noy|tout petit
ໃກ້ໆ|kai kai|tout près` },
      { h: 'Dialogue : choisir un hôtel', dlg: `Toi|ໂຮງແຮມໃດດີກວ່າ?|hong haem dai di kwa?|Quel hôtel est le mieux ?
Ami|ອັນນີ້ຖືກກວ່າ ແຕ່ໄກກວ່າ|an ni theuk kwa tae kai kwa|Celui-ci est moins cher, mais plus loin.
Toi|ອັນນັ້ນເດ?|an nan de?|Et celui-là ?
Ami|ແພງທີ່ສຸດ ແຕ່ງາມທີ່ສຸດ|phaeng thi sout tae ngam thi sout|Le plus cher, mais le plus beau.
Toi|ເອົາອັນທີ່ໃກ້ກວ່າເທາະ|ao an thi kai kwa tho|Prenons le plus proche.` }
    ]
  },
  {
    id: 'verbes-serie', lvl: 'B1', icon: '🔗', t: 'Les verbes en série',
    goal: 'Enchaîner plusieurs verbes comme un Lao, et maîtriser les directions ໄປ/ມາ.',
    blocks: [
      { h: 'Plusieurs verbes sans liaison', p: `Le lao enchaîne les verbes <b>sans « et », sans « pour »</b>, dans l'ordre chronologique des actions.`,
        ex: `ໄປຊື້ເຂົ້າ|pai xeu khao|aller acheter du riz
ມາກິນເຂົ້ານຳກັນ|ma kin khao nam kan|viens manger avec nous
ຍ່າງໄປຕະຫຼາດ|nyang pai talat|aller au marché à pied
ຂີ່ລົດຈັກໄປເຮັດວຽກ|khi lot jak pai het viak|aller au travail en scooter
ໄປອາບນ້ຳກ່ອນ|pai ap nam kon|va d'abord te doucher` },
      { h: 'ໄປ et ມາ : la direction', p: `Placés <b>après</b> un verbe, ໄປ (aller) et ມາ (venir) indiquent si l'action s'éloigne ou se rapproche du locuteur.`,
        ex: `ເອົາມາ|ao ma|apporte (vers moi)
ເອົາໄປ|ao pai|emporte (loin de moi)
ໂທມາ|tho ma|appelle-moi
ໂທໄປ|tho pai|appeler (quelqu'un)
ຍ່າງເຂົ້າມາ|nyang khao ma|entrer en marchant (vers ici)
ແລ່ນອອກໄປ|laen ok pai|sortir en courant` },
      { h: 'ໃຫ້ : donner, laisser, faire faire', ex: `ໃຫ້|hai|donner
ໃຫ້ເງິນລາວ|hai ngeun lao|lui donner de l'argent
ຊື້ໃຫ້ແມ່|xeu hai mae|acheter pour maman
ສອນໃຫ້ຂ້ອຍ|son hai khoy|m'apprendre
ໃຫ້ລາວມາ|hai lao ma|le faire venir
ບອກໃຫ້ລາວລໍ|bok hai lao lo|dis-lui d'attendre` },
      { h: 'Les verbes résultatifs', p: `Verbe + résultat. Avec ບໍ່ au milieu : « on essaie mais on n'y arrive pas ».`,
        ex: `ຟັງອອກ|fang ok|comprendre (en écoutant)
ຟັງບໍ່ອອກ|fang bo ok|ne pas comprendre (à l'oral)
ອ່ານອອກ|an ok|arriver à lire
ຊອກເຫັນ|xok hen|trouver (en cherchant)
ຊອກບໍ່ເຫັນ|xok bo hen|chercher sans trouver
ກິນບໍ່ໝົດ|kin bo mot|ne pas réussir à tout finir
ນອນບໍ່ຫຼັບ|non bo lap|ne pas arriver à dormir`,
        tip: '« ຟັງບໍ່ອອກ » (je n\'entends pas / je ne comprends pas ce que tu dis) est une phrase de survie bien plus naturelle que « ບໍ່ເຂົ້າໃຈ ».' },
      { h: 'ໄວ້ et ໄປ/ແລ້ວ pour l\'aspect', ex: `ຈື່ໄວ້|jeu vai|retiens bien (garde en mémoire)
ເກັບໄວ້|kep vai|garde-le de côté
ຈອງໄວ້|jong vai|réserver à l'avance
ລືມໄປແລ້ວ|leum pai laeo|j'ai oublié
ໝົດໄປແລ້ວ|mot pai laeo|c'est épuisé` }
    ]
  },
  {
    id: 'conjonctions', lvl: 'B1', icon: '🌉', t: 'Relier les idées',
    goal: 'Construire des phrases complexes : cause, condition, opposition, temps.',
    blocks: [
      { h: 'Et, mais, ou', ex: `ແລະ|lae|et (plutôt écrit)
ກັບ|kap|et, avec (oral)
ແຕ່|tae|mais
ແຕ່ວ່າ|tae va|mais (plus marqué)
ຫຼື|leu|ou
ແລ້ວ|laeo|et puis, ensuite
ກໍ|ko|aussi, alors (lien très fréquent)` },
      { h: 'Cause et conséquence', ex: `ເພາະວ່າ|pho va|parce que
ຍ້ອນວ່າ|nyon va|à cause de, grâce à
ດັ່ງນັ້ນ|dang nan|c'est pourquoi, donc
ກໍເລີຍ|ko leuy|du coup
ບໍ່ໄປ ເພາະວ່າຝົນຕົກ|bo pai pho va fon tok|je n'y vais pas parce qu'il pleut
ຝົນຕົກ ກໍເລີຍບໍ່ໄປ|fon tok ko leuy bo pai|il pleuvait, du coup je n'y suis pas allé` },
      { h: 'La condition : ຖ້າ … ກໍ', p: `<b>ຖ້າ</b> (tha) = si, et <b>ກໍ</b> (ko) introduit la conséquence.`,
        ex: `ຖ້າຝົນຕົກ ກໍບໍ່ໄປ|tha fon tok ko bo pai|s'il pleut, je n'y vais pas
ຖ້າມີເວລາ ຊິໄປຫາ|tha mi vela xi pai ha|si j'ai le temps, je passerai te voir
ຖ້າບໍ່ແພງ ກໍເອົາ|tha bo phaeng ko ao|si ce n'est pas cher, je le prends
ຖ້າຊັ້ນ|tha xan|dans ce cas, alors` },
      { h: 'Le temps : quand, avant, après', ex: `ເມື່ອ|meua|quand (passé, écrit)
ຕອນທີ່|ton thi|au moment où
ກ່ອນທີ່ຈະ|kon thi ja|avant de
ຫຼັງຈາກ|lang jak|après
ຈົນ|jon|jusqu'à (ce que)
ຕັ້ງແຕ່|tang tae|depuis
ຕອນທີ່ຂ້ອຍມາຮອດ ຝົນຕົກ|ton thi khoy ma hot fon tok|quand je suis arrivé, il pleuvait
ລ້າງມືກ່ອນທີ່ຈະກິນເຂົ້າ|lang meu kon thi ja kin khao|lave-toi les mains avant de manger
ຫຼັງຈາກກິນເຂົ້າ ໄປຍ່າງຫຼິ້ນ|lang jak kin khao pai nyang lin|après le repas, on va se promener` },
      { h: 'L\'opposition et la concession', ex: `ເຖິງວ່າ … ກໍ|theung va … ko|bien que, même si
ເຖິງວ່າແພງ ກໍຢາກໄດ້|theung va phaeng ko yak dai|même si c'est cher, je le veux
ແທນທີ່ຈະ|thaen thi ja|au lieu de
ບໍ່ແມ່ນ … ແຕ່ແມ່ນ|bo maen … tae maen|ce n'est pas … mais …` },
      { h: 'Relatives : ທີ່ (qui, que)', ex: `ຄົນທີ່ຂ້ອຍຮັກ|khon thi khoy hak|la personne que j'aime
ຮ້ານທີ່ແຊບທີ່ສຸດ|han thi xaep thi sout|le resto le plus délicieux
ບ່ອນທີ່ຂ້ອຍເກີດ|bon thi khoy keut|l'endroit où je suis né
ສິ່ງທີ່ເຈົ້າເວົ້າ|sing thi jao vao|ce que tu dis` },
      { h: 'Dialogue : une excuse', dlg: `Lin|ເປັນຫຍັງມື້ວານບໍ່ມາ?|pen nyang meu van bo ma?|Pourquoi tu n'es pas venu hier ?
Toi|ຂໍໂທດເດີ້ ເພາະວ່າບໍ່ສະບາຍ|kho thot de pho va bo sabai|Désolé, j'étais malade.
Lin|ຖ້າບໍ່ສະບາຍ ກໍໂທມາບອກແດ່|tha bo sabai ko tho ma bok dae|Si tu es malade, appelle pour prévenir.
Toi|ແມ່ນແລ້ວ. ໂທລະສັບໝົດແບັດ ກໍເລີຍໂທບໍ່ໄດ້|maen laeo. tholasap mot baet ko leuy tho bo dai|Oui. Mon téléphone n'avait plus de batterie, du coup je n'ai pas pu.
Lin|ບໍ່ເປັນຫຍັງ, ມື້ອື່ນມາເດີ້|bo pen nyang, meu eun ma de|Pas grave, viens demain hein.` }
    ]
  },
  {
    id: 'telephone', lvl: 'B1', icon: '📱', t: 'Téléphone et messages',
    goal: 'Téléphoner, laisser un message, comprendre l\'écrit des messageries.',
    blocks: [
      { h: 'Au téléphone', ex: `ອາໂລ|alo|allô
ນັ້ນແມ່ນໃຜ?|nan maen phai?|qui est à l'appareil ?
ຂໍລົມກັບ … ແດ່|kho lom kap … dae|je voudrais parler à …
ລໍຖ້າບຶດໜຶ່ງ|lo tha beut neung|un instant, s'il vous plaît
ລາວບໍ່ຢູ່|lao bo you|il/elle n'est pas là
ສຽງບໍ່ຄ່ອຍໄດ້ຍິນ|siang bo khoy dai nyin|je n'entends pas bien
ໂທຫາໃໝ່ແດ່|tho ha mai dae|rappelle-moi
ວາງສາຍກ່ອນເດີ້|vang sai kon de|je raccroche, hein` },
      { h: 'Rendez-vous', ex: `ນັດ|nat|fixer un rendez-vous
ນັດພົບກັນ|nat phop kan|se donner rendez-vous
ເລື່ອນນັດ|leuan nat|reporter le rendez-vous
ມາຊ້າ|ma xa|arriver en retard
ຊິໄປຮອດໃນສິບນາທີ|xi pai hot nai sip nathi|j'arrive dans 10 minutes
ຢູ່ໃສແລ້ວ?|you sai laeo?|tu es où, là ?`,
        tip: 'L\'heure lao (ເວລາລາວ) est souple : 15-30 minutes de retard sont courantes et pas impolies. « ຊິໄປຮອດແລ້ວ » (j\'arrive) peut vouloir dire « je pars bientôt » !' },
      { h: 'Messagerie (WhatsApp, Messenger)', ex: `ສົ່ງຂໍ້ຄວາມ|song kho khouam|envoyer un message
ສົ່ງຮູບມາແດ່|song houp ma dae|envoie-moi la photo
ໂທວິດີໂອ|tho vidio|appel vidéo
ສົ່ງໂລເຄເຊິນ|song lokhexeun|envoie la localisation
ອ່ານແລ້ວ|an laeo|lu (vu)
ເຕີມເງິນໂທລະສັບ|teum ngeun tholasap|recharger son téléphone` },
      { h: 'L\'écrit des jeunes', p: `Sur les réseaux sociaux, les Lao écrivent vite et de façon informelle :<br>• <b>555</b> = « hahaha » (5 se dit « ha »).<br>• Lettres répétées pour l'emphase : <i>ແຊບບບບ</i>.<br>• Beaucoup écrivent en lao romanisé ou mélangent thaï et lao.<br>• Abréviations : ອໂຄ (OK), ຂຂ (ຂອບໃຈ).`,
        ex: `ຄິດຮອດ|khit hot|tu me manques
ຝັນດີ|fan di|fais de beaux rêves
ນອນຫຼັບຝັນດີ|non lap fan di|bonne nuit
ເດີນທາງປອດໄພເດີ້|deun thang pot phai de|bon voyage !` },
      { h: 'Dialogue au téléphone', dlg: `Toi|ອາໂລ, ແມ່ນອ້າຍຄຳບໍ?|alo, maen ay kham bo?|Allô, c'est Kham ?
Kham|ແມ່ນແລ້ວ. ຢູ່ໃສແລ້ວ?|maen laeo. you sai laeo?|Oui. Tu es où ?
Toi|ຫຼົງທາງ, ຊອກຮ້ານບໍ່ເຫັນ|long thang, xok han bo hen|Je suis perdu, je ne trouve pas le resto.
Kham|ສົ່ງໂລເຄເຊິນມາແດ່|song lokhexeun ma dae|Envoie-moi ta localisation.
Toi|ສົ່ງໄປແລ້ວ|song pai laeo|C'est envoyé.
Kham|ໃກ້ໆແລ້ວ, ຍ່າງໄປຊື່ໆ ຫ້ານາທີ|kai kai laeo, nyang pai xeu xeu ha nathi|Tu es tout près, marche tout droit 5 minutes.` }
    ]
  },
  {
    id: 'opinions', lvl: 'B1', icon: '💭', t: 'Opinions et sentiments',
    goal: 'Exprimer ce que tu penses et ressens, avec la retenue lao.',
    blocks: [
      { h: 'Penser, croire, savoir', ex: `ຄິດວ່າ|khit va|penser que
ຂ້ອຍຄິດວ່າບໍ່ດີ|khoy khit va bo di|je pense que ce n'est pas bien
ຮູ້ສຶກວ່າ|hou seuk va|avoir le sentiment que
ເຊື່ອວ່າ|xeua va|croire que
ຄືຊິ|kheu xi|on dirait que, sans doute
ຄືຊິຝົນຕົກ|kheu xi fon tok|on dirait qu'il va pleuvoir
ອາດຈະ|at ja|peut-être
ແນ່ນອນ|nae non|certainement` },
      { h: 'Accord et désaccord', ex: `ເຫັນດີ|hen di|je suis d'accord
ເຫັນດີນຳ|hen di nam|d'accord avec toi
ບໍ່ເຫັນດີ|bo hen di|je ne suis pas d'accord
ແມ່ນແທ້|maen thae|c'est vrai
ອາດຈະບໍ່ແມ່ນ|at ja bo maen|ce n'est peut-être pas ça
ກໍໄດ້|ko dai|ça me va, pourquoi pas`,
        warn: '« ບໍ່ເຫັນດີ » est très direct. Un Lao dira plutôt « ກໍອາດຈະແມ່ນ, ແຕ່ວ່າ… » (c\'est possible, mais…). On évite la confrontation : il s\'agit de préserver la face de chacun.' },
      { h: 'Les émotions : le cœur ໃຈ', p: `Le lao exprime les émotions avec <b>ໃຈ</b> (jai, cœur/esprit). Plus de 100 expressions !`,
        ex: `ດີໃຈ|di jai|content (cœur bon)
ເສຍໃຈ|sia jai|triste, désolé (cœur perdu)
ໃຈດີ|jai di|gentil
ໃຈຮ້າຍ|jai hai|en colère
ໃຈເຢັນ|jai yen|calme, patient (cœur froid)
ໃຈຮ້ອນ|jai hon|impatient (cœur chaud)
ຕົກໃຈ|tok jai|sursauter, avoir peur
ເປັນຫ່ວງ|pen houang|s'inquiéter
ອຸກໃຈ|ouk jai|frustré, oppressé
ອີ່ມໃຈ|im jai|comblé`,
        tip: 'ໃຈເຢັນໆ (jai yen yen, garde un cœur frais) est la valeur cardinale lao. S\'énerver en public est vu comme une faiblesse.' },
      { h: 'Aimer et préférer', ex: `ມັກ|mak|aimer (bien), apprécier
ຮັກ|hak|aimer (amour)
ບໍ່ມັກ|bo mak|ne pas aimer
ມັກ … ກວ່າ|mak … kwa|préférer
ມັກຫຼາຍ|mak lai|adorer
ຊັງ|xang|détester (fort)
ເບື່ອ|beua|en avoir marre, s'ennuyer` },
      { h: 'Dialogue : un film', dlg: `Pao|ເຈົ້າຄິດວ່າໜັງເລື່ອງນີ້ເປັນແນວໃດ?|jao khit va nang leuang ni pen naeo dai?|Tu as pensé quoi de ce film ?
Toi|ກໍດີ, ແຕ່ຍາວໂພດ|ko di, tae nyao phot|Pas mal, mais trop long.
Pao|ຂ້ອຍກໍຄືກັນ. ຕອນທ້າຍເສຍໃຈຫຼາຍ|khoy ko kheu kan. ton thai sia jai lai|Moi aussi. La fin m'a rendue très triste.
Toi|ແມ່ນ, ແຕ່ຂ້ອຍມັກນັກສະແດງ|maen, tae khoy mak nak sadaeng|Oui, mais j'ai aimé les acteurs.
Pao|ເຫັນດີນຳ!|hen di nam!|D'accord avec toi !` }
    ]
  },
  {
    id: 'raconter', lvl: 'B1', icon: '📜', t: 'Raconter une histoire',
    goal: 'Raconter des événements passés de façon vivante, avec les connecteurs du récit.',
    blocks: [
      { h: 'Situer dans le passé', p: `Sans conjugaison, le récit repose sur les <b>marqueurs de temps</b> en début de phrase et sur <b>ແລ້ວ / ໄດ້</b>.`,
        ex: `ມື້ວານນີ້|meu van ni|hier
ອາທິດແລ້ວ|athit laeo|la semaine dernière
ປີກາຍ|pi kai|l'année dernière
ແຕ່ກີ້|tae ki|tout à l'heure
ດົນມາແລ້ວ|don ma laeo|il y a longtemps
ຕອນຍັງນ້ອຍ|ton nyang noy|quand j'étais petit
ໄດ້ໄປ|dai pai|être allé (accompli, plutôt écrit)` },
      { h: 'Les connecteurs du récit', ex: `ທຳອິດ|tham it|d'abord
ຫຼັງຈາກນັ້ນ|lang jak nan|ensuite
ແລ້ວກໍ|laeo ko|et puis
ທັນໃດນັ້ນ|than dai nan|tout à coup
ສຸດທ້າຍ|sout thai|finalement
ໃນທີ່ສຸດ|nai thi sout|à la fin
ພໍດີ|pho di|justement, à ce moment` },
      { h: 'Récit : un voyage à Vang Vieng', p: `Écoute le récit en entier, puis phrase par phrase. Essaie de le résumer à voix haute.`,
        ex: `ອາທິດແລ້ວ ຂ້ອຍໄປວັງວຽງກັບໝູ່|athit laeo khoy pai vang viang kap mou|la semaine dernière, je suis allé à Vang Vieng avec des amis
ທຳອິດ ພວກເຮົານັ່ງລົດຕູ້ສາມຊົ່ວໂມງ|tham it phouak hao nang lot tou sam xoua mong|d'abord, on a pris un minibus pendant trois heures
ພໍໄປຮອດ ຝົນກໍຕົກໜັກ|pho pai hot fon ko tok nak|en arrivant, il pleuvait fort
ພວກເຮົາເລີຍໄປກິນເຂົ້າແລ້ວນອນ|phouak hao leuy pai kin khao laeo non|du coup on est allés manger, puis dormir
ມື້ຕໍ່ມາ ພວກເຮົາໄປລອຍນ້ຳຢູ່ຖ້ຳ|meu to ma phouak hao pai loy nam you tham|le lendemain, on est allés nager dans une grotte
ສະໜຸກຫຼາຍ! ຢາກໄປອີກ|sanouk lai! yak pai ik|c'était super ! J'ai envie d'y retourner` },
      { h: 'Réagir à une histoire', ex: `ແທ້ບໍ?|thae bo?|vraiment ?
ແລ້ວເປັນແນວໃດຕໍ່?|laeo pen naeo dai to?|et ensuite ?
ໂອ້ຍ, ຕົກໃຈ!|oy, tok jai!|oh là là, quelle frayeur !
ໂຊກດີເນາະ|xok di no|heureusement, hein
ໜ້າເສຍດາຍ|na sia dai|dommage`,
        tip: 'Un bon conteur lao enchaîne avec ກໍ et ແລ້ວ comme nous avec « et puis ». N\'aie pas peur des phrases courtes : c\'est le style oral naturel.' }
    ]
  }
];
