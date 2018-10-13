<template>
  <div id="app">
    <div>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </div>
    <router-view/>

    <!--import image via webpack module-->
    <img src="@/assets/big-image.jpg">

    <!--import static image by pass webpack-->
    <img src="/normal-image.jpg">
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import './reset.css';
  @import './global.css';
  img {
    max-width: 100%;
  }
</style>
