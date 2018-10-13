<template>
  <div :class="$style.hello">Hello World 1! {{msg}}</div>
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

<style module lang="scss">
  .hello {
    background-color: red;
    width: 300px;
    height: 300px;
  }
</style>
