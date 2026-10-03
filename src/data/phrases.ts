import { catalog } from '../domain';

export const PHRASES = catalog({
  'Saluer': `
ສະບາຍດີ|sabaidi|Bonjour / Salut
ສະບາຍດີບໍ່?|sabaidi bo?|Comment ça va ?
ສະບາຍດີ, ເຈົ້າເດ?|sabaidi, jao de?|Ça va, et toi ?
ກິນເຂົ້າແລ້ວບໍ?|kin khao laeo bo?|Tu as mangé ? (salutation du quotidien)
ກິນແລ້ວ|kin laeo|Oui, j'ai mangé
ໄປໃສມາ?|pai sai ma?|Tu reviens d'où ? (salutation)
ໄປໃສ?|pai sai?|Tu vas où ?
ບໍ່ໄປໃສ, ໄປຫຼິ້ນ|bo pai sai, pai lin|Nulle part, je me balade
ເຊີນເຂົ້າມາ|xeun khao ma|Entrez, je vous en prie
ໄປກ່ອນເດີ້|pai kon deu|J'y vais ! (au revoir familier)
ພົບກັນໃໝ່|phop kan mai|À bientôt
ລາກ່ອນ|la kon|Au revoir (formel)
ໂຊກດີເດີ້|xok di deu|Bonne chance / prends soin de toi
ນອນຫຼັບຝັນດີ|non lap fan di|Bonne nuit, fais de beaux rêves`,
  'Politesse': `
ຂອບໃຈ|khop jai|Merci
ຂອບໃຈຫຼາຍໆ|khop jai lai lai|Merci beaucoup
ບໍ່ເປັນຫຍັງ|bo pen nyang|De rien / pas grave
ຂໍໂທດ|kho thot|Pardon / désolé
ບໍ່ມີບັນຫາ|bo mi banha|Pas de problème
ໄດ້ ໄດ້|dai dai|OK, ça marche
ບໍ່ໄດ້|bo dai|Ce n'est pas possible
ໃຈເຢັນໆ|jai yen yen|Du calme, zen`,
  'Faire connaissance': `
ເຈົ້າຊື່ຫຍັງ?|jao xeu nyang?|Comment t'appelles-tu ?
ຂ້ອຍຊື່ ...|khoy xeu ...|Je m'appelle …
ຍິນດີທີ່ໄດ້ຮູ້ຈັກ|nyin di thi dai hou jak|Enchanté(e)
ເຈົ້າມາຈາກໃສ?|jao ma jak sai?|Tu viens d'où ?
ຂ້ອຍມາຈາກຝຣັ່ງ|khoy ma jak falang|Je viens de France
ເຈົ້າອາຍຸຈັກປີ?|jao ayou jak pi?|Quel âge as-tu ?
ເຮັດວຽກຫຍັງ?|het viak nyang?|Tu fais quoi comme travail ?
ຢູ່ໃສ?|you sai?|Tu habites où ? / Tu es où ?
ແຕ່ງງານແລ້ວບໍ?|taeng ngan laeo bo?|Tu es marié(e) ?
ມີແຟນແລ້ວບໍ?|mi faen laeo bo?|Tu as un(e) chéri(e) ?
ມາລາວເທື່ອທຳອິດບໍ?|ma lao theua tham it bo?|C'est ta première fois au Laos ?
ມັກປະເທດລາວບໍ?|mak pathet lao bo?|Tu aimes le Laos ?
ເອົາເບີໂທແດ່|ao beu tho dae|Donne-moi ton numéro`,
  'Comprendre': `
ເຈົ້າເວົ້າພາສາອັງກິດໄດ້ບໍ?|jao vao phasa angkit dai bo?|Tu parles anglais ?
ຂ້ອຍເວົ້າລາວໄດ້ໜ້ອຍໜຶ່ງ|khoy vao lao dai noy neung|Je parle un peu lao
ຂ້ອຍບໍ່ເຂົ້າໃຈ|khoy bo khao jai|Je ne comprends pas
ເຂົ້າໃຈບໍ?|khao jai bo?|Tu comprends ?
ເວົ້າຊ້າໆແດ່|vao xa xa dae|Parle lentement s'il te plaît
ເວົ້າອີກເທື່ອໜຶ່ງແດ່|vao ik theua neung dae|Répète s'il te plaît
ອັນນີ້ພາສາລາວເອີ້ນວ່າຫຍັງ?|an ni phasa lao eun va nyang?|Comment dit-on ça en lao ?
ໝາຍຄວາມວ່າແນວໃດ?|may khouam va naeo dai?|Ça veut dire quoi ?
ບໍ່ຮູ້|bo hou|Je ne sais pas
ແມ່ນແລ້ວ|maen laeo|C'est ça !
ບໍ່ແມ່ນ|bo maen|Non, ce n'est pas ça
ແທ້ບໍ?|thae bo?|Vraiment ?
ລໍຖ້າແດ່|lo tha dae|Attends un peu`,
  'Manger & boire': `
ຫິວເຂົ້າແລ້ວ|hiu khao laeo|J'ai faim
ມີຫຍັງກິນແດ່?|mi nyang kin dae?|Qu'est-ce qu'il y a à manger ?
ຂໍເມນູແດ່|kho menou dae|Le menu, s'il vous plaît
ເອົາອັນນີ້|ao an ni|Je prends ça
ບໍ່ເຜັດ|bo phet|Pas épicé
ເຜັດໜ້ອຍໜຶ່ງ|phet noy neung|Un peu épicé
ບໍ່ໃສ່ຜົງນົວ|bo sai phong noua|Sans glutamate
ຂໍນ້ຳກ້ອນແດ່|kho nam kon dae|De la glace, s'il vous plaît
ຂໍເຂົ້າໜຽວຕື່ມ|kho khao niao teum|Encore du riz gluant
ເບຍລາວແກ້ວໜຶ່ງ|bia lao kaeo neung|Une Beerlao (bouteille)
ໝົດຈອກ!|mot jok!|Cul sec !
ແຊບຫຼາຍ|xaep lai|Très délicieux
ອີ່ມແລ້ວ|im laeo|Je n'ai plus faim
ເກັບເງິນແດ່|kep ngeun dae|L'addition, s'il vous plaît`,
  'Acheter': `
ອັນນີ້ເທົ່າໃດ?|an ni thao dai?|C'est combien ?
ລາຄາເທົ່າໃດ?|lakha thao dai?|Quel est le prix ?
ແພງໂພດ|phaeng phot|Trop cher
ຫຼຸດໄດ້ບໍ?|lout dai bo?|Vous pouvez baisser ?
ຫຼຸດໃຫ້ແດ່|lout hai dae|Faites-moi un prix
ມີອັນອື່ນບໍ?|mi an eun bo?|Vous avez autre chose ?
ເອົາສອງອັນ|ao song an|J'en prends deux
ບໍ່ເອົາ|bo ao|Je n'en veux pas
ເບິ່ງກ່ອນ|beung kon|Je regarde d'abord
ມີເງິນທອນບໍ?|mi ngeun thon bo?|Vous avez la monnaie ?`,
  'Se déplacer': `
ຫ້ອງນ້ຳຢູ່ໃສ?|hong nam you sai?|Où sont les toilettes ?
ໄປຕະຫຼາດເທົ່າໃດ?|pai talat thao dai?|Combien pour aller au marché ?
ກົງໄປ|kong pai|Tout droit
ລ້ຽວຊ້າຍ|lio xay|Tournez à gauche
ລ້ຽວຂວາ|lio khva|Tournez à droite
ຈອດຢູ່ນີ້|jot you ni|Arrêtez-vous ici
ໄກບໍ?|kai bo?|C'est loin ?
ໃກ້ໆນີ້|kai kai ni|Tout près d'ici
ຂ້ອຍຫຼົງທາງ|khoy long thang|Je suis perdu(e)
ຂັບຊ້າໆແດ່|khap xa xa dae|Conduisez doucement
ມີຫ້ອງຫວ່າງບໍ?|mi hong vang bo?|Vous avez une chambre libre ?`,
  'Urgences & santé': `
ຊ່ວຍແດ່!|xouay dae!|À l'aide !
ຂ້ອຍບໍ່ສະບາຍ|khoy bo sabay|Je ne me sens pas bien
ເຈັບຫົວ|jep houa|J'ai mal à la tête
ເຈັບທ້ອງ|jep thong|J'ai mal au ventre
ໂຮງໝໍຢູ່ໃສ?|hong mo you sai?|Où est l'hôpital ?
ໂທຫາຕຳຫຼວດ|tho ha tam louat|Appelez la police`,
  'Quotidien & émotions': `
ມ່ວນຫຼາຍ|mouan lai|C'est trop bien !
ຝົນຕົກ|fon tok|Il pleut
ເມື່ອຍແລ້ວ|meuay laeo|Je suis fatigué(e)
ໄປນອນແລ້ວ|pai non laeo|Je vais dormir
ຈັກໂມງແລ້ວ?|jak mong laeo?|Quelle heure est-il ?
ຊິໄປນຳບໍ?|xi pai nam bo?|Tu viens avec (nous) ?
ໄປນຳກັນ|pai nam kan|Allons-y ensemble
ຄິດຮອດເດີ້|khit hot deu|Tu me manques
ຂ້ອຍຮັກເຈົ້າ|khoy hak jao|Je t'aime
ສຸກສັນວັນເກີດ|souksan van keut|Joyeux anniversaire
ສະບາຍດີປີໃໝ່|sabaidi pi mai|Bonne année !`
});
