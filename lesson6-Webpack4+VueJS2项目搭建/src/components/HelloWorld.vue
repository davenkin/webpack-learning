<template>
  <div class="aa">Hello World1! {{msg}}
    <div class="global-color">Hello World1! {{msg}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: [1, 2, 4].map((n) => n + 1)
    }
    }
  }
</script>

<style scoped>
  .aa {
    background-color: red;
  }
</style>
