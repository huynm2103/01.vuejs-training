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
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  h1 {
    color: red;
  }

  .title {
    font-style: italic;
  }
</style>