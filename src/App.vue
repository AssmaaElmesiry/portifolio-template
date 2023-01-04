<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style lang="sass">
@font-face
  font-family: "Manrope-Bold"
  src: url('./webfonts/Manrope-Bold.ttf')
  src: url('./webfonts/Manrope-Bold.ttf')
  font-weight: normal
  font-style: normal

@font-face
  font-family: "Manrope-Regular"
  src: url('./webfonts/Manrope-Regular.ttf')
  src: url('./webfonts/Manrope-Regular.ttf')
  font-weight: normal
  font-style: normal

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
