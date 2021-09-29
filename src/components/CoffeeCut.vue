<template>
  <div class="container">
    <div class="center">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        class="svg"
      >
        <mask id="mask" style="mask-type:alpha" maskUnits="userSpaceOnUse">
          <path
            d="M75.9494 100L92.2898 67.4157L100 33.7079V0H0V33.7079L8.97599 67.4157L24.0506 100H75.9494Z"
            fill="#C4C4C4"
          />
        </mask>

        <g mask="url(#mask)">
          <rect
            v-for="(rect, i) in rects"
            :key="i"
            x="0"
            :y="`${rect.y + (i === 0 ? 0 : 3)}%`"
            width="100%"
            :height="`${rect.heightPercents - (i === 0 ? 0 : 3)}%`"
            :fill="rect.color"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { LiquidLayer } from "@/tmp/LiquidLayer";
import { Vue } from "vue-class-component";
import { Cup } from "../tmp/Cup";

export default class CoffeeCut extends Vue {
  cup = Cup.flatWhite()
    .addLiquidLayer(new LiquidLayer("milkFoam", 1 / 22))
    .addLiquidLayer(new LiquidLayer("milk", 15 / 22))
    .addLiquidLayer(new LiquidLayer("coffee", 6 / 22));

  get rects() {
    const rects: {
      y: number;
      heightPercents: number;
      color: string;
    }[] = [];

    for (const layer of this.cup.layers) {
      rects.push({
        y: rects.reduce((acc, { heightPercents }) => acc + heightPercents, 0),
        heightPercents: layer.volumePercent * 100,
        color: layer.color,
      });
    }

    return rects;
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #ffae42;
  display: grid;
  grid: 1fr 3fr 1fr / 1fr 3fr 1fr;
}

.center {
  grid-row: 2;
  grid-column: 2;
}

.svg {
  width: 100%;
  height: 100%;
}

rect:hover {
  filter: brightness(0.5);
  transition: 0.1s;
}
</style>
