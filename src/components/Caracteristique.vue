<template>
    <div class="caracteristique">
        <div class="caracLabel">
            {{ caracteristique.shortLabel }}
        </div>
        <div class="caracBlockContainer">
            <div class="caracBlock">
                <div class="bigCaracBlock caracBlockItem">
                    <input type="number" v-model="caracteristique.value" readonly />
                </div>
                <div class="upperCaracBlock caracBlockItem">
                    <input type="number" value="2" readonly />
                </div>
                <div class="underCaracBlock caracBlockItem">
                    <input type="number" value="3" readonly />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Caracteristique",
  props: {
    caracteristique: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.caracteristique {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 150px;
  margin: 5px 0 5px 0;
}

.caracLabel {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.caracBlockContainer {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.caracBlock {
  background-color: aliceblue;
  width: 60px;
  height: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "bigCaracBlock upperCaracBlock"
    "bigCaracBlock underCaracBlock";
}

.bigCaracBlock {
  grid-area: bigCaracBlock;
}

.upperCaracBlock {
  grid-area: upperCaracBlock;
}

.underCaracBlock {
  grid-area: underCaracBlock;
}

.caracBlockItem {
  align-self: stretch;
  justify-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  border: thin solid black;
}

input {
  height: 100%;
  width: 100%;
  padding: 0;
  outline: none;
  border: none;
  text-align: center;
}

input[type="number"] {
  appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]:hover::-webkit-inner-spin-button,
input[type="number"]:hover::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
