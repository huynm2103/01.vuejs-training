<template>
  <div class="row">
    <quote v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{ quote }}</quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit('deleteQuote', index);
    }
  }
};
</script>

<style scoped>
</style>