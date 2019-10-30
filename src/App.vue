<template>
  <div id="app">
    <h1 class="header">Scrum Bingo!</h1>
    <GameSheet />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GameSheet from '@/components/GameSheet/index.vue'

@Component({
  components: {
    GameSheet,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
