<template>
  <div class="background">
    <coffee-cut />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CoffeeCut from "./components/CoffeeCut.vue";

@Options({
  components: {
    CoffeeCut,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #FFAE42;
}
</style>
