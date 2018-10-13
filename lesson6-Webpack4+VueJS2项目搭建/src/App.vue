<template>
  <div id="app">
    <div>
      <router-link to="/helloworld1">Go to HelloWorld1</router-link>
      <router-link to="/helloworld2">Go to HelloWorld2</router-link>
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
