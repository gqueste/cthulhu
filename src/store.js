import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    caracteristiques: {
      force: {
        label: "Force",
        shortLabel: "FOR"
      },
      dexterite: {
        label: "Dexterité",
        shortLabel: "DEX"
      },
      pouvoir: {
        label: "Pouvoir",
        shortLabel: "POU"
      },
      constitution: {
        label: "Constitution",
        shortLabel: "CON"
      },
      apparence: {
        label: "Apparence",
        shortLabel: "APP"
      },
      education: {
        label: "Education",
        shortLabel: "EDU"
      },
      taille: {
        label: "Taille",
        shortLabel: "TAI"
      },
      intelligence: {
        label: "Intelligence",
        shortLabel: "INT"
      },
      mouvement: {
        label: "Mouvement",
        shortLabel: "MVT"
      }
    },
    competences: [
      {
        label: "Anthropologie (01 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Archéologie (01 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Arts et métiers (05 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Baratin (05 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Bibliothèque (20 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Charme (15 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Combat à distance",
        isCategory: true,
        columnNb: 1
      },
      {
        label: "(armes de poing) (20 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "(fusils) (25 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Combat rapproché",
        isCategory: true,
        columnNb: 1
      },
      {
        label: "(corps à corps) (25 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Comptabilité (05 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Conduite (20 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Conduite engin lourd (01 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Crédit (00 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Crochetage (01 %)",
        isCategory: false,
        columnNb: 1
      },
      {
        label: "Discrétion (20 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Droit (05 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Ecouter (20 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Electricité (10 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Equitation (05 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Esquive (DEX/2)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Estimation (05 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Grimper (20 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Histoire (05 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Imposture (05 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Intimidation (15 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Lancer (20 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Langue maternelle (EDU)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Langues (01 %)",
        isCategory: true,
        columnNb: 2
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Mécanique (10 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Médecine (01 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Mythe de Cthulhu (00 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Nager (20 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Naturalisme (10 %)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Occultisme (05%)",
        isCategory: false,
        columnNb: 2
      },
      {
        label: "Orientation (10 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Persuasion (10 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Pickpocket (10 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Pilotage (01 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Pister (10 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Plongée (01 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Premiers soins (30 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Psychanalyse (01 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Psychologie (10 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Sauter (20 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Sciences (01 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Survie (10 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "Trouver Objet Caché (25 %)",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      },
      {
        label: "...",
        isCategory: false,
        columnNb: 3
      }
    ]
  },
  mutations: {},
  actions: {}
});
