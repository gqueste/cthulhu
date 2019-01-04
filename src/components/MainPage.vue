<template>
  <div class="body">
    <div>
      <button v-on:click="randomCarac()">Caractéristiques aléatoires</button>
    </div>
    <div id="firstBlock" style="background-color: grey">
      <div id="etatCivil">
        <div class="title">
          Etat civil
        </div>
        <div class="etatCivilContainer">
          <div>
            Name
          </div>
          <div>
            Joueur
          </div>
          <div>
            Occupation
          </div>
          <div class="splitItems">
            <div style="flex-grow: 1">
              Age
            </div>
            <div style="flex-grow: 1">
              Sexe
            </div>
          </div>
        </div>
      </div>
      <div id="caracteristiques">
        <div class="title">
          Caractéristiques
        </div>
        <div class="caracContainer">
          <div class="caracFirstBlock">
            <Caracteristique :caracteristique=caracteristiques.force />
            <Caracteristique :caracteristique=caracteristiques.dexterite />
            <Caracteristique :caracteristique=caracteristiques.pouvoir />
            <Caracteristique :caracteristique=caracteristiques.constitution />
            <Caracteristique :caracteristique=caracteristiques.apparence />
          </div>
          <div class="caracSecondBlock">
            <Caracteristique :caracteristique=caracteristiques.education />
            <Caracteristique :caracteristique=caracteristiques.taille />
            <Caracteristique :caracteristique=caracteristiques.intelligence />
            <Caracteristique :caracteristique=caracteristiques.mouvement style="padding-top: 30px;"/>
          </div>
        </div>
      </div>
      <div id="header">
        <div class="projectTitle">
          Appel de Cthulhu - 7ème édition
        </div>
        <div class="headerDetails">
          <div class="posterContainer">
            <div class="poster"></div>
          </div>
          <div style="width: 50%;">
            Période classique
          </div>
        </div>
      </div>
    </div>
    <div id="secondBlock" style="background-color: red;">
      <div id="lifePoints">
        <div class="pointsDetails">
          <div>
            Blessure grave
          </div>
          <div>
            PV max
          </div>
        </div>
        <div class="pointsContainer">
          <span class="pointsLabel">Points de vie</span>
          <span class="pointsStatus">Mourant / Inconscient</span>
          <span v-for="n in 21" :key="n" class="points">{{ n - 1 | formatNumber }}</span>
        </div>
      </div>
      <div id="magicPoints">
        <div class="pointsDetails" style="justify-content: flex-end">
          <div>
            PM max
          </div>
        </div>
        <div class="pointsContainer">
          <span class="pointsLabel">Points de magie</span>
          <span v-for="n in 25" :key="n" class="points">{{ n - 1 | formatNumber }}</span>
        </div>
      </div>
      <div id="mentalHealth">
        <div class="pointsDetails">
          <div>
            Folie temp
          </div>
          <div>
            Folie persist
          </div>
          <div>
            Initiale
          </div>
          <div>
            Max
          </div>
        </div>
        <div class="pointsContainer">
          <span class="pointsLabel">Santé mentale</span>
          <span class="pointsStatus">Folie</span>
          <span v-for="n in 100" :key="n" class="points">{{ n | formatNumber }}</span>
        </div>
      </div>
      <div id="chance">
        <div class="pointsContainer">
          <span class="pointsLabel">Chance</span>
          <span class="pointsStatus">Pas de chance</span>
          <span v-for="n in 100" :key="n" class="points">{{ n | formatNumber }}</span>
        </div>
      </div>
    </div>
    <div id="thirdBlock" style="background-color: blue;">
      <div class="competencesHeader">
        Compétences de l'Investigateur
      </div>
      <div class="competences">
        <div class="competencesColumn">
          <Competence
            v-for="(c, index) in firstColumnCompetences"
            :key=index
            :competence=c
          />
        </div>
        <div class="competencesColumn">
          <Competence
            v-for="(c, index) in secondColumnCompetences"
            :key=index
            :competence=c
          />
        </div>
        <div class="competencesColumn">
          <Competence
            v-for="(c, index) in thirdColumnCompetences"
            :key=index
            :competence=c
          />
        </div>
      </div>
    </div>
    <div id="fourthBlock" style="background-color: green; height: 50px;">
    </div>
  </div>
</template>

<script>
import Caracteristique from "./Caracteristique.vue";
import Competence from "./Competence.vue";

export default {
  name: "MainPage",
  components: {
    Caracteristique,
    Competence
  },
  filters: {
    formatNumber: value => {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    }
  },
  computed: {
    caracteristiques() {
      return this.$store.state.caracteristiques;
    },
    firstColumnCompetences() {
      return this.$store.state.competences.filter(c => c.columnNb === 1);
    },
    secondColumnCompetences() {
      return this.$store.state.competences.filter(c => c.columnNb === 2);
    },
    thirdColumnCompetences() {
      return this.$store.state.competences.filter(c => c.columnNb === 3);
    }
  },
  methods: {
    randomCarac() {
      this.$store.commit('randomizeCaracteristiques');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}

h1 {
  color: red;
}

#firstBlock {
  display: flex;
  flex-wrap: wrap;
}

#etatCivil {
  min-width: 40%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
}

.etatCivilContainer {
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: stretch;
}

.title {
  background-color: aliceblue;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splitItems {
  display: flex;
  flex-wrap: nowrap;
}

#caracteristiques {
  min-width: 30%;
  display: flex;
  flex-direction: column;
}

.caracContainer {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.caracFirstBlock {
  display: flex;
  flex-direction: column;
}
.caracSecondBlock {
  display: flex;
  flex-direction: column;
}

#header {
  min-width: 30%;
  display: flex;
  flex-direction: column;
}

.headerDetails {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.posterContainer {
  width: 50%;
  display: flex;
  justify-content: center;
}

.poster {
  width: 150px;
  height: 200px;
  background-color: red;
}

/**
      SECOND BLOCK
   */
#secondBlock {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: auto;
  grid-template-areas:
    "lifePoints mentalHealth"
    "magicPoints mentalHealth"
    "chance chance";
}

#lifePoints {
  grid-area: lifePoints;
}

#magicPoints {
  grid-area: magicPoints;
}

#mentalHealth {
  grid-area: mentalHealth;
}

#chance {
  grid-area: chance;
}

.pointsDetails {
  display: flex;
  justify-content: space-around;
}

.pointsLabel {
  font-weight: bold;
  margin-right: 1px;
}

.pointsStatus {
  font-style: italic;
  margin-left: 1px;
  margin-right: 1px;
}

.pointsContainer {
  display: flex;
  flex-wrap: wrap;
}

.points {
  margin-left: 1px;
  margin-right: 1px;
}

.competencesHeader {
  display: flex;
  justify-content: center;
}

.competences {
  display: flex;
}

.competencesColumn {
  flex-grow: 1;
}
</style>
