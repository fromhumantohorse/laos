"use strict";(()=>{var h=(e,a,n)=>()=>{if(n)throw n[0];try{return e&&(a=e(e=0)),a}catch(o){throw n=[o],o}};var ge=(e,a)=>()=>{try{return a||e((a={exports:{}}).exports,a),a.exports}catch(n){throw a=0,n}};var M,A,j,$,O,D,q,V,L,w,k=h(()=>{"use strict";M=e=>e.split("|").map(a=>a.trim()),A=e=>e.trim().split(`
`).filter(Boolean),j=(e,a="")=>A(e).map(n=>{let[o,i,u]=M(n);return{lo:o,ro:i,fr:u,cat:a}}),$=e=>A(e).map(a=>{let[n,o,i,u]=M(a);return{who:n,lo:o,ro:i,fr:u,cat:n}}),O=e=>e.flatMap(a=>[...a.ex?j(a.ex):[],...a.dlg?$(a.dlg):[]]),D=e=>A(e).map(a=>{let[n,o,i,u,s=""]=M(a);return{glyph:n,ro:o,say:i,note:u,tag:s}}),q=e=>{let a=new Set;return Object.entries(e).flatMap(([n,o])=>j(o,n)).filter(n=>!a.has(n.lo)&&!!a.add(n.lo))},V=(e,a)=>{let n=Map.groupBy(e,s=>s.cat),o=new Map([...n].map(([s,p])=>[s,Math.round(p.length*a/e.length)])),i=a-[...o.values()].reduce((s,p)=>s+p,0),u=[...o.keys()][0];return o.set(u,o.get(u)+i),[...n].flatMap(([s,p])=>p.map((c,y)=>({...c,core:y<o.get(s)})))},L=e=>e.map(a=>[Math.random(),a]).sort((a,n)=>a[0]-n[0]).map(([,a])=>a),w=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")});var f,H=h(()=>{"use strict";k();f=V(q({"Mots-outils":`
\u0EC1\u0EA1\u0EC8\u0E99|maen|\xEAtre (c'est) ; oui
\u0E9A\u0ECD\u0EC8|bo|ne\u2026 pas ; non
\u0E9A\u0ECD|bo|? (particule de question)
\u0EA1\u0EB5|mi|avoir ; il y a
\u0EC0\u0E9B\u0EB1\u0E99|pen|\xEAtre ; savoir faire ; avoir (maladie)
\u0EA2\u0EB9\u0EC8|you|\xEAtre (quelque part) ; habiter
\u0EC4\u0E94\u0EC9|dai|pouvoir ; obtenir ; marque du pass\xE9
\u0EC1\u0EA5\u0EC9\u0EA7|laeo|d\xE9j\xE0 ; puis ; c'est fait
\u0E8D\u0EB1\u0E87|nyang|encore ; pas encore
\u0E88\u0EB0|ja|futur (\xE9crit / soutenu)
\u0E8A\u0EB4|xi|futur (oral : \xAB va \xBB)
\u0E81\u0EB3\u0EA5\u0EB1\u0E87|kam lang|en train de
\u0E9E\u0EA7\u0EA1|phouam|en train de (oral)
\u0EC0\u0E84\u0EB5\u0E8D|kheuy|avoir d\xE9j\xE0 (exp\xE9rience)
\u0EAB\u0EB2\u0E81\u0ECD\u0EC8|ha ko|venir juste de
\u0E82\u0EAD\u0E87|khong|de (possession) ; chose
\u0EC1\u0EA5\u0EB0|lae|et
\u0E81\u0EB1\u0E9A|kap|avec ; et
\u0E99\u0EB3|nam|avec ; aussi ; suivre
\u0EC1\u0E95\u0EC8|tae|mais ; depuis ; seulement
\u0EAB\u0EBC\u0EB7|leu|ou
\u0E96\u0EC9\u0EB2|tha|si
\u0EC0\u0E9E\u0EB2\u0EB0|pho|parce que
\u0E8D\u0EC9\u0EAD\u0E99|nyon|\xE0 cause de
\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD|pheua|pour, afin de
\u0EC3\u0EAB\u0EC9|hai|donner ; pour ; faire faire
\u0EA7\u0EC8\u0EB2|va|que (dire que\u2026)
\u0E97\u0EB5\u0EC8|thi|qui / que (relatif) ; lieu
\u0E88\u0EB2\u0E81|jak|de, depuis (provenance)
\u0EC0\u0E96\u0EB4\u0E87|theung|jusqu'\xE0 ; arriver
\u0EC3\u0E99|nai|dans
\u0EC0\u0E97\u0EB4\u0E87|theung|sur, en haut
\u0EA5\u0EB8\u0EC8\u0EA1|loum|en bas, sous
\u0EC3\u0E81\u0EC9|kai|pr\xE8s (\u2260 \u0EC4\u0E81 loin)
\u0EC4\u0E81|kai|loin (\u2260 \u0EC3\u0E81\u0EC9 pr\xE8s)
\u0E81\u0EC8\u0EAD\u0E99|kon|avant ; d'abord
\u0EAB\u0EBC\u0EB1\u0E87|lang|apr\xE8s ; derri\xE8re ; dos
\u0E99\u0EB5\u0EC9|ni|ce, ceci
\u0E99\u0EB1\u0EC9\u0E99|nan|cela
\u0E9E\u0EB8\u0EC9\u0E99|phoun|l\xE0-bas (loin)
\u0E81\u0ECD|ko|alors ; aussi
\u0E84\u0EB7|kheu|comme ; c'est-\xE0-dire
\u0E84\u0EB7\u0E81\u0EB1\u0E99|kheu kan|pareil ; moi aussi
\u0EAD\u0EB5\u0E81|ik|encore, de nouveau
\u0EC1\u0E97\u0EC9|thae|vraiment
\u0EAB\u0EBC\u0EB2\u0E8D|lai|beaucoup ; tr\xE8s
\u0EDC\u0EC9\u0EAD\u0E8D|noy|peu
\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|noy neung|un peu
\u0E97\u0EB1\u0E87\u0EDD\u0EBB\u0E94|thang mot|tout, en tout
\u0E97\u0EB8\u0E81|thouk|chaque ; tous
\u0E9A\u0EB2\u0E87|bang|certains
\u0E81\u0EB1\u0E99|kan|ensemble ; l'un l'autre
\u0EC0\u0EAD\u0E87|eng|soi-m\xEAme
\u0EC2\u0E94\u0E8D|doy|par
\u0E95\u0EC9\u0EAD\u0E87|tong|devoir
\u0E84\u0EA7\u0E99|khouan|devrait
\u0EA2\u0EB2\u0E81|yak|vouloir (+ verbe)
\u0EA2\u0EC8\u0EB2|ya|ne\u2026 pas (interdiction)
\u0EC0\u0EA5\u0EB5\u0E8D|leuy|du tout ; donc ; directement
\u0EC0\u0E81\u0EB7\u0EAD\u0E9A|keuap|presque
\u0E9E\u0EBD\u0E87\u0EC1\u0E95\u0EC8|phiang tae|seulement
\u0EC1\u0E95\u0EC8\u0EA5\u0EB0|tae la|chaque
\u0EAA\u0EC8\u0EA7\u0E99|souan|quant \xE0 ; partie`,"Particules orales":`
\u0EC0\u0E94\u0EB5\u0EC9|deu|hein, d'accord ? (adoucit)
\u0EC0\u0E99\u0EB2\u0EB0|no|n'est-ce pas
\u0EC1\u0E94\u0EC8|dae|s'il te pla\xEEt ; un peu
\u0EC0\u0E94|de|et toi ? (renvoi de question)
\u0EC2\u0EA5\u0E94|lot|allez-y ! (encouragement)
\u0EAA\u0EB2|sa|donc ! (imp\xE9ratif doux)
\u0E95\u0EB5\u0EC9|ti|n'est-ce pas ? (confirmation)
\u0EC0\u0EAD\u0EB5|eu|ouais (familier)
\u0EC2\u0EAD\u0EC9\u0E8D|oy|a\xEFe ; oh l\xE0 l\xE0
\u0EAD\u0EB5\u0EC8\u0EAB\u0EBC\u0EB5|i li|vraiment ? (argot)
\u0EC2\u0E9E\u0E94|phot|trop (excessif)
\u0EC1\u0E97\u0EC9\u0EC6|thae thae|vraiment vraiment`,Questions:`
\u0EAB\u0E8D\u0EB1\u0E87|nyang|quoi
\u0EC3\u0E9C|phai|qui
\u0EC3\u0EAA|sai|o\xF9
\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA|you sai|o\xF9 (se trouve)
\u0EC0\u0EA1\u0EB7\u0EC8\u0EAD\u0EC3\u0E94|meua dai|quand
\u0E88\u0EB1\u0E81|jak|combien (+ classificateur)
\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94|thao dai|combien
\u0EC1\u0E99\u0EA7\u0EC3\u0E94|naeo dai|comment
\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|pen nyang|pourquoi
\u0EAD\u0EB1\u0E99\u0EC3\u0E94|an dai|lequel
\u0E88\u0EB1\u0E81\u0EC2\u0EA1\u0E87|jak mong|quelle heure
\u0E9B\u0EB2\u0E99\u0EC3\u0E94|pan dai|\xE0 quel point`,"Personnes & famille":`
\u0E82\u0EC9\u0EAD\u0E8D|khoy|je, moi
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2|jao|tu, vous (poli) ; oui (poli)
\u0EA5\u0EB2\u0EA7|lao|il, elle ; lao
\u0EC0\u0E82\u0EBB\u0EB2|khao|il, elle ; ils
\u0EC0\u0EAE\u0EBB\u0EB2|hao|nous ; on
\u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EBB\u0EB2|phouak hao|nous (groupe)
\u0E9E\u0EA7\u0E81\u0EC0\u0E82\u0EBB\u0EB2|phouak khao|ils, elles
\u0EC2\u0E95|to|toi (familier) ; corps
\u0E81\u0EB9|kou|moi (tr\xE8s familier)
\u0EA1\u0EB6\u0E87|meung|toi (tr\xE8s familier)
\u0E97\u0EC8\u0EB2\u0E99|than|vous (tr\xE8s poli)
\u0EAD\u0EC9\u0EB2\u0E8D|ay|grand fr\xE8re
\u0EC0\u0EAD\u0EB7\u0EC9\u0EAD\u0E8D|euay|grande s\u0153ur
\u0E99\u0EC9\u0EAD\u0E87|nong|petit fr\xE8re / petite s\u0153ur
\u0E9E\u0ECD\u0EC8|pho|p\xE8re
\u0EC1\u0EA1\u0EC8|mae|m\xE8re
\u0EA5\u0EB9\u0E81|louk|enfant (de quelqu'un)
\u0EC0\u0E94\u0EB1\u0E81\u0E99\u0EC9\u0EAD\u0E8D|dek noy|enfant
\u0E9C\u0EBB\u0EA7|phoua|mari
\u0EC0\u0EA1\u0E8D|mia|\xE9pouse
\u0EC1\u0E9F\u0E99|faen|petit(e) ami(e)
\u0EDD\u0EB9\u0EC8|mou|ami, pote
\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E99|pheuan|ami, camarade
\u0E84\u0EBB\u0E99|khon|personne ; gens
\u0E9C\u0EB9\u0EC9\u0E8A\u0EB2\u0E8D|phou xay|homme
\u0E9C\u0EB9\u0EC9\u0E8D\u0EB4\u0E87|phou nying|femme
\u0E9E\u0ECD\u0EC8\u0E95\u0EB9\u0EC9|pho tou|grand-p\xE8re
\u0EC1\u0EA1\u0EC8\u0E95\u0EB9\u0EC9|mae tou|grand-m\xE8re
\u0EA5\u0EB8\u0E87|loung|oncle (a\xEEn\xE9)
\u0E9B\u0EC9\u0EB2|pa|tante (a\xEEn\xE9e)
\u0E99\u0EC9\u0EB2|na|oncle / tante (cadet, c\xF4t\xE9 m\xE8re)
\u0EAD\u0EB2|a|oncle / tante (cadet, c\xF4t\xE9 p\xE8re)
\u0EAB\u0EBC\u0EB2\u0E99|lan|neveu ; petit-enfant
\u0E84\u0EAD\u0E9A\u0E84\u0EBB\u0EA7|khop khoua|famille
\u0E9E\u0EB5\u0EC8\u0E99\u0EC9\u0EAD\u0E87|phi nong|fr\xE8res et s\u0153urs ; proches
\u0E84\u0EB9|khou|professeur
\u0E99\u0EB1\u0E81\u0EAE\u0EBD\u0E99|nak hian|\xE9l\xE8ve
\u0EDD\u0ECD|mo|m\xE9decin
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0E82\u0EAD\u0E87|jao khong|propri\xE9taire, patron
\u0EC1\u0E82\u0E81|khaek|invit\xE9 ; client
\u0E84\u0EBB\u0E99\u0EA5\u0EB2\u0EA7|khon lao|Laotien(ne)
\u0E84\u0EBB\u0E99\u0E95\u0EC8\u0EB2\u0E87\u0E9B\u0EB0\u0EC0\u0E97\u0E94|khon tang pathet|\xE9tranger
\u0E9D\u0EA3\u0EB1\u0EC8\u0E87|falang|Fran\xE7ais ; Occidental
\u0EAD\u0EB2\u0E8D\u0EB8|ayou|\xE2ge
\u0E8A\u0EB7\u0EC8|xeu|nom ; s'appeler`,Nombres:`
\u0EAA\u0EB9\u0E99|soun|0
\u0EDC\u0EB6\u0EC8\u0E87|neung|1
\u0EAA\u0EAD\u0E87|song|2
\u0EAA\u0EB2\u0EA1|sam|3
\u0EAA\u0EB5\u0EC8|si|4
\u0EAB\u0EC9\u0EB2|ha|5
\u0EAB\u0EBB\u0E81|hok|6
\u0EC0\u0E88\u0EB1\u0E94|jet|7
\u0EC1\u0E9B\u0E94|paet|8
\u0EC0\u0E81\u0EBB\u0EC9\u0EB2|kao|9
\u0EAA\u0EB4\u0E9A|sip|10
\u0EAA\u0EB4\u0E9A\u0EC0\u0EAD\u0EB1\u0E94|sip et|11
\u0E8A\u0EB2\u0EA7|xao|20
\u0EAA\u0EB2\u0EA1\u0EAA\u0EB4\u0E9A|sam sip|30
\u0EAE\u0EC9\u0EAD\u0E8D|hoy|100
\u0E9E\u0EB1\u0E99|phan|1 000
\u0EDD\u0EB7\u0EC8\u0E99|meun|10 000
\u0EC1\u0EAA\u0E99|saen|100 000
\u0EA5\u0EC9\u0EB2\u0E99|lan|1 000 000
\u0EC0\u0E84\u0EB4\u0EC8\u0E87|kheung|moiti\xE9
\u0E97\u0EB3\u0EAD\u0EB4\u0E94|tham it|premier
\u0E97\u0EB5\u0EAA\u0EAD\u0E87|thi song|deuxi\xE8me
\u0EC0\u0E97\u0EB7\u0EC8\u0EAD|theua|fois
\u0EAD\u0EB1\u0E99|an|chose (classificateur)
\u0EDC\u0EC8\u0EA7\u0E8D|nouay|classificateur (fruits, objets ronds)
\u0E84\u0EB1\u0E99|khan|classificateur (v\xE9hicules)
\u0E84\u0EB9\u0EC8|khou|paire
\u0E81\u0EB5\u0E9A|kip|kip (monnaie)
\u0E81\u0EB4\u0EC2\u0EA5|kilo|kilo ; kilom\xE8tre
\u0EC0\u0EA5\u0E81|lek|chiffre, num\xE9ro`,Temps:`
\u0EA1\u0EB7\u0EC9\u0E99\u0EB5\u0EC9|meu ni|aujourd'hui
\u0EA1\u0EB7\u0EC9\u0EA7\u0EB2\u0E99|meu van|hier
\u0EA1\u0EB7\u0EC9\u0EAD\u0EB7\u0EC8\u0E99|meu eun|demain
\u0EA1\u0EB7\u0EC9\u0E8A\u0EB7\u0E99|meu xeun|apr\xE8s-demain
\u0E95\u0EAD\u0E99\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2|ton xao|le matin
\u0E95\u0EAD\u0E99\u0EAA\u0EA7\u0EB2\u0E8D|ton sway|fin de matin\xE9e
\u0E95\u0EAD\u0E99\u0E97\u0EC8\u0EBD\u0E87|ton thiang|midi
\u0E95\u0EAD\u0E99\u0E9A\u0EC8\u0EB2\u0E8D|ton bay|l'apr\xE8s-midi
\u0E95\u0EAD\u0E99\u0EC1\u0EA5\u0E87|ton laeng|le soir
\u0E81\u0EB2\u0E87\u0E84\u0EB7\u0E99|kang kheun|la nuit
\u0EA1\u0EB7\u0EC9|meu|jour
\u0EAD\u0EB2\u0E97\u0EB4\u0E94|athit|semaine
\u0EC0\u0E94\u0EB7\u0EAD\u0E99|deuan|mois ; lune
\u0E9B\u0EB5|pi|ann\xE9e
\u0EC2\u0EA1\u0E87|mong|heure (horloge)
\u0E99\u0EB2\u0E97\u0EB5|nathi|minute
\u0E8A\u0EBB\u0EC8\u0EA7\u0EC2\u0EA1\u0E87|xoua mong|heure (dur\xE9e)
\u0EC0\u0EA7\u0EA5\u0EB2|vela|temps, moment
\u0E94\u0EBD\u0EA7\u0E99\u0EB5\u0EC9|dio ni|maintenant
\u0E95\u0EAD\u0E99\u0E99\u0EB5\u0EC9|ton ni|en ce moment
\u0EAA\u0EB0\u0EC0\u0EDD\u0EB5|sameu|toujours
\u0EC0\u0EA5\u0EB7\u0EC9\u0EAD\u0E8D\u0EC6|leuay leuay|souvent
\u0E9A\u0EB2\u0E87\u0EC0\u0E97\u0EB7\u0EC8\u0EAD|bang theua|parfois
\u0E9A\u0ECD\u0EC8\u0EC0\u0E84\u0EB5\u0E8D|bo kheuy|jamais
\u0E95\u0ECD\u0EC8\u0EC4\u0E9B|to pai|ensuite
\u0E94\u0EBB\u0E99|don|longtemps
\u0E97\u0EB1\u0E99\u0E97\u0EB5|than thi|imm\xE9diatement
\u0E97\u0EB8\u0E81\u0EA1\u0EB7\u0EC9|thouk meu|tous les jours
\u0EA7\u0EB1\u0E99\u0E88\u0EB1\u0E99|van jan|lundi
\u0EA7\u0EB1\u0E99\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99|van angkhan|mardi
\u0EA7\u0EB1\u0E99\u0E9E\u0EB8\u0E94|van phout|mercredi
\u0EA7\u0EB1\u0E99\u0E9E\u0EB0\u0EAB\u0EB1\u0E94|van phahat|jeudi
\u0EA7\u0EB1\u0E99\u0EAA\u0EB8\u0E81|van souk|vendredi
\u0EA7\u0EB1\u0E99\u0EC0\u0EAA\u0EBB\u0EB2|van sao|samedi
\u0EA7\u0EB1\u0E99\u0EAD\u0EB2\u0E97\u0EB4\u0E94|van athit|dimanche
\u0E9B\u0EB5\u0EC3\u0EDD\u0EC8|pi mai|nouvel an`,Verbes:`
\u0EC4\u0E9B|pai|aller
\u0EA1\u0EB2|ma|venir
\u0E81\u0EB4\u0E99|kin|manger
\u0E94\u0EB7\u0EC8\u0EA1|deum|boire
\u0E99\u0EAD\u0E99|non|dormir ; se coucher
\u0E95\u0EB7\u0EC8\u0E99|teun|se r\xE9veiller
\u0EC0\u0EAE\u0EB1\u0E94|het|faire
\u0EC0\u0EAE\u0EB1\u0E94\u0EA7\u0EBD\u0E81|het viak|travailler
\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2|vao|parler, dire
\u0EA5\u0EBB\u0EA1|lom|discuter ; vent
\u0EC0\u0E9A\u0EB4\u0EC8\u0E87|beung|regarder
\u0EC0\u0EAB\u0EB1\u0E99|hen|voir
\u0E9F\u0EB1\u0E87|fang|\xE9couter
\u0EC4\u0E94\u0EC9\u0E8D\u0EB4\u0E99|dai nyin|entendre
\u0EAE\u0EB9\u0EC9|hou|savoir
\u0EAE\u0EB9\u0EC9\u0E88\u0EB1\u0E81|hou jak|conna\xEEtre
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC3\u0E88|khao jai|comprendre
\u0E84\u0EB4\u0E94|khit|penser
\u0E84\u0EB4\u0E94\u0EAE\u0EAD\u0E94|khit hot|manquer (qqn me manque)
\u0EAE\u0EB1\u0E81|hak|aimer (amour)
\u0EA1\u0EB1\u0E81|mak|aimer bien
\u0E8A\u0EB1\u0E87|xang|d\xE9tester
\u0E8A\u0EB7\u0EC9|xeu|acheter
\u0E82\u0EB2\u0E8D|khay|vendre
\u0E88\u0EC8\u0EB2\u0E8D|jay|payer
\u0EC3\u0E8A\u0EC9|xai|utiliser
\u0EC0\u0EAD\u0EBB\u0EB2|ao|prendre ; vouloir (objet)
\u0EAA\u0EBB\u0EC8\u0E87|song|envoyer ; d\xE9poser (qqn)
\u0E96\u0EB7|theu|tenir, porter
\u0EA7\u0EB2\u0E87|vang|poser
\u0EC0\u0E9B\u0EB5\u0E94|peut|ouvrir ; allumer
\u0E9B\u0EB4\u0E94|pit|fermer ; \xE9teindre
\u0E99\u0EB1\u0EC8\u0E87|nang|s'asseoir
\u0EA2\u0EB7\u0E99|yeun|\xEAtre debout
\u0E8D\u0EC8\u0EB2\u0E87|nyang|marcher
\u0EC1\u0EA5\u0EC8\u0E99|laen|courir
\u0E82\u0EB5\u0EC8|khi|monter (moto, v\xE9lo)
\u0E82\u0EB1\u0E9A|khap|conduire
\u0EA5\u0ECD\u0E96\u0EC9\u0EB2|lo tha|attendre
\u0E8A\u0EAD\u0E81\u0EAB\u0EB2|xok ha|chercher
\u0E9E\u0EBB\u0E9A|phop|rencontrer
\u0E96\u0EB2\u0EA1|tham|demander (question)
\u0E95\u0EAD\u0E9A|top|r\xE9pondre
\u0E9A\u0EAD\u0E81|bok|dire, informer
\u0EAD\u0EC8\u0EB2\u0E99|an|lire
\u0E82\u0EBD\u0E99|khian|\xE9crire
\u0EAE\u0EBD\u0E99|hian|\xE9tudier
\u0EAA\u0EAD\u0E99|son|enseigner
\u0EAB\u0EBC\u0EB4\u0EC9\u0E99|lin|jouer ; s'amuser
\u0EAD\u0EB2\u0E9A\u0E99\u0EC9\u0EB3|ap nam|se doucher
\u0EA5\u0EC9\u0EB2\u0E87|lang|laver
\u0EC1\u0E95\u0EC8\u0E87\u0E81\u0EB4\u0E99|taeng kin|cuisiner
\u0E8A\u0EC8\u0EA7\u0E8D|xouay|aider
\u0EC0\u0EA5\u0EB5\u0EC8\u0EA1|leum|commencer
\u0E88\u0EBB\u0E9A|jop|finir
\u0EC0\u0E8A\u0EBB\u0EB2|xao|arr\xEAter
\u0E81\u0EB1\u0E9A\u0E9A\u0EC9\u0EB2\u0E99|kap ban|rentrer \xE0 la maison
\u0EAD\u0EAD\u0E81|ok|sortir
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|khao|entrer ; riz
\u0E82\u0EB6\u0EC9\u0E99|kheun|monter
\u0EA5\u0EBB\u0E87|long|descendre
\u0EA5\u0EB7\u0EA1|leum|oublier
\u0E88\u0EB7\u0EC8|jeu|se souvenir
\u0EC0\u0E8A\u0EB7\u0EC8\u0EAD|xeua|croire
\u0EA2\u0EC9\u0EB2\u0E99|yan|avoir peur
\u0EAB\u0EBB\u0EA7|houa|rire ; t\xEAte
\u0EC4\u0EAB\u0EC9|hai|pleurer
\u0E8D\u0EB4\u0EC9\u0EA1|nyim|sourire
\u0EC0\u0E88\u0EB1\u0E9A|jep|avoir mal
\u0E95\u0EB2\u0E8D|tay|mourir
\u0EC0\u0E81\u0EB5\u0E94|keut|na\xEEtre ; arriver (\xE9v\xE9nement)
\u0E9E\u0EB1\u0E81|phak|se reposer ; loger
\u0EA2\u0EB8\u0E94|yout|s'arr\xEAter
\u0E88\u0EAD\u0E94|jot|se garer, stopper
\u0EA5\u0EAD\u0E87|long|essayer
\u0E9B\u0EC8\u0EBD\u0E99|pian|changer
\u0EC0\u0EA5\u0EB7\u0EAD\u0E81|leuak|choisir
\u0EC2\u0E97|tho|t\xE9l\xE9phoner
\u0EC0\u0EAD\u0EB5\u0EC9\u0E99|eun|appeler
\u0E95\u0EB1\u0E94|tat|couper
\u0EC0\u0E81\u0EB1\u0E9A|kep|ranger ; garder ; encaisser
\u0E95\u0EB7\u0EC8\u0EA1|teum|ajouter ; en plus
\u0E94\u0EB6\u0E87|deung|tirer
\u0E8D\u0EB9\u0EC9|nyou|pousser
\u0E95\u0EB5|ti|frapper
\u0EC0\u0EAA\u0E8D|sia|perdre ; \xEAtre cass\xE9
\u0E82\u0ECD|kho|demander (requ\xEAte)
\u0E82\u0ECD\u0EC2\u0E97\u0E94|kho thot|s'excuser ; pardon
\u0E82\u0EAD\u0E9A\u0EC3\u0E88|khop jai|remercier ; merci
\u0E9E\u0EB2|pha|emmener
\u0E95\u0EB2\u0EA1|tam|suivre
\u0EAB\u0EBC\u0EBB\u0E87\u0E97\u0EB2\u0E87|long thang|se perdre
\u0E8D\u0EC9\u0EB2\u0E8D|nyay|d\xE9m\xE9nager
\u0EC0\u0E94\u0EB5\u0E99\u0E97\u0EB2\u0E87|deun thang|voyager
\u0E97\u0EC8\u0EBD\u0EA7|thiao|se balader, visiter
\u0EA5\u0EC9\u0EBD\u0E87|liang|nourrir ; offrir (repas)
\u0E94\u0EB9\u0EC1\u0EA5|dou lae|prendre soin
\u0EC1\u0E95\u0EC8\u0E87\u0E87\u0EB2\u0E99|taeng ngan|se marier
\u0EC0\u0E95\u0EB1\u0EC9\u0E99|ten|danser
\u0EAE\u0EC9\u0EAD\u0E87\u0EC0\u0E9E\u0E87|hong pheng|chanter
\u0E88\u0EAD\u0E87|jong|r\xE9server
\u0EC1\u0EA5\u0E81|laek|\xE9changer
\u0E99\u0EB1\u0E9A|nap|compter
\u0EC1\u0E9B|pae|traduire
\u0EAA\u0EB9\u0E9A\u0EA2\u0EB2|soup ya|fumer
\u0EC0\u0EA1\u0EBB\u0EB2|mao|\xEAtre ivre
\u0EAB\u0EB4\u0EA7|hiu|avoir faim
\u0EAB\u0EB4\u0EA7\u0E99\u0EC9\u0EB3|hiu nam|avoir soif
\u0EAD\u0EB5\u0EC8\u0EA1|im|\xEAtre rassasi\xE9
\u0EC0\u0EA1\u0EB7\u0EC8\u0EAD\u0E8D|meuay|\xEAtre fatigu\xE9
\u0E87\u0EC8\u0EA7\u0E87|ngouang|avoir sommeil
\u0EAB\u0EBC\u0EB8\u0E94|lout|baisser (prix) ; tomber
\u0EAB\u0EBC\u0EAD\u0E81|lok|taquiner ; tromper
\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0EAB\u0EBC\u0EB4\u0EC9\u0E99|vao lin|plaisanter
\u0EAA\u0EBB\u0E99\u0EC3\u0E88|son jai|s'int\xE9resser`,Adjectifs:`
\u0E94\u0EB5|di|bon, bien
\u0E87\u0EB2\u0EA1|ngam|beau
\u0EAA\u0EA7\u0E8D|souay|joli(e)
\u0EAB\u0EBC\u0ECD\u0EC8|lo|beau (gar\xE7on)
\u0EC3\u0EAB\u0E8D\u0EC8|nyai|grand, gros
\u0E99\u0EC9\u0EAD\u0E8D|noy|petit
\u0E8D\u0EB2\u0EA7|nyao|long
\u0EAA\u0EB1\u0EC9\u0E99|san|court
\u0EAA\u0EB9\u0E87|soung|haut, grand (taille)
\u0E95\u0EC8\u0EB3|tam|bas
\u0EC3\u0EDD\u0EC8|mai|neuf, nouveau
\u0EC0\u0E81\u0EBB\u0EC8\u0EB2|kao|vieux (objet)
\u0EC0\u0E96\u0EBB\u0EC9\u0EB2|thao|vieux (personne)
\u0EDC\u0EB8\u0EC8\u0EA1|noum|jeune
\u0EC1\u0E9E\u0E87|phaeng|cher
\u0E96\u0EB7\u0E81|theuk|bon march\xE9 ; correct
\u0EC1\u0E8A\u0E9A|xaep|d\xE9licieux
\u0EC0\u0E9C\u0EB1\u0E94|phet|\xE9pic\xE9
\u0EAB\u0EA7\u0EB2\u0E99|van|sucr\xE9
\u0EAA\u0EBB\u0EC9\u0EA1|som|acide ; orange (fruit)
\u0EC0\u0E84\u0EB1\u0EA1|khem|sal\xE9
\u0E82\u0EBB\u0EA1|khom|amer
\u0E88\u0EB7\u0E94|jeut|fade
\u0EAE\u0EC9\u0EAD\u0E99|hon|chaud
\u0EDC\u0EB2\u0EA7|nao|froid (temps)
\u0EC0\u0EA2\u0EB1\u0E99|yen|frais ; froid (objet)
\u0EAD\u0EB8\u0EC8\u0E99|oun|ti\xE8de
\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D|sabay|bien, \xE0 l'aise
\u0EA1\u0EC8\u0EA7\u0E99|mouan|amusant, sympa
\u0EC0\u0E9A\u0EB7\u0EC8\u0EAD|beua|ennuy\xE9, lass\xE9
\u0E87\u0EC8\u0EB2\u0E8D|ngai|facile
\u0E8D\u0EB2\u0E81|nyak|difficile
\u0EAB\u0E8D\u0EB8\u0EC9\u0E87|nyoung|occup\xE9
\u0EAB\u0EA7\u0EC8\u0EB2\u0E87|vang|libre, disponible
\u0EAA\u0EB0\u0EAD\u0EB2\u0E94|sa at|propre
\u0EC0\u0E9B\u0EB7\u0EC9\u0EAD\u0E99|peuan|sale
\u0EDC\u0EB1\u0E81|nak|lourd
\u0EC0\u0E9A\u0EBB\u0EB2|bao|l\xE9ger
\u0EC4\u0EA7|vai|rapide, t\xF4t
\u0E8A\u0EC9\u0EB2|xa|lent
\u0E94\u0EB1\u0E87|dang|fort (son) ; c\xE9l\xE8bre ; nez
\u0E84\u0EC8\u0EAD\u0E8D|khoy|doucement
\u0EA1\u0EB7\u0E94|meut|sombre
\u0EC1\u0E88\u0EC9\u0E87|jaeng|clair
\u0EC0\u0E95\u0EB1\u0EA1|tem|plein
\u0EAE\u0EB1\u0EC8\u0E87\u0EA1\u0EB5|hang mi|riche
\u0E97\u0EB8\u0E81\u0E8D\u0EB2\u0E81|thouk nyak|pauvre
\u0EC0\u0E81\u0EB1\u0EC8\u0E87|keng|dou\xE9, fort
\u0EAA\u0EB0\u0EAB\u0EBC\u0EB2\u0E94|salat|intelligent
\u0EC2\u0E87\u0EC8|ngo|b\xEAte
\u0E82\u0EB5\u0EC9\u0E84\u0EC9\u0EB2\u0E99|khi khan|paresseux
\u0EC3\u0E88\u0E94\u0EB5|jai di|gentil
\u0EC3\u0E88\u0EAE\u0EC9\u0EB2\u0E8D|jai hay|en col\xE8re
\u0EC3\u0E88\u0EC0\u0EA2\u0EB1\u0E99|jai yen|calme, patient
\u0E95\u0EB8\u0EC9\u0E8D|touy|gros
\u0E88\u0EC8\u0EAD\u0E8D|joy|maigre
\u0EAA\u0EB8\u0E81|souk|cuit ; m\xFBr
\u0E94\u0EB4\u0E9A|dip|cru
\u0EC1\u0E82\u0E87|khaeng|dur ; fort
\u0EAD\u0EC8\u0EAD\u0E99|on|mou ; tendre ; clair (couleur)
\u0EC0\u0E9B\u0EB1\u0E99\u0E95\u0EB2\u0EAE\u0EB1\u0E81|pen ta hak|mignon
\u0EAA\u0EB3\u0E84\u0EB1\u0E99|samkhan|important
\u0E96\u0EB7\u0E81\u0E95\u0EC9\u0EAD\u0E87|theuk tong|correct
\u0E9C\u0EB4\u0E94|phit|faux, erron\xE9
\u0E95\u0EC8\u0EB2\u0E87|tang|diff\xE9rent
\u0E94\u0EBD\u0EA7\u0E81\u0EB1\u0E99|dio kan|m\xEAme
\u0E9E\u0ECD|pho|assez
\u0E81\u0EA7\u0EC8\u0EB2|kva|plus (que)
\u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94|thi sout|le plus
\u0E88\u0EB4\u0E87|jing|vrai
\u0E94\u0EB5\u0EC3\u0E88|di jai|content
\u0EC0\u0EAA\u0E8D\u0EC3\u0E88|sia jai|triste ; d\xE9sol\xE9
\u0EC1\u0E9B\u0E81\u0EC3\u0E88|paek jai|surpris
\u0EAD\u0EB2\u0E8D|ay|avoir honte, timide`,Couleurs:`
\u0EAA\u0EB5|si|couleur
\u0EC1\u0E94\u0E87|daeng|rouge
\u0E82\u0EBD\u0EA7|khiao|vert
\u0E9F\u0EC9\u0EB2|fa|bleu ; ciel
\u0EC0\u0EAB\u0EBC\u0EB7\u0EAD\u0E87|leuang|jaune
\u0E94\u0EB3|dam|noir
\u0E82\u0EB2\u0EA7|khao|blanc
\u0EAA\u0EB5\u0EAA\u0EBB\u0EC9\u0EA1|si som|orange
\u0EAA\u0EB5\u0E9A\u0EBB\u0EA7|si boua|rose
\u0EAA\u0EB5\u0EA1\u0EC8\u0EA7\u0E87|si mouang|violet
\u0EAA\u0EB5\u0E99\u0EC9\u0EB3\u0E95\u0EB2\u0E99|si nam tan|marron`,"Corps & sant\xE9":`
\u0EDC\u0EC9\u0EB2|na|visage ; devant
\u0E95\u0EB2|ta|\u0153il ; grand-p\xE8re maternel
\u0EAB\u0EB9|hou|oreille
\u0E9B\u0EB2\u0E81|pak|bouche
\u0EC1\u0E82\u0EC9\u0EA7|khaeo|dent
\u0E9C\u0EBB\u0EA1|phom|cheveux
\u0E84\u0ECD|kho|cou ; gorge
\u0EA1\u0EB7|meu|main
\u0EC1\u0E82\u0E99|khaen|bras
\u0E95\u0EB5\u0E99|tin|pied
\u0E82\u0EB2|kha|jambe
\u0E97\u0EC9\u0EAD\u0E87|thong|ventre
\u0EAB\u0EBB\u0EA7\u0EC3\u0E88|houa jai|c\u0153ur (organe)
\u0EC3\u0E88|jai|c\u0153ur, esprit
\u0EC0\u0EA5\u0EB7\u0EAD\u0E94|leuat|sang
\u0E99\u0EB4\u0EC9\u0EA7|niu|doigt
\u0EAE\u0EC8\u0EB2\u0E87\u0E81\u0EB2\u0E8D|hang kay|corps
\u0E9A\u0ECD\u0EC8\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D|bo sabay|malade
\u0EA2\u0EB2|ya|m\xE9dicament
\u0EC2\u0EAE\u0E87\u0EDD\u0ECD|hong mo|h\xF4pital
\u0EC4\u0E82\u0EC9|khai|fi\xE8vre
\u0EC4\u0EAD|ai|tousser`,Nourriture:`
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|khao|riz ; repas
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7|khao niao|riz gluant
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0E88\u0EC9\u0EB2\u0EA7|khao jao|riz blanc (non gluant)
\u0EAD\u0EB2\u0EAB\u0EB2\u0E99|ahan|nourriture
\u0E99\u0EC9\u0EB3|nam|eau ; liquide
\u0E99\u0EC9\u0EB3\u0E81\u0EC9\u0EAD\u0E99|nam kon|glace
\u0E81\u0EB2\u0EC0\u0E9F|kafe|caf\xE9
\u0E8A\u0EB2|xa|th\xE9
\u0EC0\u0E9A\u0E8D|bia|bi\xE8re
\u0EC0\u0EAB\u0EBC\u0EBB\u0EC9\u0EB2|lao|alcool
\u0E99\u0EBB\u0EA1|nom|lait
\u0E8A\u0EB5\u0EC9\u0E99|xin|viande
\u0EC4\u0E81\u0EC8|kai|poulet
\u0EDD\u0EB9|mou|porc
\u0E87\u0EBB\u0EA7|ngoua|b\u0153uf
\u0E9B\u0EB2|pa|poisson
\u0E81\u0EB8\u0EC9\u0E87|koung|crevette
\u0EC4\u0E82\u0EC8|khai|\u0153uf
\u0E9C\u0EB1\u0E81|phak|l\xE9gume
\u0EDD\u0EB2\u0E81\u0EC4\u0EA1\u0EC9|mak mai|fruit
\u0EDD\u0EB2\u0E81\u0EA1\u0EC8\u0EA7\u0E87|mak mouang|mangue
\u0EDD\u0EB2\u0E81\u0E81\u0EC9\u0EA7\u0E8D|mak kouay|banane
\u0EDD\u0EB2\u0E81\u0E9E\u0EC9\u0EB2\u0EA7|mak phao|noix de coco
\u0EDD\u0EB2\u0E81\u0EAB\u0EB8\u0EC8\u0E87|mak houng|papaye
\u0E95\u0EB3\u0EDD\u0EB2\u0E81\u0EAB\u0EB8\u0EC8\u0E87|tam mak houng|salade de papaye
\u0EA5\u0EB2\u0E9A|lap|laap (salade de viande)
\u0EC0\u0E9D\u0EB5|feu|soupe de nouilles (pho)
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0E9B\u0EBD\u0E81\u0EC0\u0EAA\u0EB1\u0EC9\u0E99|khao piak sen|soupe de nouilles maison
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0E88\u0EB5\u0EC8|khao ji|pain, sandwich
\u0EDD\u0EB5\u0EC8|mi|nouilles
\u0E9B\u0EB5\u0EC9\u0E87|ping|griller
\u0E82\u0EBB\u0EC9\u0EA7|khoua|faire sauter
\u0E95\u0EBB\u0EC9\u0EA1|tom|bouillir ; soupe
\u0EDD\u0EB2\u0E81\u0EC0\u0E9C\u0EB1\u0E94|mak phet|piment
\u0EC0\u0E81\u0EB7\u0EAD|keua|sel
\u0E99\u0EC9\u0EB3\u0E95\u0EB2\u0E99|nam tan|sucre
\u0E9B\u0EB2\u0EC1\u0E94\u0E81|pa daek|padaek (poisson ferment\xE9)
\u0E99\u0EC9\u0EB3\u0E9B\u0EB2|nam pa|sauce poisson
\u0E9C\u0EBB\u0E87\u0E99\u0EBB\u0EA7|phong noua|glutamate
\u0E81\u0EB0\u0E97\u0EBD\u0EA1|kathiam|ail
\u0EDD\u0EB2\u0E81\u0E99\u0EB2\u0EA7|mak nao|citron vert
\u0EC1\u0E88\u0EC8\u0EA7|jaeo|sauce piment\xE9e
\u0E96\u0EC9\u0EA7\u0E8D|thouay|bol
\u0E88\u0EB2\u0E99|jan|assiette
\u0E9A\u0EC8\u0EA7\u0E87|bouang|cuill\xE8re
\u0EAA\u0EC9\u0EAD\u0EA1|som|fourchette
\u0EC4\u0EA1\u0EC9\u0E97\u0EB9\u0EC8|mai thou|baguettes
\u0E88\u0EAD\u0E81|jok|verre
\u0EC1\u0E81\u0EC9\u0EA7|kaeo|bouteille ; verre (mati\xE8re)
\u0E81\u0EB0\u0E95\u0EB4\u0E9A|katip|panier \xE0 riz gluant
\u0EAE\u0EC9\u0EB2\u0E99\u0EAD\u0EB2\u0EAB\u0EB2\u0E99|han ahan|restaurant`,"Lieux & directions":`
\u0E9A\u0EC9\u0EB2\u0E99|ban|maison ; village
\u0EC0\u0EAE\u0EB7\u0EAD\u0E99|heuan|maison (b\xE2timent)
\u0EAB\u0EC9\u0EAD\u0E87|hong|pi\xE8ce, chambre
\u0EAB\u0EC9\u0EAD\u0E87\u0E99\u0EC9\u0EB3|hong nam|toilettes, salle de bain
\u0EAB\u0EC9\u0EAD\u0E87\u0E99\u0EAD\u0E99|hong non|chambre \xE0 coucher
\u0EC0\u0EA1\u0EB7\u0EAD\u0E87|meuang|ville ; district
\u0E9B\u0EB0\u0EC0\u0E97\u0E94|pathet|pays
\u0EC1\u0E82\u0EA7\u0E87|khwaeng|province
\u0E96\u0EB0\u0EDC\u0EBB\u0E99|thanon|rue, route
\u0E97\u0EB2\u0E87|thang|chemin
\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94|talat|march\xE9
\u0EAE\u0EC9\u0EB2\u0E99|han|boutique
\u0EC2\u0EAE\u0E87\u0EC1\u0EAE\u0EA1|hong haem|h\xF4tel
\u0EC2\u0EAE\u0E87\u0EAE\u0EBD\u0E99|hong hian|\xE9cole
\u0EA7\u0EB1\u0E94|vat|temple
\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EB2\u0E99|thanakhan|banque
\u0EAA\u0EB0\u0EDC\u0EB2\u0EA1\u0E9A\u0EB4\u0E99|sanam bin|a\xE9roport
\u0EAA\u0EB0\u0E96\u0EB2\u0E99\u0EB5|sathani|gare, station
\u0EAB\u0EC9\u0EAD\u0E87\u0E81\u0EB2\u0E99|hong kan|bureau
\u0EC1\u0EA1\u0EC8\u0E99\u0EC9\u0EB3|mae nam|fleuve
\u0EC1\u0EA1\u0EC8\u0E99\u0EC9\u0EB3\u0E82\u0EAD\u0E87|mae nam khong|le M\xE9kong
\u0E9E\u0EB9|phou|montagne
\u0E99\u0EB2|na|rizi\xE8re
\u0E9B\u0EC8\u0EB2|pa|for\xEAt
\u0E99\u0EC9\u0EB3\u0E95\u0EBB\u0E81|nam tok|cascade
\u0E82\u0EBB\u0EA7|khoua|pont
\u0EAA\u0EA7\u0E99|souan|jardin
\u0EA7\u0EBD\u0E87\u0E88\u0EB1\u0E99|viang jan|Vientiane
\u0EAB\u0EBC\u0EA7\u0E87\u0E9E\u0EB0\u0E9A\u0EB2\u0E87|louang phabang|Luang Prabang
\u0E9B\u0EB0\u0EC0\u0E97\u0E94\u0EA5\u0EB2\u0EA7|pathet lao|le Laos
\u0E8A\u0EC9\u0EB2\u0E8D|xay|gauche
\u0E82\u0EA7\u0EB2|khva|droite
\u0E81\u0EBB\u0E87\u0EC4\u0E9B|kong pai|tout droit
\u0EA5\u0EC9\u0EBD\u0EA7|lio|tourner
\u0E97\u0EB2\u0E87\u0EC1\u0E8D\u0E81|thang nyaek|carrefour
\u0E82\u0EC9\u0EB2\u0E87|khang|c\xF4t\xE9
\u0E81\u0EB2\u0E87|kang|milieu
\u0E99\u0EAD\u0E81|nok|dehors
\u0E97\u0EB5\u0EC8\u0E99\u0EB5\u0EC9|thi ni|ici
\u0E97\u0EB5\u0EC8\u0EA2\u0EB9\u0EC8|thi you|adresse`,"Transport & objets":`
\u0EA5\u0EBB\u0E94|lot|voiture, v\xE9hicule
\u0EA5\u0EBB\u0E94\u0E96\u0EB5\u0E9A|lot thip|v\xE9lo
\u0EA5\u0EBB\u0E94\u0E88\u0EB1\u0E81|lot jak|moto
\u0EA5\u0EBB\u0E94\u0EC0\u0EA1|lot me|bus
\u0E95\u0EB8\u0E81\u0E95\u0EB8\u0E81|touk touk|tuk-tuk
\u0EC0\u0EAE\u0EB7\u0EAD|heua|bateau
\u0EC0\u0EAE\u0EB7\u0EAD\u0E9A\u0EB4\u0E99|heua bin|avion
\u0E9B\u0EB5\u0EC9|pi|billet
\u0EC0\u0E87\u0EB4\u0E99|ngeun|argent
\u0EA5\u0EB2\u0E84\u0EB2|lakha|prix
\u0EC2\u0E97\u0EA5\u0EB0\u0EAA\u0EB1\u0E9A|tholasap|t\xE9l\xE9phone
\u0EC0\u0E9A\u0EB5\u0EC2\u0E97|beu tho|num\xE9ro de t\xE9l\xE9phone
\u0E9B\u0EB6\u0EC9\u0EA1|peum|cahier, livre
\u0EDC\u0EB1\u0E87\u0EAA\u0EB7|nangseu|livre ; \xE9criture
\u0EC0\u0E88\u0EC9\u0E8D|jia|papier
\u0E9B\u0EB2\u0E81\u0E81\u0EB2|pakka|stylo
\u0EC0\u0EAA\u0EB7\u0EC9\u0EAD|seua|chemise, haut
\u0EC2\u0EAA\u0EC9\u0E87|song|pantalon
\u0EAA\u0EB4\u0EC9\u0E99|sin|sinh (jupe lao)
\u0EC0\u0E81\u0EB5\u0E9A|keup|chaussures
\u0EDD\u0EA7\u0E81|mouak|chapeau, casque
\u0E81\u0EB0\u0EC0\u0E9B\u0EBB\u0EB2|kapao|sac ; poche
\u0E81\u0EB0\u0EC1\u0E88|kajae|cl\xE9
\u0E9B\u0EB0\u0E95\u0EB9|patou|porte
\u0E9B\u0EC8\u0EAD\u0E87\u0EA2\u0EC9\u0EBD\u0EA1|pong yiam|fen\xEAtre
\u0EC2\u0E95\u0EB0|to|table
\u0E95\u0EB1\u0EC8\u0E87|tang|chaise
\u0E95\u0EBD\u0E87|tiang|lit
\u0EC4\u0E9F|fai|feu ; \xE9lectricit\xE9 ; lumi\xE8re
\u0EC1\u0EAD|ae|climatisation
\u0E9E\u0EB1\u0E94\u0EA5\u0EBB\u0EA1|phat lom|ventilateur
\u0EC2\u0E97\u0EA5\u0EB0\u0E97\u0EB1\u0E94|tholathat|t\xE9l\xE9vision
\u0EAE\u0EB9\u0E9A|houp|photo, image
\u0EAA\u0EB4\u0EC8\u0E87|sing|chose
\u0E82\u0EAD\u0E87\u0E82\u0EA7\u0EB1\u0E99|khong khouan|cadeau
\u0EAA\u0EB0\u0E9A\u0EB9|sabou|savon
\u0EDC\u0EB1\u0E87\u0EAA\u0EB7\u0E9C\u0EC8\u0EB2\u0E99\u0EC1\u0E94\u0E99|nangseu phan daen|passeport
\u0E96\u0EBB\u0E87|thong|sac (plastique)
\u0E82\u0EA7\u0E94|khouat|bouteille
\u0E9E\u0EB2\u0EAA\u0EB2|phasa|langue
\u0E84\u0EB3|kham|mot ; or`,Nature:`
\u0E97\u0EC9\u0EAD\u0E87\u0E9F\u0EC9\u0EB2|thong fa|ciel
\u0E95\u0EB2\u0EC0\u0EA7\u0EB1\u0E99|taven|soleil
\u0E94\u0EB2\u0EA7|dao|\xE9toile
\u0E9D\u0EBB\u0E99|fon|pluie
\u0E9D\u0EBB\u0E99\u0E95\u0EBB\u0E81|fon tok|il pleut
\u0EAD\u0EB2\u0E81\u0EB2\u0E94|akat|temps (m\xE9t\xE9o) ; air
\u0E94\u0EB4\u0E99|din|terre
\u0EAB\u0EB5\u0E99|hin|pierre
\u0EC4\u0EA1\u0EC9|mai|bois ; arbre
\u0E94\u0EAD\u0E81\u0EC4\u0EA1\u0EC9|dok mai|fleur
\u0EC3\u0E9A\u0EC4\u0EA1\u0EC9|bai mai|feuille
\u0EDD\u0EB2|ma|chien
\u0EC1\u0EA1\u0EA7|maeo|chat
\u0E8A\u0EC9\u0EB2\u0E87|xang|\xE9l\xE9phant
\u0E99\u0EBB\u0E81|nok|oiseau
\u0EA1\u0EC9\u0EB2|ma|cheval
\u0E84\u0EA7\u0EB2\u0E8D|khouay|buffle
\u0E8D\u0EB8\u0E87|nyoung|moustique
\u0E87\u0EB9|ngou|serpent
\u0EA5\u0EB0\u0E94\u0EB9\u0E9D\u0EBB\u0E99|ladou fon|saison des pluies
\u0EA5\u0EB0\u0E94\u0EB9\u0EC1\u0EA5\u0EC9\u0E87|ladou laeng|saison s\xE8che
\u0EA5\u0EB0\u0E94\u0EB9\u0EDC\u0EB2\u0EA7|ladou nao|saison fra\xEEche
\u0EC2\u0EA5\u0E81|lok|monde`,"Vie & culture":`
\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5|sabaidi|bonjour ; \xE7a va
\u0EA5\u0EB2\u0E81\u0EC8\u0EAD\u0E99|la kon|au revoir
\u0EC2\u0E8A\u0E81\u0E94\u0EB5|xok di|bonne chance ; au revoir
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|bo pen nyang|pas grave, de rien
\u0E9A\u0EB8\u0E99|boun|f\xEAte ; m\xE9rite
\u0E9E\u0EB0|pha|moine ; sacr\xE9
\u0EC3\u0EAA\u0EC8\u0E9A\u0EB2\u0E94|sai bat|offrande aux moines
\u0E9A\u0EB2\u0EAA\u0EB5|basi|c\xE9r\xE9monie baci
\u0E82\u0EA7\u0EB1\u0E99|khouan|\xE2me, esprits vitaux
\u0EA7\u0EBD\u0E81|viak|travail
\u0EC0\u0E87\u0EB4\u0E99\u0EC0\u0E94\u0EB7\u0EAD\u0E99|ngeun deuan|salaire
\u0E9A\u0ECD\u0EA5\u0EB4\u0EAA\u0EB1\u0E94|borisat|entreprise
\u0E95\u0EB3\u0EAB\u0EBC\u0EA7\u0E94|tam louat|police
\u0E8A\u0EB2\u0EA7\u0E99\u0EB2|xao na|paysan, riziculteur
\u0E9E\u0ECD\u0EC8\u0E84\u0EC9\u0EB2|pho kha|commer\xE7ant
\u0EC1\u0EA1\u0EC8\u0E84\u0EC9\u0EB2|mae kha|commer\xE7ante
\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7|phasa lao|langue lao
\u0E9E\u0EB2\u0EAA\u0EB2\u0EAD\u0EB1\u0E87\u0E81\u0EB4\u0E94|phasa angkit|anglais
\u0E94\u0EBB\u0E99\u0E95\u0EB5|dontri|musique
\u0EC0\u0E9E\u0E87|pheng|chanson
\u0EC1\u0E84\u0E99|khaen|kh\xE8ne (orgue \xE0 bouche)
\u0EA5\u0EB3\u0EA7\u0EBB\u0E87|lam vong|lamvong (danse)
\u0E9A\u0EB2\u0E99\u0EC0\u0E95\u0EB0|ban te|football
\u0E84\u0EA7\u0EB2\u0EA1\u0EAE\u0EB1\u0E81|khouam hak|amour
\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB8\u0E81|khouam souk|bonheur
\u0E9A\u0EB1\u0E99\u0EAB\u0EB2|banha|probl\xE8me
\u0EC0\u0EA5\u0EB7\u0EC8\u0EAD\u0E87|leuang|histoire ; affaire
\u0E82\u0EC8\u0EB2\u0EA7|khao|nouvelles
\u0E84\u0EB3\u0E96\u0EB2\u0EA1|kham tham|question
\u0EC2\u0E8A\u0E81|xok|chance
\u0EC0\u0E8A\u0EB5\u0E99|xeun|je vous en prie
\u0E81\u0EB0\u0EA5\u0EB8\u0E99\u0EB2|kalouna|veuillez (formel)
\u0EC1\u0EA1\u0EC8\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|maen laeo|exactement
\u0EC2\u0EAD\u0EC0\u0E84|okhe|OK`}),500)});var S,N=h(()=>{"use strict";k();S=q({Saluer:`
\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5|sabaidi|Bonjour / Salut
\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5\u0E9A\u0ECD\u0EC8?|sabaidi bo?|Comment \xE7a va ?
\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5, \u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EC0\u0E94?|sabaidi, jao de?|\xC7a va, et toi ?
\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|kin khao laeo bo?|Tu as mang\xE9 ? (salutation du quotidien)
\u0E81\u0EB4\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|kin laeo|Oui, j'ai mang\xE9
\u0EC4\u0E9B\u0EC3\u0EAA\u0EA1\u0EB2?|pai sai ma?|Tu reviens d'o\xF9 ? (salutation)
\u0EC4\u0E9B\u0EC3\u0EAA?|pai sai?|Tu vas o\xF9 ?
\u0E9A\u0ECD\u0EC8\u0EC4\u0E9B\u0EC3\u0EAA, \u0EC4\u0E9B\u0EAB\u0EBC\u0EB4\u0EC9\u0E99|bo pai sai, pai lin|Nulle part, je me balade
\u0EC0\u0E8A\u0EB5\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EA1\u0EB2|xeun khao ma|Entrez, je vous en prie
\u0EC4\u0E9B\u0E81\u0EC8\u0EAD\u0E99\u0EC0\u0E94\u0EB5\u0EC9|pai kon deu|J'y vais ! (au revoir familier)
\u0E9E\u0EBB\u0E9A\u0E81\u0EB1\u0E99\u0EC3\u0EDD\u0EC8|phop kan mai|\xC0 bient\xF4t
\u0EA5\u0EB2\u0E81\u0EC8\u0EAD\u0E99|la kon|Au revoir (formel)
\u0EC2\u0E8A\u0E81\u0E94\u0EB5\u0EC0\u0E94\u0EB5\u0EC9|xok di deu|Bonne chance / prends soin de toi
\u0E99\u0EAD\u0E99\u0EAB\u0EBC\u0EB1\u0E9A\u0E9D\u0EB1\u0E99\u0E94\u0EB5|non lap fan di|Bonne nuit, fais de beaux r\xEAves`,Politesse:`
\u0E82\u0EAD\u0E9A\u0EC3\u0E88|khop jai|Merci
\u0E82\u0EAD\u0E9A\u0EC3\u0E88\u0EAB\u0EBC\u0EB2\u0E8D\u0EC6|khop jai lai lai|Merci beaucoup
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|bo pen nyang|De rien / pas grave
\u0E82\u0ECD\u0EC2\u0E97\u0E94|kho thot|Pardon / d\xE9sol\xE9
\u0E9A\u0ECD\u0EC8\u0EA1\u0EB5\u0E9A\u0EB1\u0E99\u0EAB\u0EB2|bo mi banha|Pas de probl\xE8me
\u0EC4\u0E94\u0EC9 \u0EC4\u0E94\u0EC9|dai dai|OK, \xE7a marche
\u0E9A\u0ECD\u0EC8\u0EC4\u0E94\u0EC9|bo dai|Ce n'est pas possible
\u0EC3\u0E88\u0EC0\u0EA2\u0EB1\u0E99\u0EC6|jai yen yen|Du calme, zen`,"Faire connaissance":`
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0E8A\u0EB7\u0EC8\u0EAB\u0E8D\u0EB1\u0E87?|jao xeu nyang?|Comment t'appelles-tu ?
\u0E82\u0EC9\u0EAD\u0E8D\u0E8A\u0EB7\u0EC8 ...|khoy xeu ...|Je m'appelle \u2026
\u0E8D\u0EB4\u0E99\u0E94\u0EB5\u0E97\u0EB5\u0EC8\u0EC4\u0E94\u0EC9\u0EAE\u0EB9\u0EC9\u0E88\u0EB1\u0E81|nyin di thi dai hou jak|Enchant\xE9(e)
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EA1\u0EB2\u0E88\u0EB2\u0E81\u0EC3\u0EAA?|jao ma jak sai?|Tu viens d'o\xF9 ?
\u0E82\u0EC9\u0EAD\u0E8D\u0EA1\u0EB2\u0E88\u0EB2\u0E81\u0E9D\u0EA3\u0EB1\u0EC8\u0E87|khoy ma jak falang|Je viens de France
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EAD\u0EB2\u0E8D\u0EB8\u0E88\u0EB1\u0E81\u0E9B\u0EB5?|jao ayou jak pi?|Quel \xE2ge as-tu ?
\u0EC0\u0EAE\u0EB1\u0E94\u0EA7\u0EBD\u0E81\u0EAB\u0E8D\u0EB1\u0E87?|het viak nyang?|Tu fais quoi comme travail ?
\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA?|you sai?|Tu habites o\xF9 ? / Tu es o\xF9 ?
\u0EC1\u0E95\u0EC8\u0E87\u0E87\u0EB2\u0E99\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|taeng ngan laeo bo?|Tu es mari\xE9(e) ?
\u0EA1\u0EB5\u0EC1\u0E9F\u0E99\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|mi faen laeo bo?|Tu as un(e) ch\xE9ri(e) ?
\u0EA1\u0EB2\u0EA5\u0EB2\u0EA7\u0EC0\u0E97\u0EB7\u0EC8\u0EAD\u0E97\u0EB3\u0EAD\u0EB4\u0E94\u0E9A\u0ECD?|ma lao theua tham it bo?|C'est ta premi\xE8re fois au Laos ?
\u0EA1\u0EB1\u0E81\u0E9B\u0EB0\u0EC0\u0E97\u0E94\u0EA5\u0EB2\u0EA7\u0E9A\u0ECD?|mak pathet lao bo?|Tu aimes le Laos ?
\u0EC0\u0EAD\u0EBB\u0EB2\u0EC0\u0E9A\u0EB5\u0EC2\u0E97\u0EC1\u0E94\u0EC8|ao beu tho dae|Donne-moi ton num\xE9ro`,Comprendre:`
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0E9E\u0EB2\u0EAA\u0EB2\u0EAD\u0EB1\u0E87\u0E81\u0EB4\u0E94\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|jao vao phasa angkit dai bo?|Tu parles anglais ?
\u0E82\u0EC9\u0EAD\u0E8D\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0EA5\u0EB2\u0EA7\u0EC4\u0E94\u0EC9\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|khoy vao lao dai noy neung|Je parle un peu lao
\u0E82\u0EC9\u0EAD\u0E8D\u0E9A\u0ECD\u0EC8\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC3\u0E88|khoy bo khao jai|Je ne comprends pas
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC3\u0E88\u0E9A\u0ECD?|khao jai bo?|Tu comprends ?
\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0E8A\u0EC9\u0EB2\u0EC6\u0EC1\u0E94\u0EC8|vao xa xa dae|Parle lentement s'il te pla\xEEt
\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0EAD\u0EB5\u0E81\u0EC0\u0E97\u0EB7\u0EC8\u0EAD\u0EDC\u0EB6\u0EC8\u0E87\u0EC1\u0E94\u0EC8|vao ik theua neung dae|R\xE9p\xE8te s'il te pla\xEEt
\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7\u0EC0\u0EAD\u0EB5\u0EC9\u0E99\u0EA7\u0EC8\u0EB2\u0EAB\u0E8D\u0EB1\u0E87?|an ni phasa lao eun va nyang?|Comment dit-on \xE7a en lao ?
\u0EDD\u0EB2\u0E8D\u0E84\u0EA7\u0EB2\u0EA1\u0EA7\u0EC8\u0EB2\u0EC1\u0E99\u0EA7\u0EC3\u0E94?|may khouam va naeo dai?|\xC7a veut dire quoi ?
\u0E9A\u0ECD\u0EC8\u0EAE\u0EB9\u0EC9|bo hou|Je ne sais pas
\u0EC1\u0EA1\u0EC8\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|maen laeo|C'est \xE7a !
\u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99|bo maen|Non, ce n'est pas \xE7a
\u0EC1\u0E97\u0EC9\u0E9A\u0ECD?|thae bo?|Vraiment ?
\u0EA5\u0ECD\u0E96\u0EC9\u0EB2\u0EC1\u0E94\u0EC8|lo tha dae|Attends un peu`,"Manger & boire":`
\u0EAB\u0EB4\u0EA7\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC1\u0EA5\u0EC9\u0EA7|hiu khao laeo|J'ai faim
\u0EA1\u0EB5\u0EAB\u0E8D\u0EB1\u0E87\u0E81\u0EB4\u0E99\u0EC1\u0E94\u0EC8?|mi nyang kin dae?|Qu'est-ce qu'il y a \xE0 manger ?
\u0E82\u0ECD\u0EC0\u0EA1\u0E99\u0EB9\u0EC1\u0E94\u0EC8|kho menou dae|Le menu, s'il vous pla\xEEt
\u0EC0\u0EAD\u0EBB\u0EB2\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9|ao an ni|Je prends \xE7a
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9C\u0EB1\u0E94|bo phet|Pas \xE9pic\xE9
\u0EC0\u0E9C\u0EB1\u0E94\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|phet noy neung|Un peu \xE9pic\xE9
\u0E9A\u0ECD\u0EC8\u0EC3\u0EAA\u0EC8\u0E9C\u0EBB\u0E87\u0E99\u0EBB\u0EA7|bo sai phong noua|Sans glutamate
\u0E82\u0ECD\u0E99\u0EC9\u0EB3\u0E81\u0EC9\u0EAD\u0E99\u0EC1\u0E94\u0EC8|kho nam kon dae|De la glace, s'il vous pla\xEEt
\u0E82\u0ECD\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7\u0E95\u0EB7\u0EC8\u0EA1|kho khao niao teum|Encore du riz gluant
\u0EC0\u0E9A\u0E8D\u0EA5\u0EB2\u0EA7\u0EC1\u0E81\u0EC9\u0EA7\u0EDC\u0EB6\u0EC8\u0E87|bia lao kaeo neung|Une Beerlao (bouteille)
\u0EDD\u0EBB\u0E94\u0E88\u0EAD\u0E81!|mot jok!|Cul sec !
\u0EC1\u0E8A\u0E9A\u0EAB\u0EBC\u0EB2\u0E8D|xaep lai|Tr\xE8s d\xE9licieux
\u0EAD\u0EB5\u0EC8\u0EA1\u0EC1\u0EA5\u0EC9\u0EA7|im laeo|Je n'ai plus faim
\u0EC0\u0E81\u0EB1\u0E9A\u0EC0\u0E87\u0EB4\u0E99\u0EC1\u0E94\u0EC8|kep ngeun dae|L'addition, s'il vous pla\xEEt`,Acheter:`
\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|an ni thao dai?|C'est combien ?
\u0EA5\u0EB2\u0E84\u0EB2\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|lakha thao dai?|Quel est le prix ?
\u0EC1\u0E9E\u0E87\u0EC2\u0E9E\u0E94|phaeng phot|Trop cher
\u0EAB\u0EBC\u0EB8\u0E94\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|lout dai bo?|Vous pouvez baisser ?
\u0EAB\u0EBC\u0EB8\u0E94\u0EC3\u0EAB\u0EC9\u0EC1\u0E94\u0EC8|lout hai dae|Faites-moi un prix
\u0EA1\u0EB5\u0EAD\u0EB1\u0E99\u0EAD\u0EB7\u0EC8\u0E99\u0E9A\u0ECD?|mi an eun bo?|Vous avez autre chose ?
\u0EC0\u0EAD\u0EBB\u0EB2\u0EAA\u0EAD\u0E87\u0EAD\u0EB1\u0E99|ao song an|J'en prends deux
\u0E9A\u0ECD\u0EC8\u0EC0\u0EAD\u0EBB\u0EB2|bo ao|Je n'en veux pas
\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0E81\u0EC8\u0EAD\u0E99|beung kon|Je regarde d'abord
\u0EA1\u0EB5\u0EC0\u0E87\u0EB4\u0E99\u0E97\u0EAD\u0E99\u0E9A\u0ECD?|mi ngeun thon bo?|Vous avez la monnaie ?`,"Se d\xE9placer":`
\u0EAB\u0EC9\u0EAD\u0E87\u0E99\u0EC9\u0EB3\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA?|hong nam you sai?|O\xF9 sont les toilettes ?
\u0EC4\u0E9B\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|pai talat thao dai?|Combien pour aller au march\xE9 ?
\u0E81\u0EBB\u0E87\u0EC4\u0E9B|kong pai|Tout droit
\u0EA5\u0EC9\u0EBD\u0EA7\u0E8A\u0EC9\u0EB2\u0E8D|lio xay|Tournez \xE0 gauche
\u0EA5\u0EC9\u0EBD\u0EA7\u0E82\u0EA7\u0EB2|lio khva|Tournez \xE0 droite
\u0E88\u0EAD\u0E94\u0EA2\u0EB9\u0EC8\u0E99\u0EB5\u0EC9|jot you ni|Arr\xEAtez-vous ici
\u0EC4\u0E81\u0E9A\u0ECD?|kai bo?|C'est loin ?
\u0EC3\u0E81\u0EC9\u0EC6\u0E99\u0EB5\u0EC9|kai kai ni|Tout pr\xE8s d'ici
\u0E82\u0EC9\u0EAD\u0E8D\u0EAB\u0EBC\u0EBB\u0E87\u0E97\u0EB2\u0E87|khoy long thang|Je suis perdu(e)
\u0E82\u0EB1\u0E9A\u0E8A\u0EC9\u0EB2\u0EC6\u0EC1\u0E94\u0EC8|khap xa xa dae|Conduisez doucement
\u0EA1\u0EB5\u0EAB\u0EC9\u0EAD\u0E87\u0EAB\u0EA7\u0EC8\u0EB2\u0E87\u0E9A\u0ECD?|mi hong vang bo?|Vous avez une chambre libre ?`,"Urgences & sant\xE9":`
\u0E8A\u0EC8\u0EA7\u0E8D\u0EC1\u0E94\u0EC8!|xouay dae!|\xC0 l'aide !
\u0E82\u0EC9\u0EAD\u0E8D\u0E9A\u0ECD\u0EC8\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D|khoy bo sabay|Je ne me sens pas bien
\u0EC0\u0E88\u0EB1\u0E9A\u0EAB\u0EBB\u0EA7|jep houa|J'ai mal \xE0 la t\xEAte
\u0EC0\u0E88\u0EB1\u0E9A\u0E97\u0EC9\u0EAD\u0E87|jep thong|J'ai mal au ventre
\u0EC2\u0EAE\u0E87\u0EDD\u0ECD\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA?|hong mo you sai?|O\xF9 est l'h\xF4pital ?
\u0EC2\u0E97\u0EAB\u0EB2\u0E95\u0EB3\u0EAB\u0EBC\u0EA7\u0E94|tho ha tam louat|Appelez la police`,"Quotidien & \xE9motions":`
\u0EA1\u0EC8\u0EA7\u0E99\u0EAB\u0EBC\u0EB2\u0E8D|mouan lai|C'est trop bien !
\u0E9D\u0EBB\u0E99\u0E95\u0EBB\u0E81|fon tok|Il pleut
\u0EC0\u0EA1\u0EB7\u0EC8\u0EAD\u0E8D\u0EC1\u0EA5\u0EC9\u0EA7|meuay laeo|Je suis fatigu\xE9(e)
\u0EC4\u0E9B\u0E99\u0EAD\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|pai non laeo|Je vais dormir
\u0E88\u0EB1\u0E81\u0EC2\u0EA1\u0E87\u0EC1\u0EA5\u0EC9\u0EA7?|jak mong laeo?|Quelle heure est-il ?
\u0E8A\u0EB4\u0EC4\u0E9B\u0E99\u0EB3\u0E9A\u0ECD?|xi pai nam bo?|Tu viens avec (nous) ?
\u0EC4\u0E9B\u0E99\u0EB3\u0E81\u0EB1\u0E99|pai nam kan|Allons-y ensemble
\u0E84\u0EB4\u0E94\u0EAE\u0EAD\u0E94\u0EC0\u0E94\u0EB5\u0EC9|khit hot deu|Tu me manques
\u0E82\u0EC9\u0EAD\u0E8D\u0EAE\u0EB1\u0E81\u0EC0\u0E88\u0EBB\u0EC9\u0EB2|khoy hak jao|Je t'aime
\u0EAA\u0EB8\u0E81\u0EAA\u0EB1\u0E99\u0EA7\u0EB1\u0E99\u0EC0\u0E81\u0EB5\u0E94|souksan van keut|Joyeux anniversaire
\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5\u0E9B\u0EB5\u0EC3\u0EDD\u0EC8|sabaidi pi mai|Bonne ann\xE9e !`})});var be,ve,ke,fe,I,R=h(()=>{"use strict";be=`
\u0E81|k|\u0EC4\u0E81\u0EC8|kai \xB7 poulet|M
\u0E82|kh|\u0EC4\u0E82\u0EC8|khai \xB7 \u0153uf|H
\u0E84|kh|\u0E84\u0EA7\u0EB2\u0E8D|khouay \xB7 buffle|B
\u0E87|ng|\u0E87\u0EBB\u0EA7|ngoua \xB7 b\u0153uf|B
\u0E88|j|\u0E88\u0EAD\u0E81|jok \xB7 verre|M
\u0EAA|s|\u0EC0\u0EAA\u0EB7\u0EAD|seua \xB7 tigre|H
\u0E8A|x|\u0E8A\u0EC9\u0EB2\u0E87|xang \xB7 \xE9l\xE9phant|B
\u0E8D|ny|\u0E8D\u0EB8\u0E87|nyoung \xB7 moustique|B
\u0E94|d|\u0EC0\u0E94\u0EB1\u0E81|dek \xB7 enfant|M
\u0E95|t|\u0E95\u0EB2|ta \xB7 \u0153il|M
\u0E96|th|\u0E96\u0EBB\u0E87|thong \xB7 sac|H
\u0E97|th|\u0E97\u0EB8\u0E87|thoung \xB7 drapeau|B
\u0E99|n|\u0E99\u0EBB\u0E81|nok \xB7 oiseau|B
\u0E9A|b|\u0EC1\u0E9A\u0EC9|bae \xB7 ch\xE8vre|M
\u0E9B|p|\u0E9B\u0EB2|pa \xB7 poisson|M
\u0E9C|ph|\u0EC0\u0E9C\u0EB4\u0EC9\u0E87|pheung \xB7 abeille|H
\u0E9D|f|\u0E9D\u0EBB\u0E99|fon \xB7 pluie|H
\u0E9E|ph|\u0E9E\u0EB9|phou \xB7 montagne|B
\u0E9F|f|\u0EC4\u0E9F|fai \xB7 feu|B
\u0EA1|m|\u0EC1\u0EA1\u0EA7|maeo \xB7 chat|B
\u0EA2|y|\u0EA2\u0EB2|ya \xB7 m\xE9dicament|M
\u0EA3|r|\u0EA3\u0EBB\u0E94|rot \xB7 voiture (mots savants)|B
\u0EA5|l|\u0EA5\u0EB5\u0E87|ling \xB7 singe|B
\u0EA7|v|\u0EA7\u0EB5|vi \xB7 \xE9ventail|B
\u0EAB|h|\u0EC4\u0EAB|hai \xB7 jarre|H
\u0EAD|o|\u0EC2\u0EAD|o \xB7 bol|M
\u0EAE|h|\u0EC0\u0EAE\u0EB7\u0EAD\u0E99|heuan \xB7 maison|B`,ve=`
\u0EAD\u0EB0|a|\u0EAD\u0EB0|a bref|court
\u0EAD\u0EB2|aa|\u0EAD\u0EB2|a long|long
\u0EAD\u0EB4|i|\u0EAD\u0EB4|i bref|court
\u0EAD\u0EB5|ii|\u0EAD\u0EB5|i long|long
\u0EAD\u0EB6|eu|\u0EAD\u0EB6|eu bref (l\xE8vres \xE9tir\xE9es)|court
\u0EAD\u0EB7|euu|\u0EAD\u0EB7|eu long|long
\u0EAD\u0EB8|ou|\u0EAD\u0EB8|ou bref|court
\u0EAD\u0EB9|ouu|\u0EAD\u0EB9|ou long|long
\u0EC0\u0EAD\u0EB0|\xE9|\u0EC0\u0EAD\u0EB0|\xE9 bref|court
\u0EC0\u0EAD|\xE9\xE9|\u0EC0\u0EAD|\xE9 long|long
\u0EC1\u0EAD\u0EB0|\xE8|\u0EC1\u0EAD\u0EB0|\xE8 bref (tr\xE8s ouvert)|court
\u0EC1\u0EAD|\xE8\xE8|\u0EC1\u0EAD|\xE8 long|long
\u0EC2\u0EAD\u0EB0|o|\u0EC2\u0EAD\u0EB0|o ferm\xE9 bref|court
\u0EC2\u0EAD|oo|\u0EC2\u0EAD|o ferm\xE9 long|long
\u0EC0\u0EAD\u0EB2\u0EB0|\xF2|\u0EC0\u0EAD\u0EB2\u0EB0|o ouvert bref|court
\u0EAD\u0ECD|\xF2\xF2|\u0EAD\u0ECD|o ouvert long|long
\u0EC0\u0EAD\u0EB5|eu|\u0EC0\u0EAD\u0EB5|eu de \xAB peur \xBB, long|long
\u0EC0\u0EAD\u0E8D|ia|\u0EC0\u0EAD\u0E8D|ia|diphtongue
\u0EC0\u0EAD\u0EB7\u0EAD|eua|\u0EC0\u0EAD\u0EB7\u0EAD|eua|diphtongue
\u0EAD\u0EBB\u0EA7|oua|\u0EAD\u0EBB\u0EA7|oua|diphtongue
\u0EC4\u0EAD|ai|\u0EC4\u0EAD|a\xEF|compos\xE9e
\u0EC3\u0EAD|ai|\u0EC3\u0EAD|a\xEF (une vingtaine de mots)|compos\xE9e
\u0EC0\u0EAD\u0EBB\u0EB2|ao|\u0EC0\u0EAD\u0EBB\u0EB2|ao|compos\xE9e
\u0EAD\u0EB3|am|\u0EAD\u0EB3|am|compos\xE9e`,ke=`
\u0E81|-k|\u0E99\u0EBB\u0E81|nok \xB7 oiseau|morte
\u0E94|-t|\u0EC0\u0E88\u0EB1\u0E94|jet \xB7 sept|morte
\u0E9A|-p|\u0EAA\u0EB4\u0E9A|sip \xB7 dix|morte
\u0E87|-ng|\u0EAA\u0EAD\u0E87|song \xB7 deux|vivante
\u0E99|-n|\u0E81\u0EB4\u0E99|kin \xB7 manger|vivante
\u0EA1|-m|\u0EAA\u0EB2\u0EA1|sam \xB7 trois|vivante
\u0E8D|-y|\u0EAA\u0EA7\u0E8D|souay \xB7 joli|vivante
\u0EA7|-o|\u0EC1\u0EA1\u0EA7|maeo \xB7 chat|vivante`,fe=`
\u0ED0|0|\u0EAA\u0EB9\u0E99|soun|chiffre
\u0ED1|1|\u0EDC\u0EB6\u0EC8\u0E87|neung|chiffre
\u0ED2|2|\u0EAA\u0EAD\u0E87|song|chiffre
\u0ED3|3|\u0EAA\u0EB2\u0EA1|sam|chiffre
\u0ED4|4|\u0EAA\u0EB5\u0EC8|si|chiffre
\u0ED5|5|\u0EAB\u0EC9\u0EB2|ha|chiffre
\u0ED6|6|\u0EAB\u0EBB\u0E81|hok|chiffre
\u0ED7|7|\u0EC0\u0E88\u0EB1\u0E94|jet|chiffre
\u0ED8|8|\u0EC1\u0E9B\u0E94|paet|chiffre
\u0ED9|9|\u0EC0\u0E81\u0EBB\u0EC9\u0EB2|kao|chiffre`,I=[{id:"methode",lvl:"A0",icon:"\u{1F9ED}",t:"Comment marche le lao",goal:"Comprendre la logique de la langue et adopter la bonne m\xE9thode d\xE8s le premier jour.",blocks:[{h:"Le lao en une phrase",p:"Le lao (<i>\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7</i>) est parl\xE9 par environ 7 millions de personnes au Laos, et compris par plus de 20 millions de personnes dans l'Isan (nord-est de la Tha\xEFlande). C'est une langue <b>tonale</b>, <b>isolante</b> (les mots ne changent jamais de forme) et <b>analytique</b> (le sens vient de l'ordre des mots et de petits mots-outils)."},{h:"La bonne nouvelle : pas de grammaire \xAB \xE0 apprendre par c\u0153ur \xBB",p:"Le lao n'a <b>ni conjugaison, ni genre, ni pluriel, ni article, ni accord</b>. Un verbe ne change jamais : <i>\u0EC4\u0E9B</i> (pai) veut dire \xAB je vais, tu allais, ils iront \xBB. Le temps est donn\xE9 par le contexte ou par un petit mot plac\xE9 avant ou apr\xE8s. Un nom ne change jamais non plus : <i>\u0EDD\u0EB2</i> = \xAB un chien, le chien, des chiens \xBB.",ex:`\u0E82\u0EC9\u0EAD\u0E8D\u0EC4\u0E9B|khoy pai|je vais / je suis all\xE9 (selon le contexte)
\u0E82\u0EC9\u0EAD\u0E8D\u0EC4\u0E9B\u0EC1\u0EA5\u0EC9\u0EA7|khoy pai laeo|je suis (d\xE9j\xE0) parti
\u0E82\u0EC9\u0EAD\u0E8D\u0E8A\u0EB4\u0EC4\u0E9B|khoy xi pai|je vais y aller
\u0EA1\u0EB7\u0EC9\u0EA7\u0EB2\u0E99\u0E82\u0EC9\u0EAD\u0E8D\u0EC4\u0E9B|meu van khoy pai|hier, je suis all\xE9
\u0EDD\u0EB2\u0EAA\u0EB2\u0EA1\u0EC2\u0E95|ma sam to|trois chiens`},{h:"L'ordre des mots : comme en fran\xE7ais, ou presque",p:"Sujet + Verbe + Compl\xE9ment, comme en fran\xE7ais. Deux diff\xE9rences \xE0 retenir tout de suite :<br>\u2022 l'adjectif se place <b>apr\xE8s</b> le nom (\xAB maison grande \xBB) ;<br>\u2022 le possesseur aussi (\xAB livre de moi \xBB), et on peut m\xEAme omettre <i>\u0E82\u0EAD\u0E87</i> (de).",ex:`\u0E9A\u0EC9\u0EB2\u0E99\u0EC3\u0EAB\u0E8D\u0EC8|ban nyai|grande maison
\u0E9B\u0EB6\u0EC9\u0EA1\u0E82\u0EAD\u0E87\u0E82\u0EC9\u0EAD\u0E8D|peum khong khoy|mon livre
\u0EC1\u0EA1\u0EC8\u0E82\u0EC9\u0EAD\u0E8D|mae khoy|ma m\xE8re (\u0E82\u0EAD\u0E87 omis, tr\xE8s courant)
\u0E82\u0EC9\u0EAD\u0E8D\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|khoy kin khao|je mange (du riz)
\u0EA5\u0EBB\u0E94\u0E84\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0E87\u0EB2\u0EA1|lot khan ni ngam|cette voiture est belle`},{h:"Le sujet dispara\xEEt souvent",p:"\xC0 l'oral, les Lao <b>omettent le sujet</b> quand il est \xE9vident. \xAB Tu vas o\xF9 ? \xBB se dit simplement \xAB vas o\xF9 ? \xBB. Ce n'est pas impoli, c'est naturel. Toi aussi, tu peux le faire.",ex:`\u0EC4\u0E9B\u0EC3\u0EAA?|pai sai?|(tu) vas o\xF9 ?
\u0EC4\u0E9B\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94|pai talat|(je) vais au march\xE9
\u0E81\u0EB4\u0E99\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|kin laeo bo?|(tu) as mang\xE9 ?`},{h:"Le vrai d\xE9fi : les tons",p:"Le lao de Vientiane a <b>6 tons</b>. La m\xEAme syllabe \xAB ma \xBB peut signifier <i>venir</i>, <i>chien</i> ou <i>cheval</i> selon la m\xE9lodie de la voix. Bonne nouvelle : l'\xE9criture lao <b>indique toujours le ton</b>, et le contexte aide \xE9norm\xE9ment. Un Lao te comprendra m\xEAme avec des tons imparfaits si la phrase est claire.",ex:`\u0EA1\u0EB2|ma|venir
\u0EDD\u0EB2|ma|chien
\u0EA1\u0EC9\u0EB2|ma|cheval`},{h:"Lire la romanisation de ce site",p:`<div class="tbl"><table><tr><th>Lettres</th><th>Se prononce</th><th>Exemple</th></tr><tr><td>k, p, t</td><td>sans souffle, comme en fran\xE7ais (k de \xAB kilo \xBB)</td><td>\u0E81\u0EB2 ka</td></tr><tr><td>kh, ph, th</td><td>avec un souffle d'air, comme en anglais \xAB key \xBB</td><td>\u0E82\u0EB2 kha</td></tr><tr><td>b, d</td><td>comme en fran\xE7ais</td><td>\u0E9A\u0ECD\u0EC8 bo</td></tr><tr><td>j</td><td>\xAB tch \xBB doux, sans souffle</td><td>\u0E88\u0EAD\u0E81 jok</td></tr><tr><td>x / s</td><td>\xAB s \xBB (x = consonne basse, s = haute)</td><td>\u0E8A\u0EC9\u0EB2\u0E87 xang</td></tr><tr><td>ny</td><td>\xAB gn \xBB de \xAB montagne \xBB</td><td>\u0E8D\u0EB2\u0E81 nyak</td></tr><tr><td>ng</td><td>\xAB ng \xBB de \xAB parking \xBB, m\xEAme en d\xE9but de mot</td><td>\u0E87\u0EB2\u0EA1 ngam</td></tr><tr><td>v</td><td>entre \xAB v \xBB et \xAB w \xBB</td><td>\u0EA7\u0EB1\u0E94 vat</td></tr><tr><td>ou / eu / ae</td><td>\xAB ou \xBB / \xAB eu \xBB / \xAB \xE8 \xBB ouvert</td><td>\u0EAB\u0EB9 hou</td></tr></table></div>`,warn:"La romanisation n'indique PAS les tons. C'est une b\xE9quille pour d\xE9marrer : l'audio et l'\xE9criture lao font foi. Vise \xE0 lire le lao d'ici la le\xE7on 7."},{h:"Ta m\xE9thode (prouv\xE9e par la recherche en acquisition)",p:"1. <b>\xC9coute d'abord</b> : clique sur chaque exemple, au moins 3 fois.<br>2. <b>Imite \xE0 voix haute</b> (shadowing) : r\xE9p\xE8te en m\xEAme temps que la voix, en copiant la m\xE9lodie.<br>3. <b>Mode quiz</b> : cache la traduction et teste-toi.<br>4. <b>R\xE9vision espac\xE9e</b> : reviens sur une le\xE7on apr\xE8s 1 jour, 3 jours, 7 jours.<br>5. <b>Utilise tout de suite</b> : chaque phrase apprise doit \xEAtre dite \xE0 un Lao dans la semaine.",tip:"15 minutes par jour battent 3 heures le dimanche. Le cerveau consolide pendant le sommeil : la r\xE9gularit\xE9 est ton meilleur alli\xE9."}]},{id:"sons",lvl:"A0",icon:"\u{1F444}",t:"Les sons qui n'existent pas en fran\xE7ais",goal:"Entra\xEEner ta bouche aux 5 sons qui trahissent un d\xE9butant.",blocks:[{h:"1. Le \xAB ng \xBB en d\xE9but de mot",p:"En fran\xE7ais, \xAB ng \xBB n'existe qu'en fin de mot (parking). En lao, il commence des mots tr\xE8s courants. Astuce : dis \xAB parking-a \xBB puis supprime \xAB parki \xBB. Ta langue doit toucher le fond du palais, pas le bout des dents.",ex:`\u0E87\u0EB2\u0EA1|ngam|beau
\u0E87\u0EBB\u0EA7|ngoua|b\u0153uf
\u0EC0\u0E87\u0EB4\u0E99|ngeun|argent
\u0E87\u0EC8\u0EB2\u0E8D|ngai|facile
\u0E87\u0EC8\u0EA7\u0E87|ngouang|avoir sommeil`},{h:"2. Avec ou sans souffle",p:"Place ta main devant ta bouche. <b>k, p, t</b> : aucun souffle (comme en fran\xE7ais). <b>kh, ph, th</b> : un petit souffle d'air. Cette diff\xE9rence change le sens !",ex:`\u0E9B\u0EB2|pa|poisson (sans souffle)
\u0E9E\u0EB2|pha|emmener (avec souffle)
\u0E95\u0EB2|ta|\u0153il (sans souffle)
\u0E97\u0EB2\u0E87|thang|chemin (avec souffle)
\u0E81\u0EB2|ka|corbeau (sans souffle)
\u0E84\u0EB2|kha|coinc\xE9 (avec souffle)`,warn:"\xAB ph \xBB ne se prononce JAMAIS \xAB f \xBB ! \u0E9E\u0EB9 (phou, montagne) commence comme \xAB p \xBB + souffle. Le son \xAB f \xBB s'\xE9crit \u0E9D ou \u0E9F."},{h:"3. Les finales \xAB aval\xE9es \xBB",p:"En fin de syllabe, <b>-k, -t, -p</b> ne sont pas rel\xE2ch\xE9s : la bouche se ferme mais aucun son ne sort. Dis \xAB bac \xBB en t'arr\xEAtant net avant le \xAB c \xBB. C'est ce qui donne au lao son rythme saccad\xE9.",ex:`\u0E99\u0EBB\u0E81|nok|oiseau
\u0EC0\u0E88\u0EB1\u0E94|jet|sept
\u0EAA\u0EB4\u0E9A|sip|dix
\u0EAB\u0EBB\u0E81|hok|six
\u0EC1\u0E9B\u0E94|paet|huit`},{h:"4. Le \xAB eu \xBB aux l\xE8vres \xE9tir\xE9es",p:"Le son <i>\u0EAD\u0EB7</i> n'est ni \xAB ou \xBB ni \xAB i \xBB : dis \xAB ou \xBB puis <b>\xE9tire les l\xE8vres en sourire</b> sans bouger la langue. Indispensable pour : main, nom, acheter, mois.",ex:`\u0EA1\u0EB7|meu|main
\u0E8A\u0EB7\u0EC8|xeu|nom
\u0E8A\u0EB7\u0EC9|xeu|acheter
\u0EC0\u0E94\u0EB7\u0EAD\u0E99|deuan|mois
\u0EA1\u0EB7\u0EC9|meu|jour`},{h:"5. Voyelles courtes et longues",p:"Une voyelle longue dure presque deux fois plus longtemps. Exag\xE8re au d\xE9but : c'est ce qui s\xE9pare \xAB entrer \xBB et \xAB blanc \xBB.",ex:`\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|khao|riz ; entrer (court)
\u0E82\u0EB2\u0EA7|khao|blanc (long)
\u0E9C\u0EB4\u0E94|phit|faux (court)
\u0E9C\u0EB5|phi|fant\xF4me (long)`},{h:"Entra\xEEnement",p:"Lis cette phrase lentement, puis \xE0 vitesse normale : \xAB Le chien vient chercher de l'argent \xBB.",ex:"\u0EDD\u0EB2\u0EA1\u0EB2\u0E8A\u0EAD\u0E81\u0EAB\u0EB2\u0EC0\u0E87\u0EB4\u0E99|ma ma xok ha ngeun|le chien vient chercher de l'argent"}]},{id:"consonnes",lvl:"A0",icon:"\u{1F524}",t:"Les 27 consonnes",goal:"Reconna\xEEtre chaque consonne, son son et sa classe (haute, moyenne, basse).",blocks:[{h:"Un mot-cl\xE9 par lettre",p:`Comme \xAB A comme Arbre \xBB, chaque consonne lao a son mot-cl\xE9, que les enfants lao r\xE9citent \xE0 l'\xE9cole. Clique sur une lettre pour entendre son mot. La pastille indique sa <b>classe</b> : <span class="cls H">H</span> haute, <span class="cls M">M</span> moyenne, <span class="cls B">B</span> basse. La classe servira \xE0 trouver le ton.`,grid:be},{h:"Retenir les classes en 2 minutes",p:"<b>Moyennes (8)</b> : \u0E81 \u0E88 \u0E94 \u0E95 \u0E9A \u0E9B \u0EA2 \u0EAD \u2014 phrase mn\xE9motechnique : \xAB <i>kai jok dek ta bae pa ya o</i> \xBB.<br><b>Hautes (6)</b> : \u0E82 \u0EAA \u0E96 \u0E9C \u0E9D \u0EAB \u2014 \xAB <i>khai seua thong pheung fon hai</i> \xBB.<br><b>Basses (13)</b> : toutes les autres.",tip:"Astuce visuelle : plusieurs paires haute/basse ont le m\xEAme son : \u0E82/\u0E84 (kh), \u0EAA/\u0E8A (s), \u0E96/\u0E97 (th), \u0E9C/\u0E9E (ph), \u0E9D/\u0E9F (f), \u0EAB/\u0EAE (h). Seul le ton les distingue."},{h:"Les paires jumelles",ex:`\u0E82\u0EB2|kha|jambe (\u0E82 haute)
\u0E84\u0EB2|kha|coinc\xE9 (\u0E84 basse)
\u0EAA\u0EB2\u0EA1|sam|trois (\u0EAA haute)
\u0E8A\u0EB2\u0EA1|xam|(pas un mot : juste pour l'oreille)
\u0EC0\u0EAA\u0EB7\u0EAD|seua|tigre (\u0EAA haute)
\u0E8A\u0EB7\u0EC9|xeu|acheter (\u0E8A basse)`},{h:"Le \u0EAB magique (\u0EAB + basse = haute)",p:"Les consonnes basses \u0E87 \u0E8D \u0E99 \u0EA1 \u0EA5 \u0EA7 n'ont pas de jumelle haute. Pour en cr\xE9er une, on place un <b>\u0EAB muet</b> devant. Certaines combinaisons ont m\xEAme fusionn\xE9 en une seule lettre : <b>\u0EDC</b> (= \u0EAB\u0E99) et <b>\u0EDD</b> (= \u0EAB\u0EA1), et <b>\u0EAB\u0EBC</b> (= \u0EAB\u0EA5).",ex:`\u0EDD\u0EB2|ma|chien (\u0EDD = haute)
\u0EA1\u0EB2|ma|venir (\u0EA1 = basse)
\u0EDC\u0EC9\u0EB2|na|visage
\u0EAB\u0EBC\u0EB2\u0E8D|lai|beaucoup
\u0EAB\u0EA7\u0EB2\u0E99|van|sucr\xE9
\u0EAB\u0E8D\u0EB1\u0E87|nyang|quoi
\u0EAB\u0E87\u0EB2\u0E8D|ngai|sur le dos (renvers\xE9)`},{h:"Le \u0EAD silencieux",p:"Une syllabe lao commence toujours par une consonne. Quand un mot commence par une voyelle, on \xE9crit <b>\u0EAD</b> muet comme support (comme le \xAB h \xBB muet fran\xE7ais).",ex:`\u0EAD\u0EB2\u0EAB\u0EB2\u0E99|ahan|nourriture
\u0EAD\u0EB5\u0E81|ik|encore
\u0EAD\u0EC9\u0EB2\u0E8D|ay|grand fr\xE8re
\u0EAD\u0EB8\u0EC8\u0E99|oun|ti\xE8de`}]},{id:"voyelles",lvl:"A0",icon:"\u{1F3B5}",t:"Les voyelles",goal:"Lire les voyelles autour de la consonne et distinguer courtes et longues.",blocks:[{h:"Elles s'enroulent autour de la consonne",p:"Une voyelle lao peut s'\xE9crire <b>avant, apr\xE8s, au-dessus ou en dessous</b> de la consonne, et parfois des deux c\xF4t\xE9s \xE0 la fois. Ici, \u0EAD sert de support muet. Mais on prononce <b>toujours la consonne d'abord</b>, quelle que soit la position \xE9crite : <i>\u0EC0\u0E81</i> se lit \xAB k\xE9 \xBB, pas \xAB \xE9k \xBB.",grid:ve},{h:"Lire dans le bon ordre",ex:`\u0EC4\u0E9B|pai|aller (\u0EC4 \xE9crit avant, lu apr\xE8s \u0E9B)
\u0EC1\u0EA1\u0EC8|mae|m\xE8re
\u0EC2\u0E95|to|corps ; toi
\u0EC0\u0E81\u0EBB\u0EC8\u0EB2|kao|vieux
\u0EAB\u0EBB\u0EA7|houa|t\xEAte`},{h:"La voyelle cach\xE9e",p:"Dans une syllabe ferm\xE9e, certaines voyelles <b>changent de forme ou disparaissent</b>. La plus fr\xE9quente : <i>\u0EBB</i> (o court) s'\xE9crit au-dessus, et un \xAB o \xBB sans aucun signe entre deux consonnes se lit \xAB o \xBB.",ex:`\u0E84\u0EBB\u0E99|khon|personne (\u0EBB = o court)
\u0EA5\u0EBB\u0E94|lot|voiture
\u0E99\u0EBB\u0EA1|nom|lait
\u0EAA\u0EA7\u0E99|souan|jardin (\u0EA7 = \xAB oua \xBB)
\u0EC0\u0EA1\u0EB7\u0EAD\u0E87|meuang|ville`},{h:"Court ou long ? \xC7a change tout",ex:`\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|khao|riz ; entrer
\u0E82\u0EB2\u0EA7|khao|blanc
\u0E82\u0EC8\u0EB2\u0EA7|khao|nouvelles
\u0E81\u0EB4\u0E99|kin|manger
\u0E81\u0EB5\u0E9A|kip|kip (monnaie)`,warn:"Ne confonds pas \u0EC4 et \u0EC3 : m\xEAme son \xAB a\xEF \xBB, mais \u0EC3 n'appara\xEEt que dans une vingtaine de mots tr\xE8s fr\xE9quents (\u0EC3\u0E88, \u0EC3\u0EAB\u0EC9, \u0EC3\u0EDD\u0EC8, \u0EC3\u0E9C, \u0EC3\u0EAA, \u0EC3\u0E8A\u0EC9, \u0EC3\u0E81\u0EC9, \u0EC3\u0EAB\u0E8D\u0EC8, \u0EC3\u0E99\u2026). Apprends-les comme des images."}]},{id:"syllabe",lvl:"A0",icon:"\u{1F9E9}",t:"La syllabe : finales vivantes et mortes",goal:"D\xE9composer n'importe quelle syllabe lao et savoir si elle est \xAB vivante \xBB ou \xAB morte \xBB.",blocks:[{h:"La structure",p:"Toute syllabe = <b>consonne initiale + voyelle (+ consonne finale) (+ marque de ton)</b>. Seules 8 consonnes peuvent terminer une syllabe. Clique pour entendre.",grid:ke},{h:"Vivante ou morte ?",p:"<b>Morte</b> : finit par <b>-k, -t, -p</b>, ou par une <b>voyelle courte</b> sans finale. Le son est coup\xE9 net.<br><b>Vivante</b> : finit par une voyelle longue ou par <b>-ng, -n, -m, -y, -o</b>. Le son peut se prolonger.<br>Cette distinction sert \xE0 trouver le ton (le\xE7on suivante).",ex:`\u0E9B\u0EB2|pa|poisson (vivante : voyelle longue)
\u0E81\u0EB4\u0E99|kin|manger (vivante : -n)
\u0EAA\u0EB4\u0E9A|sip|dix (morte : -p)
\u0EC0\u0E94\u0EB1\u0E81|dek|enfant (morte : -k)
\u0E88\u0EB0|ja|futur (morte : voyelle courte)`},{h:"D\xE9composer pas \xE0 pas",p:"Prenons <i>\u0EC0\u0EA1\u0EB7\u0EAD\u0E87</i> (ville) : \u0EA1 (m, basse) + \u0EC0-\u0EB7\u0EAD (eua) + \u0E87 (-ng, finale vivante) \u2192 \xAB meuang \xBB. Prenons <i>\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94</i> (march\xE9) : \u0E95\u0EB0 (ta) + \u0EAB\u0EBC\u0EB2 (la, haute gr\xE2ce \xE0 \u0EAB) + \u0E94 (-t, morte) \u2192 \xAB ta-lat \xBB.",ex:`\u0EC0\u0EA1\u0EB7\u0EAD\u0E87|meuang|ville
\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94|talat|march\xE9
\u0EC2\u0EAE\u0E87\u0EC1\u0EAE\u0EA1|hong haem|h\xF4tel
\u0EAA\u0EB0\u0EDC\u0EB2\u0EA1\u0E9A\u0EB4\u0E99|sanam bin|a\xE9roport`},{h:"Les chiffres lao",p:"On les voit sur les plaques, les billets et les panneaux officiels, m\xEAme si les chiffres arabes dominent au quotidien.",grid:fe}]},{id:"tons",lvl:"A0",icon:"\u{1F4C8}",t:"Les 6 tons sans douleur",goal:"Comprendre la r\xE8gle des tons, puis les entendre et les reproduire gr\xE2ce aux paires minimales.",blocks:[{h:"Le principe",p:"Le ton d'une syllabe d\xE9pend de 3 choses :<br>1. <b>la classe</b> de la consonne initiale (H, M ou B) ;<br>2. <b>vivante ou morte</b> (et pour les mortes : voyelle courte ou longue) ;<br>3. <b>la marque de ton</b> \xE9ventuelle : <i>\u0EC4\u0EA1\u0EC9\u0EC0\u0EAD\u0E81</i> \u0EC8 ou <i>\u0EC4\u0EA1\u0EC9\u0EC2\u0E97</i> \u0EC9 (et rarement \u0ECA ou \u0ECB)."},{h:"Le tableau (lao de Vientiane)",p:'<div class="tbl"><table><tr><th></th><th>Vivante</th><th>Morte courte</th><th>Morte longue</th><th>avec \u0EC8</th><th>avec \u0EC9</th></tr><tr><td><span class="cls H">H</span></td><td>montant</td><td>haut</td><td>bas-descendant</td><td>moyen</td><td>bas-descendant</td></tr><tr><td><span class="cls M">M</span></td><td>bas-montant</td><td>haut</td><td>bas-descendant</td><td>bas</td><td>haut-descendant</td></tr><tr><td><span class="cls B">B</span></td><td>haut</td><td>moyen</td><td>haut-descendant</td><td>moyen</td><td>haut-descendant</td></tr></table></div>',warn:"Les noms des tons varient selon les manuels, et les tons eux-m\xEAmes changent selon la r\xE9gion (Vientiane, Luang Prabang, Savannakhet, Champassak). Ce tableau est une carte simplifi\xE9e : ton oreille est le vrai juge."},{h:"Les 6 m\xE9lodies, en images",p:"\u2022 <b>Montant</b> : comme une question surprise en fran\xE7ais, \xAB Ah ? \xBB<br>\u2022 <b>Bas-montant</b> : part bas, remonte l\xE9g\xE8rement.<br>\u2022 <b>Haut</b> : aigu et plat, l\xE9g\xE8rement tendu.<br>\u2022 <b>Moyen</b> : ta voix normale, plate.<br>\u2022 <b>Bas-descendant</b> : grave, comme un soupir.<br>\u2022 <b>Haut-descendant</b> : comme un ordre ferme, \xAB Non ! \xBB"},{h:"Paires minimales : \xE9coute en boucle",ex:`\u0EA1\u0EB2|ma|venir
\u0EDD\u0EB2|ma|chien
\u0EA1\u0EC9\u0EB2|ma|cheval
\u0EC3\u0E81\u0EC9|kai|pr\xE8s
\u0EC4\u0E81|kai|loin
\u0EC4\u0E81\u0EC8|kai|poulet
\u0EC4\u0E82\u0EC8|khai|\u0153uf
\u0EC0\u0EAA\u0EB7\u0EAD|seua|tigre
\u0EC0\u0EAA\u0EB7\u0EC9\u0EAD|seua|chemise
\u0E82\u0EB2|kha|jambe
\u0E84\u0EC8\u0EB2|kha|valeur, prix
\u0E82\u0EC9\u0EB2|kha|tuer
\u0E84\u0EC9\u0EB2|kha|commercer
\u0EAB\u0EBB\u0EA7|houa|t\xEAte ; rire
\u0E82\u0EB2\u0EA7|khao|blanc
\u0E82\u0EC8\u0EB2\u0EA7|khao|nouvelles
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|khao|riz`},{h:"Appliquer la r\xE8gle : 4 exemples r\xE9solus",p:"\u2022 <i>\u0EA1\u0EB2</i> : \u0EA1 basse, vivante, sans marque \u2192 <b>haut</b>.<br>\u2022 <i>\u0EDD\u0EB2</i> : \u0EDD haute, vivante, sans marque \u2192 <b>montant</b>.<br>\u2022 <i>\u0EA1\u0EC9\u0EB2</i> : \u0EA1 basse + \u0EC9 \u2192 <b>haut-descendant</b>.<br>\u2022 <i>\u0E9B\u0EB2</i> : \u0E9B moyenne, vivante, sans marque \u2192 <b>bas-montant</b>.",ex:`\u0E9B\u0EB2|pa|poisson
\u0E9B\u0EC8\u0EB2|pa|for\xEAt
\u0E9B\u0EC9\u0EB2|pa|tante`},{h:"Exercice de survie",p:"Lis \xE0 voix haute : \xAB le chien vient, le cheval vient \xBB. Si un Lao sourit, c'est que tu as confondu ! C'est normal : les tons s'acqui\xE8rent par l'imitation r\xE9p\xE9t\xE9e, pas par les r\xE8gles.",ex:`\u0EDD\u0EB2\u0EA1\u0EB2|ma ma|le chien arrive
\u0EA1\u0EC9\u0EB2\u0EA1\u0EB2|ma ma|le cheval arrive
\u0EC4\u0E81\u0EC8\u0EC4\u0E82\u0EC8|kai khai|la poule pond
\u0EC0\u0EAA\u0EB7\u0EC9\u0EAD\u0EC0\u0EAA\u0EB7\u0EAD|seua seua|la chemise du tigre`,tip:"Exercice quotidien : mets la vitesse \xE0 \xD70.6, \xE9coute une paire minimale, ferme les yeux, devine laquelle c'est. 5 minutes par jour pendant 2 semaines suffisent \xE0 \xAB d\xE9bloquer \xBB ton oreille."}]},{id:"lire",lvl:"A0",icon:"\u{1F4D6}",t:"Lire tes premiers mots",goal:"D\xE9chiffrer seul des mots courants, des enseignes et des menus.",blocks:[{h:"La m\xE9thode en 4 \xE9tapes",p:"1. Trouve la <b>consonne initiale</b> (et sa classe).<br>2. Rep\xE8re la <b>voyelle</b> (autour de la consonne).<br>3. Regarde la <b>finale</b> (vivante ou morte).<br>4. Ajoute la <b>marque de ton</b>.<br>Puis \xE9coute pour v\xE9rifier."},{h:"Mots du quotidien \xE0 d\xE9chiffrer",p:"Essaie de lire chaque mot <b>avant</b> de cliquer.",ex:`\u0E99\u0EC9\u0EB3|nam|eau
\u0E9B\u0EB2|pa|poisson
\u0E9A\u0EC9\u0EB2\u0E99|ban|maison
\u0EA5\u0EB2\u0EA7|lao|lao ; il, elle
\u0E81\u0EB4\u0E99|kin|manger
\u0EC4\u0E9B|pai|aller
\u0E94\u0EB5|di|bon
\u0EC1\u0EA1\u0EA7|maeo|chat
\u0EA5\u0EBB\u0E94|lot|voiture
\u0EC0\u0E9A\u0E8D|bia|bi\xE8re`},{h:"Ce que tu verras dans la rue",ex:`\u0EAE\u0EC9\u0EB2\u0E99\u0EAD\u0EB2\u0EAB\u0EB2\u0E99|han ahan|restaurant
\u0EC2\u0EAE\u0E87\u0EC1\u0EAE\u0EA1|hong haem|h\xF4tel
\u0EAB\u0EC9\u0EAD\u0E87\u0E99\u0EC9\u0EB3|hong nam|toilettes
\u0E97\u0EB2\u0E87\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|thang khao|entr\xE9e
\u0E97\u0EB2\u0E87\u0EAD\u0EAD\u0E81|thang ok|sortie
\u0EC0\u0E9B\u0EB5\u0E94|peut|ouvert
\u0E9B\u0EB4\u0E94|pit|ferm\xE9
\u0EAB\u0EC9\u0EB2\u0EA1\u0EAA\u0EB9\u0E9A\u0EA2\u0EB2|ham soup ya|interdit de fumer`},{h:"Deux signes sp\xE9ciaux",p:"<b>\u0EC6</b> (\u0EC4\u0EA1\u0EC9\u0E8D\u0EBB\u0E81) r\xE9p\xE8te le mot pr\xE9c\xE9dent : <i>\u0E8A\u0EC9\u0EB2\u0EC6</i> = \xAB xa xa \xBB. <b>\u0EAF</b> abr\xE8ge un mot long, comme \xAB etc. \xBB ou le nom de Vientiane sur les panneaux officiels.",ex:`\u0E8A\u0EC9\u0EB2\u0EC6|xa xa|lentement
\u0EC4\u0EA7\u0EC6|vai vai|vite
\u0EC0\u0EA5\u0EB7\u0EC9\u0EAD\u0E8D\u0EC6|leuay leuay|souvent`},{h:"Pas d'espaces entre les mots !",p:"Le lao s'\xE9crit <b>sans espace entre les mots</b>. L'espace marque la fin d'une phrase ou d'une id\xE9e (comme notre point). Au d\xE9but, c'est d\xE9routant : cherche les mots que tu connais, ils servent de rep\xE8res.",ex:"\u0E82\u0EC9\u0EAD\u0E8D\u0EA2\u0EB2\u0E81\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7|khoy yak kin khao niao|je veux manger du riz gluant",tip:"F\xE9licitations : tu as les bases pour lire tout le lao ! Le reste du cours affiche toujours \xE9criture + romanisation : essaie de lire le lao en premier, et ne regarde la romanisation qu'en dernier recours."}]}]});var U,J=h(()=>{"use strict";U=[{id:"saluer",lvl:"A1",icon:"\u{1F64F}",t:"Saluer comme un Lao",goal:"Dire bonjour, merci, au revoir avec le nop, et comprendre les vraies salutations du quotidien.",blocks:[{h:"\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5 : la formule magique",p:"<i>\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5</i> (sabaidi) signifie litt\xE9ralement \xAB bien-\xEAtre bon \xBB. Il sert \xE0 la fois de <b>bonjour, bonsoir et au revoir</b>, \xE0 toute heure. Il n'existe pas de \xAB bonjour \xBB diff\xE9rent pour le matin ou le soir.",ex:`\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5|sabaidi|bonjour / au revoir
\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5\u0E9A\u0ECD?|sabaidi bo?|\xE7a va ?
\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5, \u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EC0\u0E94?|sabaidi, jao de?|\xE7a va, et toi ?
\u0E9A\u0ECD\u0EC8\u0E84\u0EC8\u0EAD\u0E8D\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D|bo khoy sabai|pas trop bien`},{h:"Le nop (\u0E99\u0EBB\u0E9A)",p:"On salue en joignant les mains \xE0 hauteur de poitrine et en inclinant l\xE9g\xE8rement la t\xEAte. <b>Plus les mains sont hautes, plus le respect est grand</b> : menton pour un a\xEEn\xE9, front pour un moine. Le plus jeune salue en premier. Un enfant ou un serveur te fait le nop ? Un simple sourire et un hochement de t\xEAte suffisent.",warn:"Ne fais pas le nop \xE0 tout le monde avec insistance (serveurs, enfants) : c'est \xE9trange, voire g\xEAnant pour eux. Et ne touche jamais la t\xEAte de quelqu'un, m\xEAme d'un enfant."},{h:"Ce que les Lao disent VRAIMENT",p:"Dans la rue, entre connaissances, on dit rarement \xAB sabaidi \xBB. On demande plut\xF4t o\xF9 tu vas ou si tu as mang\xE9. <b>Ce ne sont pas des questions indiscr\xE8tes</b> : ce sont des salutations. R\xE9ponds vaguement, avec un sourire.",ex:`\u0EC4\u0E9B\u0EC3\u0EAA\u0EA1\u0EB2?|pai sai ma?|tu reviens d'o\xF9 ? (salutation)
\u0EC4\u0E9B\u0EC3\u0EAA?|pai sai?|tu vas o\xF9 ?
\u0EC4\u0E9B\u0E97\u0EBD\u0EA7|pai thiao|je me balade
\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|kin khao laeo bo?|tu as mang\xE9 ? (= \xE7a va ?)
\u0E81\u0EB4\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|kin laeo|oui, j'ai mang\xE9
\u0E8D\u0EB1\u0E87|nyang|pas encore`},{h:"Merci, pardon, de rien",ex:`\u0E82\u0EAD\u0E9A\u0EC3\u0E88|khop jai|merci
\u0E82\u0EAD\u0E9A\u0EC3\u0E88\u0EAB\u0EBC\u0EB2\u0E8D\u0EC6|khop jai lai lai|merci beaucoup
\u0E82\u0EAD\u0E9A\u0EC3\u0E88\u0EC0\u0E94\u0EB5\u0EC9|khop jai de|merci hein (chaleureux)
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|bo pen nyang|de rien / pas grave
\u0E82\u0ECD\u0EC2\u0E97\u0E94|kho thot|pardon, excusez-moi
\u0E82\u0ECD\u0EC2\u0E97\u0E94\u0EC0\u0E94\u0EB5\u0EC9|kho thot de|d\xE9sol\xE9 (doux)`,tip:"\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87 (bo pen nyang) est LA philosophie lao : \xAB ce n'est rien \xBB. Retard, erreur, pluie : bo pen nyang. Tu l'entendras 50 fois par jour."},{h:"Dire au revoir",ex:`\u0EA5\u0EB2\u0E81\u0EC8\u0EAD\u0E99|la kon|adieu (formel, rare \xE0 l'oral)
\u0EC4\u0E9B\u0E81\u0EC8\u0EAD\u0E99\u0EC0\u0E94\u0EB5\u0EC9|pai kon de|j'y vais (le plus courant)
\u0E9E\u0EBB\u0E9A\u0E81\u0EB1\u0E99\u0EC3\u0EDD\u0EC8|phop kan mai|\xE0 la prochaine
\u0EC1\u0EA5\u0EC9\u0EA7\u0E9E\u0EBB\u0E9A\u0E81\u0EB1\u0E99|laeo phop kan|\xE0 plus tard
\u0EC2\u0E8A\u0E81\u0E94\u0EB5|xok di|bonne chance / bon voyage
\u0EC0\u0E94\u0EB5\u0E99\u0E97\u0EB2\u0E87\u0E9B\u0EAD\u0E94\u0EC4\u0E9E|deun thang pot phai|bon voyage (s\xFBr)`},{h:"Dialogue au march\xE9 du matin",dlg:`Vendeuse|\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5, \u0EC4\u0E9B\u0EC3\u0EAA\u0EA1\u0EB2?|sabaidi, pai sai ma?|Bonjour, tu viens d'o\xF9 ?
Toi|\u0EC4\u0E9B\u0E97\u0EBD\u0EA7\u0EA1\u0EB2. \u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5\u0E9A\u0ECD?|pai thiao ma. sabaidi bo?|Je me baladais. \xC7a va ?
Vendeuse|\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5. \u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|sabaidi. kin khao laeo bo?|\xC7a va. Tu as mang\xE9 ?
Toi|\u0E8D\u0EB1\u0E87\u0EC0\u0E97\u0EB7\u0EC8\u0EAD|nyang theua|Pas encore.
Vendeuse|\u0EA1\u0EB2\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0E9B\u0EBD\u0E81\u0E99\u0EB3\u0E81\u0EB1\u0E99!|ma kin khao piak nam kan!|Viens manger une soupe de riz avec nous !
Toi|\u0E82\u0EAD\u0E9A\u0EC3\u0E88\u0EAB\u0EBC\u0EB2\u0E8D\u0EC6\u0EC0\u0E94\u0EB5\u0EC9|khop jai lai lai de|Merci beaucoup !`}]},{id:"presenter",lvl:"A1",icon:"\u{1F64B}",t:"Se pr\xE9senter",goal:"Dire ton nom, ta nationalit\xE9, ton m\xE9tier, ton \xE2ge, et poser les m\xEAmes questions.",blocks:[{h:"Ton nom",p:"<i>\u0E8A\u0EB7\u0EC8</i> (xeu) = nom / s'appeler. Pas besoin de verbe \xAB \xEAtre \xBB : \xAB Je nom Paul \xBB.",ex:`\u0E82\u0EC9\u0EAD\u0E8D\u0E8A\u0EB7\u0EC8\u0E9B\u0EAD\u0E99|khoy xeu Pon|je m'appelle Paul
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0E8A\u0EB7\u0EC8\u0EAB\u0E8D\u0EB1\u0E87?|jao xeu nyang?|comment tu t'appelles ?
\u0E8A\u0EB7\u0EC8\u0EAB\u0E8D\u0EB1\u0E87?|xeu nyang?|ton nom ? (familier)
\u0E8D\u0EB4\u0E99\u0E94\u0EB5\u0E97\u0EB5\u0EC8\u0EC4\u0E94\u0EC9\u0EAE\u0EB9\u0EC9\u0E88\u0EB1\u0E81|nyin di thi dai hou jak|enchant\xE9`},{h:"Ta nationalit\xE9",p:"<i>\u0E84\u0EBB\u0E99</i> (khon) = personne + nom du pays. <i>\u0EA1\u0EB2\u0E88\u0EB2\u0E81</i> (ma jak) = venir de.",ex:`\u0E82\u0EC9\u0EAD\u0E8D\u0EC0\u0E9B\u0EB1\u0E99\u0E84\u0EBB\u0E99\u0E9D\u0EA3\u0EB1\u0EC8\u0E87|khoy pen khon falang|je suis fran\xE7ais(e)
\u0EA1\u0EB2\u0E88\u0EB2\u0E81\u0E9B\u0EB0\u0EC0\u0E97\u0E94\u0EC3\u0E94?|ma jak pathet dai?|tu viens de quel pays ?
\u0EA1\u0EB2\u0E88\u0EB2\u0E81\u0EC1\u0E9A\u0E99\u0E8A\u0EB4\u0E81|ma jak baen xik|je viens de Belgique
\u0E84\u0EBB\u0E99\u0EAA\u0EB0\u0EA7\u0EB4\u0E94|khon saviet|Suisse (personne)
\u0E84\u0EBB\u0E99\u0E81\u0EB2\u0E99\u0EB2\u0E94\u0EB2|khon kanada|Canadien(ne)`,warn:"\u0E9D\u0EA3\u0EB1\u0EC8\u0E87 (falang) veut dire \xAB Fran\xE7ais \xBB, mais aussi \xAB \xE9tranger occidental \xBB en g\xE9n\xE9ral ! Si on t'appelle \xAB falang \xBB dans la rue, ce n'est pas insultant, c'est juste descriptif."},{h:"Ton \xE2ge et ton m\xE9tier",ex:`\u0EAD\u0EB2\u0E8D\u0EB8\u0E88\u0EB1\u0E81\u0E9B\u0EB5?|ayou jak pi?|tu as quel \xE2ge ?
\u0EAD\u0EB2\u0E8D\u0EB8\u0EAA\u0EB2\u0EA1\u0EAA\u0EB4\u0E9A\u0E9B\u0EB5|ayou sam sip pi|j'ai 30 ans
\u0EC0\u0EAE\u0EB1\u0E94\u0EA7\u0EBD\u0E81\u0EAB\u0E8D\u0EB1\u0E87?|het viak nyang?|tu fais quel travail ?
\u0EC0\u0E9B\u0EB1\u0E99\u0E84\u0EB9|pen khou|je suis prof
\u0EC0\u0E9B\u0EB1\u0E99\u0E99\u0EB1\u0E81\u0E97\u0EC8\u0EAD\u0E87\u0E97\u0EC8\u0EBD\u0EA7|pen nak thong thiao|je suis touriste
\u0EC0\u0E9B\u0EB1\u0E99\u0E99\u0EB1\u0E81\u0EAE\u0EBD\u0E99|pen nak hian|je suis \xE9tudiant(e)`,tip:"Demander l'\xE2ge est NORMAL au Laos : c'est indispensable pour savoir quel pronom utiliser (grand fr\xE8re, petite s\u0153ur, oncle\u2026). Ne sois pas choqu\xE9, et r\xE9ponds sans g\xEAne."},{h:"Ta situation",ex:`\u0EC1\u0E95\u0EC8\u0E87\u0E87\u0EB2\u0E99\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|taeng ngan laeo bo?|tu es mari\xE9(e) ?
\u0EC1\u0E95\u0EC8\u0E87\u0EC1\u0EA5\u0EC9\u0EA7|taeng laeo|oui, mari\xE9(e)
\u0E8D\u0EB1\u0E87\u0E9A\u0ECD\u0EC8\u0E97\u0EB1\u0E99\u0EC1\u0E95\u0EC8\u0E87|nyang bo than taeng|pas encore mari\xE9(e)
\u0EA1\u0EB5\u0EA5\u0EB9\u0E81\u0E9A\u0ECD?|mi louk bo?|tu as des enfants ?
\u0EA1\u0EB5\u0EA5\u0EB9\u0E81\u0EAA\u0EAD\u0E87\u0E84\u0EBB\u0E99|mi louk song khon|j'ai deux enfants`,warn:"Ne r\xE9ponds jamais \xAB non, jamais \xBB \xE0 \xAB mari\xE9 ? \xBB : on dit \u0E8D\u0EB1\u0E87 (pas encore). Pour un Lao, le mariage est une \xE9vidence future. \xAB Jamais \xBB sonne triste."},{h:"Dialogue : premi\xE8re rencontre",dlg:`Noy|\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5! \u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0E8A\u0EB7\u0EC8\u0EAB\u0E8D\u0EB1\u0E87?|sabaidi! jao xeu nyang?|Bonjour ! Tu t'appelles comment ?
Toi|\u0E82\u0EC9\u0EAD\u0E8D\u0E8A\u0EB7\u0EC8\u0E9B\u0EAD\u0E99. \u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EC0\u0E94?|khoy xeu Pon. jao de?|Paul. Et toi ?
Noy|\u0E82\u0EC9\u0EAD\u0E8D\u0E8A\u0EB7\u0EC8\u0E99\u0EC9\u0EAD\u0E8D. \u0EA1\u0EB2\u0E88\u0EB2\u0E81\u0EC3\u0EAA?|khoy xeu Noy. ma jak sai?|Noy. Tu viens d'o\xF9 ?
Toi|\u0EA1\u0EB2\u0E88\u0EB2\u0E81\u0E9D\u0EA3\u0EB1\u0EC8\u0E87. \u0EA1\u0EB2\u0E97\u0EC8\u0EBD\u0EA7\u0EA5\u0EB2\u0EA7|ma jak falang. ma thiao lao|De France. Je visite le Laos.
Noy|\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0EA5\u0EB2\u0EA7\u0EC0\u0E81\u0EB1\u0EC8\u0E87\u0EC0\u0E94\u0EB5\u0EC9!|vao lao keng de!|Tu parles bien lao !
Toi|\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87, \u0E81\u0EB3\u0EA5\u0EB1\u0E87\u0EAE\u0EBD\u0E99\u0EA2\u0EB9\u0EC8|noy neung, kamlang hian you|Un peu, j'apprends.`}]},{id:"pronoms",lvl:"A1",icon:"\u{1F465}",t:"Pronoms : qui dit quoi \xE0 qui",goal:"Choisir le bon \xAB je \xBB et le bon \xAB tu \xBB selon l'\xE2ge et la relation, comme un Lao.",blocks:[{h:"Les pronoms de base",ex:`\u0E82\u0EC9\u0EAD\u0E8D|khoy|je (neutre, universel)
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2|jao|tu, vous (poli, s\xFBr)
\u0EA5\u0EB2\u0EA7|lao|il, elle
\u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EBB\u0EB2|phouak hao|nous
\u0EC0\u0EAE\u0EBB\u0EB2|hao|nous ; je (familier)
\u0E9E\u0EA7\u0E81\u0EC0\u0E88\u0EBB\u0EC9\u0EB2|phouak jao|vous (pluriel)
\u0E9E\u0EA7\u0E81\u0EC0\u0E82\u0EBB\u0EB2|phouak khao|ils, elles`},{h:"Le secret : les termes de parent\xE9",p:"Au quotidien, les Lao utilisent surtout des <b>termes familiaux \xE0 la place des pronoms</b>, m\xEAme avec des inconnus. On s'appelle grand fr\xE8re, petite s\u0153ur, oncle, tante\u2026 selon l'\xE2ge estim\xE9.",ex:`\u0EAD\u0EC9\u0EB2\u0E8D|ay|grand fr\xE8re (homme un peu plus \xE2g\xE9)
\u0EC0\u0EAD\u0EB7\u0EC9\u0EAD\u0E8D|euay|grande s\u0153ur (femme un peu plus \xE2g\xE9e)
\u0E99\u0EC9\u0EAD\u0E87|nong|petit(e) fr\xE8re/s\u0153ur (plus jeune : serveurs\u2026)
\u0EA5\u0EB8\u0E87|loung|oncle (homme plus \xE2g\xE9 que tes parents)
\u0E9B\u0EC9\u0EB2|pa|tante (femme plus \xE2g\xE9e que tes parents)
\u0E9E\u0ECD\u0EC8\u0E95\u0EB9\u0EC9|pho tou|grand-p\xE8re (vieil homme)
\u0EC1\u0EA1\u0EC8\u0E95\u0EB9\u0EC9|mae tou|grand-m\xE8re (vieille femme)`,tip:"Pour appeler un serveur ou une serveuse : \u0E99\u0EC9\u0EAD\u0E87 ! (nong). Pour une vendeuse d'\xE2ge m\xFBr : \u0EC0\u0EAD\u0EB7\u0EC9\u0EAD\u0E8D ou \u0E9B\u0EC9\u0EB2. Dans le doute, rajeunis la personne : \u0EC0\u0EAD\u0EB7\u0EC9\u0EAD\u0E8D plut\xF4t que \u0E9B\u0EC9\u0EB2 fait toujours plaisir."},{h:"Parler de soi avec ces termes",p:"On peut aussi se d\xE9signer soi-m\xEAme par son r\xF4le : un a\xEEn\xE9 dit \xAB \u0EAD\u0EC9\u0EB2\u0E8D \xBB (grand fr\xE8re) pour dire \xAB je \xBB.",ex:`\u0E99\u0EC9\u0EAD\u0E87, \u0EC0\u0EAD\u0EBB\u0EB2\u0EC0\u0E9A\u0E8D\u0EC1\u0E94\u0EC8|nong, ao bia dae|(petite s\u0153ur), une bi\xE8re s'il te pla\xEEt
\u0EC0\u0EAD\u0EB7\u0EC9\u0EAD\u0E8D, \u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|euay, an ni thao dai?|(grande s\u0153ur), \xE7a co\xFBte combien ?
\u0EAD\u0EC9\u0EB2\u0E8D\u0E8A\u0EB4\u0EC4\u0E9B\u0E81\u0EC8\u0EAD\u0E99\u0EC0\u0E94\u0EB5\u0EC9|ay xi pai kon de|(grand fr\xE8re =) je vais y aller
\u0EA5\u0EB8\u0E87, \u0EC4\u0E9B\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|loung, pai talat xao thao dai?|(oncle), combien pour le march\xE9 du matin ?`},{h:"Pronoms familiers (avec prudence)",ex:`\u0E81\u0EB9|kou|je (tr\xE8s familier, entre amis proches)
\u0EA1\u0EB6\u0E87|meung|tu (tr\xE8s familier ; insultant sinon)
\u0EC2\u0E95|to|toi (amical, entre jeunes)
\u0EC0\u0E9E\u0EB4\u0EC8\u0E99|pheun|il/elle (respectueux : a\xEEn\xE9, moine)`,warn:"\u0E81\u0EB9/\u0EA1\u0EB6\u0E87 sont normaux entre amis tr\xE8s proches mais extr\xEAmement grossiers avec n'importe qui d'autre. Ne les utilise jamais tant que tu ne ma\xEEtrises pas les codes."},{h:"Les titres de politesse",ex:`\u0E97\u0EC9\u0EB2\u0EA7|thao|Monsieur (devant le pr\xE9nom)
\u0E99\u0EB2\u0E87|nang|Madame / Mademoiselle
\u0E97\u0EC8\u0EB2\u0E99|than|Monsieur/Madame (tr\xE8s formel, officiel)
\u0EAD\u0EB2\u0E88\u0EB2\u0E99|achan|professeur (titre respectueux)`,tip:"On utilise TOUJOURS le pr\xE9nom, jamais le nom de famille. M. Somphone Keo se dit \xAB \u0E97\u0EC9\u0EB2\u0EA7\u0EAA\u0EBB\u0EA1\u0E9E\u0EAD\u0E99 \xBB ou simplement \xAB \u0EAD\u0EC9\u0EB2\u0E8D\u0EAA\u0EBB\u0EA1\u0E9E\u0EAD\u0E99 \xBB."}]},{id:"famille",lvl:"A1",icon:"\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",t:"La famille",goal:"Parler de ta famille et comprendre le syst\xE8me lao, plus pr\xE9cis que le fran\xE7ais.",blocks:[{h:"Le noyau",ex:`\u0E84\u0EAD\u0E9A\u0E84\u0EBB\u0EA7|khop khoua|famille
\u0E9E\u0ECD\u0EC8|pho|p\xE8re
\u0EC1\u0EA1\u0EC8|mae|m\xE8re
\u0E9E\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8|pho mae|parents
\u0EA5\u0EB9\u0E81|louk|enfant (de quelqu'un)
\u0EA5\u0EB9\u0E81\u0E8A\u0EB2\u0E8D|louk xai|fils
\u0EA5\u0EB9\u0E81\u0EAA\u0EB2\u0EA7|louk sao|fille
\u0E9C\u0EBB\u0EA7|phoua|mari
\u0EC0\u0EA1\u0E8D|mia|\xE9pouse (courant)
\u0EC1\u0E9F\u0E99|faen|petit(e) ami(e) ; conjoint`},{h:"Fr\xE8res et s\u0153urs : l'\xE2ge compte",p:"Le lao distingue toujours <b>a\xEEn\xE9 ou cadet</b>. Il n'y a pas de mot unique pour \xAB fr\xE8re \xBB.",ex:`\u0EAD\u0EC9\u0EB2\u0E8D|ay|grand fr\xE8re
\u0EC0\u0EAD\u0EB7\u0EC9\u0EAD\u0E8D|euay|grande s\u0153ur
\u0E99\u0EC9\u0EAD\u0E87\u0E8A\u0EB2\u0E8D|nong xai|petit fr\xE8re
\u0E99\u0EC9\u0EAD\u0E87\u0EAA\u0EB2\u0EA7|nong sao|petite s\u0153ur
\u0E9E\u0EB5\u0EC8\u0E99\u0EC9\u0EAD\u0E87|phi nong|fr\xE8res et s\u0153urs ; cousins ; proches
\u0EA5\u0EB9\u0E81\u0E9C\u0EB9\u0EC9\u0E81\u0EBB\u0E81|louk phou kok|l'a\xEEn\xE9(e)
\u0EA5\u0EB9\u0E81\u0EAB\u0EBC\u0EC9\u0EB2|louk la|le/la benjamin(e)`},{h:"Grands-parents : c\xF4t\xE9 p\xE8re ou m\xE8re ?",p:"Le lao pr\xE9cise le c\xF4t\xE9 de la famille. C\xF4t\xE9 <b>p\xE8re</b> : \u0E9B\u0EB9\u0EC8/\u0E8D\u0EC8\u0EB2. C\xF4t\xE9 <b>m\xE8re</b> : \u0E9E\u0ECD\u0EC8\u0E95\u0EB9\u0EC9/\u0EC1\u0EA1\u0EC8\u0E95\u0EB9\u0EC9.",ex:`\u0E9B\u0EB9\u0EC8|pou|grand-p\xE8re paternel
\u0E8D\u0EC8\u0EB2|nya|grand-m\xE8re paternelle
\u0E9E\u0ECD\u0EC8\u0E95\u0EB9\u0EC9|pho tou|grand-p\xE8re maternel
\u0EC1\u0EA1\u0EC8\u0E95\u0EB9\u0EC9|mae tou|grand-m\xE8re maternelle
\u0EAB\u0EBC\u0EB2\u0E99|lan|petit-enfant ; neveu, ni\xE8ce`},{h:"Oncles, tantes, belle-famille",ex:`\u0EA5\u0EB8\u0E87|loung|oncle (a\xEEn\xE9 des parents)
\u0E9B\u0EC9\u0EB2|pa|tante (a\xEEn\xE9e des parents)
\u0EAD\u0EB2\u0EA7|ao|oncle (cadet du p\xE8re)
\u0EAD\u0EB2|a|tante (cadette du p\xE8re)
\u0E99\u0EC9\u0EB2|na|oncle/tante (cadet(te) de la m\xE8re)
\u0E9E\u0ECD\u0EC8\u0EC0\u0E96\u0EBB\u0EC9\u0EB2|pho thao|beau-p\xE8re
\u0EC1\u0EA1\u0EC8\u0EC0\u0E96\u0EBB\u0EC9\u0EB2|mae thao|belle-m\xE8re
\u0EA5\u0EB9\u0E81\u0EC0\u0E82\u0EB5\u0E8D|louk kheuy|gendre
\u0EA5\u0EB9\u0E81\u0EC3\u0E9E\u0EC9|louk phai|belle-fille`},{h:"Parler de sa famille",ex:`\u0EA1\u0EB5\u0EAD\u0EC9\u0EB2\u0E8D\u0EC0\u0EAD\u0EB7\u0EC9\u0EAD\u0E8D\u0E99\u0EC9\u0EAD\u0E87\u0E88\u0EB1\u0E81\u0E84\u0EBB\u0E99?|mi ay euay nong jak khon?|tu as combien de fr\xE8res et s\u0153urs ?
\u0EA1\u0EB5\u0E99\u0EC9\u0EAD\u0E87\u0EAA\u0EB2\u0EA7\u0E84\u0EBB\u0E99\u0EDC\u0EB6\u0EC8\u0E87|mi nong sao khon neung|j'ai une petite s\u0153ur
\u0E9E\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA?|pho mae you sai?|o\xF9 vivent tes parents ?
\u0EA2\u0EB9\u0EC8\u0E9D\u0EA3\u0EB1\u0EC8\u0E87|you falang|en France
\u0EC0\u0E9B\u0EB1\u0E99\u0EA5\u0EB9\u0E81\u0E84\u0EBB\u0E99\u0E94\u0EBD\u0EA7|pen louk khon diao|je suis enfant unique`,tip:"La famille \xE9largie vit souvent sous le m\xEAme toit. Le gendre s'installe traditionnellement chez les parents de sa femme : c'est souvent la fille cadette qui h\xE9rite de la maison et s'occupe des parents."},{h:"Dialogue : photo de famille",dlg:`Mai|\u0E99\u0EB5\u0EC9\u0EC1\u0EA1\u0EC8\u0E99\u0EC3\u0E9C?|ni maen phai?|C'est qui, \xE7a ?
Toi|\u0EC1\u0EA1\u0EC8\u0E99\u0E99\u0EC9\u0EAD\u0E87\u0EAA\u0EB2\u0EA7\u0E82\u0EC9\u0EAD\u0E8D|maen nong sao khoy|C'est ma petite s\u0153ur.
Mai|\u0E87\u0EB2\u0EA1\u0EAB\u0EBC\u0EB2\u0E8D! \u0EA5\u0EB2\u0EA7\u0EAD\u0EB2\u0E8D\u0EB8\u0E88\u0EB1\u0E81\u0E9B\u0EB5?|ngam lai! lao ayou jak pi?|Tr\xE8s jolie ! Elle a quel \xE2ge ?
Toi|\u0E8A\u0EB2\u0EA7\u0EAB\u0EC9\u0EB2\u0E9B\u0EB5. \u0EC1\u0E95\u0EC8\u0E87\u0E87\u0EB2\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|xao ha pi. taeng ngan laeo|25 ans. Elle est mari\xE9e.
Mai|\u0EA1\u0EB5\u0EAB\u0EBC\u0EB2\u0E99\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|mi lan laeo bo?|Tu as d\xE9j\xE0 des neveux ?
Toi|\u0E8D\u0EB1\u0E87, \u0E8D\u0EB1\u0E87\u0E9A\u0ECD\u0EC8\u0E97\u0EB1\u0E99\u0EA1\u0EB5|nyang, nyang bo than mi|Pas encore.`}]},{id:"phrase",lvl:"A1",icon:"\u{1F9F1}",t:"Construire une phrase",goal:"Ma\xEEtriser \xEAtre, avoir, la n\xE9gation, et les 3 marqueurs de temps.",blocks:[{h:"\xAB \xCAtre \xBB : trois mots diff\xE9rents",p:"<b>\u0EC0\u0E9B\u0EB1\u0E99</b> (pen) : \xEAtre + m\xE9tier, r\xF4le, \xE9tat (\xAB je suis prof \xBB, \xAB \xEAtre malade \xBB).<br><b>\u0EC1\u0EA1\u0EC8\u0E99</b> (maen) : \xEAtre = identifier, \xAB c'est \xBB (\xAB c'est mon livre \xBB).<br><b>\u0EA2\u0EB9\u0EC8</b> (you) : \xEAtre \xE0 un endroit, habiter.<br>Avec un adjectif : <b>aucun verbe</b> ! \xAB Je fatigu\xE9. \xBB",ex:`\u0E82\u0EC9\u0EAD\u0E8D\u0EC0\u0E9B\u0EB1\u0E99\u0E84\u0EB9|khoy pen khou|je suis professeur
\u0EC0\u0E9B\u0EB1\u0E99\u0EC4\u0E82\u0EC9|pen khai|avoir de la fi\xE8vre
\u0E99\u0EB5\u0EC9\u0EC1\u0EA1\u0EC8\u0E99\u0E9A\u0EC9\u0EB2\u0E99\u0E82\u0EC9\u0EAD\u0E8D|ni maen ban khoy|c'est ma maison
\u0E82\u0EC9\u0EAD\u0E8D\u0EA2\u0EB9\u0EC8\u0EA7\u0EBD\u0E87\u0E88\u0EB1\u0E99|khoy you viang jan|j'habite \xE0 Vientiane
\u0E82\u0EC9\u0EAD\u0E8D\u0EC0\u0EA1\u0EB7\u0EC8\u0EAD\u0E8D|khoy meuay|je suis fatigu\xE9
\u0EAD\u0EB2\u0EAB\u0EB2\u0E99\u0EC1\u0E8A\u0E9A|ahan xaep|la nourriture est d\xE9licieuse`},{h:"Avoir : \u0EA1\u0EB5",p:"<i>\u0EA1\u0EB5</i> (mi) = avoir, et aussi \xAB il y a \xBB.",ex:`\u0E82\u0EC9\u0EAD\u0E8D\u0EA1\u0EB5\u0EC0\u0E87\u0EB4\u0E99|khoy mi ngeun|j'ai de l'argent
\u0EA1\u0EB5\u0EC0\u0E9A\u0E8D\u0E9A\u0ECD?|mi bia bo?|il y a de la bi\xE8re ?
\u0EA1\u0EB5|mi|oui, il y en a
\u0E9A\u0ECD\u0EC8\u0EA1\u0EB5|bo mi|non, il n'y en a pas
\u0EA1\u0EB5\u0E84\u0EBB\u0E99\u0EAB\u0EBC\u0EB2\u0E8D|mi khon lai|il y a beaucoup de monde`},{h:"La n\xE9gation : \u0E9A\u0ECD\u0EC8 devant",p:"Mets <b>\u0E9A\u0ECD\u0EC8</b> (bo) devant le verbe ou l'adjectif. C'est tout.",ex:`\u0E9A\u0ECD\u0EC8\u0EAE\u0EB9\u0EC9|bo hou|je ne sais pas
\u0E9A\u0ECD\u0EC8\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC3\u0E88|bo khao jai|je ne comprends pas
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9C\u0EB1\u0E94|bo phet|pas \xE9pic\xE9
\u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99|bo maen|ce n'est pas \xE7a ; non
\u0E9A\u0ECD\u0EC8\u0EA2\u0EB2\u0E81\u0EC4\u0E9B|bo yak pai|je ne veux pas y aller`,warn:"Pour nier \u0EC0\u0E9B\u0EB1\u0E99 et \u0EC1\u0EA1\u0EC8\u0E99 devant un nom, on dit \u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99 : \xAB \u0E82\u0EC9\u0EAD\u0E8D\u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99\u0E84\u0EB9 \xBB (je ne suis pas prof), pas \xAB \u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0E84\u0EB9 \xBB."},{h:"Le temps : 3 petits mots",p:"<b>\u0EC1\u0EA5\u0EC9\u0EA7</b> (laeo), apr\xE8s le verbe : c'est fait, accompli.<br><b>\u0E8A\u0EB4 / \u0E88\u0EB0</b> (xi / ja), avant le verbe : futur, intention. \u0E8A\u0EB4 \xE0 l'oral, \u0E88\u0EB0 \xE0 l'\xE9crit.<br><b>\u0E81\u0EB3\u0EA5\u0EB1\u0E87 \u2026 \u0EA2\u0EB9\u0EC8</b> (kamlang \u2026 you) : en train de.<br><b>\u0EC0\u0E84\u0EB5\u0E8D</b> (kheuy), avant le verbe : avoir d\xE9j\xE0 fait (exp\xE9rience).",ex:`\u0E81\u0EB4\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|kin laeo|j'ai mang\xE9
\u0E8A\u0EB4\u0EC4\u0E9B\u0EAB\u0EBC\u0EA7\u0E87\u0E9E\u0EB0\u0E9A\u0EB2\u0E87|xi pai louang phabang|je vais aller \xE0 Luang Prabang
\u0E81\u0EB3\u0EA5\u0EB1\u0E87\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EA2\u0EB9\u0EC8|kamlang kin khao you|je suis en train de manger
\u0EC0\u0E84\u0EB5\u0E8D\u0EC4\u0E9B\u0EA5\u0EB2\u0EA7\u0E9A\u0ECD?|kheuy pai lao bo?|tu es d\xE9j\xE0 all\xE9 au Laos ?
\u0E9A\u0ECD\u0EC8\u0EC0\u0E84\u0EB5\u0E8D|bo kheuy|jamais
\u0E8D\u0EB1\u0E87\u0E9A\u0ECD\u0EC8\u0E97\u0EB1\u0E99\u0E81\u0EB4\u0E99|nyang bo than kin|je n'ai pas encore mang\xE9`},{h:"Vouloir, pouvoir, devoir",ex:`\u0EA2\u0EB2\u0E81\u0EC4\u0E9B|yak pai|je veux y aller
\u0EA2\u0EB2\u0E81\u0E81\u0EB4\u0E99\u0EC0\u0E9D\u0EB5|yak kin feu|j'ai envie d'une soupe de nouilles
\u0EC4\u0E9B\u0EC4\u0E94\u0EC9|pai dai|je peux y aller
\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0EA5\u0EB2\u0EA7\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|vao lao dai bo?|tu sais parler lao ?
\u0E95\u0EC9\u0EAD\u0E87\u0EC4\u0E9B|tong pai|je dois y aller
\u0E9A\u0ECD\u0EC8\u0E95\u0EC9\u0EAD\u0E87|bo tong|pas besoin`,tip:"\u0EC4\u0E94\u0EC9 (dai) = pouvoir se place APR\xC8S le verbe : \xAB aller-pouvoir \xBB. C'est une des erreurs les plus fr\xE9quentes des francophones."}]},{id:"questions",lvl:"A1",icon:"\u2753",t:"Poser des questions",goal:"Poser toutes les questions essentielles et r\xE9pondre oui/non \xE0 la lao.",blocks:[{h:"Oui/non : \u0E9A\u0ECD en fin de phrase",p:"Ajoute <b>\u0E9A\u0ECD</b> (bo, ton diff\xE9rent de \u0E9A\u0ECD\u0EC8 n\xE9gation) \xE0 la fin. Pour r\xE9pondre, <b>il n'y a pas de \xAB oui \xBB universel</b> : on r\xE9p\xE8te le verbe !",ex:`\u0EC1\u0E8A\u0E9A\u0E9A\u0ECD?|xaep bo?|c'est bon ?
\u0EC1\u0E8A\u0E9A|xaep|(oui) c'est bon
\u0E9A\u0ECD\u0EC8\u0EC1\u0E8A\u0E9A|bo xaep|(non) pas bon
\u0EC4\u0E9B\u0E9A\u0ECD?|pai bo?|tu y vas ?
\u0EC4\u0E9B|pai|(oui) j'y vais`},{h:"Les autres formes de question",ex:`\u0EC1\u0EA1\u0EC8\u0E99\u0E9A\u0ECD?|maen bo?|c'est \xE7a ? n'est-ce pas ?
\u0EC1\u0EA1\u0EC8\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|maen laeo|oui, c'est \xE7a
\u0EC4\u0E9B\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|pai laeo bo?|tu y es d\xE9j\xE0 all\xE9 ?
\u0EC4\u0E9B\u0EAB\u0EBC\u0EB7\u0E9A\u0ECD\u0EC8?|pai leu bo?|tu y vas ou pas ?
\u0EC4\u0E9B\u0EAB\u0EBC\u0EB7\u0E8D\u0EB1\u0E87?|pai leu nyang?|tu es parti ou pas encore ?
\u0EA2\u0EB2\u0E81\u0EC4\u0E94\u0EC9\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0EAB\u0EBC\u0EB7\u0EAD\u0EB1\u0E99\u0E99\u0EB1\u0EC9\u0E99?|yak dai an ni leu an nan?|tu veux celui-ci ou celui-l\xE0 ?`},{h:"Les mots interrogatifs (en fin de phrase !)",p:"Le mot interrogatif se met <b>\xE0 la place de l'info manquante</b>, souvent \xE0 la fin.",ex:`\u0EAB\u0E8D\u0EB1\u0E87|nyang|quoi
\u0EC3\u0E9C|phai|qui
\u0EC3\u0EAA|sai|o\xF9
\u0EC0\u0EA1\u0EB7\u0EC8\u0EAD\u0EC3\u0E94 / \u0E95\u0EAD\u0E99\u0EC3\u0E94|meua dai / ton dai|quand
\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|pen nyang|pourquoi
\u0EC1\u0E99\u0EA7\u0EC3\u0E94|naeo dai|comment
\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94|thao dai|combien (prix, quantit\xE9)
\u0E88\u0EB1\u0E81 + classificateur|jak|combien (comptable)
\u0EAD\u0EB1\u0E99\u0EC3\u0E94|an dai|lequel`},{h:"En situation",ex:`\u0E99\u0EB5\u0EC9\u0EC1\u0EA1\u0EC8\u0E99\u0EAB\u0E8D\u0EB1\u0E87?|ni maen nyang?|c'est quoi, \xE7a ?
\u0EAB\u0EC9\u0EAD\u0E87\u0E99\u0EC9\u0EB3\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA?|hong nam you sai?|o\xF9 sont les toilettes ?
\u0EC4\u0E9B\u0EC1\u0E99\u0EA7\u0EC3\u0E94?|pai naeo dai?|on y va comment ?
\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87\u0E9A\u0ECD\u0EC8\u0EA1\u0EB2?|pen nyang bo ma?|pourquoi tu n'es pas venu ?
\u0EA1\u0EB2\u0EAE\u0EAD\u0E94\u0E95\u0EAD\u0E99\u0EC3\u0E94?|ma hot ton dai?|tu es arriv\xE9 quand ?
\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|an ni thao dai?|\xE7a co\xFBte combien ?
\u0EA1\u0EB5\u0E88\u0EB1\u0E81\u0E84\u0EBB\u0E99?|mi jak khon?|vous \xEAtes combien ?
\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0EC0\u0EAD\u0EB5\u0EC9\u0E99\u0EA7\u0EC8\u0EB2\u0EAB\u0E8D\u0EB1\u0E87?|an ni eun va nyang?|comment \xE7a s'appelle ?`,tip:"La question la plus utile pour apprendre : \xAB \u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7\u0EC0\u0EAD\u0EB5\u0EC9\u0E99\u0EA7\u0EC8\u0EB2\u0EAB\u0E8D\u0EB1\u0E87? \xBB (comment on dit \xE7a en lao ?). Pointe un objet et demande !"},{h:"Les 3 \xAB oui \xBB polis",ex:`\u0EC0\u0E88\u0EBB\u0EC9\u0EB2|jao|oui (poli, universel)
\u0EC2\u0E94\u0E8D|doy|oui (tr\xE8s respectueux)
\u0EC1\u0EA1\u0EC8\u0E99|maen|oui, c'est exact
\u0EC2\u0EAD\u0EC0\u0E84|o khe|OK (tr\xE8s courant)`,warn:"\u0EC0\u0E88\u0EBB\u0EC9\u0EB2 (jao) veut dire \xAB tu \xBB ET \xAB oui poli \xBB selon le ton et la position. En d\xE9but de r\xE9ponse, c'est un oui."}]},{id:"nombres",lvl:"A1",icon:"\u{1F522}",t:"Les nombres",goal:"Compter de 0 \xE0 1 000 000, comprendre les prix en kips et n\xE9gocier.",blocks:[{h:"De 0 \xE0 10",ex:`\u0EAA\u0EB9\u0E99|soun|0
\u0EDC\u0EB6\u0EC8\u0E87|neung|1
\u0EAA\u0EAD\u0E87|song|2
\u0EAA\u0EB2\u0EA1|sam|3
\u0EAA\u0EB5\u0EC8|si|4
\u0EAB\u0EC9\u0EB2|ha|5
\u0EAB\u0EBB\u0E81|hok|6
\u0EC0\u0E88\u0EB1\u0E94|jet|7
\u0EC1\u0E9B\u0E94|paet|8
\u0EC0\u0E81\u0EBB\u0EC9\u0EB2|kao|9
\u0EAA\u0EB4\u0E9A|sip|10`},{h:"De 11 \xE0 99 : 2 exceptions seulement",p:"C'est logique : dizaine + unit\xE9. Deux pi\xE8ges : <b>11, 21, 31\u2026 finissent en \u0EC0\u0EAD\u0EB1\u0E94</b> (et), et <b>20 se dit \u0E8A\u0EB2\u0EA7</b> (xao), pas \xAB deux-dix \xBB.",ex:`\u0EAA\u0EB4\u0E9A\u0EC0\u0EAD\u0EB1\u0E94|sip et|11
\u0EAA\u0EB4\u0E9A\u0EAA\u0EAD\u0E87|sip song|12
\u0E8A\u0EB2\u0EA7|xao|20
\u0E8A\u0EB2\u0EA7\u0EC0\u0EAD\u0EB1\u0E94|xao et|21
\u0EAA\u0EB2\u0EA1\u0EAA\u0EB4\u0E9A|sam sip|30
\u0EAA\u0EB2\u0EA1\u0EAA\u0EB4\u0E9A\u0EC0\u0EAD\u0EB1\u0E94|sam sip et|31
\u0EAA\u0EB5\u0EC8\u0EAA\u0EB4\u0E9A\u0EAB\u0EC9\u0EB2|si sip ha|45
\u0EC0\u0E81\u0EBB\u0EC9\u0EB2\u0EAA\u0EB4\u0E9A\u0EC0\u0E81\u0EBB\u0EC9\u0EB2|kao sip kao|99`},{h:"Les grands nombres",ex:`\u0EAE\u0EC9\u0EAD\u0E8D|hoy|100
\u0EAA\u0EAD\u0E87\u0EAE\u0EC9\u0EAD\u0E8D|song hoy|200
\u0E9E\u0EB1\u0E99|phan|1 000
\u0EAA\u0EAD\u0E87\u0E9E\u0EB1\u0E99\u0EAB\u0EC9\u0EB2\u0EAE\u0EC9\u0EAD\u0E8D|song phan ha hoy|2 500
\u0EDD\u0EB7\u0EC8\u0E99|meun|10 000
\u0EAA\u0EB4\u0E9A\u0E9E\u0EB1\u0E99|sip phan|10 000 (oral, tr\xE8s courant)
\u0EC1\u0EAA\u0E99|saen|100 000
\u0EA5\u0EC9\u0EB2\u0E99|lan|1 000 000`},{h:"Les prix en kips (\u0E81\u0EB5\u0E9A)",p:"Le kip a peu de valeur : on parle vite en dizaines de milliers. Les Lao disent souvent <b>\xAB \u0EAA\u0EB4\u0E9A\u0E9E\u0EB1\u0E99 \xBB (dix mille)</b> plut\xF4t que \u0EDD\u0EB7\u0EC8\u0E99, et omettent \xAB kips \xBB.",ex:`\u0EAB\u0EC9\u0EB2\u0EAA\u0EB4\u0E9A\u0E9E\u0EB1\u0E99|ha sip phan|50 000 kips
\u0E8A\u0EB2\u0EA7\u0E9E\u0EB1\u0E99|xao phan|20 000 kips
\u0EC1\u0EAA\u0E99\u0EAB\u0EC9\u0EB2|saen ha|150 000 (abr\xE9viation)
\u0EAA\u0EAD\u0E87\u0EC1\u0EAA\u0E99|song saen|200 000 kips
\u0EA5\u0EC9\u0EB2\u0E99\u0E81\u0EB5\u0E9A|lan kip|un million de kips`,tip:"\xAB \u0EC1\u0EAA\u0E99\u0EAB\u0EC9\u0EB2 \xBB (saen ha) = 150 000 : le chiffre apr\xE8s le grand nombre ajoute une unit\xE9 inf\xE9rieure. M\xEAme logique pour \xAB \u0E9E\u0EB1\u0E99\u0EAA\u0EAD\u0E87 \xBB (phan song) = 1 200."},{h:"Les ordinaux",p:"<i>\u0E97\u0EB5</i> (thi) + nombre = ordinal.",ex:`\u0E97\u0EB5\u0EDC\u0EB6\u0EC8\u0E87|thi neung|premier
\u0E97\u0EB5\u0EAA\u0EAD\u0E87|thi song|deuxi\xE8me
\u0EC0\u0E97\u0EB7\u0EC8\u0EAD\u0E97\u0EB3\u0EAD\u0EB4\u0E94|theua tham it|la premi\xE8re fois
\u0E8A\u0EB1\u0EC9\u0E99\u0EAA\u0EB2\u0EA1|xan sam|3e \xE9tage`},{h:"N\xE9gocier au march\xE9",dlg:`Toi|\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|an ni thao dai?|Combien, celui-ci ?
Vendeuse|\u0EC1\u0EAA\u0E99\u0EAA\u0EAD\u0E87|saen song|120 000.
Toi|\u0EC1\u0E9E\u0E87\u0EC2\u0E9E\u0E94! \u0EAB\u0EBC\u0EB8\u0E94\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|phaeng phot! loud dai bo?|Trop cher ! Vous pouvez baisser ?
Vendeuse|\u0EC1\u0EAA\u0E99\u0EDC\u0EB6\u0EC8\u0E87\u0EC0\u0EAD\u0EBB\u0EB2\u0E9A\u0ECD?|saen neung ao bo?|100 000, \xE7a va ?
Toi|\u0EC1\u0E9B\u0E94\u0EAA\u0EB4\u0E9A\u0E9E\u0EB1\u0E99\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|paet sip phan dai bo?|80 000, c'est possible ?
Vendeuse|\u0EC0\u0E81\u0EBB\u0EC9\u0EB2\u0EAA\u0EB4\u0E9A\u0E9E\u0EB1\u0E99, \u0EA5\u0EB2\u0E84\u0EB2\u0EAA\u0EB8\u0E94\u0E97\u0EC9\u0EB2\u0E8D|kao sip phan, lakha sout thai|90 000, dernier prix.
Toi|\u0EC2\u0EAD\u0EC0\u0E84, \u0EC0\u0EAD\u0EBB\u0EB2|o khe, ao|OK, je le prends.`}]}]});var K,Q=h(()=>{"use strict";K=[{id:"temps",lvl:"A2",icon:"\u{1F570}\uFE0F",t:"L'heure, les jours, les mois",goal:"Dire l'heure \xE0 la lao (le syst\xE8me en 4 tranches), les jours, les mois et fixer un moment.",blocks:[{h:"Le syst\xE8me traditionnel : la journ\xE9e en tranches",p:`\xC0 l'oral, les Lao d\xE9coupent la journ\xE9e en <b>tranches</b>, chacune avec son mot. Le syst\xE8me 24 h (<i>\u0EC2\u0EA1\u0E87</i> + nombre) existe, mais c'est le syst\xE8me en tranches que tu entendras partout.
<div class="tbl"><table><tr><th>Heures</th><th>Formule</th><th>Exemple</th></tr><tr><td>6h \u2013 11h</td><td>X \u0EC2\u0EA1\u0E87\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2 (matin)</td><td>\u0EC1\u0E9B\u0E94\u0EC2\u0EA1\u0E87\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2 = 8h</td></tr><tr><td>12h</td><td>\u0E97\u0EC8\u0EBD\u0E87 / \u0E97\u0EC8\u0EBD\u0E87\u0EA7\u0EB1\u0E99 (midi)</td><td>\u0E97\u0EC8\u0EBD\u0E87</td></tr><tr><td>13h \u2013 15h</td><td>\u0E9A\u0EC8\u0EB2\u0E8D X \u0EC2\u0EA1\u0E87 (apr\xE8s-midi)</td><td>\u0E9A\u0EC8\u0EB2\u0E8D\u0EAA\u0EAD\u0E87\u0EC2\u0EA1\u0E87 = 14h</td></tr><tr><td>16h \u2013 18h</td><td>X \u0EC2\u0EA1\u0E87\u0EC1\u0EA5\u0E87 (fin d'apr\xE8s-midi)</td><td>\u0EAB\u0EBB\u0E81\u0EC2\u0EA1\u0E87\u0EC1\u0EA5\u0E87 = 18h</td></tr><tr><td>19h \u2013 23h</td><td>X \u0E97\u0EB8\u0EC8\u0EA1 (soir, on recompte de 1)</td><td>\u0EAA\u0EAD\u0E87\u0E97\u0EB8\u0EC8\u0EA1 = 20h</td></tr><tr><td>0h</td><td>\u0E97\u0EC8\u0EBD\u0E87\u0E84\u0EB7\u0E99 (minuit)</td><td>\u0E97\u0EC8\u0EBD\u0E87\u0E84\u0EB7\u0E99</td></tr><tr><td>1h \u2013 5h</td><td>\u0E95\u0EB5 X (nuit, \xAB frapper \xBB)</td><td>\u0E95\u0EB5\u0EAA\u0EB2\u0EA1 = 3h</td></tr></table></div>`},{h:"Dire l'heure",ex:`\u0E88\u0EB1\u0E81\u0EC2\u0EA1\u0E87\u0EC1\u0EA5\u0EC9\u0EA7?|jak mong laeo?|quelle heure est-il ?
\u0EC0\u0E88\u0EB1\u0E94\u0EC2\u0EA1\u0E87\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2|jet mong xao|7h du matin
\u0EAA\u0EB4\u0E9A\u0EC2\u0EA1\u0E87\u0EC0\u0E84\u0EB4\u0EC8\u0E87|sip mong kheung|10h30
\u0E97\u0EC8\u0EBD\u0E87|thiang|midi
\u0E9A\u0EC8\u0EB2\u0E8D\u0EC2\u0EA1\u0E87|bai mong|13h
\u0E9A\u0EC8\u0EB2\u0E8D\u0EAA\u0EB2\u0EA1\u0EC2\u0EA1\u0E87|bai sam mong|15h
\u0EAB\u0EC9\u0EB2\u0EC2\u0EA1\u0E87\u0EC1\u0EA5\u0E87|ha mong laeng|17h
\u0EDC\u0EB6\u0EC8\u0E87\u0E97\u0EB8\u0EC8\u0EA1|neung thoum|19h
\u0EAA\u0EB2\u0EA1\u0E97\u0EB8\u0EC8\u0EA1|sam thoum|21h
\u0E95\u0EB5\u0EAA\u0EAD\u0E87|ti song|2h du matin
\u0EC1\u0E9B\u0E94\u0EC2\u0EA1\u0E87\u0EAA\u0EB4\u0E9A\u0EAB\u0EC9\u0EB2\u0E99\u0EB2\u0E97\u0EB5|paet mong sip ha nathi|8h15`,warn:"Ne dis pas \xAB \u0EAA\u0EB4\u0E9A\u0EC0\u0E81\u0EBB\u0EC9\u0EB2\u0EC2\u0EA1\u0E87 \xBB (19h) \xE0 l'oral : on te comprendra, mais un Lao dira \u0EDC\u0EB6\u0EC8\u0E87\u0E97\u0EB8\u0EC8\u0EA1. Le 24h s'utilise surtout pour les horaires officiels (bus, avion)."},{h:"Les moments de la journ\xE9e",ex:`\u0E95\u0EAD\u0E99\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2|ton xao|le matin
\u0E95\u0EAD\u0E99\u0E97\u0EC8\u0EBD\u0E87|ton thiang|\xE0 midi
\u0E95\u0EAD\u0E99\u0E9A\u0EC8\u0EB2\u0E8D|ton bai|l'apr\xE8s-midi
\u0E95\u0EAD\u0E99\u0EC1\u0EA5\u0E87|ton laeng|en fin de journ\xE9e
\u0E95\u0EAD\u0E99\u0E84\u0EC8\u0EB3|ton kham|le soir (cr\xE9puscule)
\u0E81\u0EB2\u0E87\u0E84\u0EB7\u0E99|kang kheun|la nuit
\u0EA1\u0EB7\u0EC9\u0E99\u0EB5\u0EC9|meu ni|aujourd'hui
\u0EA1\u0EB7\u0EC9\u0EA7\u0EB2\u0E99|meu van|hier
\u0EA1\u0EB7\u0EC9\u0EAD\u0EB7\u0EC8\u0E99|meu eun|demain
\u0EA1\u0EB7\u0EC9\u0EAE\u0EB7|meu heu|apr\xE8s-demain`},{h:"Les jours de la semaine",p:"Tous commencent par <b>\u0EA7\u0EB1\u0E99</b> (van, jour), avec un nom d'origine sanskrite (plan\xE8tes).",ex:`\u0EA7\u0EB1\u0E99\u0E88\u0EB1\u0E99|van jan|lundi
\u0EA7\u0EB1\u0E99\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99|van angkhan|mardi
\u0EA7\u0EB1\u0E99\u0E9E\u0EB8\u0E94|van phout|mercredi
\u0EA7\u0EB1\u0E99\u0E9E\u0EB0\u0EAB\u0EB1\u0E94|van phahat|jeudi
\u0EA7\u0EB1\u0E99\u0EAA\u0EB8\u0E81|van souk|vendredi
\u0EA7\u0EB1\u0E99\u0EC0\u0EAA\u0EBB\u0EB2|van sao|samedi
\u0EA7\u0EB1\u0E99\u0EAD\u0EB2\u0E97\u0EB4\u0E94|van athit|dimanche
\u0EAD\u0EB2\u0E97\u0EB4\u0E94\u0EDC\u0EC9\u0EB2|athit na|la semaine prochaine
\u0EAD\u0EB2\u0E97\u0EB4\u0E94\u0EC1\u0EA5\u0EC9\u0EA7|athit laeo|la semaine derni\xE8re`},{h:"Les 12 mois",ex:`\u0EA1\u0EB1\u0E87\u0E81\u0EAD\u0E99|mangkon|janvier
\u0E81\u0EB8\u0EA1\u0E9E\u0EB2|koumpha|f\xE9vrier
\u0EA1\u0EB5\u0E99\u0EB2|mina|mars
\u0EC0\u0EA1\u0EAA\u0EB2|mesa|avril
\u0E9E\u0EB6\u0E94\u0EAA\u0EB0\u0E9E\u0EB2|pheutsapha|mai
\u0EA1\u0EB4\u0E96\u0EB8\u0E99\u0EB2|mithouna|juin
\u0E81\u0ECD\u0EA5\u0EB0\u0E81\u0EBB\u0E94|kolakot|juillet
\u0EAA\u0EB4\u0E87\u0EAB\u0EB2|singha|ao\xFBt
\u0E81\u0EB1\u0E99\u0E8D\u0EB2|kanya|septembre
\u0E95\u0EB8\u0EA5\u0EB2|toula|octobre
\u0E9E\u0EB0\u0E88\u0EB4\u0E81|phajik|novembre
\u0E97\u0EB1\u0E99\u0EA7\u0EB2|thanva|d\xE9cembre`,tip:"Avril (\u0EC0\u0EA1\u0EAA\u0EB2) = Pi Mai, le Nouvel An lao (14-16 avril) : trois jours de batailles d'eau dans tout le pays. R\xE9serve tout \xE0 l'avance !"},{h:"Fixer un rendez-vous",dlg:`Kham|\u0EA1\u0EB7\u0EC9\u0EAD\u0EB7\u0EC8\u0E99\u0EA7\u0EC8\u0EB2\u0E87\u0E9A\u0ECD?|meu eun vang bo?|Tu es libre demain ?
Toi|\u0E95\u0EAD\u0E99\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2\u0E9A\u0ECD\u0EC8\u0EA7\u0EC8\u0EB2\u0E87, \u0E95\u0EAD\u0E99\u0E9A\u0EC8\u0EB2\u0E8D\u0EA7\u0EC8\u0EB2\u0E87|ton xao bo vang, ton bai vang|Pas le matin, mais l'apr\xE8s-midi oui.
Kham|\u0E9A\u0EC8\u0EB2\u0E8D\u0EAA\u0EB2\u0EA1\u0EC2\u0EA1\u0E87\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|bai sam mong dai bo?|15h, \xE7a va ?
Toi|\u0EC4\u0E94\u0EC9. \u0E9E\u0EBB\u0E9A\u0E81\u0EB1\u0E99\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA?|dai. phop kan you sai?|D'accord. On se retrouve o\xF9 ?
Kham|\u0EA2\u0EB9\u0EC8\u0EAE\u0EC9\u0EB2\u0E99\u0E81\u0EB2\u0EC0\u0E9F\u0EC1\u0E84\u0EA1\u0E82\u0EAD\u0E87|you han kafe khaem khong|Au caf\xE9 au bord du M\xE9kong.
Toi|\u0EC2\u0EAD\u0EC0\u0E84, \u0EC1\u0EA5\u0EC9\u0EA7\u0E9E\u0EBB\u0E9A\u0E81\u0EB1\u0E99!|o khe, laeo phop kan!|OK, \xE0 demain !`}]},{id:"classificateurs",lvl:"A2",icon:"\u{1F3F7}\uFE0F",t:"Les classificateurs",goal:"Compter n'importe quoi gr\xE2ce aux classificateurs, et utiliser \xAB ce \xBB, \xAB ce\u2026-l\xE0 \xBB.",blocks:[{h:"Le principe",p:"En lao, on ne dit pas \xAB 2 chats \xBB, mais <b>\xAB chat 2 corps \xBB</b>. Le classificateur d\xE9pend de la forme ou de la nature de l'objet. Ordre : <b>nom + nombre + classificateur</b>.",ex:`\u0EC1\u0EA1\u0EA7\u0EAA\u0EAD\u0E87\u0EC2\u0E95|maeo song to|deux chats
\u0EC0\u0E9A\u0E8D\u0EAA\u0EB2\u0EA1\u0EC1\u0E81\u0EC9\u0EA7|bia sam kaeo|trois bi\xE8res (verres)
\u0EC0\u0E9A\u0E8D\u0EAA\u0EAD\u0E87\u0E95\u0EB8\u0E81|bia song touk|deux bi\xE8res (bouteilles)
\u0E84\u0EBB\u0E99\u0EAB\u0EC9\u0EB2\u0E84\u0EBB\u0E99|khon ha khon|cinq personnes`},{h:"Les 12 indispensables",ex:`\u0E84\u0EBB\u0E99|khon|personnes
\u0EC2\u0E95|to|animaux, v\xEAtements, meubles, lettres
\u0EAD\u0EB1\u0E99|an|objets en g\xE9n\xE9ral (joker !)
\u0EDC\u0EC8\u0EA7\u0E8D|nouay|objets ronds, fruits, appareils, pays
\u0E84\u0EB1\u0E99|khan|v\xE9hicules, parapluies, cuill\xE8res
\u0EAB\u0EBC\u0EB1\u0E87|lang|maisons, b\xE2timents
\u0EAB\u0EBB\u0EA7|houa|livres
\u0EC1\u0E81\u0EC9\u0EA7|kaeo|verres
\u0E96\u0EC9\u0EA7\u0E8D|thouay|bols, tasses
\u0E88\u0EB2\u0E99|jan|assiettes, plats
\u0EAB\u0EC9\u0EAD\u0E87|hong|pi\xE8ces, chambres
\u0EC3\u0E9A|bai|feuilles, billets, tickets, sacs`},{h:"Le \xAB un \xBB se place apr\xE8s",p:"Pour \xAB un \xBB, le nombre \u0EDC\u0EB6\u0EC8\u0E87 se met <b>apr\xE8s</b> le classificateur : \xAB une personne \xBB = \u0E84\u0EBB\u0E99\u0EDC\u0EB6\u0EC8\u0E87. Et souvent, on le supprime.",ex:`\u0EDD\u0EB2\u0EC2\u0E95\u0EDC\u0EB6\u0EC8\u0E87|ma to neung|un chien
\u0EC0\u0EAD\u0EBB\u0EB2\u0EC0\u0E9D\u0EB5\u0E96\u0EC9\u0EA7\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|ao feu thouay neung|une soupe, s'il vous pla\xEEt
\u0EC0\u0EAD\u0EBB\u0EB2\u0E96\u0EC9\u0EA7\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|ao thouay neung|un bol (de \xE7a)`},{h:"Ce, cette, ce\u2026-l\xE0",p:"<b>Nom + classificateur + \u0E99\u0EB5\u0EC9 / \u0E99\u0EB1\u0EC9\u0E99 / \u0E9E\u0EB8\u0EC9\u0E99</b> (ici, l\xE0, l\xE0-bas au loin).",ex:`\u0EA5\u0EBB\u0E94\u0E84\u0EB1\u0E99\u0E99\u0EB5\u0EC9|lot khan ni|cette voiture-ci
\u0EC0\u0EAE\u0EB7\u0EAD\u0E99\u0EAB\u0EBC\u0EB1\u0E87\u0E99\u0EB1\u0EC9\u0E99|heuan lang nan|cette maison-l\xE0
\u0E84\u0EBB\u0E99\u0E99\u0EB1\u0EC9\u0E99\u0EC1\u0EA1\u0EC8\u0E99\u0EC3\u0E9C?|khon nan maen phai?|qui est cette personne ?
\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9|an ni|ceci
\u0EAD\u0EB1\u0E99\u0E99\u0EB1\u0EC9\u0E99|an nan|cela
\u0EAD\u0EB1\u0E99\u0E9E\u0EB8\u0EC9\u0E99|an phoun|celui-l\xE0, l\xE0-bas
\u0EC0\u0EAD\u0EBB\u0EB2\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9|ao an ni|je prends celui-ci`},{h:"Combien ? (\u0E88\u0EB1\u0E81 + classificateur)",ex:`\u0EA1\u0EB5\u0E88\u0EB1\u0E81\u0E84\u0EBB\u0E99?|mi jak khon?|vous \xEAtes combien ?
\u0EC0\u0EAD\u0EBB\u0EB2\u0E88\u0EB1\u0E81\u0E88\u0EB2\u0E99?|ao jak jan?|combien d'assiettes ?
\u0EA1\u0EB5\u0EA5\u0EBB\u0E94\u0E88\u0EB1\u0E81\u0E84\u0EB1\u0E99?|mi lot jak khan?|combien de voitures ?
\u0E97\u0EB8\u0E81\u0E84\u0EBB\u0E99|thouk khon|tout le monde
\u0E9A\u0EB2\u0E87\u0E84\u0EBB\u0E99|bang khon|certaines personnes`,tip:"Tu as oubli\xE9 le classificateur ? Utilise \u0EAD\u0EB1\u0E99 (an) pour les objets et \u0EC2\u0E95 (to) pour les animaux. On te comprendra toujours."}]},{id:"resto",lvl:"A2",icon:"\u{1F35C}",t:"Au restaurant",goal:"Commander, demander moins piment\xE9, comprendre la carte et payer.",blocks:[{h:"Commander : \u0EC0\u0EAD\u0EBB\u0EB2 \u2026 \u0EC1\u0E94\u0EC8",p:"La formule cl\xE9 : <b>\u0EC0\u0EAD\u0EBB\u0EB2</b> (ao, prendre) + plat + <b>\u0EC1\u0E94\u0EC8</b> (dae, s'il te pla\xEEt, adoucisseur).",ex:`\u0E99\u0EC9\u0EAD\u0E87!|nong!|(appeler le serveur)
\u0E82\u0ECD\u0EC0\u0EA1\u0E99\u0EB9\u0EC1\u0E94\u0EC8|kho menou dae|la carte, s'il vous pla\xEEt
\u0EC0\u0EAD\u0EBB\u0EB2\u0EC0\u0E9D\u0EB5\u0EDC\u0EB6\u0EC8\u0E87\u0E96\u0EC9\u0EA7\u0E8D|ao feu neung thouay|une soupe de nouilles
\u0EC0\u0EAD\u0EBB\u0EB2\u0EA5\u0EB2\u0E9A\u0EC4\u0E81\u0EC8\u0EC1\u0E94\u0EC8|ao lap kai dae|un larb de poulet, s'il vous pla\xEEt
\u0EC0\u0EAD\u0EBB\u0EB2\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7\u0EAA\u0EAD\u0E87\u0E81\u0EB0\u0E95\u0EB4\u0E9A|ao khao niao song katip|deux paniers de riz gluant
\u0EC0\u0EAD\u0EBB\u0EB2\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9|ao an ni|je prends \xE7a (en pointant)
\u0EA1\u0EB5\u0EAB\u0E8D\u0EB1\u0E87\u0EC1\u0E99\u0EB0\u0E99\u0EB3\u0E9A\u0ECD?|mi nyang nae nam bo?|vous recommandez quoi ?`},{h:"Le piment !",ex:`\u0EC0\u0E9C\u0EB1\u0E94\u0E9A\u0ECD?|phet bo?|c'est piquant ?
\u0E9A\u0ECD\u0EC8\u0EC0\u0EAD\u0EBB\u0EB2\u0EC0\u0E9C\u0EB1\u0E94|bo ao phet|sans piment
\u0EC0\u0E9C\u0EB1\u0E94\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|phet noy neung|un peu piquant
\u0EC0\u0E9C\u0EB1\u0E94\u0E81\u0EB2\u0E87|phet kang|moyennement piquant
\u0E81\u0EB4\u0E99\u0EC0\u0E9C\u0EB1\u0E94\u0E9A\u0ECD\u0EC8\u0EC4\u0E94\u0EC9|kin phet bo dai|je ne supporte pas le piment
\u0EC0\u0E9C\u0EB1\u0E94\u0EAB\u0EBC\u0EB2\u0E8D!|phet lai!|tr\xE8s piquant !`,warn:"\xAB Un peu \xBB piquant pour un Lao = tr\xE8s piquant pour un Europ\xE9en. Commence par \u0E9A\u0ECD\u0EC8\u0EC0\u0EAD\u0EBB\u0EB2\u0EC0\u0E9C\u0EB1\u0E94, et ajoute du piment toi-m\xEAme."},{h:"Les plats \xE0 conna\xEEtre",ex:`\u0EA5\u0EB2\u0E9A|lap|larb, salade de viande hach\xE9e aux herbes
\u0E95\u0EB3\u0EDD\u0EB2\u0E81\u0EAB\u0EB8\u0EC8\u0E87|tam mak houng|salade de papaye pil\xE9e
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7|khao niao|riz gluant
\u0EC0\u0E9D\u0EB5|feu|soupe de nouilles (pho lao)
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0E9B\u0EB8\u0EC9\u0E99|khao poun|vermicelles sauce coco
\u0E9B\u0EB5\u0EC9\u0E87\u0EC4\u0E81\u0EC8|ping kai|poulet grill\xE9
\u0EC0\u0EAD\u0EB2\u0EB0\u0EA5\u0EB2\u0EA1|o lam|rago\xFBt de Luang Prabang
\u0EC1\u0E88\u0EC8\u0EA7\u0E9A\u0EAD\u0E87|jaeo bong|p\xE2te de piment
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0E88\u0EB5\u0EC8|khao ji|sandwich baguette
\u0EC4\u0EAA\u0EC9\u0EAD\u0EBB\u0EC8\u0EA7|sai oua|saucisse lao`},{h:"Boire",ex:`\u0E99\u0EC9\u0EB3\u0EC0\u0E9B\u0EBB\u0EC8\u0EB2|nam pao|eau plate
\u0E99\u0EC9\u0EB3\u0E81\u0EC9\u0EAD\u0E99|nam kon|gla\xE7ons
\u0E9A\u0ECD\u0EC8\u0EC3\u0EAA\u0EC8\u0E99\u0EC9\u0EB3\u0E81\u0EC9\u0EAD\u0E99|bo sai nam kon|sans gla\xE7ons
\u0EC0\u0E9A\u0E8D\u0EA5\u0EB2\u0EA7|bia lao|Beerlao
\u0E81\u0EB2\u0EC0\u0E9F\u0EA5\u0EB2\u0EA7|kafe lao|caf\xE9 lao (avec lait concentr\xE9)
\u0E81\u0EB2\u0EC0\u0E9F\u0E94\u0EB3|kafe dam|caf\xE9 noir
\u0E99\u0EC9\u0EB3\u0EDD\u0EB2\u0E81\u0E9E\u0EC9\u0EB2\u0EA7|nam mak phao|eau de coco
\u0EDD\u0EBB\u0E94\u0EC1\u0E81\u0EC9\u0EA7!|mot kaeo!|cul sec !
\u0E95\u0EC9\u0EB2\u0E99!|tan!|sant\xE9 !`},{h:"Exprimer ton avis et payer",ex:`\u0EC1\u0E8A\u0E9A\u0EAB\u0EBC\u0EB2\u0E8D!|xaep lai!|tr\xE8s bon !
\u0EC1\u0E8A\u0E9A\u0E8A\u0EC9\u0EAD\u0E8D|xaep xoy|super d\xE9licieux (familier)
\u0EAD\u0EB5\u0EC8\u0EA1\u0EC1\u0EA5\u0EC9\u0EA7|im laeo|je n'ai plus faim
\u0EC4\u0EA5\u0EC8\u0EC0\u0E87\u0EB4\u0E99\u0EC1\u0E94\u0EC8|lai ngeun dae|l'addition, s'il vous pla\xEEt
\u0EC0\u0E81\u0EB1\u0E9A\u0EC0\u0E87\u0EB4\u0E99\u0EC1\u0E94\u0EC8|kep ngeun dae|l'addition (autre fa\xE7on)
\u0E97\u0EB1\u0E87\u0EDD\u0EBB\u0E94\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|thang mot thao dai?|\xE7a fait combien en tout ?
\u0EAB\u0ECD\u0EC8\u0E81\u0EB1\u0E9A\u0E9A\u0EC9\u0EB2\u0E99\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|ho kap ban dai bo?|je peux emporter ?`,tip:"Le riz gluant se mange avec la main droite : forme une petite boule, puis trempe-la dans les plats. Ne remets jamais le riz entam\xE9 dans le panier commun."},{h:"Dialogue au restaurant",dlg:`Serveuse|\u0EC0\u0EAD\u0EBB\u0EB2\u0EAB\u0E8D\u0EB1\u0E87?|ao nyang?|Qu'est-ce que vous prenez ?
Toi|\u0EC0\u0EAD\u0EBB\u0EB2\u0E95\u0EB3\u0EDD\u0EB2\u0E81\u0EAB\u0EB8\u0EC8\u0E87\u0EDC\u0EB6\u0EC8\u0E87\u0E88\u0EB2\u0E99, \u0E9A\u0ECD\u0EC8\u0EC0\u0EAD\u0EBB\u0EB2\u0EC0\u0E9C\u0EB1\u0E94\u0EC0\u0E94\u0EB5\u0EC9|ao tam mak houng neung jan, bo ao phet de|Une salade de papaye, sans piment hein.
Serveuse|\u0EC3\u0EAA\u0EC8\u0E9B\u0EB2\u0EC1\u0E94\u0E81\u0E9A\u0ECD?|sai pa daek bo?|Avec de la sauce de poisson ferment\xE9 ?
Toi|\u0EC3\u0EAA\u0EC8\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87. \u0EC1\u0EA5\u0EB0\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7\u0E81\u0EB0\u0E95\u0EB4\u0E9A\u0EDC\u0EB6\u0EC8\u0E87|sai noy neung. lae khao niao katip neung|Un peu. Et un panier de riz gluant.
Serveuse|\u0E94\u0EB7\u0EC8\u0EA1\u0EAB\u0E8D\u0EB1\u0E87\u0E9A\u0ECD?|deum nyang bo?|Vous buvez quelque chose ?
Toi|\u0EC0\u0E9A\u0E8D\u0EA5\u0EB2\u0EA7\u0EDC\u0EB6\u0EC8\u0E87\u0E95\u0EB8\u0E81, \u0EC3\u0EAA\u0EC8\u0E99\u0EC9\u0EB3\u0E81\u0EC9\u0EAD\u0E99|bia lao neung touk, sai nam kon|Une Beerlao, avec gla\xE7ons.`}]},{id:"marche",lvl:"A2",icon:"\u{1F6CD}\uFE0F",t:"Au march\xE9",goal:"Acheter, choisir, comparer les prix et n\xE9gocier avec le sourire.",blocks:[{h:"Les verbes d'achat",ex:`\u0E8A\u0EB7\u0EC9|xeu|acheter
\u0E82\u0EB2\u0E8D|khai|vendre
\u0EA1\u0EB5 \u2026 \u0E82\u0EB2\u0E8D\u0E9A\u0ECD?|mi \u2026 khai bo?|vous vendez \u2026 ?
\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0E81\u0EC8\u0EAD\u0E99|beung kon|je regarde d'abord
\u0EA5\u0EAD\u0E87\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|long dai bo?|je peux essayer ?
\u0EC0\u0EAD\u0EBB\u0EB2\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9|ao an ni|je prends celui-ci
\u0E9A\u0ECD\u0EC8\u0EC0\u0EAD\u0EBB\u0EB2|bo ao|je n'en veux pas`},{h:"Prix et n\xE9gociation",ex:`\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|thao dai?|combien ?
\u0E81\u0EB4\u0EC2\u0EA5\u0EA5\u0EB0\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|kilo la thao dai?|combien le kilo ?
\u0EC1\u0E9E\u0E87|phaeng|cher
\u0E96\u0EB7\u0E81|theuk|bon march\xE9
\u0EC1\u0E9E\u0E87\u0EC2\u0E9E\u0E94|phaeng phot|trop cher
\u0EAB\u0EBC\u0EB8\u0E94\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|loud dai bo?|vous pouvez baisser ?
\u0EAB\u0EBC\u0EB8\u0E94\u0EC3\u0EAB\u0EC9\u0EC1\u0E94\u0EC8|loud hai dae|faites-moi une r\xE9duction
\u0EA5\u0EB2\u0E84\u0EB2\u0EAA\u0EB8\u0E94\u0E97\u0EC9\u0EB2\u0E8D|lakha sout thai|dernier prix`,tip:"N\xE9gocie au march\xE9 et pour les souvenirs, pas dans les \xE9piceries ni pour la nourriture \xE0 prix fixe. Toujours avec un sourire : une n\xE9gociation agressive fait \xAB perdre la face \xBB. Si \xE7a bloque, remercie et pars ; souvent on te rappelle !"},{h:"Tailles, couleurs, quantit\xE9s",ex:`\u0EC3\u0EAB\u0E8D\u0EC8|nyai|grand
\u0E99\u0EC9\u0EAD\u0E8D|noy|petit
\u0EA1\u0EB5\u0EC3\u0EAB\u0E8D\u0EC8\u0E81\u0EA7\u0EC8\u0EB2\u0E99\u0EB5\u0EC9\u0E9A\u0ECD?|mi nyai kwa ni bo?|vous avez plus grand ?
\u0EA1\u0EB5\u0EAA\u0EB5\u0EAD\u0EB7\u0EC8\u0E99\u0E9A\u0ECD?|mi si eun bo?|vous avez d'autres couleurs ?
\u0EC0\u0E84\u0EB4\u0EC8\u0E87\u0E81\u0EB4\u0EC2\u0EA5|kheung kilo|un demi-kilo
\u0EAD\u0EB5\u0E81\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|ik noy neung|encore un peu
\u0E9E\u0ECD\u0EC1\u0EA5\u0EC9\u0EA7|pho laeo|\xE7a suffit`},{h:"Fruits du march\xE9",ex:`\u0EDD\u0EB2\u0E81\u0EA1\u0EC8\u0EA7\u0E87|mak mouang|mangue
\u0EDD\u0EB2\u0E81\u0E81\u0EC9\u0EA7\u0E8D|mak kouay|banane
\u0EDD\u0EB2\u0E81\u0E99\u0EB1\u0E94|mak nat|ananas
\u0EDD\u0EB2\u0E81\u0EC2\u0EA1|mak mo|past\xE8que
\u0EDD\u0EB2\u0E81\u0E9E\u0EC9\u0EB2\u0EA7|mak phao|noix de coco
\u0EDD\u0EB2\u0E81\u0E82\u0EB2\u0EA1|mak kham|tamarin
\u0EDD\u0EB2\u0E81\u0E87\u0EB2\u0EA1|mak ngam|rambutan`,tip:"\u0EDD\u0EB2\u0E81 (mak) = \xAB fruit \xBB : il pr\xE9c\xE8de presque tous les noms de fruits. Tu le reconna\xEEtras sur tous les \xE9tals."},{h:"Dialogue : acheter des mangues",dlg:`Toi|\u0EC0\u0EAD\u0EB7\u0EC9\u0EAD\u0E8D, \u0EDD\u0EB2\u0E81\u0EA1\u0EC8\u0EA7\u0E87\u0E81\u0EB4\u0EC2\u0EA5\u0EA5\u0EB0\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|euay, mak mouang kilo la thao dai?|Grande s\u0153ur, combien le kilo de mangues ?
Vendeuse|\u0E81\u0EB4\u0EC2\u0EA5\u0EA5\u0EB0\u0E8A\u0EB2\u0EA7\u0E9E\u0EB1\u0E99|kilo la xao phan|20 000 le kilo.
Toi|\u0EAB\u0EA7\u0EB2\u0E99\u0E9A\u0ECD?|van bo?|Elles sont sucr\xE9es ?
Vendeuse|\u0EAB\u0EA7\u0EB2\u0E99\u0EAB\u0EBC\u0EB2\u0E8D! \u0EA5\u0EAD\u0E87\u0E8A\u0EB5\u0EA1\u0EC0\u0E9A\u0EB4\u0EC8\u0E87|van lai! long xim beung|Tr\xE8s ! Go\xFBte.
Toi|\u0EC1\u0E8A\u0E9A\u0EC1\u0E97\u0EC9. \u0EC0\u0EAD\u0EBB\u0EB2\u0EAA\u0EAD\u0E87\u0E81\u0EB4\u0EC2\u0EA5, \u0EAA\u0EB2\u0EA1\u0EAA\u0EB4\u0E9A\u0EAB\u0EC9\u0EB2\u0E9E\u0EB1\u0E99\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|xaep thae. ao song kilo, sam sip ha phan dai bo?|D\xE9licieux. Deux kilos pour 35 000 ?
Vendeuse|\u0EC4\u0E94\u0EC9, \u0EC0\u0EAD\u0EBB\u0EB2\u0EC4\u0E9B|dai, ao pai|D'accord, c'est pour toi.`}]},{id:"transport",lvl:"A2",icon:"\u{1F6FA}",t:"Se d\xE9placer",goal:"Prendre un tuk-tuk, demander son chemin, comprendre les directions.",blocks:[{h:"Les transports",ex:`\u0EA5\u0EBB\u0E94\u0E95\u0EB8\u0E81\u0E95\u0EB8\u0E81|lot touk touk|tuk-tuk
\u0EA5\u0EBB\u0E94\u0E88\u0EB3\u0EC2\u0E9A\u0EC9|lot jambo|grand tuk-tuk
\u0EA5\u0EBB\u0E94\u0EC0\u0EA1|lot me|bus
\u0EA5\u0EBB\u0E94\u0EC4\u0E9F|lot fai|train
\u0EC0\u0EAE\u0EB7\u0EAD\u0E9A\u0EB4\u0E99|heua bin|avion
\u0EC0\u0EAE\u0EB7\u0EAD|heua|bateau
\u0EA5\u0EBB\u0E94\u0E88\u0EB1\u0E81|lot jak|moto, scooter
\u0EA5\u0EBB\u0E94\u0E96\u0EB5\u0E9A|lot thip|v\xE9lo
\u0EAA\u0EB0\u0E96\u0EB2\u0E99\u0EB5\u0EA5\u0EBB\u0E94\u0EC0\u0EA1|sathani lot me|gare routi\xE8re
\u0EAA\u0EB0\u0EDC\u0EB2\u0EA1\u0E9A\u0EB4\u0E99|sanam bin|a\xE9roport`},{h:"Prendre un tuk-tuk",p:"N\xE9gocie <b>toujours le prix avant de monter</b>. Pour LOCA, Grab ou \xE9quivalent, le prix est fix\xE9 \xE0 l'avance.",ex:`\u0EC4\u0E9B\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|pai talat xao thao dai?|combien pour le march\xE9 du matin ?
\u0EC4\u0E9B\u0EAA\u0EB0\u0EDC\u0EB2\u0EA1\u0E9A\u0EB4\u0E99|pai sanam bin|\xE0 l'a\xE9roport
\u0E88\u0EAD\u0E94\u0EA2\u0EB9\u0EC8\u0E99\u0EB5\u0EC9|jot you ni|arr\xEAtez-vous ici
\u0E88\u0EAD\u0E94\u0EC1\u0E94\u0EC8|jot dae|arr\xEAtez-vous, s'il vous pla\xEEt
\u0EC4\u0E9B\u0E8A\u0EC9\u0EB2\u0EC6\u0EC1\u0E94\u0EC8|pai xa xa dae|plus lentement, s'il vous pla\xEEt
\u0EAE\u0EAD\u0E94\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD?|hot laeo bo?|on est arriv\xE9s ?`},{h:"Les directions",ex:`\u0EC4\u0E9B\u0E8A\u0EB7\u0EC8\u0EC6|pai xeu xeu|tout droit
\u0EA5\u0EC9\u0EBD\u0EA7\u0E8A\u0EC9\u0EB2\u0E8D|liao xai|tournez \xE0 gauche
\u0EA5\u0EC9\u0EBD\u0EA7\u0E82\u0EA7\u0EB2|liao khoua|tournez \xE0 droite
\u0E81\u0EB1\u0E9A\u0EA5\u0EBB\u0E94|kap lot|faites demi-tour
\u0EA2\u0EB9\u0EC8\u0E97\u0EB2\u0E87\u0E8A\u0EC9\u0EB2\u0E8D|you thang xai|\xE0 gauche
\u0E81\u0EBB\u0E87\u0E81\u0EB1\u0E99\u0E82\u0EC9\u0EB2\u0EA1|kong kan kham|en face
\u0E97\u0EB2\u0E87\u0EC1\u0E8D\u0E81|thang nyaek|carrefour
\u0EC4\u0E9F\u0EC1\u0E94\u0E87|fai daeng|feu rouge
\u0EC3\u0E81\u0EC9 (\u0EC3\u0E81\u0EC9\u0EC6)|kai (kai kai)|pr\xE8s (\u2260 \u0EC4\u0E81 loin)
\u0EC4\u0E81|kai|loin (\u2260 \u0EC3\u0E81\u0EC9 pr\xE8s)`,warn:"\u0EC3\u0E81\u0EC9 (pr\xE8s) et \u0EC4\u0E81 (loin) se romanisent pareil, mais le ton est oppos\xE9 : \u0EC3\u0E81\u0EC9 est descendant et bref, \u0EC4\u0E81 est montant. \xC9coute-les 10 fois de suite ! En cas de doute, ajoute un geste."},{h:"Demander son chemin",ex:`\u2026 \u0EA2\u0EB9\u0EC8\u0EC3\u0EAA?|\u2026 you sai?|o\xF9 est \u2026 ?
\u0EC4\u0E9B \u2026 \u0EC1\u0E99\u0EA7\u0EC3\u0E94?|pai \u2026 naeo dai?|comment aller \xE0 \u2026 ?
\u0EC4\u0E81\u0E9A\u0ECD?|kai bo?|c'est loin ?
\u0E8D\u0EC8\u0EB2\u0E87\u0EC4\u0E9B\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|nyang pai dai bo?|on peut y aller \xE0 pied ?
\u0EC3\u0E8A\u0EC9\u0EC0\u0EA7\u0EA5\u0EB2\u0E94\u0EBB\u0E99\u0E9A\u0ECD?|xai vela don bo?|\xE7a prend longtemps ?
\u0EAB\u0EBC\u0EBB\u0E87\u0E97\u0EB2\u0E87|long thang|je suis perdu`},{h:"Dialogue avec un chauffeur",dlg:`Toi|\u0EA5\u0EB8\u0E87, \u0EC4\u0E9B\u0EA7\u0EB1\u0E94\u0EAA\u0EB5\u0EAA\u0EB0\u0EC0\u0E81\u0E94\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|loung, pai vat sisaket thao dai?|Oncle, combien pour le Vat Sisaket ?
Chauffeur|\u0EAA\u0EB2\u0EA1\u0EAA\u0EB4\u0E9A\u0E9E\u0EB1\u0E99|sam sip phan|30 000.
Toi|\u0E8A\u0EB2\u0EA7\u0E9E\u0EB1\u0E99\u0EC4\u0E94\u0EC9\u0E9A\u0ECD? \u0EC3\u0E81\u0EC9\u0EC6\u0E99\u0EB5\u0EC9\u0EC0\u0EAD\u0E87|xao phan dai bo? kai kai ni eng|20 000 ? C'est tout pr\xE8s.
Chauffeur|\u0E8A\u0EB2\u0EA7\u0EAB\u0EC9\u0EB2\u0E9E\u0EB1\u0E99, \u0E82\u0EB6\u0EC9\u0E99\u0EA1\u0EB2|xao ha phan, kheun ma|25 000, montez.
Toi|\u0EC2\u0EAD\u0EC0\u0E84. \u0EA5\u0EC9\u0EBD\u0EA7\u0E82\u0EA7\u0EB2\u0EA2\u0EB9\u0EC8\u0E97\u0EB2\u0E87\u0EC1\u0E8D\u0E81\u0EC0\u0E94\u0EB5\u0EC9|o khe. liao khoua you thang nyaek de|OK. Tournez \xE0 droite au carrefour.
Chauffeur|\u0EAE\u0EAD\u0E94\u0EC1\u0EA5\u0EC9\u0EA7!|hot laeo!|On est arriv\xE9s !`}]},{id:"hotel",lvl:"A2",icon:"\u{1F3E8}",t:"\xC0 l'h\xF4tel",goal:"R\xE9server une chambre, poser des questions pratiques et r\xE9gler un probl\xE8me.",blocks:[{h:"R\xE9server",ex:`\u0EA1\u0EB5\u0EAB\u0EC9\u0EAD\u0E87\u0EA7\u0EC8\u0EB2\u0E87\u0E9A\u0ECD?|mi hong vang bo?|vous avez une chambre libre ?
\u0EAB\u0EC9\u0EAD\u0E87\u0E95\u0EBD\u0E87\u0E94\u0EBD\u0EA7|hong tiang diao|chambre \xE0 un lit
\u0EAB\u0EC9\u0EAD\u0E87\u0E95\u0EBD\u0E87\u0E84\u0EB9\u0EC8|hong tiang khou|chambre \xE0 deux lits
\u0E84\u0EB7\u0E99\u0EDC\u0EB6\u0EC8\u0E87\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|kheun neung thao dai?|combien la nuit ?
\u0E9E\u0EB1\u0E81\u0EAA\u0EB2\u0EA1\u0E84\u0EB7\u0E99|phak sam kheun|je reste trois nuits
\u0EA5\u0EA7\u0EA1\u0EAD\u0EB2\u0EAB\u0EB2\u0E99\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2\u0E9A\u0ECD?|louam ahan xao bo?|petit-d\xE9jeuner inclus ?
\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0EAB\u0EC9\u0EAD\u0E87\u0E81\u0EC8\u0EAD\u0E99\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|beung hong kon dai bo?|je peux voir la chambre ?`},{h:"Les \xE9quipements",ex:`\u0EC1\u0EAD|ae|climatisation
\u0E9E\u0EB1\u0E94\u0EA5\u0EBB\u0EA1|phat lom|ventilateur
\u0E99\u0EC9\u0EB3\u0EAE\u0EC9\u0EAD\u0E99|nam hon|eau chaude
\u0EA7\u0EB2\u0E8D\u0E9F\u0EB2\u0E8D|vai fai|wifi
\u0EA5\u0EB0\u0EAB\u0EB1\u0E94\u0EA7\u0EB2\u0E8D\u0E9F\u0EB2\u0E8D\u0EC1\u0EA1\u0EC8\u0E99\u0EAB\u0E8D\u0EB1\u0E87?|lahat vai fai maen nyang?|quel est le code wifi ?
\u0E81\u0EB0\u0EC1\u0E88|kachae|cl\xE9
\u0E9C\u0EC9\u0EB2\u0EC0\u0E8A\u0EB1\u0E94\u0EC2\u0E95|pha xet to|serviette`},{h:"Signaler un probl\xE8me",ex:`\u0EC1\u0EAD\u0E9A\u0ECD\u0EC8\u0EC0\u0EA2\u0EB1\u0E99|ae bo yen|la clim ne refroidit pas
\u0E9A\u0ECD\u0EC8\u0EA1\u0EB5\u0E99\u0EC9\u0EB3\u0EAE\u0EC9\u0EAD\u0E99|bo mi nam hon|pas d'eau chaude
\u0EC4\u0E9F\u0E94\u0EB1\u0E9A|fai dap|la lumi\xE8re ne marche plus / coupure
\u0EA7\u0EB2\u0E8D\u0E9F\u0EB2\u0E8D\u0EC3\u0E8A\u0EC9\u0E9A\u0ECD\u0EC8\u0EC4\u0E94\u0EC9|vai fai xai bo dai|le wifi ne marche pas
\u0EA1\u0EB5\u0E8D\u0EB8\u0E87\u0EAB\u0EBC\u0EB2\u0E8D|mi nyoung lai|il y a beaucoup de moustiques
\u0E9B\u0EC8\u0EBD\u0E99\u0EAB\u0EC9\u0EAD\u0E87\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|pian hong dai bo?|je peux changer de chambre ?`,tip:"Exprime un probl\xE8me calmement, avec le sourire et \u0EC1\u0E94\u0EC8. Hausser le ton fait perdre la face aux deux parties et bloque toute solution. Ici, la douceur est toujours plus efficace."},{h:"Le d\xE9part",ex:`\u0EC0\u0E8A\u0EB1\u0E81\u0EC0\u0EAD\u0EBB\u0EB2\u0E81\u0EB5\u0EC8\u0EC2\u0EA1\u0E87?|xek ao ki mong?|le check-out est \xE0 quelle heure ?
\u0E9D\u0EB2\u0E81\u0E81\u0EB0\u0EC0\u0E9B\u0EBB\u0EB2\u0EC4\u0EA7\u0EC9\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|fak kapao vai dai bo?|je peux laisser mes bagages ?
\u0EC0\u0EAD\u0EB5\u0EC9\u0E99\u0EA5\u0EBB\u0E94\u0EC3\u0EAB\u0EC9\u0EC1\u0E94\u0EC8|eun lot hai dae|appelez-moi un taxi, s'il vous pla\xEEt`},{h:"Dialogue \xE0 la r\xE9ception",dlg:`Toi|\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D\u0E94\u0EB5, \u0EA1\u0EB5\u0EAB\u0EC9\u0EAD\u0E87\u0EA7\u0EC8\u0EB2\u0E87\u0E9A\u0ECD?|sabaidi, mi hong vang bo?|Bonjour, vous avez une chambre ?
R\xE9ception|\u0EA1\u0EB5. \u0E88\u0EB1\u0E81\u0E84\u0EBB\u0E99?|mi. jak khon?|Oui. Pour combien de personnes ?
Toi|\u0EAA\u0EAD\u0E87\u0E84\u0EBB\u0E99, \u0E95\u0EBD\u0E87\u0E84\u0EB9\u0EC8. \u0E84\u0EB7\u0E99\u0EDC\u0EB6\u0EC8\u0E87\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94?|song khon, tiang khou. kheun neung thao dai?|Deux, lits jumeaux. Combien la nuit ?
R\xE9ception|\u0EAA\u0EAD\u0E87\u0EC1\u0EAA\u0E99\u0E81\u0EB5\u0E9A, \u0EA5\u0EA7\u0EA1\u0EAD\u0EB2\u0EAB\u0EB2\u0E99\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2|song saen kip, louam ahan xao|200 000 kips, petit-d\xE9jeuner inclus.
Toi|\u0EA1\u0EB5\u0EC1\u0EAD\u0E9A\u0ECD?|mi ae bo?|Il y a la clim ?
R\xE9ception|\u0EA1\u0EB5. \u0E99\u0EB5\u0EC9\u0E81\u0EB0\u0EC1\u0E88, \u0EAB\u0EC9\u0EAD\u0E87\u0EAA\u0EAD\u0E87\u0EAA\u0EB9\u0E99\u0EAB\u0EC9\u0EB2|mi. ni kachae, hong song soun ha|Oui. Voici la cl\xE9, chambre 205.`}]},{id:"sante",lvl:"A2",icon:"\u{1F48A}",t:"Sant\xE9 et pharmacie",goal:"Expliquer un sympt\xF4me, acheter des m\xE9dicaments et g\xE9rer une urgence.",blocks:[{h:"O\xF9 aller",ex:`\u0EC2\u0EAE\u0E87\u0EDD\u0ECD|hong mo|h\xF4pital
\u0E84\u0EA5\u0EB5\u0E99\u0EB4\u0E81|khlinik|clinique
\u0EAE\u0EC9\u0EB2\u0E99\u0E82\u0EB2\u0E8D\u0EA2\u0EB2|han khai ya|pharmacie
\u0E97\u0EC8\u0EB2\u0E99\u0EDD\u0ECD|than mo|m\xE9decin
\u0EDD\u0ECD\u0EC1\u0E82\u0EC9\u0EA7|mo khaeo|dentiste
\u0EA5\u0EBB\u0E94\u0EC2\u0EAE\u0E87\u0EDD\u0ECD|lot hong mo|ambulance`},{h:"Dire o\xF9 on a mal : \u0EC0\u0E88\u0EB1\u0E9A + partie du corps",ex:`\u0EC0\u0E88\u0EB1\u0E9A\u0EAB\u0EBB\u0EA7|jep houa|j'ai mal \xE0 la t\xEAte
\u0EC0\u0E88\u0EB1\u0E9A\u0E97\u0EC9\u0EAD\u0E87|jep thong|j'ai mal au ventre
\u0EC0\u0E88\u0EB1\u0E9A\u0E84\u0ECD|jep kho|j'ai mal \xE0 la gorge
\u0EC0\u0E88\u0EB1\u0E9A\u0EC1\u0E82\u0EC9\u0EA7|jep khaeo|j'ai mal aux dents
\u0EC0\u0E88\u0EB1\u0E9A\u0EAB\u0EBC\u0EB1\u0E87|jep lang|j'ai mal au dos
\u0EC0\u0E88\u0EB1\u0E9A\u0EA2\u0EB9\u0EC8\u0E99\u0EB5\u0EC9|jep you ni|j'ai mal ici`},{h:"Les sympt\xF4mes",ex:`\u0EC0\u0E9B\u0EB1\u0E99\u0EC4\u0E82\u0EC9|pen khai|avoir de la fi\xE8vre
\u0E96\u0EAD\u0E81\u0E97\u0EC9\u0EAD\u0E87|thok thong|avoir la diarrh\xE9e
\u0EAE\u0EB2\u0E81|hak|vomir
\u0EC4\u0EAD|ai|tousser
\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0EA7\u0EB1\u0E94|pen vat|\xEAtre enrhum\xE9
\u0EA7\u0EB4\u0E99\u0EAB\u0EBB\u0EA7|vin houa|avoir des vertiges
\u0EC1\u0E9E\u0EC9|phae|\xEAtre allergique
\u0EC1\u0E9E\u0EC9\u0EA2\u0EB2|phae ya|allergique aux m\xE9dicaments
\u0E8D\u0EB8\u0E87\u0E81\u0EB1\u0E94|nyoung kat|piq\xFBre de moustique`},{h:"\xC0 la pharmacie",ex:`\u0EA1\u0EB5\u0EA2\u0EB2\u0EC1\u0E81\u0EC9\u0EC0\u0E88\u0EB1\u0E9A\u0EAB\u0EBB\u0EA7\u0E9A\u0ECD?|mi ya kae jep houa bo?|vous avez un m\xE9dicament contre le mal de t\xEAte ?
\u0EA2\u0EB2\u0EC1\u0E81\u0EC9\u0EC4\u0E82\u0EC9|ya kae khai|m\xE9dicament contre la fi\xE8vre
\u0E81\u0EB4\u0E99\u0EA1\u0EB7\u0EC9\u0EA5\u0EB0\u0E88\u0EB1\u0E81\u0EC0\u0E97\u0EB7\u0EC8\u0EAD?|kin meu la jak theua?|combien de fois par jour ?
\u0E81\u0EB4\u0E99\u0EA1\u0EB7\u0EC9\u0EA5\u0EB0\u0EAA\u0EB2\u0EA1\u0EC0\u0E97\u0EB7\u0EC8\u0EAD\u0EAB\u0EBC\u0EB1\u0E87\u0EAD\u0EB2\u0EAB\u0EB2\u0E99|kin meu la sam theua lang ahan|trois fois par jour apr\xE8s les repas
\u0EA2\u0EB2\u0E81\u0EB1\u0E99\u0E8D\u0EB8\u0E87|ya kan nyoung|anti-moustique`,warn:"Pour toute fi\xE8vre forte apr\xE8s une piq\xFBre de moustique (dengue, paludisme), consulte un m\xE9decin rapidement. Les h\xF4pitaux de Vientiane sont limit\xE9s : pour les cas graves, on traverse souvent vers Nong Khai ou Udon Thani en Tha\xEFlande."},{h:"Urgences",ex:`\u0E8A\u0EC8\u0EA7\u0E8D\u0EC1\u0E94\u0EC8!|xouay dae!|\xE0 l'aide !
\u0EC2\u0E97\u0EAB\u0EB2\u0EA5\u0EBB\u0E94\u0EC2\u0EAE\u0E87\u0EDD\u0ECD\u0EC1\u0E94\u0EC8|tho ha lot hong mo dae|appelez une ambulance
\u0EC0\u0E81\u0EB5\u0E94\u0EAD\u0EB8\u0E9A\u0EB1\u0E94\u0E95\u0EB4\u0EC0\u0EAB\u0E94|keut oubattihet|il y a eu un accident
\u0E82\u0EC9\u0EAD\u0E8D\u0E9A\u0ECD\u0EC8\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D|khoy bo sabai|je suis malade
\u0E94\u0EC8\u0EA7\u0E99!|douan!|urgent !`},{h:"Dialogue \xE0 la pharmacie",dlg:`Pharmacienne|\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87?|pen nyang?|Qu'est-ce qui ne va pas ?
Toi|\u0E96\u0EAD\u0E81\u0E97\u0EC9\u0EAD\u0E87 \u0EC1\u0E95\u0EC8\u0EA1\u0EB7\u0EC9\u0EA7\u0EB2\u0E99|thok thong tae meu van|J'ai la diarrh\xE9e depuis hier.
Pharmacienne|\u0EC0\u0E9B\u0EB1\u0E99\u0EC4\u0E82\u0EC9\u0E99\u0EB3\u0E9A\u0ECD?|pen khai nam bo?|Vous avez aussi de la fi\xE8vre ?
Toi|\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99, \u0EC1\u0E95\u0EC8\u0EC0\u0E88\u0EB1\u0E9A\u0E97\u0EC9\u0EAD\u0E87\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|bo pen, tae jep thong noy neung|Non, mais un peu mal au ventre.
Pharmacienne|\u0E81\u0EB4\u0E99\u0EA2\u0EB2\u0E99\u0EB5\u0EC9\u0EA1\u0EB7\u0EC9\u0EA5\u0EB0\u0EAA\u0EAD\u0E87\u0EC0\u0E97\u0EB7\u0EC8\u0EAD, \u0E94\u0EB7\u0EC8\u0EA1\u0E99\u0EC9\u0EB3\u0EAB\u0EBC\u0EB2\u0E8D\u0EC6|kin ya ni meu la song theua, deum nam lai lai|Prenez \xE7a deux fois par jour, et buvez beaucoup.
Toi|\u0E82\u0EAD\u0E9A\u0EC3\u0E88\u0EAB\u0EBC\u0EB2\u0E8D\u0EC6|khop jai lai lai|Merci beaucoup.`}]}]});var F,_=h(()=>{"use strict";F=[{id:"particules",lvl:"B1",icon:"\u2728",t:"Les particules : l'\xE2me de l'oral",goal:"Ma\xEEtriser les particules de fin de phrase qui donnent ton, \xE9motion et politesse.",blocks:[{h:"Pourquoi c'est essentiel",p:"Une phrase lao sans particule sonne <b>s\xE8che, voire impolie</b>, comme un t\xE9l\xE9gramme. Les particules de fin de phrase ne changent pas le sens : elles ajoutent <b>l'\xE9motion, la douceur, l'insistance</b>. C'est ce qui fait sonner un \xE9tranger \xAB naturel \xBB."},{h:"Douceur et politesse",ex:`\u0EC1\u0E94\u0EC8|dae|s'il te pla\xEEt (adoucit une demande)
\u0EC0\u0E94\u0EB5\u0EC9|de|hein, d'accord ? (chaleureux, tr\xE8s courant)
\u0EC0\u0E99\u0EB2\u0EB0|no|n'est-ce pas ? (recherche d'accord)
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2|jao|particule polie (surtout f\xE9minine)
\u0E8A\u0EC8\u0EA7\u0E8D\u0EC1\u0E94\u0EC8|xouay dae|aide-moi, s'il te pla\xEEt
\u0EC4\u0E9B\u0E81\u0EC8\u0EAD\u0E99\u0EC0\u0E94\u0EB5\u0EC9|pai kon de|j'y vais, hein
\u0EA1\u0EB7\u0EC9\u0E99\u0EB5\u0EC9\u0EAE\u0EC9\u0EAD\u0E99\u0EC0\u0E99\u0EB2\u0EB0|meu ni hon no|il fait chaud aujourd'hui, hein ?`},{h:"Insistance et \xE9motion",ex:`\u0EC1\u0E97\u0EC9|thae|vraiment
\u0EC1\u0E97\u0EC9\u0EC6|thae thae|vraiment vraiment
\u0EC2\u0E9E\u0E94|phot|trop (excessif)
\u0EAB\u0EBC\u0EB2\u0E8D|lai|tr\xE8s, beaucoup
\u0EC1\u0E8A\u0E9A\u0EC1\u0E97\u0EC9\u0EC6|xaep thae thae|vraiment d\xE9licieux
\u0E87\u0EB2\u0EA1\u0EAB\u0EBC\u0EB2\u0E8D\u0EC0\u0E99\u0EB2\u0EB0|ngam lai no|c'est tr\xE8s beau, hein
\u0EC1\u0EA1\u0EC8\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|maen laeo|exactement !`},{h:"Question, surprise, impatience",ex:`\u0E9A\u0ECD|bo|? (question oui/non)
\u0EC0\u0E9A\u0EB2\u0EB0|bo|ah bon ? (surprise, v\xE9rification)
\u0E95\u0EB5\u0EC9|ti|n'est-ce pas ? (confirmation)
\u0EC1\u0EA1\u0EC8\u0E99\u0E9A\u0ECD|maen bo|c'est \xE7a ?
\u0E8A\u0EB1\u0EC9\u0E99\u0E9A\u0ECD?|xan bo?|ah, c'est comme \xE7a ?
\u0EC1\u0E97\u0EC9\u0E9A\u0ECD?|thae bo?|vraiment ?
\u0EC0\u0EAD\u0EB5|eu|euh, oui (h\xE9sitation, accord)
\u0EC2\u0EAD\u0EC9\u0E8D!|oy!|a\xEFe ! oh l\xE0 l\xE0 !`,warn:"Particules et intonation se combinent : \u0EC4\u0E9B\u0EC0\u0E9A\u0EB2\u0EB0 (tu y vas, vraiment ?) n'a pas le m\xEAme effet que \u0EC4\u0E9B\u0E9A\u0ECD (tu y vas ?). \xC9coute comment les Lao les utilisent avant de les g\xE9n\xE9raliser."},{h:"Ordres et invitations",ex:`\u0EC0\u0EA5\u0EB5\u0E8D|leuy|vas-y ! (encouragement)
\u0E81\u0EB4\u0E99\u0EC0\u0EA5\u0EB5\u0E8D|kin leuy|mange donc !
\u0EA1\u0EB2\u0EC0\u0EA5\u0EB5\u0E8D|ma leuy|viens donc !
\u0EAA\u0EB2|sa|donc (adoucit un ordre)
\u0EC4\u0E9B\u0EAA\u0EB2|pai sa|vas-y donc
\u0EC0\u0E97\u0EB2\u0EB0|tho|allez, faisons\u2026 (proposition)
\u0EC4\u0E9B\u0EC0\u0E97\u0EB2\u0EB0|pai tho|allez, on y va`},{h:"Dialogue : l'oral naturel",dlg:`Bee|\u0EA1\u0EB7\u0EC9\u0E99\u0EB5\u0EC9\u0EAE\u0EC9\u0EAD\u0E99\u0EC1\u0E97\u0EC9\u0EC0\u0E99\u0EB2\u0EB0|meu ni hon thae no|Il fait vraiment chaud aujourd'hui, hein !
Toi|\u0EC1\u0EA1\u0EC8\u0E99\u0EC1\u0EA5\u0EC9\u0EA7, \u0EAE\u0EC9\u0EAD\u0E99\u0EC2\u0E9E\u0E94!|maen laeo, hon phot!|Grave, beaucoup trop chaud !
Bee|\u0EC4\u0E9B\u0E81\u0EB4\u0E99\u0E99\u0EC9\u0EB3\u0E9B\u0EB1\u0EC8\u0E99\u0EC0\u0E97\u0EB2\u0EB0|pai kin nam pan tho|Allez, on va boire un smoothie.
Toi|\u0E94\u0EB5\u0EC0\u0EA5\u0EB5\u0E8D! \u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0E88\u0EC8\u0EB2\u0E8D\u0EC0\u0E9A\u0EB2\u0EB0?|di leuy! jao jai bo?|Super ! C'est toi qui paies, alors ?
Bee|\u0EAE\u0EC8\u0EB2\u0EC6\u0EC6 \u0EC0\u0EAD\u0EB5, \u0EA1\u0EB2\u0EC0\u0EA5\u0EB5\u0E8D|ha ha ha, eu, ma leuy|Haha, ok, viens !`}]},{id:"comparer",lvl:"B1",icon:"\u2696\uFE0F",t:"Comparer et d\xE9crire",goal:"Comparer, exprimer le superlatif, l'\xE9galit\xE9 et d\xE9crire avec nuance.",blocks:[{h:"Plus que : \u0E81\u0EA7\u0EC8\u0EB2",p:"Adjectif + <b>\u0E81\u0EA7\u0EC8\u0EB2</b> (kwa) + \xE9l\xE9ment compar\xE9.",ex:`\u0EC3\u0EAB\u0E8D\u0EC8\u0E81\u0EA7\u0EC8\u0EB2|nyai kwa|plus grand
\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0E96\u0EB7\u0E81\u0E81\u0EA7\u0EC8\u0EB2|an ni theuk kwa|celui-ci est moins cher
\u0EA5\u0EB2\u0EA7\u0EAA\u0EB9\u0E87\u0E81\u0EA7\u0EC8\u0EB2\u0E82\u0EC9\u0EAD\u0E8D|lao soung kwa khoy|il est plus grand que moi
\u0E94\u0EB5\u0E81\u0EA7\u0EC8\u0EB2|di kwa|mieux
\u0EAB\u0EBC\u0EA7\u0E87\u0E9E\u0EB0\u0E9A\u0EB2\u0E87\u0E87\u0EB2\u0EA1\u0E81\u0EA7\u0EC8\u0EB2|louang phabang ngam kwa|Luang Prabang est plus beau`},{h:"Le plus : \u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94",ex:`\u0E94\u0EB5\u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94|di thi sout|le meilleur
\u0EC1\u0E9E\u0E87\u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94|phaeng thi sout|le plus cher
\u0EAE\u0EC9\u0EB2\u0E99\u0E99\u0EB5\u0EC9\u0EC1\u0E8A\u0E9A\u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94|han ni xaep thi sout|ce resto est le meilleur
\u0EAA\u0EB8\u0E94\u0E8D\u0EAD\u0E94|sout nyot|g\xE9nial, au top`},{h:"\xC9galit\xE9 et similitude",ex:`\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0E81\u0EB1\u0E99|thao kan|autant, pareil (quantit\xE9)
\u0E84\u0EB7\u0E81\u0EB1\u0E99|kheu kan|pareil, identique
\u0E84\u0EB7 \u2026|kheu \u2026|comme \u2026
\u0E9A\u0ECD\u0EC8\u0E84\u0EB7\u0E81\u0EB1\u0E99|bo kheu kan|diff\xE9rent
\u0EAA\u0EB9\u0E87\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0E81\u0EB1\u0E99|soung thao kan|aussi grand
\u0E82\u0EC9\u0EAD\u0E8D\u0E81\u0ECD\u0E84\u0EB7\u0E81\u0EB1\u0E99|khoy ko kheu kan|moi aussi`},{h:"Nuancer : les intensificateurs",ex:`\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|noy neung|un peu
\u0E9E\u0ECD\u0EAA\u0EBB\u0EA1\u0E84\u0EA7\u0E99|pho som khouan|assez, plut\xF4t
\u0EAB\u0EBC\u0EB2\u0E8D|lai|tr\xE8s
\u0EC1\u0E97\u0EC9\u0EC6|thae thae|vraiment
\u0EC2\u0E9E\u0E94|phot|trop
\u0E84\u0EB1\u0E81|khak|super (familier)
\u0E9A\u0ECD\u0EC8\u0E9B\u0EB2\u0E99\u0EC3\u0E94|bo pan dai|pas tellement
\u0E9A\u0ECD\u0EC8\u0E84\u0EC8\u0EAD\u0E8D|bo khoy|pas trop, pas vraiment`,tip:"\u0E9A\u0ECD\u0EC8\u0E84\u0EC8\u0EAD\u0E8D + adjectif est la fa\xE7on polie de dire \xAB non \xBB : \xAB \u0E9A\u0ECD\u0EC8\u0E84\u0EC8\u0EAD\u0E8D\u0EC1\u0E8A\u0E9A \xBB (pas terrible) au lieu de \xAB \u0E9A\u0ECD\u0EC8\u0EC1\u0E8A\u0E9A \xBB (pas bon), trop direct."},{h:"Redoubler : l'adjectif doux",p:"Redoubler un adjectif avec <b>\u0EC6</b> adoucit ou intensifie selon le contexte, tr\xE8s courant \xE0 l'oral.",ex:`\u0E8A\u0EC9\u0EB2\u0EC6|xa xa|tout doucement
\u0E94\u0EB5\u0EC6|di di|bien, comme il faut
\u0E99\u0EC9\u0EAD\u0E8D\u0EC6|noy noy|tout petit
\u0EC3\u0E81\u0EC9\u0EC6|kai kai|tout pr\xE8s`},{h:"Dialogue : choisir un h\xF4tel",dlg:`Toi|\u0EC2\u0EAE\u0E87\u0EC1\u0EAE\u0EA1\u0EC3\u0E94\u0E94\u0EB5\u0E81\u0EA7\u0EC8\u0EB2?|hong haem dai di kwa?|Quel h\xF4tel est le mieux ?
Ami|\u0EAD\u0EB1\u0E99\u0E99\u0EB5\u0EC9\u0E96\u0EB7\u0E81\u0E81\u0EA7\u0EC8\u0EB2 \u0EC1\u0E95\u0EC8\u0EC4\u0E81\u0E81\u0EA7\u0EC8\u0EB2|an ni theuk kwa tae kai kwa|Celui-ci est moins cher, mais plus loin.
Toi|\u0EAD\u0EB1\u0E99\u0E99\u0EB1\u0EC9\u0E99\u0EC0\u0E94?|an nan de?|Et celui-l\xE0 ?
Ami|\u0EC1\u0E9E\u0E87\u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94 \u0EC1\u0E95\u0EC8\u0E87\u0EB2\u0EA1\u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94|phaeng thi sout tae ngam thi sout|Le plus cher, mais le plus beau.
Toi|\u0EC0\u0EAD\u0EBB\u0EB2\u0EAD\u0EB1\u0E99\u0E97\u0EB5\u0EC8\u0EC3\u0E81\u0EC9\u0E81\u0EA7\u0EC8\u0EB2\u0EC0\u0E97\u0EB2\u0EB0|ao an thi kai kwa tho|Prenons le plus proche.`}]},{id:"verbes-serie",lvl:"B1",icon:"\u{1F517}",t:"Les verbes en s\xE9rie",goal:"Encha\xEEner plusieurs verbes comme un Lao, et ma\xEEtriser les directions \u0EC4\u0E9B/\u0EA1\u0EB2.",blocks:[{h:"Plusieurs verbes sans liaison",p:"Le lao encha\xEEne les verbes <b>sans \xAB et \xBB, sans \xAB pour \xBB</b>, dans l'ordre chronologique des actions.",ex:`\u0EC4\u0E9B\u0E8A\u0EB7\u0EC9\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|pai xeu khao|aller acheter du riz
\u0EA1\u0EB2\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0E99\u0EB3\u0E81\u0EB1\u0E99|ma kin khao nam kan|viens manger avec nous
\u0E8D\u0EC8\u0EB2\u0E87\u0EC4\u0E9B\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94|nyang pai talat|aller au march\xE9 \xE0 pied
\u0E82\u0EB5\u0EC8\u0EA5\u0EBB\u0E94\u0E88\u0EB1\u0E81\u0EC4\u0E9B\u0EC0\u0EAE\u0EB1\u0E94\u0EA7\u0EBD\u0E81|khi lot jak pai het viak|aller au travail en scooter
\u0EC4\u0E9B\u0EAD\u0EB2\u0E9A\u0E99\u0EC9\u0EB3\u0E81\u0EC8\u0EAD\u0E99|pai ap nam kon|va d'abord te doucher`},{h:"\u0EC4\u0E9B et \u0EA1\u0EB2 : la direction",p:"Plac\xE9s <b>apr\xE8s</b> un verbe, \u0EC4\u0E9B (aller) et \u0EA1\u0EB2 (venir) indiquent si l'action s'\xE9loigne ou se rapproche du locuteur.",ex:`\u0EC0\u0EAD\u0EBB\u0EB2\u0EA1\u0EB2|ao ma|apporte (vers moi)
\u0EC0\u0EAD\u0EBB\u0EB2\u0EC4\u0E9B|ao pai|emporte (loin de moi)
\u0EC2\u0E97\u0EA1\u0EB2|tho ma|appelle-moi
\u0EC2\u0E97\u0EC4\u0E9B|tho pai|appeler (quelqu'un)
\u0E8D\u0EC8\u0EB2\u0E87\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EA1\u0EB2|nyang khao ma|entrer en marchant (vers ici)
\u0EC1\u0EA5\u0EC8\u0E99\u0EAD\u0EAD\u0E81\u0EC4\u0E9B|laen ok pai|sortir en courant`},{h:"\u0EC3\u0EAB\u0EC9 : donner, laisser, faire faire",ex:`\u0EC3\u0EAB\u0EC9|hai|donner
\u0EC3\u0EAB\u0EC9\u0EC0\u0E87\u0EB4\u0E99\u0EA5\u0EB2\u0EA7|hai ngeun lao|lui donner de l'argent
\u0E8A\u0EB7\u0EC9\u0EC3\u0EAB\u0EC9\u0EC1\u0EA1\u0EC8|xeu hai mae|acheter pour maman
\u0EAA\u0EAD\u0E99\u0EC3\u0EAB\u0EC9\u0E82\u0EC9\u0EAD\u0E8D|son hai khoy|m'apprendre
\u0EC3\u0EAB\u0EC9\u0EA5\u0EB2\u0EA7\u0EA1\u0EB2|hai lao ma|le faire venir
\u0E9A\u0EAD\u0E81\u0EC3\u0EAB\u0EC9\u0EA5\u0EB2\u0EA7\u0EA5\u0ECD|bok hai lao lo|dis-lui d'attendre`},{h:"Les verbes r\xE9sultatifs",p:"Verbe + r\xE9sultat. Avec \u0E9A\u0ECD\u0EC8 au milieu : \xAB on essaie mais on n'y arrive pas \xBB.",ex:`\u0E9F\u0EB1\u0E87\u0EAD\u0EAD\u0E81|fang ok|comprendre (en \xE9coutant)
\u0E9F\u0EB1\u0E87\u0E9A\u0ECD\u0EC8\u0EAD\u0EAD\u0E81|fang bo ok|ne pas comprendre (\xE0 l'oral)
\u0EAD\u0EC8\u0EB2\u0E99\u0EAD\u0EAD\u0E81|an ok|arriver \xE0 lire
\u0E8A\u0EAD\u0E81\u0EC0\u0EAB\u0EB1\u0E99|xok hen|trouver (en cherchant)
\u0E8A\u0EAD\u0E81\u0E9A\u0ECD\u0EC8\u0EC0\u0EAB\u0EB1\u0E99|xok bo hen|chercher sans trouver
\u0E81\u0EB4\u0E99\u0E9A\u0ECD\u0EC8\u0EDD\u0EBB\u0E94|kin bo mot|ne pas r\xE9ussir \xE0 tout finir
\u0E99\u0EAD\u0E99\u0E9A\u0ECD\u0EC8\u0EAB\u0EBC\u0EB1\u0E9A|non bo lap|ne pas arriver \xE0 dormir`,tip:"\xAB \u0E9F\u0EB1\u0E87\u0E9A\u0ECD\u0EC8\u0EAD\u0EAD\u0E81 \xBB (je n'entends pas / je ne comprends pas ce que tu dis) est une phrase de survie bien plus naturelle que \xAB \u0E9A\u0ECD\u0EC8\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC3\u0E88 \xBB."},{h:"\u0EC4\u0EA7\u0EC9 et \u0EC4\u0E9B/\u0EC1\u0EA5\u0EC9\u0EA7 pour l'aspect",ex:`\u0E88\u0EB7\u0EC8\u0EC4\u0EA7\u0EC9|jeu vai|retiens bien (garde en m\xE9moire)
\u0EC0\u0E81\u0EB1\u0E9A\u0EC4\u0EA7\u0EC9|kep vai|garde-le de c\xF4t\xE9
\u0E88\u0EAD\u0E87\u0EC4\u0EA7\u0EC9|jong vai|r\xE9server \xE0 l'avance
\u0EA5\u0EB7\u0EA1\u0EC4\u0E9B\u0EC1\u0EA5\u0EC9\u0EA7|leum pai laeo|j'ai oubli\xE9
\u0EDD\u0EBB\u0E94\u0EC4\u0E9B\u0EC1\u0EA5\u0EC9\u0EA7|mot pai laeo|c'est \xE9puis\xE9`}]},{id:"conjonctions",lvl:"B1",icon:"\u{1F309}",t:"Relier les id\xE9es",goal:"Construire des phrases complexes : cause, condition, opposition, temps.",blocks:[{h:"Et, mais, ou",ex:`\u0EC1\u0EA5\u0EB0|lae|et (plut\xF4t \xE9crit)
\u0E81\u0EB1\u0E9A|kap|et, avec (oral)
\u0EC1\u0E95\u0EC8|tae|mais
\u0EC1\u0E95\u0EC8\u0EA7\u0EC8\u0EB2|tae va|mais (plus marqu\xE9)
\u0EAB\u0EBC\u0EB7|leu|ou
\u0EC1\u0EA5\u0EC9\u0EA7|laeo|et puis, ensuite
\u0E81\u0ECD|ko|aussi, alors (lien tr\xE8s fr\xE9quent)`},{h:"Cause et cons\xE9quence",ex:`\u0EC0\u0E9E\u0EB2\u0EB0\u0EA7\u0EC8\u0EB2|pho va|parce que
\u0E8D\u0EC9\u0EAD\u0E99\u0EA7\u0EC8\u0EB2|nyon va|\xE0 cause de, gr\xE2ce \xE0
\u0E94\u0EB1\u0EC8\u0E87\u0E99\u0EB1\u0EC9\u0E99|dang nan|c'est pourquoi, donc
\u0E81\u0ECD\u0EC0\u0EA5\u0EB5\u0E8D|ko leuy|du coup
\u0E9A\u0ECD\u0EC8\u0EC4\u0E9B \u0EC0\u0E9E\u0EB2\u0EB0\u0EA7\u0EC8\u0EB2\u0E9D\u0EBB\u0E99\u0E95\u0EBB\u0E81|bo pai pho va fon tok|je n'y vais pas parce qu'il pleut
\u0E9D\u0EBB\u0E99\u0E95\u0EBB\u0E81 \u0E81\u0ECD\u0EC0\u0EA5\u0EB5\u0E8D\u0E9A\u0ECD\u0EC8\u0EC4\u0E9B|fon tok ko leuy bo pai|il pleuvait, du coup je n'y suis pas all\xE9`},{h:"La condition : \u0E96\u0EC9\u0EB2 \u2026 \u0E81\u0ECD",p:"<b>\u0E96\u0EC9\u0EB2</b> (tha) = si, et <b>\u0E81\u0ECD</b> (ko) introduit la cons\xE9quence.",ex:`\u0E96\u0EC9\u0EB2\u0E9D\u0EBB\u0E99\u0E95\u0EBB\u0E81 \u0E81\u0ECD\u0E9A\u0ECD\u0EC8\u0EC4\u0E9B|tha fon tok ko bo pai|s'il pleut, je n'y vais pas
\u0E96\u0EC9\u0EB2\u0EA1\u0EB5\u0EC0\u0EA7\u0EA5\u0EB2 \u0E8A\u0EB4\u0EC4\u0E9B\u0EAB\u0EB2|tha mi vela xi pai ha|si j'ai le temps, je passerai te voir
\u0E96\u0EC9\u0EB2\u0E9A\u0ECD\u0EC8\u0EC1\u0E9E\u0E87 \u0E81\u0ECD\u0EC0\u0EAD\u0EBB\u0EB2|tha bo phaeng ko ao|si ce n'est pas cher, je le prends
\u0E96\u0EC9\u0EB2\u0E8A\u0EB1\u0EC9\u0E99|tha xan|dans ce cas, alors`},{h:"Le temps : quand, avant, apr\xE8s",ex:`\u0EC0\u0EA1\u0EB7\u0EC8\u0EAD|meua|quand (pass\xE9, \xE9crit)
\u0E95\u0EAD\u0E99\u0E97\u0EB5\u0EC8|ton thi|au moment o\xF9
\u0E81\u0EC8\u0EAD\u0E99\u0E97\u0EB5\u0EC8\u0E88\u0EB0|kon thi ja|avant de
\u0EAB\u0EBC\u0EB1\u0E87\u0E88\u0EB2\u0E81|lang jak|apr\xE8s
\u0E88\u0EBB\u0E99|jon|jusqu'\xE0 (ce que)
\u0E95\u0EB1\u0EC9\u0E87\u0EC1\u0E95\u0EC8|tang tae|depuis
\u0E95\u0EAD\u0E99\u0E97\u0EB5\u0EC8\u0E82\u0EC9\u0EAD\u0E8D\u0EA1\u0EB2\u0EAE\u0EAD\u0E94 \u0E9D\u0EBB\u0E99\u0E95\u0EBB\u0E81|ton thi khoy ma hot fon tok|quand je suis arriv\xE9, il pleuvait
\u0EA5\u0EC9\u0EB2\u0E87\u0EA1\u0EB7\u0E81\u0EC8\u0EAD\u0E99\u0E97\u0EB5\u0EC8\u0E88\u0EB0\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2|lang meu kon thi ja kin khao|lave-toi les mains avant de manger
\u0EAB\u0EBC\u0EB1\u0E87\u0E88\u0EB2\u0E81\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2 \u0EC4\u0E9B\u0E8D\u0EC8\u0EB2\u0E87\u0EAB\u0EBC\u0EB4\u0EC9\u0E99|lang jak kin khao pai nyang lin|apr\xE8s le repas, on va se promener`},{h:"L'opposition et la concession",ex:`\u0EC0\u0E96\u0EB4\u0E87\u0EA7\u0EC8\u0EB2 \u2026 \u0E81\u0ECD|theung va \u2026 ko|bien que, m\xEAme si
\u0EC0\u0E96\u0EB4\u0E87\u0EA7\u0EC8\u0EB2\u0EC1\u0E9E\u0E87 \u0E81\u0ECD\u0EA2\u0EB2\u0E81\u0EC4\u0E94\u0EC9|theung va phaeng ko yak dai|m\xEAme si c'est cher, je le veux
\u0EC1\u0E97\u0E99\u0E97\u0EB5\u0EC8\u0E88\u0EB0|thaen thi ja|au lieu de
\u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99 \u2026 \u0EC1\u0E95\u0EC8\u0EC1\u0EA1\u0EC8\u0E99|bo maen \u2026 tae maen|ce n'est pas \u2026 mais \u2026`},{h:"Relatives : \u0E97\u0EB5\u0EC8 (qui, que)",ex:`\u0E84\u0EBB\u0E99\u0E97\u0EB5\u0EC8\u0E82\u0EC9\u0EAD\u0E8D\u0EAE\u0EB1\u0E81|khon thi khoy hak|la personne que j'aime
\u0EAE\u0EC9\u0EB2\u0E99\u0E97\u0EB5\u0EC8\u0EC1\u0E8A\u0E9A\u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94|han thi xaep thi sout|le resto le plus d\xE9licieux
\u0E9A\u0EC8\u0EAD\u0E99\u0E97\u0EB5\u0EC8\u0E82\u0EC9\u0EAD\u0E8D\u0EC0\u0E81\u0EB5\u0E94|bon thi khoy keut|l'endroit o\xF9 je suis n\xE9
\u0EAA\u0EB4\u0EC8\u0E87\u0E97\u0EB5\u0EC8\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2|sing thi jao vao|ce que tu dis`},{h:"Dialogue : une excuse",dlg:`Lin|\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87\u0EA1\u0EB7\u0EC9\u0EA7\u0EB2\u0E99\u0E9A\u0ECD\u0EC8\u0EA1\u0EB2?|pen nyang meu van bo ma?|Pourquoi tu n'es pas venu hier ?
Toi|\u0E82\u0ECD\u0EC2\u0E97\u0E94\u0EC0\u0E94\u0EB5\u0EC9 \u0EC0\u0E9E\u0EB2\u0EB0\u0EA7\u0EC8\u0EB2\u0E9A\u0ECD\u0EC8\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D|kho thot de pho va bo sabai|D\xE9sol\xE9, j'\xE9tais malade.
Lin|\u0E96\u0EC9\u0EB2\u0E9A\u0ECD\u0EC8\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D \u0E81\u0ECD\u0EC2\u0E97\u0EA1\u0EB2\u0E9A\u0EAD\u0E81\u0EC1\u0E94\u0EC8|tha bo sabai ko tho ma bok dae|Si tu es malade, appelle pour pr\xE9venir.
Toi|\u0EC1\u0EA1\u0EC8\u0E99\u0EC1\u0EA5\u0EC9\u0EA7. \u0EC2\u0E97\u0EA5\u0EB0\u0EAA\u0EB1\u0E9A\u0EDD\u0EBB\u0E94\u0EC1\u0E9A\u0EB1\u0E94 \u0E81\u0ECD\u0EC0\u0EA5\u0EB5\u0E8D\u0EC2\u0E97\u0E9A\u0ECD\u0EC8\u0EC4\u0E94\u0EC9|maen laeo. tholasap mot baet ko leuy tho bo dai|Oui. Mon t\xE9l\xE9phone n'avait plus de batterie, du coup je n'ai pas pu.
Lin|\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87, \u0EA1\u0EB7\u0EC9\u0EAD\u0EB7\u0EC8\u0E99\u0EA1\u0EB2\u0EC0\u0E94\u0EB5\u0EC9|bo pen nyang, meu eun ma de|Pas grave, viens demain hein.`}]},{id:"telephone",lvl:"B1",icon:"\u{1F4F1}",t:"T\xE9l\xE9phone et messages",goal:"T\xE9l\xE9phoner, laisser un message, comprendre l'\xE9crit des messageries.",blocks:[{h:"Au t\xE9l\xE9phone",ex:`\u0EAD\u0EB2\u0EC2\u0EA5|alo|all\xF4
\u0E99\u0EB1\u0EC9\u0E99\u0EC1\u0EA1\u0EC8\u0E99\u0EC3\u0E9C?|nan maen phai?|qui est \xE0 l'appareil ?
\u0E82\u0ECD\u0EA5\u0EBB\u0EA1\u0E81\u0EB1\u0E9A \u2026 \u0EC1\u0E94\u0EC8|kho lom kap \u2026 dae|je voudrais parler \xE0 \u2026
\u0EA5\u0ECD\u0E96\u0EC9\u0EB2\u0E9A\u0EB6\u0E94\u0EDC\u0EB6\u0EC8\u0E87|lo tha beut neung|un instant, s'il vous pla\xEEt
\u0EA5\u0EB2\u0EA7\u0E9A\u0ECD\u0EC8\u0EA2\u0EB9\u0EC8|lao bo you|il/elle n'est pas l\xE0
\u0EAA\u0EBD\u0E87\u0E9A\u0ECD\u0EC8\u0E84\u0EC8\u0EAD\u0E8D\u0EC4\u0E94\u0EC9\u0E8D\u0EB4\u0E99|siang bo khoy dai nyin|je n'entends pas bien
\u0EC2\u0E97\u0EAB\u0EB2\u0EC3\u0EDD\u0EC8\u0EC1\u0E94\u0EC8|tho ha mai dae|rappelle-moi
\u0EA7\u0EB2\u0E87\u0EAA\u0EB2\u0E8D\u0E81\u0EC8\u0EAD\u0E99\u0EC0\u0E94\u0EB5\u0EC9|vang sai kon de|je raccroche, hein`},{h:"Rendez-vous",ex:`\u0E99\u0EB1\u0E94|nat|fixer un rendez-vous
\u0E99\u0EB1\u0E94\u0E9E\u0EBB\u0E9A\u0E81\u0EB1\u0E99|nat phop kan|se donner rendez-vous
\u0EC0\u0EA5\u0EB7\u0EC8\u0EAD\u0E99\u0E99\u0EB1\u0E94|leuan nat|reporter le rendez-vous
\u0EA1\u0EB2\u0E8A\u0EC9\u0EB2|ma xa|arriver en retard
\u0E8A\u0EB4\u0EC4\u0E9B\u0EAE\u0EAD\u0E94\u0EC3\u0E99\u0EAA\u0EB4\u0E9A\u0E99\u0EB2\u0E97\u0EB5|xi pai hot nai sip nathi|j'arrive dans 10 minutes
\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA\u0EC1\u0EA5\u0EC9\u0EA7?|you sai laeo?|tu es o\xF9, l\xE0 ?`,tip:"L'heure lao (\u0EC0\u0EA7\u0EA5\u0EB2\u0EA5\u0EB2\u0EA7) est souple : 15-30 minutes de retard sont courantes et pas impolies. \xAB \u0E8A\u0EB4\u0EC4\u0E9B\u0EAE\u0EAD\u0E94\u0EC1\u0EA5\u0EC9\u0EA7 \xBB (j'arrive) peut vouloir dire \xAB je pars bient\xF4t \xBB !"},{h:"Messagerie (WhatsApp, Messenger)",ex:`\u0EAA\u0EBB\u0EC8\u0E87\u0E82\u0ECD\u0EC9\u0E84\u0EA7\u0EB2\u0EA1|song kho khouam|envoyer un message
\u0EAA\u0EBB\u0EC8\u0E87\u0EAE\u0EB9\u0E9A\u0EA1\u0EB2\u0EC1\u0E94\u0EC8|song houp ma dae|envoie-moi la photo
\u0EC2\u0E97\u0EA7\u0EB4\u0E94\u0EB5\u0EC2\u0EAD|tho vidio|appel vid\xE9o
\u0EAA\u0EBB\u0EC8\u0E87\u0EC2\u0EA5\u0EC0\u0E84\u0EC0\u0E8A\u0EB4\u0E99|song lokhexeun|envoie la localisation
\u0EAD\u0EC8\u0EB2\u0E99\u0EC1\u0EA5\u0EC9\u0EA7|an laeo|lu (vu)
\u0EC0\u0E95\u0EB5\u0EA1\u0EC0\u0E87\u0EB4\u0E99\u0EC2\u0E97\u0EA5\u0EB0\u0EAA\u0EB1\u0E9A|teum ngeun tholasap|recharger son t\xE9l\xE9phone`},{h:"L'\xE9crit des jeunes",p:"Sur les r\xE9seaux sociaux, les Lao \xE9crivent vite et de fa\xE7on informelle :<br>\u2022 <b>555</b> = \xAB hahaha \xBB (5 se dit \xAB ha \xBB).<br>\u2022 Lettres r\xE9p\xE9t\xE9es pour l'emphase : <i>\u0EC1\u0E8A\u0E9A\u0E9A\u0E9A\u0E9A</i>.<br>\u2022 Beaucoup \xE9crivent en lao romanis\xE9 ou m\xE9langent tha\xEF et lao.<br>\u2022 Abr\xE9viations : \u0EAD\u0EC2\u0E84 (OK), \u0E82\u0E82 (\u0E82\u0EAD\u0E9A\u0EC3\u0E88).",ex:`\u0E84\u0EB4\u0E94\u0EAE\u0EAD\u0E94|khit hot|tu me manques
\u0E9D\u0EB1\u0E99\u0E94\u0EB5|fan di|fais de beaux r\xEAves
\u0E99\u0EAD\u0E99\u0EAB\u0EBC\u0EB1\u0E9A\u0E9D\u0EB1\u0E99\u0E94\u0EB5|non lap fan di|bonne nuit
\u0EC0\u0E94\u0EB5\u0E99\u0E97\u0EB2\u0E87\u0E9B\u0EAD\u0E94\u0EC4\u0E9E\u0EC0\u0E94\u0EB5\u0EC9|deun thang pot phai de|bon voyage !`},{h:"Dialogue au t\xE9l\xE9phone",dlg:`Toi|\u0EAD\u0EB2\u0EC2\u0EA5, \u0EC1\u0EA1\u0EC8\u0E99\u0EAD\u0EC9\u0EB2\u0E8D\u0E84\u0EB3\u0E9A\u0ECD?|alo, maen ay kham bo?|All\xF4, c'est Kham ?
Kham|\u0EC1\u0EA1\u0EC8\u0E99\u0EC1\u0EA5\u0EC9\u0EA7. \u0EA2\u0EB9\u0EC8\u0EC3\u0EAA\u0EC1\u0EA5\u0EC9\u0EA7?|maen laeo. you sai laeo?|Oui. Tu es o\xF9 ?
Toi|\u0EAB\u0EBC\u0EBB\u0E87\u0E97\u0EB2\u0E87, \u0E8A\u0EAD\u0E81\u0EAE\u0EC9\u0EB2\u0E99\u0E9A\u0ECD\u0EC8\u0EC0\u0EAB\u0EB1\u0E99|long thang, xok han bo hen|Je suis perdu, je ne trouve pas le resto.
Kham|\u0EAA\u0EBB\u0EC8\u0E87\u0EC2\u0EA5\u0EC0\u0E84\u0EC0\u0E8A\u0EB4\u0E99\u0EA1\u0EB2\u0EC1\u0E94\u0EC8|song lokhexeun ma dae|Envoie-moi ta localisation.
Toi|\u0EAA\u0EBB\u0EC8\u0E87\u0EC4\u0E9B\u0EC1\u0EA5\u0EC9\u0EA7|song pai laeo|C'est envoy\xE9.
Kham|\u0EC3\u0E81\u0EC9\u0EC6\u0EC1\u0EA5\u0EC9\u0EA7, \u0E8D\u0EC8\u0EB2\u0E87\u0EC4\u0E9B\u0E8A\u0EB7\u0EC8\u0EC6 \u0EAB\u0EC9\u0EB2\u0E99\u0EB2\u0E97\u0EB5|kai kai laeo, nyang pai xeu xeu ha nathi|Tu es tout pr\xE8s, marche tout droit 5 minutes.`}]},{id:"opinions",lvl:"B1",icon:"\u{1F4AD}",t:"Opinions et sentiments",goal:"Exprimer ce que tu penses et ressens, avec la retenue lao.",blocks:[{h:"Penser, croire, savoir",ex:`\u0E84\u0EB4\u0E94\u0EA7\u0EC8\u0EB2|khit va|penser que
\u0E82\u0EC9\u0EAD\u0E8D\u0E84\u0EB4\u0E94\u0EA7\u0EC8\u0EB2\u0E9A\u0ECD\u0EC8\u0E94\u0EB5|khoy khit va bo di|je pense que ce n'est pas bien
\u0EAE\u0EB9\u0EC9\u0EAA\u0EB6\u0E81\u0EA7\u0EC8\u0EB2|hou seuk va|avoir le sentiment que
\u0EC0\u0E8A\u0EB7\u0EC8\u0EAD\u0EA7\u0EC8\u0EB2|xeua va|croire que
\u0E84\u0EB7\u0E8A\u0EB4|kheu xi|on dirait que, sans doute
\u0E84\u0EB7\u0E8A\u0EB4\u0E9D\u0EBB\u0E99\u0E95\u0EBB\u0E81|kheu xi fon tok|on dirait qu'il va pleuvoir
\u0EAD\u0EB2\u0E94\u0E88\u0EB0|at ja|peut-\xEAtre
\u0EC1\u0E99\u0EC8\u0E99\u0EAD\u0E99|nae non|certainement`},{h:"Accord et d\xE9saccord",ex:`\u0EC0\u0EAB\u0EB1\u0E99\u0E94\u0EB5|hen di|je suis d'accord
\u0EC0\u0EAB\u0EB1\u0E99\u0E94\u0EB5\u0E99\u0EB3|hen di nam|d'accord avec toi
\u0E9A\u0ECD\u0EC8\u0EC0\u0EAB\u0EB1\u0E99\u0E94\u0EB5|bo hen di|je ne suis pas d'accord
\u0EC1\u0EA1\u0EC8\u0E99\u0EC1\u0E97\u0EC9|maen thae|c'est vrai
\u0EAD\u0EB2\u0E94\u0E88\u0EB0\u0E9A\u0ECD\u0EC8\u0EC1\u0EA1\u0EC8\u0E99|at ja bo maen|ce n'est peut-\xEAtre pas \xE7a
\u0E81\u0ECD\u0EC4\u0E94\u0EC9|ko dai|\xE7a me va, pourquoi pas`,warn:"\xAB \u0E9A\u0ECD\u0EC8\u0EC0\u0EAB\u0EB1\u0E99\u0E94\u0EB5 \xBB est tr\xE8s direct. Un Lao dira plut\xF4t \xAB \u0E81\u0ECD\u0EAD\u0EB2\u0E94\u0E88\u0EB0\u0EC1\u0EA1\u0EC8\u0E99, \u0EC1\u0E95\u0EC8\u0EA7\u0EC8\u0EB2\u2026 \xBB (c'est possible, mais\u2026). On \xE9vite la confrontation : il s'agit de pr\xE9server la face de chacun."},{h:"Les \xE9motions : le c\u0153ur \u0EC3\u0E88",p:"Le lao exprime les \xE9motions avec <b>\u0EC3\u0E88</b> (jai, c\u0153ur/esprit). Plus de 100 expressions !",ex:`\u0E94\u0EB5\u0EC3\u0E88|di jai|content (c\u0153ur bon)
\u0EC0\u0EAA\u0E8D\u0EC3\u0E88|sia jai|triste, d\xE9sol\xE9 (c\u0153ur perdu)
\u0EC3\u0E88\u0E94\u0EB5|jai di|gentil
\u0EC3\u0E88\u0EAE\u0EC9\u0EB2\u0E8D|jai hai|en col\xE8re
\u0EC3\u0E88\u0EC0\u0EA2\u0EB1\u0E99|jai yen|calme, patient (c\u0153ur froid)
\u0EC3\u0E88\u0EAE\u0EC9\u0EAD\u0E99|jai hon|impatient (c\u0153ur chaud)
\u0E95\u0EBB\u0E81\u0EC3\u0E88|tok jai|sursauter, avoir peur
\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0EC8\u0EA7\u0E87|pen houang|s'inqui\xE9ter
\u0EAD\u0EB8\u0E81\u0EC3\u0E88|ouk jai|frustr\xE9, oppress\xE9
\u0EAD\u0EB5\u0EC8\u0EA1\u0EC3\u0E88|im jai|combl\xE9`,tip:"\u0EC3\u0E88\u0EC0\u0EA2\u0EB1\u0E99\u0EC6 (jai yen yen, garde un c\u0153ur frais) est la valeur cardinale lao. S'\xE9nerver en public est vu comme une faiblesse."},{h:"Aimer et pr\xE9f\xE9rer",ex:`\u0EA1\u0EB1\u0E81|mak|aimer (bien), appr\xE9cier
\u0EAE\u0EB1\u0E81|hak|aimer (amour)
\u0E9A\u0ECD\u0EC8\u0EA1\u0EB1\u0E81|bo mak|ne pas aimer
\u0EA1\u0EB1\u0E81 \u2026 \u0E81\u0EA7\u0EC8\u0EB2|mak \u2026 kwa|pr\xE9f\xE9rer
\u0EA1\u0EB1\u0E81\u0EAB\u0EBC\u0EB2\u0E8D|mak lai|adorer
\u0E8A\u0EB1\u0E87|xang|d\xE9tester (fort)
\u0EC0\u0E9A\u0EB7\u0EC8\u0EAD|beua|en avoir marre, s'ennuyer`},{h:"Dialogue : un film",dlg:`Pao|\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0E84\u0EB4\u0E94\u0EA7\u0EC8\u0EB2\u0EDC\u0EB1\u0E87\u0EC0\u0EA5\u0EB7\u0EC8\u0EAD\u0E87\u0E99\u0EB5\u0EC9\u0EC0\u0E9B\u0EB1\u0E99\u0EC1\u0E99\u0EA7\u0EC3\u0E94?|jao khit va nang leuang ni pen naeo dai?|Tu as pens\xE9 quoi de ce film ?
Toi|\u0E81\u0ECD\u0E94\u0EB5, \u0EC1\u0E95\u0EC8\u0E8D\u0EB2\u0EA7\u0EC2\u0E9E\u0E94|ko di, tae nyao phot|Pas mal, mais trop long.
Pao|\u0E82\u0EC9\u0EAD\u0E8D\u0E81\u0ECD\u0E84\u0EB7\u0E81\u0EB1\u0E99. \u0E95\u0EAD\u0E99\u0E97\u0EC9\u0EB2\u0E8D\u0EC0\u0EAA\u0E8D\u0EC3\u0E88\u0EAB\u0EBC\u0EB2\u0E8D|khoy ko kheu kan. ton thai sia jai lai|Moi aussi. La fin m'a rendue tr\xE8s triste.
Toi|\u0EC1\u0EA1\u0EC8\u0E99, \u0EC1\u0E95\u0EC8\u0E82\u0EC9\u0EAD\u0E8D\u0EA1\u0EB1\u0E81\u0E99\u0EB1\u0E81\u0EAA\u0EB0\u0EC1\u0E94\u0E87|maen, tae khoy mak nak sadaeng|Oui, mais j'ai aim\xE9 les acteurs.
Pao|\u0EC0\u0EAB\u0EB1\u0E99\u0E94\u0EB5\u0E99\u0EB3!|hen di nam!|D'accord avec toi !`}]},{id:"raconter",lvl:"B1",icon:"\u{1F4DC}",t:"Raconter une histoire",goal:"Raconter des \xE9v\xE9nements pass\xE9s de fa\xE7on vivante, avec les connecteurs du r\xE9cit.",blocks:[{h:"Situer dans le pass\xE9",p:"Sans conjugaison, le r\xE9cit repose sur les <b>marqueurs de temps</b> en d\xE9but de phrase et sur <b>\u0EC1\u0EA5\u0EC9\u0EA7 / \u0EC4\u0E94\u0EC9</b>.",ex:`\u0EA1\u0EB7\u0EC9\u0EA7\u0EB2\u0E99\u0E99\u0EB5\u0EC9|meu van ni|hier
\u0EAD\u0EB2\u0E97\u0EB4\u0E94\u0EC1\u0EA5\u0EC9\u0EA7|athit laeo|la semaine derni\xE8re
\u0E9B\u0EB5\u0E81\u0EB2\u0E8D|pi kai|l'ann\xE9e derni\xE8re
\u0EC1\u0E95\u0EC8\u0E81\u0EB5\u0EC9|tae ki|tout \xE0 l'heure
\u0E94\u0EBB\u0E99\u0EA1\u0EB2\u0EC1\u0EA5\u0EC9\u0EA7|don ma laeo|il y a longtemps
\u0E95\u0EAD\u0E99\u0E8D\u0EB1\u0E87\u0E99\u0EC9\u0EAD\u0E8D|ton nyang noy|quand j'\xE9tais petit
\u0EC4\u0E94\u0EC9\u0EC4\u0E9B|dai pai|\xEAtre all\xE9 (accompli, plut\xF4t \xE9crit)`},{h:"Les connecteurs du r\xE9cit",ex:`\u0E97\u0EB3\u0EAD\u0EB4\u0E94|tham it|d'abord
\u0EAB\u0EBC\u0EB1\u0E87\u0E88\u0EB2\u0E81\u0E99\u0EB1\u0EC9\u0E99|lang jak nan|ensuite
\u0EC1\u0EA5\u0EC9\u0EA7\u0E81\u0ECD|laeo ko|et puis
\u0E97\u0EB1\u0E99\u0EC3\u0E94\u0E99\u0EB1\u0EC9\u0E99|than dai nan|tout \xE0 coup
\u0EAA\u0EB8\u0E94\u0E97\u0EC9\u0EB2\u0E8D|sout thai|finalement
\u0EC3\u0E99\u0E97\u0EB5\u0EC8\u0EAA\u0EB8\u0E94|nai thi sout|\xE0 la fin
\u0E9E\u0ECD\u0E94\u0EB5|pho di|justement, \xE0 ce moment`},{h:"R\xE9cit : un voyage \xE0 Vang Vieng",p:"\xC9coute le r\xE9cit en entier, puis phrase par phrase. Essaie de le r\xE9sumer \xE0 voix haute.",ex:`\u0EAD\u0EB2\u0E97\u0EB4\u0E94\u0EC1\u0EA5\u0EC9\u0EA7 \u0E82\u0EC9\u0EAD\u0E8D\u0EC4\u0E9B\u0EA7\u0EB1\u0E87\u0EA7\u0EBD\u0E87\u0E81\u0EB1\u0E9A\u0EDD\u0EB9\u0EC8|athit laeo khoy pai vang viang kap mou|la semaine derni\xE8re, je suis all\xE9 \xE0 Vang Vieng avec des amis
\u0E97\u0EB3\u0EAD\u0EB4\u0E94 \u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EBB\u0EB2\u0E99\u0EB1\u0EC8\u0E87\u0EA5\u0EBB\u0E94\u0E95\u0EB9\u0EC9\u0EAA\u0EB2\u0EA1\u0E8A\u0EBB\u0EC8\u0EA7\u0EC2\u0EA1\u0E87|tham it phouak hao nang lot tou sam xoua mong|d'abord, on a pris un minibus pendant trois heures
\u0E9E\u0ECD\u0EC4\u0E9B\u0EAE\u0EAD\u0E94 \u0E9D\u0EBB\u0E99\u0E81\u0ECD\u0E95\u0EBB\u0E81\u0EDC\u0EB1\u0E81|pho pai hot fon ko tok nak|en arrivant, il pleuvait fort
\u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EBB\u0EB2\u0EC0\u0EA5\u0EB5\u0E8D\u0EC4\u0E9B\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC1\u0EA5\u0EC9\u0EA7\u0E99\u0EAD\u0E99|phouak hao leuy pai kin khao laeo non|du coup on est all\xE9s manger, puis dormir
\u0EA1\u0EB7\u0EC9\u0E95\u0ECD\u0EC8\u0EA1\u0EB2 \u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EBB\u0EB2\u0EC4\u0E9B\u0EA5\u0EAD\u0E8D\u0E99\u0EC9\u0EB3\u0EA2\u0EB9\u0EC8\u0E96\u0EC9\u0EB3|meu to ma phouak hao pai loy nam you tham|le lendemain, on est all\xE9s nager dans une grotte
\u0EAA\u0EB0\u0EDC\u0EB8\u0E81\u0EAB\u0EBC\u0EB2\u0E8D! \u0EA2\u0EB2\u0E81\u0EC4\u0E9B\u0EAD\u0EB5\u0E81|sanouk lai! yak pai ik|c'\xE9tait super ! J'ai envie d'y retourner`},{h:"R\xE9agir \xE0 une histoire",ex:`\u0EC1\u0E97\u0EC9\u0E9A\u0ECD?|thae bo?|vraiment ?
\u0EC1\u0EA5\u0EC9\u0EA7\u0EC0\u0E9B\u0EB1\u0E99\u0EC1\u0E99\u0EA7\u0EC3\u0E94\u0E95\u0ECD\u0EC8?|laeo pen naeo dai to?|et ensuite ?
\u0EC2\u0EAD\u0EC9\u0E8D, \u0E95\u0EBB\u0E81\u0EC3\u0E88!|oy, tok jai!|oh l\xE0 l\xE0, quelle frayeur !
\u0EC2\u0E8A\u0E81\u0E94\u0EB5\u0EC0\u0E99\u0EB2\u0EB0|xok di no|heureusement, hein
\u0EDC\u0EC9\u0EB2\u0EC0\u0EAA\u0E8D\u0E94\u0EB2\u0E8D|na sia dai|dommage`,tip:"Un bon conteur lao encha\xEEne avec \u0E81\u0ECD et \u0EC1\u0EA5\u0EC9\u0EA7 comme nous avec \xAB et puis \xBB. N'aie pas peur des phrases courtes : c'est le style oral naturel."}]}]});var G,X=h(()=>{"use strict";G=[{id:"jai",lvl:"B2",icon:"\u2764\uFE0F",t:"Les expressions en \u0EC3\u0E88",goal:"Comprendre la psychologie lao \xE0 travers les expressions du \xAB c\u0153ur \xBB.",blocks:[{h:"Le c\u0153ur, centre de tout",p:"L\xE0 o\xF9 le fran\xE7ais utilise des mots abstraits, le lao combine <b>\u0EC3\u0E88</b> (jai) avec un adjectif ou un verbe. Ordre : <b>\u0EC3\u0E88 + X</b> d\xE9crit un caract\xE8re durable, <b>X + \u0EC3\u0E88</b> d\xE9crit une \xE9motion passag\xE8re.",ex:`\u0EC3\u0E88\u0E94\u0EB5|jai di|gentil (caract\xE8re)
\u0E94\u0EB5\u0EC3\u0E88|di jai|content (\xE9motion)
\u0EC3\u0E88\u0EAE\u0EC9\u0EAD\u0E99|jai hon|impulsif
\u0EAE\u0EC9\u0EAD\u0E99\u0EC3\u0E88|hon jai|anxieux, press\xE9`},{h:"Le caract\xE8re",ex:`\u0EC3\u0E88\u0E81\u0EA7\u0EC9\u0EB2\u0E87|jai kwang|g\xE9n\xE9reux (c\u0153ur large)
\u0EC3\u0E88\u0EC1\u0E84\u0E9A|jai khaep|mesquin (c\u0153ur \xE9troit)
\u0EC3\u0E88\u0EAD\u0EC8\u0EAD\u0E99|jai on|sensible, facile \xE0 convaincre
\u0EC3\u0E88\u0EC1\u0E82\u0E87|jai khaeng|dur, insensible
\u0EC3\u0E88\u0EC0\u0EA2\u0EB1\u0E99|jai yen|calme, pos\xE9
\u0EC3\u0E88\u0E94\u0EB3|jai dam|m\xE9chant, \xE9go\xEFste (c\u0153ur noir)
\u0EC3\u0E88\u0E87\u0EC8\u0EB2\u0E8D|jai ngai|influen\xE7able, facile
\u0EC3\u0E88\u0E9A\u0EB8\u0E99|jai boun|charitable`},{h:"Les \xE9motions",ex:`\u0E94\u0EB5\u0EC3\u0E88|di jai|heureux
\u0EC0\u0EAA\u0E8D\u0EC3\u0E88|sia jai|triste ; d\xE9sol\xE9
\u0E99\u0EC9\u0EAD\u0E8D\u0EC3\u0E88|noy jai|vex\xE9, bless\xE9
\u0EAA\u0EBB\u0E99\u0EC3\u0E88|son jai|s'int\xE9resser \xE0
\u0EC1\u0E99\u0EC8\u0EC3\u0E88|nae jai|\xEAtre s\xFBr
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC3\u0E88|khao jai|comprendre (entrer dans le c\u0153ur)
\u0E95\u0EB1\u0E94\u0EAA\u0EB4\u0E99\u0EC3\u0E88|tat sin jai|d\xE9cider
\u0EC4\u0EA7\u0EC9\u0EC3\u0E88|vai jai|faire confiance
\u0E9E\u0ECD\u0EC3\u0E88|pho jai|satisfait
\u0EAD\u0EB8\u0EC8\u0E99\u0EC3\u0E88|oun jai|rassur\xE9`},{h:"En contexte",ex:`\u0E9A\u0ECD\u0EC8\u0E95\u0EC9\u0EAD\u0E87\u0E99\u0EC9\u0EAD\u0E8D\u0EC3\u0E88\u0EC0\u0E94\u0EB5\u0EC9|bo tong noy jai de|ne sois pas vex\xE9, hein
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EC1\u0E99\u0EC8\u0EC3\u0E88\u0E9A\u0ECD?|jao nae jai bo?|tu es s\xFBr ?
\u0E8D\u0EB1\u0E87\u0E95\u0EB1\u0E94\u0EAA\u0EB4\u0E99\u0EC3\u0E88\u0E9A\u0ECD\u0EC8\u0EC4\u0E94\u0EC9|nyang tat sin jai bo dai|je n'arrive pas encore \xE0 d\xE9cider
\u0E82\u0EC9\u0EAD\u0E8D\u0EC4\u0EA7\u0EC9\u0EC3\u0E88\u0EC0\u0E88\u0EBB\u0EC9\u0EB2|khoy vai jai jao|je te fais confiance
\u0EC0\u0EAA\u0E8D\u0EC3\u0E88\u0E99\u0EB3\u0EC0\u0E94\u0EB5\u0EC9|sia jai nam de|mes condol\xE9ances`,warn:"\xAB \u0E99\u0EC9\u0EAD\u0E8D\u0EC3\u0E88 \xBB est un sentiment tr\xE8s lao : une vexation silencieuse. Un Lao vex\xE9 ne le dira pas, il deviendra simplement plus distant. Sois attentif aux signes."}]},{id:"rue",lvl:"B2",icon:"\u{1F6F5}",t:"Le lao de la rue",goal:"Comprendre l'argot, les raccourcis et le parler rapide des jeunes Lao.",blocks:[{h:"Les contractions de l'oral rapide",p:"\xC0 vitesse normale, les mots fusionnent et des syllabes disparaissent.",ex:`\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|bo pen nyang|pas de souci (souvent aval\xE9 en \xAB bpennyang \xBB)
\u0E8A\u0EB4\u0EC4\u0E9B|xi pai|je vais y aller (\u0E8A\u0EB4 remplace \u0E88\u0EB0 \xE0 l'oral)
\u0EAB\u0E8D\u0EB1\u0E87?|nyang?|quoi ? (pour \u0EC1\u0EA1\u0EC8\u0E99\u0EAB\u0E8D\u0EB1\u0E87)
\u0EC0\u0EAE\u0EB1\u0E94\u0EAB\u0E8D\u0EB1\u0E87\u0EA2\u0EB9\u0EC8?|het nyang you?|tu fais quoi ?
\u0EA2\u0EB9\u0EC8\u0EC3\u0EAA?|you sai?|t'es o\xF9 ?
\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0E8D\u0EB1\u0E87?|kin khao nyang?|t'as mang\xE9 ? (pour \u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EC1\u0EA5\u0EC9\u0EA7\u0E9A\u0ECD)`},{h:"L'argot et le familier",ex:`\u0EDD\u0EB9\u0EC8|mou|pote
\u0EAA\u0EB0\u0EDC\u0EB8\u0E81|sanouk|fun, amusant
\u0EA1\u0EC8\u0EA7\u0E99|mouan|amusant, chouette
\u0EA1\u0EC8\u0EA7\u0E99\u0EAB\u0EBC\u0EB2\u0E8D|mouan lai|trop bien
\u0E84\u0EB1\u0E81|khak|super, cool
\u0EC1\u0E8A\u0E9A\u0E8A\u0EC9\u0EAD\u0E8D|xaep xoy|trop bon
\u0EC0\u0EA1\u0EBB\u0EB2|mao|ivre
\u0E82\u0EB5\u0EC9\u0E84\u0EC9\u0EB2\u0E99|khi khan|flemmard
\u0E9A\u0EC9\u0EB2|ba|fou (attention, peut vexer)
\u0EC2\u0EAD\u0EC9\u0E8D \u0E9A\u0ECD\u0EC8\u0EC4\u0EAB\u0EA7|oy bo vai|j'en peux plus`},{h:"Les exclamations",ex:`\u0EC2\u0EAD\u0EC9\u0E8D!|oy!|a\xEFe ! oh l\xE0 l\xE0 !
\u0EC2\u0EAD\u0EC9!|o!|oh !
\u0EAB\u0EA7\u0EC8\u0EB2!|va!|quoi ?! (surprise)
\u0EAD\u0EB8\u0EC9\u0E8D!|oui!|oups !
\u0EC2\u0EAD\u0EC9\u0E8D\u0EDC\u0ECD!|oy no!|ah l\xE0 l\xE0 ! (exasp\xE9ration)`},{h:"La f\xEAte : boun et beerlao",ex:`\u0E9A\u0EB8\u0E99|boun|f\xEAte traditionnelle ; m\xE9rite
\u0EC4\u0E9B\u0E97\u0EC8\u0EBD\u0EA7\u0E9A\u0EB8\u0E99|pai thiao boun|aller \xE0 une f\xEAte
\u0EA5\u0EB3\u0EA7\u0EBB\u0E87|lam vong|danse en cercle
\u0EDD\u0EBB\u0E94\u0EC1\u0E81\u0EC9\u0EA7!|mot kaeo!|cul sec !
\u0EC0\u0EAD\u0EBB\u0EB2\u0EAD\u0EB5\u0E81!|ao ik!|encore !
\u0E9A\u0ECD\u0EC8\u0EC4\u0EAB\u0EA7\u0EC1\u0EA5\u0EC9\u0EA7|bo vai laeo|je n'en peux plus`,tip:"En soir\xE9e, on boit souvent dans un seul verre qui passe de main en main, avec un \xAB serveur \xBB attitr\xE9 qui le remplit. Refuser compl\xE8tement est d\xE9licat : bois une petite gorg\xE9e, et dis \xAB \u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87\u0EC0\u0E94\u0EB5\u0EC9 \xBB (juste un peu)."},{h:"Dialogue entre amis",dlg:`Tou|\u0E84\u0EB7\u0E99\u0E99\u0EB5\u0EC9\u0EC0\u0EAE\u0EB1\u0E94\u0EAB\u0E8D\u0EB1\u0E87?|kheun ni het nyang?|Tu fais quoi ce soir ?
Toi|\u0E9A\u0ECD\u0EC8\u0EAE\u0EB9\u0EC9\u0E84\u0EB7\u0E81\u0EB1\u0E99. \u0EA1\u0EB5\u0EAB\u0E8D\u0EB1\u0E87\u0EA1\u0EC8\u0EA7\u0E99\u0EC6\u0E9A\u0ECD?|bo hou kheu kan. mi nyang mouan mouan bo?|Je sais pas. Y a un truc sympa ?
Tou|\u0EA1\u0EB5\u0E9A\u0EB8\u0E99\u0EA2\u0EB9\u0EC8\u0EA7\u0EB1\u0E94, \u0EC4\u0E9B\u0EC0\u0E97\u0EB2\u0EB0!|mi boun you vat, pai tho!|Il y a une f\xEAte au temple, on y va !
Toi|\u0E84\u0EB1\u0E81! \u0E8A\u0EB4\u0EC4\u0E9B\u0E88\u0EB1\u0E81\u0EC2\u0EA1\u0E87?|khak! xi pai jak mong?|Cool ! On y va \xE0 quelle heure ?
Tou|\u0EAA\u0EAD\u0E87\u0E97\u0EB8\u0EC8\u0EA1. \u0EC0\u0EAD\u0EBB\u0EB2\u0EA5\u0EBB\u0E94\u0E88\u0EB1\u0E81\u0EA1\u0EB2\u0EC0\u0E94\u0EB5\u0EC9|song thoum. ao lot jak ma de|20h. Prends ton scooter, hein.`}]},{id:"formation",lvl:"B2",icon:"\u{1F9EC}",t:"Fabriquer des mots",goal:"Deviner le sens de milliers de mots gr\xE2ce aux pr\xE9fixes et compos\xE9s lao.",blocks:[{h:"Les noms abstraits : \u0E84\u0EA7\u0EB2\u0EA1 et \u0E81\u0EB2\u0E99",p:"<b>\u0E84\u0EA7\u0EB2\u0EA1</b> + adjectif ou verbe d'\xE9tat \u2192 nom abstrait (qualit\xE9, sentiment).<br><b>\u0E81\u0EB2\u0E99</b> + verbe d'action \u2192 nom d'action ou de domaine.",ex:`\u0E84\u0EA7\u0EB2\u0EA1\u0EAE\u0EB1\u0E81|khouam hak|l'amour
\u0E84\u0EA7\u0EB2\u0EA1\u0EAA\u0EB8\u0E81|khouam souk|le bonheur
\u0E84\u0EA7\u0EB2\u0EA1\u0E87\u0EB2\u0EA1|khouam ngam|la beaut\xE9
\u0E84\u0EA7\u0EB2\u0EA1\u0E88\u0EB4\u0E87|khouam jing|la v\xE9rit\xE9
\u0E81\u0EB2\u0E99\u0EAE\u0EBD\u0E99|kan hian|les \xE9tudes
\u0E81\u0EB2\u0E99\u0EC0\u0EA1\u0EB7\u0EAD\u0E87|kan meuang|la politique
\u0E81\u0EB2\u0E99\u0E81\u0EB4\u0E99|kan kin|l'alimentation
\u0E81\u0EB2\u0E99\u0E97\u0EC8\u0EAD\u0E87\u0E97\u0EC8\u0EBD\u0EA7|kan thong thiao|le tourisme`},{h:"Les personnes : \u0E99\u0EB1\u0E81, \u0E8A\u0EC8\u0EB2\u0E87, \u0E9C\u0EB9\u0EC9, \u0E84\u0EBB\u0E99",ex:`\u0E99\u0EB1\u0E81\u0EAE\u0EBD\u0E99|nak hian|\xE9l\xE8ve
\u0E99\u0EB1\u0E81\u0E97\u0EC8\u0EAD\u0E87\u0E97\u0EC8\u0EBD\u0EA7|nak thong thiao|touriste
\u0E99\u0EB1\u0E81\u0EAE\u0EC9\u0EAD\u0E87|nak hong|chanteur
\u0E8A\u0EC8\u0EB2\u0E87\u0E95\u0EB1\u0E94\u0E9C\u0EBB\u0EA1|xang tat phom|coiffeur
\u0E8A\u0EC8\u0EB2\u0E87\u0EC1\u0E9B\u0E87\u0EA5\u0EBB\u0E94|xang paeng lot|m\xE9canicien
\u0E9C\u0EB9\u0EC9\u0E88\u0EB1\u0E94\u0E81\u0EB2\u0E99|phou jat kan|directeur
\u0E9C\u0EB9\u0EC9\u0E8D\u0EB4\u0E87|phou nying|femme
\u0E84\u0EBB\u0E99\u0E82\u0EB1\u0E9A\u0EA5\u0EBB\u0E94|khon khap lot|chauffeur`},{h:"Les lieux : \u0EC2\u0EAE\u0E87, \u0EAE\u0EC9\u0EB2\u0E99, \u0E9A\u0EC8\u0EAD\u0E99",ex:`\u0EC2\u0EAE\u0E87\u0EAE\u0EBD\u0E99|hong hian|\xE9cole
\u0EC2\u0EAE\u0E87\u0EDD\u0ECD|hong mo|h\xF4pital
\u0EC2\u0EAE\u0E87\u0E87\u0EB2\u0E99|hong ngan|usine
\u0EAE\u0EC9\u0EB2\u0E99\u0E81\u0EB2\u0EC0\u0E9F|han kafe|caf\xE9
\u0EAE\u0EC9\u0EB2\u0E99\u0E95\u0EB1\u0E94\u0E9C\u0EBB\u0EA1|han tat phom|salon de coiffure
\u0E9A\u0EC8\u0EAD\u0E99\u0E88\u0EAD\u0E94\u0EA5\u0EBB\u0E94|bon jot lot|parking`},{h:"Les qualit\xE9s : \u0EDC\u0EC9\u0EB2, \u0EC0\u0E9B\u0EB1\u0E99\u0E95\u0EB2, \u0E82\u0EB5\u0EC9",p:"<b>\u0EDC\u0EC9\u0EB2</b> + verbe = \xAB digne de \xBB (-able).<br><b>\u0EC0\u0E9B\u0EB1\u0E99\u0E95\u0EB2</b> + verbe = \xAB qui donne envie de \xBB (tr\xE8s oral).<br><b>\u0E82\u0EB5\u0EC9</b> + verbe = d\xE9faut, tendance n\xE9gative.",ex:`\u0EDC\u0EC9\u0EB2\u0EAE\u0EB1\u0E81|na hak|mignon (aimable)
\u0EDC\u0EC9\u0EB2\u0EAA\u0EBB\u0E99\u0EC3\u0E88|na son jai|int\xE9ressant
\u0EC0\u0E9B\u0EB1\u0E99\u0E95\u0EB2\u0EA2\u0EC9\u0EB2\u0E99|pen ta yan|effrayant
\u0EC0\u0E9B\u0EB1\u0E99\u0E95\u0EB2\u0E81\u0EB4\u0E99|pen ta kin|app\xE9tissant
\u0EC0\u0E9B\u0EB1\u0E99\u0E95\u0EB2\u0EAE\u0EB1\u0E81|pen ta hak|adorable
\u0E82\u0EB5\u0EC9\u0E95\u0EBB\u0EA7\u0EB0|khi toua|menteur
\u0E82\u0EB5\u0EC9\u0EAD\u0EB2\u0E8D|khi ai|timide
\u0E82\u0EB5\u0EC9\u0E96\u0EB5\u0EC8|khi thi|radin`},{h:"Les compos\xE9s imag\xE9s",p:"Beaucoup de mots sont des <b>images litt\xE9rales</b> : un vrai plaisir \xE0 d\xE9coder !",ex:`\u0E99\u0EC9\u0EB3\u0E95\u0EB2|nam ta|larmes (eau d'\u0153il)
\u0E99\u0EC9\u0EB3\u0EC3\u0E88|nam jai|g\xE9n\xE9rosit\xE9 (eau du c\u0153ur)
\u0EA5\u0EBB\u0E94\u0EC4\u0E9F|lot fai|train (voiture \xE0 feu)
\u0E95\u0EB9\u0EC9\u0EC0\u0EA2\u0EB1\u0E99|tou yen|frigo (armoire froide)
\u0EDD\u0ECD\u0EC9\u0EC4\u0E9F|mo fai|batterie (pot \xE0 \xE9lectricit\xE9)
\u0EC1\u0EA1\u0EC8\u0E99\u0EC9\u0EB3|mae nam|fleuve (m\xE8re des eaux)
\u0E95\u0EB2\u0EC0\u0EA7\u0EB1\u0E99|ta ven|soleil (\u0153il du jour)`,tip:"Face \xE0 un mot inconnu, d\xE9coupe-le : tu devineras souvent le sens. \u0EC2\u0EAE\u0E87 + \u0E81\u0EB4\u0E99 + \u0EC0\u0E82\u0EBB\u0EC9\u0EB2 ? Facile : le r\xE9fectoire !"}]},{id:"refus",lvl:"B2",icon:"\u{1F3AD}",t:"L'art du non indirect",goal:"Refuser, critiquer et n\xE9gocier sans faire perdre la face.",blocks:[{h:"Pourquoi on ne dit jamais \xAB non \xBB",p:"Dans la culture lao, un refus direct fait <b>perdre la face</b> (\u0EC0\u0EAA\u0E8D\u0EDC\u0EC9\u0EB2) aux deux interlocuteurs. On pr\xE9f\xE8re l'ambigu\xEFt\xE9 polie. Un \xAB oui \xBB peut donc signifier \xAB j'ai entendu \xBB, et un \xAB peut-\xEAtre \xBB signifie souvent \xAB non \xBB."},{h:"Refuser poliment",ex:`\u0E8A\u0EB4\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0E81\u0EC8\u0EAD\u0E99\u0EC0\u0E94\u0EB5\u0EC9|xi beung kon de|je vais voir (= probablement non)
\u0EC0\u0E97\u0EB7\u0EC8\u0EAD\u0EDC\u0EC9\u0EB2\u0EC0\u0E94\u0EB5\u0EC9|theua na de|la prochaine fois, hein
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87, \u0E82\u0EAD\u0E9A\u0EC3\u0E88|bo pen nyang, khop jai|\xE7a va, merci (= non merci)
\u0EAD\u0EB5\u0EC8\u0EA1\u0EC1\u0EA5\u0EC9\u0EA7|im laeo|je suis rassasi\xE9 (refuser \xE0 manger)
\u0E9A\u0ECD\u0EC8\u0E84\u0EC8\u0EAD\u0E8D\u0EA7\u0EC8\u0EB2\u0E87|bo khoy vang|je ne suis pas tr\xE8s libre
\u0E84\u0EB7\u0E8A\u0EB4\u0E9A\u0ECD\u0EC8\u0E97\u0EB1\u0E99|kheu xi bo than|je crains de ne pas avoir le temps
\u0E82\u0ECD\u0E84\u0EB4\u0E94\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0E81\u0EC8\u0EAD\u0E99|kho khit beung kon|laisse-moi r\xE9fl\xE9chir`},{h:"D\xE9coder les \xAB oui \xBB lao",ex:`\u0EC2\u0EAD\u0EC0\u0E84 \u0EC2\u0EAD\u0EC0\u0E84|o khe o khe|OK OK (souvent : j'ai compris, sans plus)
\u0EC0\u0E88\u0EBB\u0EC9\u0EB2 \u0EC0\u0E88\u0EBB\u0EC9\u0EB2|jao jao|oui oui (politesse, pas un engagement)
\u0EAD\u0EB2\u0E94\u0E88\u0EB0\u0EC4\u0E94\u0EC9|at ja dai|c'est peut-\xEAtre possible (= difficile)
\u0E8D\u0EB2\u0E81\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87|nyak noy neung|c'est un peu difficile (= non)`,warn:"Si on te r\xE9pond \xAB \u0E8D\u0EB2\u0E81\u0EDC\u0EC9\u0EAD\u0E8D\u0EDC\u0EB6\u0EC8\u0E87 \xBB (un peu difficile), n'insiste pas : c'est un refus. Insister mettrait ton interlocuteur dans l'embarras."},{h:"Critiquer avec douceur",ex:`\u0E9A\u0ECD\u0EC8\u0E84\u0EC8\u0EAD\u0E8D\u0EC1\u0E8A\u0E9A\u0E9B\u0EB2\u0E99\u0EC3\u0E94|bo khoy xaep pan dai|pas terrible (doux)
\u0EAD\u0EB2\u0E94\u0E88\u0EB0\u0E94\u0EB5\u0E81\u0EA7\u0EC8\u0EB2\u0E96\u0EC9\u0EB2\u2026|at ja di kwa tha\u2026|ce serait peut-\xEAtre mieux si\u2026
\u0EA5\u0EAD\u0E87\u0EC0\u0EAE\u0EB1\u0E94\u0EC1\u0E9A\u0E9A\u0E99\u0EB5\u0EC9\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0E9A\u0ECD?|long het baep ni beung bo?|et si tu essayais comme \xE7a ?
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87, \u0EC0\u0E97\u0EB7\u0EC8\u0EAD\u0EDC\u0EC9\u0EB2\u0EC3\u0EDD\u0EC8|bo pen nyang, theua na mai|pas grave, la prochaine fois`},{h:"Dialogue : une invitation d\xE9clin\xE9e",dlg:`K\xE9o|\u0EA1\u0EB7\u0EC9\u0EAD\u0EB7\u0EC8\u0E99\u0EA1\u0EB2\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EA2\u0EB9\u0EC8\u0E9A\u0EC9\u0EB2\u0E99\u0EC0\u0E94\u0EB5\u0EC9!|meu eun ma kin khao you ban de!|Viens d\xEEner \xE0 la maison demain !
Toi|\u0E82\u0EAD\u0E9A\u0EC3\u0E88\u0EAB\u0EBC\u0EB2\u0E8D\u0EC6. \u0EC1\u0E95\u0EC8\u0EA1\u0EB7\u0EC9\u0EAD\u0EB7\u0EC8\u0E99\u0E84\u0EB7\u0E8A\u0EB4\u0E9A\u0ECD\u0EC8\u0E84\u0EC8\u0EAD\u0E8D\u0EA7\u0EC8\u0EB2\u0E87|khop jai lai lai. tae meu eun kheu xi bo khoy vang|Merci beaucoup. Mais demain, je crains de ne pas \xEAtre tr\xE8s libre.
K\xE9o|\u0EC2\u0EAD\u0EC9\u0E8D, \u0EDC\u0EC9\u0EB2\u0EC0\u0EAA\u0E8D\u0E94\u0EB2\u0E8D|oy, na sia dai|Oh, dommage.
Toi|\u0EC0\u0E97\u0EB7\u0EC8\u0EAD\u0EDC\u0EC9\u0EB2\u0EC1\u0E99\u0EC8\u0E99\u0EAD\u0E99\u0EC0\u0E94\u0EB5\u0EC9|theua na nae non de|La prochaine fois, c'est s\xFBr.
K\xE9o|\u0EC2\u0EAD\u0EC0\u0E84, \u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|o khe, bo pen nyang|OK, pas de souci.`}]},{id:"culture",lvl:"B2",icon:"\u{1F6D5}",t:"Culture et savoir-vivre",goal:"Comprendre les codes sociaux, religieux et les f\xEAtes pour ne jamais commettre d'impair.",blocks:[{h:"Le corps : la t\xEAte et les pieds",p:"\u2022 La <b>t\xEAte</b> est sacr\xE9e : on ne la touche jamais, m\xEAme celle d'un enfant.<br>\u2022 Les <b>pieds</b> sont impurs : ne pointe jamais quelqu'un ou un Bouddha avec les pieds ; ne les pose pas sur une table.<br>\u2022 On <b>retire ses chaussures</b> en entrant dans une maison et dans un temple.<br>\u2022 On passe <b>courb\xE9</b> devant des personnes assises plus \xE2g\xE9es."},{h:"Au temple (\u0EA7\u0EB1\u0E94)",ex:`\u0EA7\u0EB1\u0E94|vat|temple
\u0E9E\u0EB0|pha|moine ; Bouddha
\u0EAA\u0EB2\u0EA1\u0EB0\u0EC0\u0E99\u0E99|samanen|novice
\u0EC3\u0EAA\u0EC8\u0E9A\u0EB2\u0E94|sai bat|offrande du matin aux moines
\u0E95\u0EB1\u0E81\u0E9A\u0EB2\u0E94|tak bat|offrande (Luang Prabang)
\u0EC0\u0EAE\u0EB1\u0E94\u0E9A\u0EB8\u0E99|het boun|faire des m\xE9rites
\u0EC4\u0EAB\u0EA7\u0EC9\u0E9E\u0EB0|vai pha|prier, saluer le Bouddha`,warn:"Une femme ne doit jamais toucher un moine ni lui tendre un objet directement : elle le pose devant lui ou sur un tissu. Au temple, \xE9paules et genoux couverts."},{h:"Le baci (\u0E9A\u0EB2\u0EAA\u0EB5)",p:"C\xE9r\xE9monie centrale de la vie lao (mariage, naissance, d\xE9part, retour, gu\xE9rison). On croit que l'\xEAtre humain a <b>32 esprits vitaux</b> (\u0E82\u0EA7\u0EB1\u0E99, khouan) qui peuvent s'\xE9chapper. L'officiant les rappelle, puis chacun noue des <b>fils de coton blanc</b> au poignet des autres en pronon\xE7ant des v\u0153ux. On garde les fils au moins 3 jours.",ex:`\u0E9A\u0EB2\u0EAA\u0EB5\u0EAA\u0EB9\u0EC8\u0E82\u0EA7\u0EB1\u0E99|basi sou khouan|c\xE9r\xE9monie de rappel des esprits
\u0E9C\u0EB9\u0E81\u0EC1\u0E82\u0E99|phouk khaen|nouer les fils au poignet
\u0E82\u0ECD\u0EC3\u0EAB\u0EC9\u0EC2\u0E8A\u0E81\u0E94\u0EB5|kho hai xok di|je te souhaite bonne chance
\u0E82\u0ECD\u0EC3\u0EAB\u0EC9\u0EA1\u0EB5\u0EAA\u0EB8\u0E82\u0EB0\u0E9E\u0EB2\u0E9A\u0EC1\u0E82\u0E87\u0EC1\u0EAE\u0E87|kho hai mi soukhaphap khaeng haeng|je te souhaite une bonne sant\xE9`},{h:"Les grandes f\xEAtes",ex:`\u0E9B\u0EB5\u0EC3\u0EDD\u0EC8\u0EA5\u0EB2\u0EA7|pi mai lao|Nouvel An lao (avril)
\u0EAA\u0EB8\u0E81\u0EAA\u0EB1\u0E99\u0EA7\u0EB1\u0E99\u0E9B\u0EB5\u0EC3\u0EDD\u0EC8|souk san van pi mai|bonne ann\xE9e !
\u0E9A\u0EB8\u0E99\u0E97\u0EB2\u0E94\u0EAB\u0EBC\u0EA7\u0E87|boun that louang|f\xEAte du That Luang (novembre)
\u0E9A\u0EB8\u0E99\u0E8A\u0EC8\u0EA7\u0E87\u0EC0\u0EAE\u0EB7\u0EAD|boun xouang heua|courses de pirogues
\u0E9A\u0EB8\u0E99\u0E9A\u0EB1\u0EC9\u0E87\u0EC4\u0E9F|boun bang fai|f\xEAte des fus\xE9es (mai)
\u0E9A\u0EB8\u0E99\u0EAD\u0EAD\u0E81\u0E9E\u0EB1\u0E99\u0EAA\u0EB2|boun ok phansa|fin du car\xEAme bouddhiste`},{h:"\xC0 table et chez l'habitant",p:"\u2022 Attends que le plus \xE2g\xE9 commence \xE0 manger.<br>\u2022 On ne finit pas totalement son assiette chez l'h\xF4te (sinon on te ressert !).<br>\u2022 Offrir ou recevoir : <b>avec la main droite</b>, ou les deux mains pour plus de respect.<br>\u2022 Un cadeau ne s'ouvre pas devant celui qui l'offre.",tip:"Le sourire lao n'exprime pas toujours la joie : il peut cacher la g\xEAne, la d\xE9sapprobation ou l'embarras. En cas de malaise, souris aussi et d\xE9dramatise : bo pen nyang."}]}]});var Z,W=h(()=>{"use strict";Z=[{id:"lecture",lvl:"C1",icon:"\u{1F4F0}",t:"Lire un texte suivi",goal:"Lire un texte authentique sans romanisation, puis v\xE9rifier phrase par phrase.",blocks:[{h:"Le texte",p:`<p class="lo" style="font-size:1.5rem;line-height:2.2">\u0E82\u0EC9\u0EAD\u0E8D\u0E8A\u0EB7\u0EC8\u0E99\u0EB2\u0E87. \u0E82\u0EC9\u0EAD\u0E8D\u0EA2\u0EB9\u0EC8\u0EA7\u0EBD\u0E87\u0E88\u0EB1\u0E99. \u0E97\u0EB8\u0E81\u0EA1\u0EB7\u0EC9\u0E82\u0EC9\u0EAD\u0E8D\u0E95\u0EB7\u0EC8\u0E99\u0E95\u0EAD\u0E99\u0EAB\u0EBB\u0E81\u0EC2\u0EA1\u0E87\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2 \u0EC1\u0EA5\u0EC9\u0EA7\u0EC4\u0E9B\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94\u0E81\u0EB1\u0E9A\u0EC1\u0EA1\u0EC8. \u0E95\u0EAD\u0E99\u0E97\u0EC8\u0EBD\u0E87 \u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EBB\u0EB2\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7\u0E81\u0EB1\u0E9A\u0EA5\u0EB2\u0E9A. \u0E95\u0EAD\u0E99\u0EC1\u0EA5\u0E87 \u0E82\u0EC9\u0EAD\u0E8D\u0EA1\u0EB1\u0E81\u0EC4\u0E9B\u0E8D\u0EC8\u0EB2\u0E87\u0EAB\u0EBC\u0EB4\u0EC9\u0E99\u0EC1\u0E84\u0EA1\u0E82\u0EAD\u0E87.</p>Lis d'abord seul, \xE0 voix haute. Rep\xE8re les espaces : ils s\xE9parent les id\xE9es, pas les mots.`},{h:"V\xE9rification phrase par phrase",ex:`\u0E82\u0EC9\u0EAD\u0E8D\u0E8A\u0EB7\u0EC8\u0E99\u0EB2\u0E87|khoy xeu nang|je m'appelle Nang
\u0E82\u0EC9\u0EAD\u0E8D\u0EA2\u0EB9\u0EC8\u0EA7\u0EBD\u0E87\u0E88\u0EB1\u0E99|khoy you viang jan|j'habite \xE0 Vientiane
\u0E97\u0EB8\u0E81\u0EA1\u0EB7\u0EC9\u0E82\u0EC9\u0EAD\u0E8D\u0E95\u0EB7\u0EC8\u0E99\u0E95\u0EAD\u0E99\u0EAB\u0EBB\u0E81\u0EC2\u0EA1\u0E87\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2|thouk meu khoy teun ton hok mong xao|chaque jour je me l\xE8ve \xE0 6h du matin
\u0EC1\u0EA5\u0EC9\u0EA7\u0EC4\u0E9B\u0E95\u0EB0\u0EAB\u0EBC\u0EB2\u0E94\u0E81\u0EB1\u0E9A\u0EC1\u0EA1\u0EC8|laeo pai talat kap mae|puis je vais au march\xE9 avec ma m\xE8re
\u0E95\u0EAD\u0E99\u0E97\u0EC8\u0EBD\u0E87 \u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EBB\u0EB2\u0E81\u0EB4\u0E99\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7\u0E81\u0EB1\u0E9A\u0EA5\u0EB2\u0E9A|ton thiang phouak hao kin khao niao kap lap|\xE0 midi, nous mangeons du riz gluant et du larb
\u0E95\u0EAD\u0E99\u0EC1\u0EA5\u0E87 \u0E82\u0EC9\u0EAD\u0E8D\u0EA1\u0EB1\u0E81\u0EC4\u0E9B\u0E8D\u0EC8\u0EB2\u0E87\u0EAB\u0EBC\u0EB4\u0EC9\u0E99\u0EC1\u0E84\u0EA1\u0E82\u0EAD\u0E87|ton laeng khoy mak pai nyang lin khaem khong|le soir, j'aime me promener au bord du M\xE9kong`},{h:"Deuxi\xE8me texte : la ville",p:'<p class="lo" style="font-size:1.5rem;line-height:2.2">\u0EA7\u0EBD\u0E87\u0E88\u0EB1\u0E99\u0EC0\u0E9B\u0EB1\u0E99\u0E99\u0EB0\u0E84\u0EAD\u0E99\u0EAB\u0EBC\u0EA7\u0E87\u0E82\u0EAD\u0E87\u0EA5\u0EB2\u0EA7. \u0EC0\u0EA1\u0EB7\u0EAD\u0E87\u0E99\u0EB5\u0EC9\u0E9A\u0ECD\u0EC8\u0EC3\u0EAB\u0E8D\u0EC8\u0E9B\u0EB2\u0E99\u0EC3\u0E94 \u0EC1\u0E95\u0EC8\u0EA1\u0EB5\u0EA7\u0EB1\u0E94\u0E87\u0EB2\u0EA1\u0EC6\u0EAB\u0EBC\u0EB2\u0E8D\u0EC1\u0EAB\u0EC8\u0E87. \u0E84\u0EBB\u0E99\u0EA5\u0EB2\u0EA7\u0EC3\u0E88\u0E94\u0EB5 \u0EC1\u0EA5\u0EB0 \u0EA1\u0EB1\u0E81\u0E8D\u0EB4\u0EC9\u0EA1. \u0E96\u0EC9\u0EB2\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EA1\u0EB2\u0E97\u0EC8\u0EBD\u0EA7 \u0EA2\u0EC8\u0EB2\u0EA5\u0EB7\u0EA1\u0E81\u0EB4\u0E99\u0E95\u0EB3\u0EDD\u0EB2\u0E81\u0EAB\u0EB8\u0EC8\u0E87\u0EC0\u0E94\u0EB5\u0EC9!</p>',ex:`\u0EA7\u0EBD\u0E87\u0E88\u0EB1\u0E99\u0EC0\u0E9B\u0EB1\u0E99\u0E99\u0EB0\u0E84\u0EAD\u0E99\u0EAB\u0EBC\u0EA7\u0E87\u0E82\u0EAD\u0E87\u0EA5\u0EB2\u0EA7|viang jan pen nakhon louang khong lao|Vientiane est la capitale du Laos
\u0EC0\u0EA1\u0EB7\u0EAD\u0E87\u0E99\u0EB5\u0EC9\u0E9A\u0ECD\u0EC8\u0EC3\u0EAB\u0E8D\u0EC8\u0E9B\u0EB2\u0E99\u0EC3\u0E94|meuang ni bo nyai pan dai|cette ville n'est pas tr\xE8s grande
\u0EC1\u0E95\u0EC8\u0EA1\u0EB5\u0EA7\u0EB1\u0E94\u0E87\u0EB2\u0EA1\u0EC6\u0EAB\u0EBC\u0EB2\u0E8D\u0EC1\u0EAB\u0EC8\u0E87|tae mi vat ngam ngam lai haeng|mais il y a beaucoup de beaux temples
\u0E84\u0EBB\u0E99\u0EA5\u0EB2\u0EA7\u0EC3\u0E88\u0E94\u0EB5 \u0EC1\u0EA5\u0EB0 \u0EA1\u0EB1\u0E81\u0E8D\u0EB4\u0EC9\u0EA1|khon lao jai di lae mak nyim|les Lao sont gentils et souriants
\u0E96\u0EC9\u0EB2\u0EC0\u0E88\u0EBB\u0EC9\u0EB2\u0EA1\u0EB2\u0E97\u0EC8\u0EBD\u0EA7 \u0EA2\u0EC8\u0EB2\u0EA5\u0EB7\u0EA1\u0E81\u0EB4\u0E99\u0E95\u0EB3\u0EDD\u0EB2\u0E81\u0EAB\u0EB8\u0EC8\u0E87\u0EC0\u0E94\u0EB5\u0EC9|tha jao ma thiao ya leum kin tam mak houng de|si tu viens visiter, n'oublie pas de manger une salade de papaye !`,tip:"Relis ces textes chaque jour pendant une semaine, en lisant le lao avant de cliquer. Le jour o\xF9 tu les comprends sans aide, tu as franchi un cap."},{h:"Interdire et conseiller",ex:`\u0EA2\u0EC8\u0EB2|ya|ne \u2026 pas (imp\xE9ratif n\xE9gatif)
\u0EA2\u0EC8\u0EB2\u0EA5\u0EB7\u0EA1|ya leum|n'oublie pas
\u0EA2\u0EC8\u0EB2\u0EC0\u0EAE\u0EB1\u0E94\u0EC1\u0E99\u0EA7\u0E99\u0EB1\u0EC9\u0E99|ya het naeo nan|ne fais pas \xE7a
\u0EAB\u0EC9\u0EB2\u0EA1|ham|interdit
\u0E84\u0EA7\u0E99|khouan|on devrait
\u0E9A\u0ECD\u0EC8\u0E84\u0EA7\u0E99|bo khouan|on ne devrait pas
\u0E84\u0EA7\u0E99\u0EC4\u0E9B\u0EC1\u0E95\u0EC8\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2|khouan pai tae xao|il vaut mieux y aller t\xF4t`}]},{id:"proverbes",lvl:"C1",icon:"\u{1FAB7}",t:"Proverbes et sagesse",goal:"Comprendre et placer les proverbes que tout Lao conna\xEEt.",blocks:[{h:"Les classiques",ex:`\u0E99\u0EC9\u0EB3\u0E82\u0EB6\u0EC9\u0E99\u0EC3\u0EAB\u0EC9\u0EAE\u0EB5\u0E9A\u0E95\u0EB1\u0E81|nam kheun hai hip tak|puise quand l'eau monte (saisis ta chance)
\u0E8A\u0EC9\u0EB2\u0EC6\u0EC4\u0E94\u0EC9\u0E9E\u0EC9\u0EB2\u0EAA\u0EAD\u0E87\u0EC0\u0EAB\u0EBC\u0EB1\u0EC9\u0EA1|xa xa dai pha song lem|lentement, on obtient deux machettes (rien ne sert de courir)
\u0EC4\u0E9B\u0EC3\u0EAB\u0EC9\u0EC0\u0E96\u0EB4\u0E87 \u0EA1\u0EB2\u0EC3\u0EAB\u0EC9\u0EAE\u0EAD\u0E94|pai hai theung ma hai hot|va jusqu'au bout, reviens \xE0 bon port (pers\xE9v\xE8re)
\u0EC4\u0E81\u0EC8\u0EC0\u0EAB\u0EB1\u0E99\u0E95\u0EB5\u0E99\u0E87\u0EB9 \u0E87\u0EB9\u0EC0\u0EAB\u0EB1\u0E99\u0E99\u0EBB\u0EA1\u0EC4\u0E81\u0EC8|kai hen tin ngou ngou hen nom kai|la poule voit les pattes du serpent\u2026 (chacun conna\xEEt les secrets de l'autre)
\u0EA2\u0EB9\u0EC8\u0E9A\u0EC9\u0EB2\u0E99\u0E97\u0EC8\u0EB2\u0E99 \u0EA2\u0EC8\u0EB2\u0E99\u0EB4\u0EC8\u0E87\u0E94\u0EB9\u0E94\u0EB2\u0E8D|you ban than ya ning dou dai|chez autrui, ne reste pas les bras crois\xE9s`,warn:"Les proverbes ont des variantes selon les r\xE9gions et les familles. Si un Lao te corrige, c'est sa version : adopte-la avec le sourire."},{h:"Les expressions imag\xE9es du quotidien",ex:`\u0E9B\u0EB2\u0E81\u0EAB\u0EA7\u0EB2\u0E99|pak van|beau parleur (bouche sucr\xE9e)
\u0EDC\u0EC9\u0EB2\u0E9A\u0EB2\u0E87|na bang|susceptible, timide (visage fin)
\u0EDC\u0EC9\u0EB2\u0EDC\u0EB2|na na|culott\xE9 (visage \xE9pais)
\u0EAB\u0EBB\u0EA7\u0EC1\u0E82\u0E87|houa khaeng|t\xEAtu (t\xEAte dure)
\u0EAB\u0EB9\u0EC0\u0E9A\u0EBB\u0EB2|hou bao|cr\xE9dule (oreille l\xE9g\xE8re)
\u0EA1\u0EB7\u0EC4\u0EA7|meu vai|voleur (main rapide)
\u0E95\u0EB2\u0E9A\u0EAD\u0E94\u0EC4\u0E94\u0EC9\u0EC1\u0EA7\u0EC8\u0E99|ta bot dai vaen|donner de la confiture aux cochons (l'aveugle re\xE7oit des lunettes)`},{h:"La philosophie bouddhiste au quotidien",ex:`\u0E9A\u0EB8\u0E99|boun|m\xE9rite (karma positif)
\u0E9A\u0EB2\u0E9A|bap|p\xE9ch\xE9, mauvais karma
\u0E81\u0EB3|kam|karma
\u0EC0\u0E9B\u0EB1\u0E99\u0E81\u0EB3\u0E82\u0EAD\u0E87\u0EC0\u0E82\u0EBB\u0EB2|pen kam khong khao|c'est son karma
\u0E97\u0EB3\u0E9A\u0EB8\u0E99\u0EC4\u0E94\u0EC9\u0E9A\u0EB8\u0E99|tham boun dai boun|qui fait le bien re\xE7oit le bien
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|bo pen nyang|ce n'est rien (l\xE2cher prise)`,tip:"Placer un proverbe au bon moment impressionne beaucoup plus qu'une grammaire parfaite. Commence par \xAB \u0E8A\u0EC9\u0EB2\u0EC6\u0EC4\u0E94\u0EC9\u0E9E\u0EC9\u0EB2\u0EAA\u0EAD\u0E87\u0EC0\u0EAB\u0EBC\u0EB1\u0EC9\u0EA1 \xBB : il est connu de tous et toujours bien re\xE7u."}]},{id:"soutenu",lvl:"C1",icon:"\u{1F3A9}",t:"Le registre soutenu",goal:"Comprendre le lao des m\xE9dias, des discours et de l'administration.",blocks:[{h:"Oral courant vs soutenu",p:"Le lao formel emprunte massivement au <b>pali et au sanskrit</b>, comme le fran\xE7ais au latin. On le trouve \xE0 la t\xE9l\xE9vision, dans les journaux, \xE0 l'administration et dans les discours.",ex:`\u0EAE\u0EB1\u0E9A\u0E9B\u0EB0\u0E97\u0EB2\u0E99|hap pa than|manger (soutenu ; oral : \u0E81\u0EB4\u0E99)
\u0E9E\u0EB1\u0E81\u0E9C\u0EC8\u0EAD\u0E99|phak phon|se reposer (oral : \u0E99\u0EAD\u0E99)
\u0EC0\u0EAA\u0E8D\u0E8A\u0EB5\u0EA7\u0EB4\u0E94|sia xivit|d\xE9c\xE9der (oral : \u0E95\u0EB2\u0E8D)
\u0E97\u0EB5\u0EC8\u0E9E\u0EB1\u0E81\u0EAD\u0EB2\u0EC4\u0EAA|thi phak asai|domicile (oral : \u0E9A\u0EC9\u0EB2\u0E99)
\u0E9A\u0ECD\u0EC8\u0EAA\u0EB0\u0E9A\u0EB2\u0E8D|bo sabai|\xEAtre souffrant (oral : \u0EC0\u0E88\u0EB1\u0E9A)
\u0E87\u0EBB\u0E9A\u0E9B\u0EB0\u0EA1\u0EB2\u0E99|ngop pa man|budget`},{h:"Les formules officielles",ex:`\u0EAE\u0EBD\u0E99\u0E97\u0EC8\u0EB2\u0E99|hian than|Monsieur/Madame (en-t\xEAte de lettre)
\u0E94\u0EC9\u0EA7\u0E8D\u0E84\u0EA7\u0EB2\u0EA1\u0EC0\u0E84\u0EBB\u0EB2\u0EA5\u0EBB\u0E9A|douay khouam khao lop|avec respect (formule finale)
\u0EAA\u0EB2\u0E97\u0EB2\u0EA5\u0EB0\u0E99\u0EB0\u0EA5\u0EB1\u0E94 \u0E9B\u0EB0\u0E8A\u0EB2\u0E97\u0EB4\u0E9B\u0EB0\u0EC4\u0E95 \u0E9B\u0EB0\u0E8A\u0EB2\u0E8A\u0EBB\u0E99\u0EA5\u0EB2\u0EA7|sathalanalat paxathipatai paxaxon lao|R\xE9publique d\xE9mocratique populaire lao
\u0EAA\u0EB1\u0E99\u0E95\u0EB4\u0E9E\u0EB2\u0E9A \u0EC0\u0EAD\u0E81\u0EB0\u0EA5\u0EB2\u0E94 \u0E9B\u0EB0\u0E8A\u0EB2\u0E97\u0EB4\u0E9B\u0EB0\u0EC4\u0E95 \u0EC0\u0EAD\u0E81\u0EB0\u0E9E\u0EB2\u0E9A \u0EA7\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB0\u0E96\u0EB2\u0EA7\u0EAD\u0E99|santiphap ekalat paxathipatai ekaphap vatthanathavon|devise nationale : paix, ind\xE9pendance, d\xE9mocratie, unit\xE9, prosp\xE9rit\xE9
\u0E81\u0EB0\u0E8A\u0EA7\u0E87|kaxouang|minist\xE8re
\u0EA5\u0EB1\u0E94\u0E96\u0EB0\u0E9A\u0EB2\u0E99|latthaban|gouvernement`},{h:"Le vocabulaire des m\xE9dias",ex:`\u0E82\u0EC8\u0EB2\u0EA7|khao|nouvelles
\u0EC0\u0EAA\u0E94\u0E96\u0EB0\u0E81\u0EB4\u0E94|setthakit|\xE9conomie
\u0EAA\u0EB1\u0E87\u0E84\u0EBB\u0EA1|sangkhom|soci\xE9t\xE9
\u0E81\u0EB2\u0E99\u0EAA\u0EB6\u0E81\u0EAA\u0EB2|kan seuksa|\xE9ducation
\u0EAA\u0EB4\u0EC8\u0E87\u0EC1\u0EA7\u0E94\u0EA5\u0EC9\u0EAD\u0EA1|sing vaet lom|environnement
\u0E9E\u0EB1\u0E94\u0E97\u0EB0\u0E99\u0EB2|phatthana|d\xE9velopper
\u0E9B\u0EB0\u0E8A\u0EB2\u0E8A\u0EBB\u0E99|paxaxon|peuple, population
\u0E81\u0EAD\u0E87\u0E9B\u0EB0\u0E8A\u0EB8\u0EA1|kong paxoum|r\xE9union, conf\xE9rence`},{h:"Le vocabulaire royal et religieux",p:"Pour les moines, un vocabulaire sp\xE9cial existe (\u0EA5\u0EB2\u0E8A\u0EB2\u0EAA\u0EB1\u0E9A). On ne te demandera pas de le produire, mais savoir le reconna\xEEtre est pr\xE9cieux.",ex:`\u0EAA\u0EB0\u0EC0\u0EAB\u0EA7\u0EB5\u0E8D|savoey|manger (pour un moine)
\u0E88\u0EB3\u0EA7\u0EB1\u0E94|jamvat|dormir (pour un moine)
\u0EAD\u0EB2\u0E95\u0EB0\u0EA1\u0EB2|atama|je (dit par un moine)
\u0E8D\u0EB2\u0E97\u0EC8\u0EB2\u0E99|nya than|v\xE9n\xE9rable (s'adresser \xE0 un moine)`,warn:"Utiliser un mot soutenu dans un contexte familier sonne ridicule ou ironique. \xAB \u0EAE\u0EB1\u0E9A\u0E9B\u0EB0\u0E97\u0EB2\u0E99 \xBB au resto avec des amis fera rire tout le monde !"}]},{id:"dialectes",lvl:"C1",icon:"\u{1F5FA}\uFE0F",t:"R\xE9gions et dialectes",goal:"Savoir que le lao varie selon les r\xE9gions et ne pas \xEAtre d\xE9stabilis\xE9.",blocks:[{h:"Un pays, plusieurs lao",p:"Ce cours enseigne le <b>lao de Vientiane</b>, norme de facto (t\xE9l\xE9vision, administration). Mais les tons et une partie du vocabulaire varient :<br>\u2022 <b>Nord</b> (Luang Prabang) : m\xE9lodie tr\xE8s diff\xE9rente, chantante, et quelques mots propres.<br>\u2022 <b>Centre</b> (Vientiane, Khammouane) : la r\xE9f\xE9rence.<br>\u2022 <b>Sud</b> (Savannakhet, Paks\xE9, Champassak) : tons diff\xE9rents, d\xE9bit souvent plus rapide.<br>\u2022 <b>Isan</b> (Tha\xEFlande) : lao tr\xE8s proche, m\xEAl\xE9 de tha\xEF.<br>Le Laos compte aussi environ <b>50 ethnies officielles</b> (Hmong, Khmu, Tai Dam\u2026) avec leurs propres langues."},{h:"Parler neutre",warn:"Ces variations sont r\xE9elles mais complexes : n'essaie pas d'imiter un accent r\xE9gional. Parle le lao de Vientiane : il est compris partout et per\xE7u comme neutre."},{h:"R\xE9agir quand tu ne comprends pas",ex:`\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0E8A\u0EC9\u0EB2\u0EC6\u0EC1\u0E94\u0EC8|vao xa xa dae|parle lentement, s'il te pla\xEEt
\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2\u0EAD\u0EB5\u0E81\u0EC0\u0E97\u0EB7\u0EC8\u0EAD\u0EDC\u0EB6\u0EC8\u0E87\u0EC4\u0E94\u0EC9\u0E9A\u0ECD?|vao ik theua neung dai bo?|tu peux r\xE9p\xE9ter ?
\u0EDD\u0EB2\u0E8D\u0E84\u0EA7\u0EB2\u0EA1\u0EA7\u0EC8\u0EB2\u0EC1\u0E99\u0EA7\u0EC3\u0E94?|mai khouam va naeo dai?|\xE7a veut dire quoi ?
\u0EAA\u0EB3\u0E99\u0EBD\u0E87\u0EC1\u0E82\u0EA7\u0E87\u0EC3\u0E94?|samniang khaeng dai?|c'est l'accent de quelle province ?
\u0E84\u0EBB\u0E99\u0EC1\u0E82\u0EA7\u0E87\u0EC3\u0E94?|khon khaeng dai?|tu viens de quelle province ?`}]},{id:"thai",lvl:"C1",icon:"\u{1F1F9}\u{1F1ED}",t:"Lao et tha\xEF : les faux amis",goal:"Comprendre la proximit\xE9 avec le tha\xEF et \xE9viter les confusions vexantes.",blocks:[{h:"Langues s\u0153urs",p:"Le lao et le tha\xEF sont tr\xE8s proches : environ 70 % de vocabulaire commun et une grammaire quasi identique. Beaucoup de Lao comprennent le tha\xEF gr\xE2ce \xE0 la t\xE9l\xE9vision tha\xEFe. <b>Mais l'inverse est rarement vrai</b>, et parler tha\xEF \xE0 un Lao peut \xEAtre per\xE7u comme condescendant."},{h:"Diff\xE9rences du quotidien",ex:`\u0E82\u0EAD\u0E9A\u0EC3\u0E88|khop jai|merci (tha\xEF : khop khoun)
\u0E9A\u0ECD\u0EC8\u0EC0\u0E9B\u0EB1\u0E99\u0EAB\u0E8D\u0EB1\u0E87|bo pen nyang|pas grave (tha\xEF : mai pen rai)
\u0E9A\u0ECD\u0EC8|bo|non (tha\xEF : mai)
\u0EC1\u0E8A\u0E9A|xaep|d\xE9licieux (tha\xEF : aroi)
\u0EC0\u0EA7\u0EBB\u0EC9\u0EB2|vao|parler (tha\xEF : phout)
\u0E87\u0EB2\u0EA1|ngam|beau (tha\xEF : souay)
\u0EAB\u0EBC\u0EB2\u0E8D|lai|beaucoup (tha\xEF : mak)
\u0EC0\u0E82\u0EBB\u0EC9\u0EB2\u0EDC\u0EBD\u0EA7|khao niao|riz gluant (m\xEAme mot !)`,warn:"Ne dis jamais \xE0 un Lao que le lao est \xAB un dialecte du tha\xEF \xBB. C'est une langue nationale \xE0 part enti\xE8re, avec sa propre \xE9criture, et le sujet est tr\xE8s sensible."},{h:"Les faux amis pi\xE9geux",ex:`\u0EC1\u0E8A\u0E9A|xaep|d\xE9licieux (en Isan aussi ; pas en tha\xEF central)
\u0EA1\u0EC8\u0EA7\u0E99|mouan|amusant (en tha\xEF : rare)
\u0EC0\u0E8A\u0EBB\u0EB2|xao|arr\xEAter (en tha\xEF : louer)`,tip:"Si tu as appris le tha\xEF avant, tu as une longueur d'avance, mais \xAB lao\xEFse \xBB syst\xE9matiquement : bo plut\xF4t que mai, xaep plut\xF4t que aroi. Les Lao appr\xE9cient \xE9norm\xE9ment cet effort."}]}]});var g,Y=h(()=>{"use strict";R();J();Q();_();X();W();g=[...I,...U,...K,...F,...G,...Z]});var xe,T,ee=h(()=>{"use strict";xe="https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=lo&q=",T=class{constructor(a,n){this.onChange=a;this.onFail=n;if(!("speechSynthesis"in window))return;let o=()=>{this.voices=speechSynthesis.getVoices().filter(i=>/^lo/i.test(i.lang)),this.voice=this.voices.find(i=>i===this.voice)??this.voices.find(i=>/natural|online/i.test(i.name))??this.voices[0],this.onChange(this)};o(),speechSynthesis.addEventListener("voiceschanged",o)}onChange;onFail;voices=[];voice;audio=new Audio;finish=()=>{};rate=.85;get list(){return this.voices}get current(){return this.voice}stop(){"speechSynthesis"in window&&speechSynthesis.cancel(),this.audio.pause(),this.finish()}select(a){this.voice=this.voices.find(n=>n.name===a)}say(a){let n=a.replace(/\.{3}|…/g," ").trim();return this.voice?this.native(n,this.voice):this.online(n)}native(a,n){return this.stop(),new Promise(o=>{let i=new SpeechSynthesisUtterance(a);Object.assign(i,{voice:n,lang:n.lang,rate:this.rate,onend:o,onerror:o}),speechSynthesis.speak(i)})}online(a){return this.stop(),this.audio.src=xe+encodeURIComponent(a),this.audio.playbackRate=this.rate,new Promise(n=>{this.finish=n,this.audio.onended=()=>n(),this.audio.play().catch(()=>{this.onFail(),n()})})}}});var b,ae=h(()=>{"use strict";b={get(e,a){try{return JSON.parse(localStorage.getItem(e)??"")}catch{return a}},set(e,a){try{localStorage.setItem(e,JSON.stringify(a))}catch{}}}});var z,P,ye,ne,B,oe,je,qe,Le,ie,te,Te,Ee,se,re,ue=h(()=>{"use strict";k();z='<svg viewBox="0 0 24 24"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',P=e=>[...e].reduce((a,n)=>(a*31+n.charCodeAt(0))%360,11),ye={A0:"D\xE9butant absolu",A1:"D\xE9butant",A2:"\xC9l\xE9mentaire",B1:"Interm\xE9diaire",B2:"Avanc\xE9",C1:"Expert"},ne=(e,a)=>`
<article class="card" tabindex="0" role="button" data-say="${e.lo}" style="--h:${P(e.cat)}">
  <header><span class="rank">${a}</span><span class="tag">${e.core===!1?"bonus \xB7 ":""}${e.cat}</span></header>
  <div class="lo">${e.lo}</div><div class="ro">${e.ro}</div><div class="fr">${e.fr}</div>
  <span class="play">${z}</span>
</article>`,B=(e,a)=>`
<article class="row" tabindex="0" role="button" data-say="${e.lo}" style="--h:${P(e.cat||e.lo)}">
  <span class="play">${z}</span>
  ${a?`<span class="rank">${a}</span>`:""}
  <div class="txt"><div class="lo">${e.lo}</div><div class="ro">${e.ro}</div></div>
  <div class="fr">${e.fr}</div>
</article>`,oe=(e,a)=>["Tout",...e].map(n=>`<button class="chip${n===a?" on":""}" data-cat="${n}" style="--h:${P(n)}">${n}</button>`).join(""),je=e=>`<div class="tiles">${D(e).map(a=>`
<button class="tile" data-say="${a.say}">
  <span class="cls ${a.tag}">${a.tag}</span>
  <span class="glyph">${a.glyph}</span><b>${a.ro}</b><small>${a.note}</small>
</button>`).join("")}</div>`,qe=(e,a)=>`
<div class="dlg" id="${a}">
  <button class="btn ghost small" data-play-all="#${a} [data-say]">\u25B6 \xC9couter tout le dialogue</button>
  ${$(e).map((n,o)=>`
  <div class="bubble ${o%2?"right":"left"}" tabindex="0" role="button" data-say="${n.lo}">
    <small>${n.who}</small><div class="lo">${n.lo}</div><div class="ro">${n.ro}</div><div class="fr">${n.fr}</div>
  </div>`).join("")}
</div>`,Le=(e,a)=>`
<section class="block">
  <h3>${e.h}</h3>
  ${e.p?`<div class="prose">${e.p}</div>`:""}
  ${e.grid?je(e.grid):""}
  ${e.dlg?qe(e.dlg,a):""}
  ${e.ex?`<div class="rows">${j(e.ex).map(n=>B(n)).join("")}</div>`:""}
  ${e.warn?`<aside class="tip warn"><span>\u26A0\uFE0F</span><p>${e.warn}</p></aside>`:""}
  ${e.tip?`<aside class="tip"><span>\u{1F4A1}</span><p>${e.tip}</p></aside>`:""}
</section>`,ie=(e,a,n,o)=>`
<button class="lesson-item${n?" on":""}${o?" done":""}" data-lesson="${e.id}">
  <span class="ico">${o?"\u2713":e.icon}</span>
  <span class="li-t"><small>${String(a+1).padStart(2,"0")} \xB7 ${e.lvl}</small>${e.t}</span>
</button>`,te=(e,a,n)=>`
<div class="lesson-head lvl-${e.lvl}">
  <span class="big-ico">${e.icon}</span>
  <div><p class="eyebrow">Le\xE7on ${a+1} \xB7 ${e.lvl} \u2014 ${ye[e.lvl]}</p><h2>${e.t}</h2><p class="goal">${e.goal}</p></div>
</div>
${e.blocks.map((o,i)=>Le(o,`${e.id}-${i}`)).join("")}
<section class="block quiz" id="quiz"></section>
<div class="lesson-foot">
  <button class="btn ghost" data-step="-1">\u2190 Pr\xE9c\xE9dente</button>
  <button class="btn ${n?"ok":"primary"}" data-done="${e.id}">${n?"\u2713 Le\xE7on acquise":"Marquer comme acquise"}</button>
  <button class="btn ghost" data-step="1">Suivante \u2192</button>
</div>`,Te=(e,a)=>a?`<div class="q"><span class="fr-q">${e.fr}</span></div>`:`<div class="q" tabindex="0" role="button" data-say="${e.lo}"><span class="play">${z}</span><span class="lo">${e.lo}</span><span class="ro">${e.ro}</span></div>`,Ee=(e,a,n)=>n?`<button class="opt" data-answer="${a}" data-say="${e.lo}"><span class="lo">${e.lo}</span><small>${e.ro}</small></button>`:`<button class="opt" data-answer="${a}">${e.fr}</button>`,se=({q:e,reverse:a,options:n},o,i,u)=>`
<h3>\u{1F3AF} Entra\xEEnement <small>${o+1}/${i} \xB7 score ${u}</small></h3>
<p class="hint">${a?"Comment dit-on en lao ?":"Que signifie ?"}</p>
${Te(e,a)}
<div class="opts">${n.map(s=>Ee(s,s===e,a)).join("")}</div>`,re=(e,a)=>`
<h3>\u{1F3AF} Entra\xEEnement termin\xE9</h3>
<p class="score">${e} / ${a} ${e===a?"\u{1F3C6} Parfait !":e>=a/2?"\u{1F44F} Bien jou\xE9":"\u{1F4AA} R\xE9\xE9coute et r\xE9essaie"}</p>
<button class="btn primary" data-quiz="restart">Recommencer</button>`});var De=ge(()=>{H();N();Y();k();ee();ae();ue();var Me=8,le=4,Ae=700,$e=1600,we=500,Se=6e3,r=e=>document.querySelector(e),ze=e=>[...new Set(e.map(a=>a.cat))],Pe=e=>{let a=r("#toast");a.innerHTML=e,a.classList.add("show"),setTimeout(()=>a.classList.remove("show"),Se)},x=new T(e=>{r("#voice-dot").className=e.current?"dot live":"dot",r("#voice").innerHTML=e.list.length?e.list.map(a=>`<option${a===e.current?" selected":""}>${a.name}</option>`).join(""):"<option>Voix en ligne (secours)</option>"},()=>Pe("\u{1F507} Aucune voix lao disponible. Ouvre le site dans <b>Microsoft Edge</b> pour les voix neuronales laotiennes (Keomany \u2640 / Chanthavong \u2642).")),v=0,pe=async e=>{document.querySelectorAll(".speaking").forEach(a=>a.classList.remove("speaking")),e.classList.add("speaking"),await x.say(e.dataset.say),e.classList.remove("speaking")},me=async e=>{let a=++v;for(let n of document.querySelectorAll(e)){if(a!==v)return;n.scrollIntoView({block:"center",behavior:"smooth"}),await pe(n),await new Promise(o=>setTimeout(o,we))}a===v&&(v=0)},ce=()=>{v=0,x.stop()},Be=async(e,a)=>{if(v){ce();return}e.textContent="\u25A0 Stop",await me(a),e.textContent="\u25B6 \xC9coute auto"},de=(e,a,n)=>{let o={q:"",cat:"Tout"},i=()=>{let u=w(o.q),s=a.map((p,c)=>[p,c+1]).filter(([p])=>o.cat==="Tout"||p.cat===o.cat).filter(([p])=>!u||[p.lo,p.ro,p.fr].some(c=>w(c).includes(u)));r(`${e} .chips`).innerHTML=oe(ze(a),o.cat),r(`${e} .count`).textContent=`${s.length} / ${a.length}`,r(`${e} .list`).innerHTML=s.map(([p,c])=>n(p,c)).join("")||'<p class="empty">Aucun r\xE9sultat \u{1F937}</p>'};r(e).addEventListener("input",u=>{u.target.matches(".search")&&(o.q=u.target.value,i())}),r(e).addEventListener("click",u=>{let s=u.target,p=s.closest("[data-cat]");p&&(o.cat=p.dataset.cat,i()),s.closest(".mask")&&r(e).classList.toggle("masked");let c=s.closest(".auto");c&&Be(c,`${e} .list [data-say]`)}),i()},Oe=(()=>{let e=b.get("lesson",g[0].id),a=new Set(b.get("done",[])),n={items:[],i:0,score:0,round:0},o=()=>Math.max(0,g.findIndex(t=>t.id===e)),i=(t,m)=>{let d=new Set([t.fr,t.lo]);return L(m).filter(l=>!d.has(l.fr)&&!d.has(l.lo)&&!!d.add(l.fr).add(l.lo)).slice(0,le-1)},u=()=>{let t=n.items[n.i];r("#quiz").innerHTML=t?se(t,n.i,n.items.length,n.score):re(n.score,n.items.length)},s=()=>{let t=O(g[o()].blocks).filter(l=>!l.lo.includes("...")),m=t.length>=le?t:f.slice(0,80),d=[...m,...f];n.items=L(m).slice(0,Me).map((l,E)=>({q:l,reverse:E%2===1,options:L([l,...i(l,d)])})),Object.assign(n,{i:0,score:0,round:n.round+1}),u()},p=t=>{let m=t.dataset.answer==="true",d=n.round;n.score+=Number(m),document.querySelectorAll("#quiz .opt").forEach(l=>{l.disabled=!0,l.classList.add(l.dataset.answer==="true"?"good":l===t?"bad":"dim")}),setTimeout(()=>{d===n.round&&(n.i++,u())},m?Ae:$e)},c=()=>{let t=o(),m=Math.round(a.size/g.length*100);r("#progress-bar").style.width=`${m}%`,r("#progress-txt").textContent=`${a.size}/${g.length} le\xE7ons \xB7 ${m}%`,r("#lesson-nav").innerHTML=g.map((d,l)=>ie(d,l,l===t,a.has(d.id))).join(""),r("#lesson").innerHTML=te(g[t],t,a.has(g[t].id)),s()},y=t=>{e=t,b.set("lesson",t),c(),r("#lesson").scrollIntoView({behavior:"smooth"})};return r("#course").addEventListener("click",t=>{let m=t.target,d=m.closest("[data-lesson]"),l=m.closest("[data-step]"),E=m.closest("[data-done]"),C=m.closest(".opt");d&&y(d.dataset.lesson),l&&y(g[Math.min(g.length-1,Math.max(0,o()+Number(l.dataset.step)))].id),E&&(a.has(e)?a.delete(e):a.add(e),b.set("done",[...a]),c()),m.closest("[data-quiz]")&&s(),C&&!C.disabled&&p(C)}),{draw:c}})(),he=e=>{document.querySelectorAll("[data-tab]").forEach(a=>a.classList.toggle("on",a.dataset.tab===e)),document.querySelectorAll("main > section").forEach(a=>a.hidden=a.id!==e),b.set("tab",e)};document.addEventListener("click",e=>{let a=e.target,n=a.closest("[data-tab]"),o=a.closest("[data-play-all]"),i=a.closest("[data-say]");n&&he(n.dataset.tab),o&&(ce(),me(o.dataset.playAll)),i&&(i.classList.toggle("reveal"),pe(i))});document.addEventListener("keydown",e=>{let a=e.target.closest("article[data-say], .bubble[data-say], .q[data-say]");!a||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),a.click())});r("#voice").addEventListener("change",e=>x.select(e.target.value));r("#rate").addEventListener("input",e=>{x.rate=Number(e.target.value),r("#rate-val").textContent=`\xD7${x.rate.toFixed(2)}`});r("#stat-words").textContent=String(f.filter(e=>e.core).length);r("#stat-phrases").textContent=String(S.length);r("#stat-lessons").textContent=String(g.length);de("#vocab",f,ne);de("#phrases",S,(e,a)=>B(e,a));Oe.draw();he(b.get("tab","vocab"))});De();})();
