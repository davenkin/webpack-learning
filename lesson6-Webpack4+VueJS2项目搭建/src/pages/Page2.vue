<template>
  <div :class="$style.blue">
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
  .blue {
    background-color: blue;
  }
</style>
