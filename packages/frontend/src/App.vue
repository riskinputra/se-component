<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" src="./styles/font/font-family.scss"></style>
<style lang="scss" src="./styles/icon/se-font.min.scss"></style>
<style lang="scss">
@import './styles/index.scss';
</style>
