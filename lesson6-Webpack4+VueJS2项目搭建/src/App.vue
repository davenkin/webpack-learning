<template>
  <div id="app">
    <div>
      <router-link to="/page1">Go to Page 1</router-link>
      <router-link to="/page2">Go to Page 2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import './styles/_reset.scss';
  @import './styles/_global.scss';
</style>
