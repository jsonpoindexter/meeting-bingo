<template>
  <div class="box-wrapper">
    <Box v-for="box in bingoBoxes" :key="box.label" :bingo-box="box" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Box from '@/components/GameSheet/Box.vue'
import { BingoBox } from '@/components/GameSheet/box'
@Component({
  components: {
    Box,
  },
})
export default class GameSheet extends Vue {
  bingoBoxes: BingoBox[] = this.shuffle([
    { label: "'Action Item'", selected: false },
    { label: "'Can you see my screen?'", selected: false },
    { label: "'Grooming Session'", selected: false },
    { label: "'Hypercare'", selected: false },
    { label: "'Callout'", selected: false },
    { label: "'Killing it'", selected: false },
    { label: "'---- can you go on mute'", selected: false },
    { label: "'Sorry, I was on mute'", selected: false },
    { label: "'--- here!' in the middle of a conversation", selected: false },
    { label: 'scrum is longer than 15min (free space)', selected: false },
    { label: "'Launch Readiness'", selected: false },
    { label: "'What is the LOE on that?'", selected: false },
    { label: "'oh yeah, I forgot about that!'", selected: false },
    { label: "'Let's take that offline'", selected: false },
    { label: "'Let's bring it up in war room'", selected: false },
    { label: 'loud typing w/ mic on', selected: false },
    { label: "'I'm thinking...'", selected: false },
    { label: "'Sorry, I missed that..'", selected: false },
    { label: 'screen sharing a DM', selected: false },
    { label: "screen sharer's Download bar in the browser is open", selected: false },
    { label: 'screen sharer has low laptop battery', selected: false },
    { label: "'Responsive'", selected: false },
    { label: 'eating over the microphone', selected: false },
  ]).slice(0, 24)

  created() {
    this.bingoBoxes.splice(12, 0, { label: 'FREE SPACE', selected: true })
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} array items An array containing the items.
   */
  shuffle(array: BingoBox[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
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
</style>
