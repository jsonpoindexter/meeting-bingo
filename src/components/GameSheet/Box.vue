<template>
  <button class="box">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Box extends Vue {
  @Prop() private label!: string;
}
</script>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid grey;
  margin: 1px;
  padding: 10px;
  background: none;
  outline: none;
}
</style>
