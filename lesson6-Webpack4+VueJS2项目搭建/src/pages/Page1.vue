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

  /*tag选择器不会被module化,会原封不动地输出到css文件中*/
  div {
    color: whitesmoke;
  }

  /*id 选择器也会被module化*/
  #aa {
    color: blue;
  }

</style>
