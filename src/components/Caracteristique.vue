<template>
    <div class="caracteristique">
        <div class="caracLabel">
            {{ label }}
        </div>
        <div class="caracBlockContainer">
            <div class="caracBlock">
                <div class="bigCaracBlock caracBlockItem">
                    1
                </div>
                <div class="upperCaracBlock caracBlockItem">
                    2
                </div>
                <div class="underCaracBlock caracBlockItem">
                    3
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Caracteristique",
  props: {
    label: String
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
</style>
