<template>
  <div class="container">
    <div class="center-cell"></div>
    <svg xmlns="http://www.w3.org/2000/svg" class="liquid">
      <polygon v-for="(polygon, i) in liquidPolygons" :key="i" :points="polygon.toSVGPolygonPoints(300, 300)" />
    </svg>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Cup } from "../tmp/Cup";
import { LiquidLayer } from "../tmp/LiquidLayer";

const cupTemplate = Cup.flatWhite();
cupTemplate.addLiquidLayer(new LiquidLayer("coffee", 9 / 22));
cupTemplate.addLiquidLayer(new LiquidLayer("milk", 11 / 22));
cupTemplate.addLiquidLayer(new LiquidLayer("milkFoam", 2 / 22));

export default class CoffeeCut extends Vue {
  liquidPolygons = cupTemplate.generatePolygons();
}
</script>


<style scoped>
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ffae42;
  display: grid;
  grid: 1fr 3fr 1fr / 1fr 3fr 1fr;
}

.liquid {
  grid-row: 2 / 2;
  grid-column: 2 / 2;
  margin: auto;
}

.center-cell {
  grid-row: 2 / 2;
  grid-column: 2 / 2;
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
