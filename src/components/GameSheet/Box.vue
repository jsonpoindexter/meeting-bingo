<template>
  <div class="box" :class="{ selected: selected }" @click="selectBox">
    {{ label }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Box extends Vue {
  @Prop() private label!: string
  selected: boolean = this.label === 'FREE SPACE'

  selectBox() {
    if (this.label !== 'FREE SPACE') this.selected = !this.selected
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
