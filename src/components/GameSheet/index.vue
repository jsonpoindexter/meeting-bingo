<template>
  <div class="box-wrapper">
    <Box v-for="box in bingoBoxes" :key="box.label" :bingo-box="box" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Box from '@/components/GameSheet/Box.vue'
import * as gameSheet from '@/store/gameSheet'
import { BingoBox } from '@/store/gameSheet'
@Component({
  components: {
    Box,
  },
})
export default class GameSheet extends Vue {
  bingoBoxes: BingoBox[] = gameSheet.readBingoBoxes(this.$store)
}
</script>
<style scoped>
.box-wrapper {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1000px;
}
</style>
