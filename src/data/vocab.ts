import { catalog, withCore } from '../domain';

export const VOCAB = withCore(catalog({
  'Mots-outils': `
ແມ່ນ|maen|être (c'est) ; oui
ບໍ່|bo|ne… pas ; non
ບໍ|bo|? (particule de question)
ມີ|mi|avoir ; il y a
ເປັນ|pen|être ; savoir faire ; avoir (maladie)
ຢູ່|you|être (quelque part) ; habiter
ໄດ້|dai|pouvoir ; obtenir ; marque du passé
ແລ້ວ|laeo|déjà ; puis ; c'est fait
ຍັງ|nyang|encore ; pas encore
ຈະ|ja|futur (écrit / soutenu)
ຊິ|xi|futur (oral : « va »)
ກຳລັງ|kam lang|en train de
ພວມ|phouam|en train de (oral)
ເຄີຍ|kheuy|avoir déjà (expérience)
ຫາກໍ່|ha ko|venir juste de
ຂອງ|khong|de (possession) ; chose
ແລະ|lae|et
ກັບ|kap|avec ; et
ນຳ|nam|avec ; aussi ; suivre
ແຕ່|tae|mais ; depuis ; seulement
ຫຼື|leu|ou
ຖ້າ|tha|si
ເພາະ|pho|parce que
ຍ້ອນ|nyon|à cause de
ເພື່ອ|pheua|pour, afin de
ໃຫ້|hai|donner ; pour ; faire faire
ວ່າ|va|que (dire que…)
ທີ່|thi|qui / que (relatif) ; lieu
ຈາກ|jak|de, depuis (provenance)
ເຖິງ|theung|jusqu'à ; arriver
ໃນ|nai|dans
ເທິງ|theung|sur, en haut
ລຸ່ມ|loum|en bas, sous
ໃກ້|kai|près (≠ ໄກ loin)
ໄກ|kai|loin (≠ ໃກ້ près)
ກ່ອນ|kon|avant ; d'abord
ຫຼັງ|lang|après ; derrière ; dos
ນີ້|ni|ce, ceci
ນັ້ນ|nan|cela
ພຸ້ນ|phoun|là-bas (loin)
ກໍ|ko|alors ; aussi
ຄື|kheu|comme ; c'est-à-dire
ຄືກັນ|kheu kan|pareil ; moi aussi
ອີກ|ik|encore, de nouveau
ແທ້|thae|vraiment
ຫຼາຍ|lai|beaucoup ; très
ໜ້ອຍ|noy|peu
ໜ້ອຍໜຶ່ງ|noy neung|un peu
ທັງໝົດ|thang mot|tout, en tout
ທຸກ|thouk|chaque ; tous
ບາງ|bang|certains
ກັນ|kan|ensemble ; l'un l'autre
ເອງ|eng|soi-même
ໂດຍ|doy|par
ຕ້ອງ|tong|devoir
ຄວນ|khouan|devrait
ຢາກ|yak|vouloir (+ verbe)
ຢ່າ|ya|ne… pas (interdiction)
ເລີຍ|leuy|du tout ; donc ; directement
ເກືອບ|keuap|presque
ພຽງແຕ່|phiang tae|seulement
ແຕ່ລະ|tae la|chaque
ສ່ວນ|souan|quant à ; partie`,
  'Particules orales': `
ເດີ້|deu|hein, d'accord ? (adoucit)
ເນາະ|no|n'est-ce pas
ແດ່|dae|s'il te plaît ; un peu
ເດ|de|et toi ? (renvoi de question)
ໂລດ|lot|allez-y ! (encouragement)
ສາ|sa|donc ! (impératif doux)
ຕີ້|ti|n'est-ce pas ? (confirmation)
ເອີ|eu|ouais (familier)
ໂອ້ຍ|oy|aïe ; oh là là
ອີ່ຫຼີ|i li|vraiment ? (argot)
ໂພດ|phot|trop (excessif)
ແທ້ໆ|thae thae|vraiment vraiment`,
  'Questions': `
ຫຍັງ|nyang|quoi
ໃຜ|phai|qui
ໃສ|sai|où
ຢູ່ໃສ|you sai|où (se trouve)
ເມື່ອໃດ|meua dai|quand
ຈັກ|jak|combien (+ classificateur)
ເທົ່າໃດ|thao dai|combien
ແນວໃດ|naeo dai|comment
ເປັນຫຍັງ|pen nyang|pourquoi
ອັນໃດ|an dai|lequel
ຈັກໂມງ|jak mong|quelle heure
ປານໃດ|pan dai|à quel point`,
  'Personnes & famille': `
ຂ້ອຍ|khoy|je, moi
ເຈົ້າ|jao|tu, vous (poli) ; oui (poli)
ລາວ|lao|il, elle ; lao
ເຂົາ|khao|il, elle ; ils
ເຮົາ|hao|nous ; on
ພວກເຮົາ|phouak hao|nous (groupe)
ພວກເຂົາ|phouak khao|ils, elles
ໂຕ|to|toi (familier) ; corps
ກູ|kou|moi (très familier)
ມຶງ|meung|toi (très familier)
ທ່ານ|than|vous (très poli)
ອ້າຍ|ay|grand frère
ເອື້ອຍ|euay|grande sœur
ນ້ອງ|nong|petit frère / petite sœur
ພໍ່|pho|père
ແມ່|mae|mère
ລູກ|louk|enfant (de quelqu'un)
ເດັກນ້ອຍ|dek noy|enfant
ຜົວ|phoua|mari
ເມຍ|mia|épouse
ແຟນ|faen|petit(e) ami(e)
ໝູ່|mou|ami, pote
ເພື່ອນ|pheuan|ami, camarade
ຄົນ|khon|personne ; gens
ຜູ້ຊາຍ|phou xay|homme
ຜູ້ຍິງ|phou nying|femme
ພໍ່ຕູ້|pho tou|grand-père
ແມ່ຕູ້|mae tou|grand-mère
ລຸງ|loung|oncle (aîné)
ປ້າ|pa|tante (aînée)
ນ້າ|na|oncle / tante (cadet, côté mère)
ອາ|a|oncle / tante (cadet, côté père)
ຫຼານ|lan|neveu ; petit-enfant
ຄອບຄົວ|khop khoua|famille
ພີ່ນ້ອງ|phi nong|frères et sœurs ; proches
ຄູ|khou|professeur
ນັກຮຽນ|nak hian|élève
ໝໍ|mo|médecin
ເຈົ້າຂອງ|jao khong|propriétaire, patron
ແຂກ|khaek|invité ; client
ຄົນລາວ|khon lao|Laotien(ne)
ຄົນຕ່າງປະເທດ|khon tang pathet|étranger
ຝຣັ່ງ|falang|Français ; Occidental
ອາຍຸ|ayou|âge
ຊື່|xeu|nom ; s'appeler`,
  'Nombres': `
ສູນ|soun|0
ໜຶ່ງ|neung|1
ສອງ|song|2
ສາມ|sam|3
ສີ່|si|4
ຫ້າ|ha|5
ຫົກ|hok|6
ເຈັດ|jet|7
ແປດ|paet|8
ເກົ້າ|kao|9
ສິບ|sip|10
ສິບເອັດ|sip et|11
ຊາວ|xao|20
ສາມສິບ|sam sip|30
ຮ້ອຍ|hoy|100
ພັນ|phan|1 000
ໝື່ນ|meun|10 000
ແສນ|saen|100 000
ລ້ານ|lan|1 000 000
ເຄິ່ງ|kheung|moitié
ທຳອິດ|tham it|premier
ທີສອງ|thi song|deuxième
ເທື່ອ|theua|fois
ອັນ|an|chose (classificateur)
ໜ່ວຍ|nouay|classificateur (fruits, objets ronds)
ຄັນ|khan|classificateur (véhicules)
ຄູ່|khou|paire
ກີບ|kip|kip (monnaie)
ກິໂລ|kilo|kilo ; kilomètre
ເລກ|lek|chiffre, numéro`,
  'Temps': `
ມື້ນີ້|meu ni|aujourd'hui
ມື້ວານ|meu van|hier
ມື້ອື່ນ|meu eun|demain
ມື້ຊືນ|meu xeun|après-demain
ຕອນເຊົ້າ|ton xao|le matin
ຕອນສວາຍ|ton sway|fin de matinée
ຕອນທ່ຽງ|ton thiang|midi
ຕອນບ່າຍ|ton bay|l'après-midi
ຕອນແລງ|ton laeng|le soir
ກາງຄືນ|kang kheun|la nuit
ມື້|meu|jour
ອາທິດ|athit|semaine
ເດືອນ|deuan|mois ; lune
ປີ|pi|année
ໂມງ|mong|heure (horloge)
ນາທີ|nathi|minute
ຊົ່ວໂມງ|xoua mong|heure (durée)
ເວລາ|vela|temps, moment
ດຽວນີ້|dio ni|maintenant
ຕອນນີ້|ton ni|en ce moment
ສະເໝີ|sameu|toujours
ເລື້ອຍໆ|leuay leuay|souvent
ບາງເທື່ອ|bang theua|parfois
ບໍ່ເຄີຍ|bo kheuy|jamais
ຕໍ່ໄປ|to pai|ensuite
ດົນ|don|longtemps
ທັນທີ|than thi|immédiatement
ທຸກມື້|thouk meu|tous les jours
ວັນຈັນ|van jan|lundi
ວັນອັງຄານ|van angkhan|mardi
ວັນພຸດ|van phout|mercredi
ວັນພະຫັດ|van phahat|jeudi
ວັນສຸກ|van souk|vendredi
ວັນເສົາ|van sao|samedi
ວັນອາທິດ|van athit|dimanche
ປີໃໝ່|pi mai|nouvel an`,
  'Verbes': `
ໄປ|pai|aller
ມາ|ma|venir
ກິນ|kin|manger
ດື່ມ|deum|boire
ນອນ|non|dormir ; se coucher
ຕື່ນ|teun|se réveiller
ເຮັດ|het|faire
ເຮັດວຽກ|het viak|travailler
ເວົ້າ|vao|parler, dire
ລົມ|lom|discuter ; vent
ເບິ່ງ|beung|regarder
ເຫັນ|hen|voir
ຟັງ|fang|écouter
ໄດ້ຍິນ|dai nyin|entendre
ຮູ້|hou|savoir
ຮູ້ຈັກ|hou jak|connaître
ເຂົ້າໃຈ|khao jai|comprendre
ຄິດ|khit|penser
ຄິດຮອດ|khit hot|manquer (qqn me manque)
ຮັກ|hak|aimer (amour)
ມັກ|mak|aimer bien
ຊັງ|xang|détester
ຊື້|xeu|acheter
ຂາຍ|khay|vendre
ຈ່າຍ|jay|payer
ໃຊ້|xai|utiliser
ເອົາ|ao|prendre ; vouloir (objet)
ສົ່ງ|song|envoyer ; déposer (qqn)
ຖື|theu|tenir, porter
ວາງ|vang|poser
ເປີດ|peut|ouvrir ; allumer
ປິດ|pit|fermer ; éteindre
ນັ່ງ|nang|s'asseoir
ຢືນ|yeun|être debout
ຍ່າງ|nyang|marcher
ແລ່ນ|laen|courir
ຂີ່|khi|monter (moto, vélo)
ຂັບ|khap|conduire
ລໍຖ້າ|lo tha|attendre
ຊອກຫາ|xok ha|chercher
ພົບ|phop|rencontrer
ຖາມ|tham|demander (question)
ຕອບ|top|répondre
ບອກ|bok|dire, informer
ອ່ານ|an|lire
ຂຽນ|khian|écrire
ຮຽນ|hian|étudier
ສອນ|son|enseigner
ຫຼິ້ນ|lin|jouer ; s'amuser
ອາບນ້ຳ|ap nam|se doucher
ລ້າງ|lang|laver
ແຕ່ງກິນ|taeng kin|cuisiner
ຊ່ວຍ|xouay|aider
ເລີ່ມ|leum|commencer
ຈົບ|jop|finir
ເຊົາ|xao|arrêter
ກັບບ້ານ|kap ban|rentrer à la maison
ອອກ|ok|sortir
ເຂົ້າ|khao|entrer ; riz
ຂຶ້ນ|kheun|monter
ລົງ|long|descendre
ລືມ|leum|oublier
ຈື່|jeu|se souvenir
ເຊື່ອ|xeua|croire
ຢ້ານ|yan|avoir peur
ຫົວ|houa|rire ; tête
ໄຫ້|hai|pleurer
ຍິ້ມ|nyim|sourire
ເຈັບ|jep|avoir mal
ຕາຍ|tay|mourir
ເກີດ|keut|naître ; arriver (événement)
ພັກ|phak|se reposer ; loger
ຢຸດ|yout|s'arrêter
ຈອດ|jot|se garer, stopper
ລອງ|long|essayer
ປ່ຽນ|pian|changer
ເລືອກ|leuak|choisir
ໂທ|tho|téléphoner
ເອີ້ນ|eun|appeler
ຕັດ|tat|couper
ເກັບ|kep|ranger ; garder ; encaisser
ຕື່ມ|teum|ajouter ; en plus
ດຶງ|deung|tirer
ຍູ້|nyou|pousser
ຕີ|ti|frapper
ເສຍ|sia|perdre ; être cassé
ຂໍ|kho|demander (requête)
ຂໍໂທດ|kho thot|s'excuser ; pardon
ຂອບໃຈ|khop jai|remercier ; merci
ພາ|pha|emmener
ຕາມ|tam|suivre
ຫຼົງທາງ|long thang|se perdre
ຍ້າຍ|nyay|déménager
ເດີນທາງ|deun thang|voyager
ທ່ຽວ|thiao|se balader, visiter
ລ້ຽງ|liang|nourrir ; offrir (repas)
ດູແລ|dou lae|prendre soin
ແຕ່ງງານ|taeng ngan|se marier
ເຕັ້ນ|ten|danser
ຮ້ອງເພງ|hong pheng|chanter
ຈອງ|jong|réserver
ແລກ|laek|échanger
ນັບ|nap|compter
ແປ|pae|traduire
ສູບຢາ|soup ya|fumer
ເມົາ|mao|être ivre
ຫິວ|hiu|avoir faim
ຫິວນ້ຳ|hiu nam|avoir soif
ອີ່ມ|im|être rassasié
ເມື່ອຍ|meuay|être fatigué
ງ່ວງ|ngouang|avoir sommeil
ຫຼຸດ|lout|baisser (prix) ; tomber
ຫຼອກ|lok|taquiner ; tromper
ເວົ້າຫຼິ້ນ|vao lin|plaisanter
ສົນໃຈ|son jai|s'intéresser`,
  'Adjectifs': `
ດີ|di|bon, bien
ງາມ|ngam|beau
ສວຍ|souay|joli(e)
ຫຼໍ່|lo|beau (garçon)
ໃຫຍ່|nyai|grand, gros
ນ້ອຍ|noy|petit
ຍາວ|nyao|long
ສັ້ນ|san|court
ສູງ|soung|haut, grand (taille)
ຕ່ຳ|tam|bas
ໃໝ່|mai|neuf, nouveau
ເກົ່າ|kao|vieux (objet)
ເຖົ້າ|thao|vieux (personne)
ໜຸ່ມ|noum|jeune
ແພງ|phaeng|cher
ຖືກ|theuk|bon marché ; correct
ແຊບ|xaep|délicieux
ເຜັດ|phet|épicé
ຫວານ|van|sucré
ສົ້ມ|som|acide ; orange (fruit)
ເຄັມ|khem|salé
ຂົມ|khom|amer
ຈືດ|jeut|fade
ຮ້ອນ|hon|chaud
ໜາວ|nao|froid (temps)
ເຢັນ|yen|frais ; froid (objet)
ອຸ່ນ|oun|tiède
ສະບາຍ|sabay|bien, à l'aise
ມ່ວນ|mouan|amusant, sympa
ເບື່ອ|beua|ennuyé, lassé
ງ່າຍ|ngai|facile
ຍາກ|nyak|difficile
ຫຍຸ້ງ|nyoung|occupé
ຫວ່າງ|vang|libre, disponible
ສະອາດ|sa at|propre
ເປື້ອນ|peuan|sale
ໜັກ|nak|lourd
ເບົາ|bao|léger
ໄວ|vai|rapide, tôt
ຊ້າ|xa|lent
ດັງ|dang|fort (son) ; célèbre ; nez
ຄ່ອຍ|khoy|doucement
ມືດ|meut|sombre
ແຈ້ງ|jaeng|clair
ເຕັມ|tem|plein
ຮັ່ງມີ|hang mi|riche
ທຸກຍາກ|thouk nyak|pauvre
ເກັ່ງ|keng|doué, fort
ສະຫຼາດ|salat|intelligent
ໂງ່|ngo|bête
ຂີ້ຄ້ານ|khi khan|paresseux
ໃຈດີ|jai di|gentil
ໃຈຮ້າຍ|jai hay|en colère
ໃຈເຢັນ|jai yen|calme, patient
ຕຸ້ຍ|touy|gros
ຈ່ອຍ|joy|maigre
ສຸກ|souk|cuit ; mûr
ດິບ|dip|cru
ແຂງ|khaeng|dur ; fort
ອ່ອນ|on|mou ; tendre ; clair (couleur)
ເປັນຕາຮັກ|pen ta hak|mignon
ສຳຄັນ|samkhan|important
ຖືກຕ້ອງ|theuk tong|correct
ຜິດ|phit|faux, erroné
ຕ່າງ|tang|différent
ດຽວກັນ|dio kan|même
ພໍ|pho|assez
ກວ່າ|kva|plus (que)
ທີ່ສຸດ|thi sout|le plus
ຈິງ|jing|vrai
ດີໃຈ|di jai|content
ເສຍໃຈ|sia jai|triste ; désolé
ແປກໃຈ|paek jai|surpris
ອາຍ|ay|avoir honte, timide`,
  'Couleurs': `
ສີ|si|couleur
ແດງ|daeng|rouge
ຂຽວ|khiao|vert
ຟ້າ|fa|bleu ; ciel
ເຫຼືອງ|leuang|jaune
ດຳ|dam|noir
ຂາວ|khao|blanc
ສີສົ້ມ|si som|orange
ສີບົວ|si boua|rose
ສີມ່ວງ|si mouang|violet
ສີນ້ຳຕານ|si nam tan|marron`,
  'Corps & santé': `
ໜ້າ|na|visage ; devant
ຕາ|ta|œil ; grand-père maternel
ຫູ|hou|oreille
ປາກ|pak|bouche
ແຂ້ວ|khaeo|dent
ຜົມ|phom|cheveux
ຄໍ|kho|cou ; gorge
ມື|meu|main
ແຂນ|khaen|bras
ຕີນ|tin|pied
ຂາ|kha|jambe
ທ້ອງ|thong|ventre
ຫົວໃຈ|houa jai|cœur (organe)
ໃຈ|jai|cœur, esprit
ເລືອດ|leuat|sang
ນິ້ວ|niu|doigt
ຮ່າງກາຍ|hang kay|corps
ບໍ່ສະບາຍ|bo sabay|malade
ຢາ|ya|médicament
ໂຮງໝໍ|hong mo|hôpital
ໄຂ້|khai|fièvre
ໄອ|ai|tousser`,
  'Nourriture': `
ເຂົ້າ|khao|riz ; repas
ເຂົ້າໜຽວ|khao niao|riz gluant
ເຂົ້າຈ້າວ|khao jao|riz blanc (non gluant)
ອາຫານ|ahan|nourriture
ນ້ຳ|nam|eau ; liquide
ນ້ຳກ້ອນ|nam kon|glace
ກາເຟ|kafe|café
ຊາ|xa|thé
ເບຍ|bia|bière
ເຫຼົ້າ|lao|alcool
ນົມ|nom|lait
ຊີ້ນ|xin|viande
ໄກ່|kai|poulet
ໝູ|mou|porc
ງົວ|ngoua|bœuf
ປາ|pa|poisson
ກຸ້ງ|koung|crevette
ໄຂ່|khai|œuf
ຜັກ|phak|légume
ໝາກໄມ້|mak mai|fruit
ໝາກມ່ວງ|mak mouang|mangue
ໝາກກ້ວຍ|mak kouay|banane
ໝາກພ້າວ|mak phao|noix de coco
ໝາກຫຸ່ງ|mak houng|papaye
ຕຳໝາກຫຸ່ງ|tam mak houng|salade de papaye
ລາບ|lap|laap (salade de viande)
ເຝີ|feu|soupe de nouilles (pho)
ເຂົ້າປຽກເສັ້ນ|khao piak sen|soupe de nouilles maison
ເຂົ້າຈີ່|khao ji|pain, sandwich
ໝີ່|mi|nouilles
ປີ້ງ|ping|griller
ຂົ້ວ|khoua|faire sauter
ຕົ້ມ|tom|bouillir ; soupe
ໝາກເຜັດ|mak phet|piment
ເກືອ|keua|sel
ນ້ຳຕານ|nam tan|sucre
ປາແດກ|pa daek|padaek (poisson fermenté)
ນ້ຳປາ|nam pa|sauce poisson
ຜົງນົວ|phong noua|glutamate
ກະທຽມ|kathiam|ail
ໝາກນາວ|mak nao|citron vert
ແຈ່ວ|jaeo|sauce pimentée
ຖ້ວຍ|thouay|bol
ຈານ|jan|assiette
ບ່ວງ|bouang|cuillère
ສ້ອມ|som|fourchette
ໄມ້ທູ່|mai thou|baguettes
ຈອກ|jok|verre
ແກ້ວ|kaeo|bouteille ; verre (matière)
ກະຕິບ|katip|panier à riz gluant
ຮ້ານອາຫານ|han ahan|restaurant`,
  'Lieux & directions': `
ບ້ານ|ban|maison ; village
ເຮືອນ|heuan|maison (bâtiment)
ຫ້ອງ|hong|pièce, chambre
ຫ້ອງນ້ຳ|hong nam|toilettes, salle de bain
ຫ້ອງນອນ|hong non|chambre à coucher
ເມືອງ|meuang|ville ; district
ປະເທດ|pathet|pays
ແຂວງ|khwaeng|province
ຖະໜົນ|thanon|rue, route
ທາງ|thang|chemin
ຕະຫຼາດ|talat|marché
ຮ້ານ|han|boutique
ໂຮງແຮມ|hong haem|hôtel
ໂຮງຮຽນ|hong hian|école
ວັດ|vat|temple
ທະນາຄານ|thanakhan|banque
ສະໜາມບິນ|sanam bin|aéroport
ສະຖານີ|sathani|gare, station
ຫ້ອງການ|hong kan|bureau
ແມ່ນ້ຳ|mae nam|fleuve
ແມ່ນ້ຳຂອງ|mae nam khong|le Mékong
ພູ|phou|montagne
ນາ|na|rizière
ປ່າ|pa|forêt
ນ້ຳຕົກ|nam tok|cascade
ຂົວ|khoua|pont
ສວນ|souan|jardin
ວຽງຈັນ|viang jan|Vientiane
ຫຼວງພະບາງ|louang phabang|Luang Prabang
ປະເທດລາວ|pathet lao|le Laos
ຊ້າຍ|xay|gauche
ຂວາ|khva|droite
ກົງໄປ|kong pai|tout droit
ລ້ຽວ|lio|tourner
ທາງແຍກ|thang nyaek|carrefour
ຂ້າງ|khang|côté
ກາງ|kang|milieu
ນອກ|nok|dehors
ທີ່ນີ້|thi ni|ici
ທີ່ຢູ່|thi you|adresse`,
  'Transport & objets': `
ລົດ|lot|voiture, véhicule
ລົດຖີບ|lot thip|vélo
ລົດຈັກ|lot jak|moto
ລົດເມ|lot me|bus
ຕຸກຕຸກ|touk touk|tuk-tuk
ເຮືອ|heua|bateau
ເຮືອບິນ|heua bin|avion
ປີ້|pi|billet
ເງິນ|ngeun|argent
ລາຄາ|lakha|prix
ໂທລະສັບ|tholasap|téléphone
ເບີໂທ|beu tho|numéro de téléphone
ປຶ້ມ|peum|cahier, livre
ໜັງສື|nangseu|livre ; écriture
ເຈ້ຍ|jia|papier
ປາກກາ|pakka|stylo
ເສື້ອ|seua|chemise, haut
ໂສ້ງ|song|pantalon
ສິ້ນ|sin|sinh (jupe lao)
ເກີບ|keup|chaussures
ໝວກ|mouak|chapeau, casque
ກະເປົາ|kapao|sac ; poche
ກະແຈ|kajae|clé
ປະຕູ|patou|porte
ປ່ອງຢ້ຽມ|pong yiam|fenêtre
ໂຕະ|to|table
ຕັ່ງ|tang|chaise
ຕຽງ|tiang|lit
ໄຟ|fai|feu ; électricité ; lumière
ແອ|ae|climatisation
ພັດລົມ|phat lom|ventilateur
ໂທລະທັດ|tholathat|télévision
ຮູບ|houp|photo, image
ສິ່ງ|sing|chose
ຂອງຂວັນ|khong khouan|cadeau
ສະບູ|sabou|savon
ໜັງສືຜ່ານແດນ|nangseu phan daen|passeport
ຖົງ|thong|sac (plastique)
ຂວດ|khouat|bouteille
ພາສາ|phasa|langue
ຄຳ|kham|mot ; or`,
  'Nature': `
ທ້ອງຟ້າ|thong fa|ciel
ຕາເວັນ|taven|soleil
ດາວ|dao|étoile
ຝົນ|fon|pluie
ຝົນຕົກ|fon tok|il pleut
ອາກາດ|akat|temps (météo) ; air
ດິນ|din|terre
ຫີນ|hin|pierre
ໄມ້|mai|bois ; arbre
ດອກໄມ້|dok mai|fleur
ໃບໄມ້|bai mai|feuille
ໝາ|ma|chien
ແມວ|maeo|chat
ຊ້າງ|xang|éléphant
ນົກ|nok|oiseau
ມ້າ|ma|cheval
ຄວາຍ|khouay|buffle
ຍຸງ|nyoung|moustique
ງູ|ngou|serpent
ລະດູຝົນ|ladou fon|saison des pluies
ລະດູແລ້ງ|ladou laeng|saison sèche
ລະດູໜາວ|ladou nao|saison fraîche
ໂລກ|lok|monde`,
  'Vie & culture': `
ສະບາຍດີ|sabaidi|bonjour ; ça va
ລາກ່ອນ|la kon|au revoir
ໂຊກດີ|xok di|bonne chance ; au revoir
ບໍ່ເປັນຫຍັງ|bo pen nyang|pas grave, de rien
ບຸນ|boun|fête ; mérite
ພະ|pha|moine ; sacré
ໃສ່ບາດ|sai bat|offrande aux moines
ບາສີ|basi|cérémonie baci
ຂວັນ|khouan|âme, esprits vitaux
ວຽກ|viak|travail
ເງິນເດືອນ|ngeun deuan|salaire
ບໍລິສັດ|borisat|entreprise
ຕຳຫຼວດ|tam louat|police
ຊາວນາ|xao na|paysan, riziculteur
ພໍ່ຄ້າ|pho kha|commerçant
ແມ່ຄ້າ|mae kha|commerçante
ພາສາລາວ|phasa lao|langue lao
ພາສາອັງກິດ|phasa angkit|anglais
ດົນຕີ|dontri|musique
ເພງ|pheng|chanson
ແຄນ|khaen|khène (orgue à bouche)
ລຳວົງ|lam vong|lamvong (danse)
ບານເຕະ|ban te|football
ຄວາມຮັກ|khouam hak|amour
ຄວາມສຸກ|khouam souk|bonheur
ບັນຫາ|banha|problème
ເລື່ອງ|leuang|histoire ; affaire
ຂ່າວ|khao|nouvelles
ຄຳຖາມ|kham tham|question
ໂຊກ|xok|chance
ເຊີນ|xeun|je vous en prie
ກະລຸນາ|kalouna|veuillez (formel)
ແມ່ນແລ້ວ|maen laeo|exactement
ໂອເຄ|okhe|OK`
}), 500);
