<template>
  <div><button @click="onClear">Clear All</button></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as gameSheet from '@/store/gameSheet'
@Component()
export default class Controls extends Vue {
  onClear() {
    gameSheet.commitReset(this.$store)
  }
}
</script>
