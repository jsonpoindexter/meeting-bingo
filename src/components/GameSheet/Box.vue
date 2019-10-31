<template>
  <div class="box" :class="{ selected: bingoBox.selected }" @click="selectBox">
    {{ bingoBox.label }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BingoBox } from '@/components/GameSheet/box'

@Component({})
export default class Box extends Vue {
  @Prop() private bingoBox!: BingoBox

  selectBox() {
    if (this.bingoBox.label !== 'FREE SPACE') this.bingoBox.selected = !this.bingoBox.selected
  }
}
</script>
<style scoped>
.box {
  border: 1px solid grey;
  margin: 1px;
  padding: 10px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  min-height: 150px;
}
.selected {
  background-color: lightgreen;
}

.box:hover {
  cursor: pointer;
}
</style>
