<template>
  <div class="box-wrapper">
    <Box v-for="label in shuffle(boxLabels).slice(0, 25)" :key="label" :label="label"></Box>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Box from '@/components/GameSheet/Box.vue'
@Component({
  components: {
    Box,
  },
})
export default class GameSheet extends Vue {
  boxLabels: string[] = [
    "'Action Item'",
    "'Can you see my screen?'",
    "'Grooming Session'",
    "'Hypercare'",
    "'Dark Launch'",
    "'Callout'",
    "'Killing it'",
    "'---- can you go on mute'",
    "'Sorry, I was on mute'",
    'FREE SPACE',
    "'--- here!' in the middle of a conversation",
    'scrum is longer than 15min (free space)',
    "'Launch Readiness'",
    "'What is the LOE on that?'",
    "'oh yeah, I forgot about that!'",
    "'Let's take that offline'",
    "'Let's bring it up in war room'",
    'loud typing w/ mic on',
    "'I'm thinking...'",
    "'Sorry, I missed that..'",
    'screen sharing a DM',
    "screen sharer's Download bar in the browser open",
    'screen sharer has low laptop battery',
    '"Analytics"',
    '"SEO/OEP"',
    "'Accessibility'",
    "'Responsive'",
  ]

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} array items An array containing the items.
   */
  shuffle(array: string[]) {
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
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1000px;
}
</style>
