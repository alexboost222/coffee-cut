<template>
  <div class="cup">
    1
  </div>
</template>

<script lang="ts">
import { Cup } from "@/tmp/Cup";
import { Options, Vue } from "vue-class-component";

@Options({
  props: { cup: Cup },
})
export default class HelloWorld extends Vue {
  cup!: Cup;
}
</script>

<style scoped></style>
