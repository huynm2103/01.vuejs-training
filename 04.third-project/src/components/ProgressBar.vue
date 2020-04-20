<template>
  <div class="row">
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{width: (quotesCount/quotesMax)*100 + '%' }"
      ></div>
      {{ quotesCount }} / {{ quotesMax }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["quotesCount", "quotesMax"]
};
</script>

<style scoped>
</style>