<template>
  <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Home from './pages/Home.vue'

@Component({
  components: {
    Home
  }
})
class App extends Vue {}

export default App
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
