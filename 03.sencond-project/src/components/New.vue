<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span><slot name="subtitle">The subtitle</slot></span>
    </div>
    <hr>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>