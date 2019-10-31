<template>
  <div class="game-sheet-wrapper">
    <div class="box-wrapper"><Box v-for="box in bingoBoxes" :key="box.label" :bingo-box="box" /></div>
    <Controls />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Box from '@/components/GameSheet/Box.vue'
import * as gameSheet from '@/store/gameSheet'
import { BingoBox } from '@/store/gameSheet'
import Controls from '@/components/GameSheet/Controls.vue'
@Component({
  components: {
    Controls,
    Box,
  },
})
export default class GameSheet extends Vue {
  bingoBoxes: BingoBox[] = gameSheet.readBingoBoxes(this.$store)
  created() {
    this.bingoBoxes.splice(12, 0, { label: 'FREE SPACE', selected: true })
  }
}
</script>
<style scoped>
.box-wrapper {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1000px;
}
.game-sheet-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
