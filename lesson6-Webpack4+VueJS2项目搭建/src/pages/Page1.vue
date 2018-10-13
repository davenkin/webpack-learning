<template>
  <div :class="$style.yellow">
    <hello-world/>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld';
  export default {
    components: {
      HelloWorld
    }
  }
</script>

<style module lang="scss">
  .yellow {
    background-color: yellow;
  }
</style>
