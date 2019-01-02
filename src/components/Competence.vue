<template>
    <div class="competence">
        <div v-if="!isCategory" class="round"></div>
        <div class="competenceLabel">{{ label }}</div>
        <div v-if="!isCategory" class="percentage">---- %</div>
        <div v-if="!isCategory" class="competenceBlock">
            <div class="competenceSquare"></div>
            <div class="competenceSquare"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Competence",
  props: {
    label: String,
    isCategory: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.competence {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.round {
  width: 10px;
  height: 10px;
  border: thin solid black;
  border-radius: 50%;
}

.competenceLabel {
  flex-grow: 1;
}

.competenceBlock {
  display: flex;
  flex-wrap: nowrap;
}

.competenceSquare {
  border: thin solid black;
  width: 15px;
  height: 20px;
}
</style>
