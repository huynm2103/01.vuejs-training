<template>
  <div class="container">
    <progress-bar :quotesMax="maxQuotes" :quotesCount="quotes.length"></progress-bar>
    <new-quote @quoteAdded="quoteAdded"></new-quote>
    <quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Infor: Click on a quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  data: function() {
    return {
      quotes: ["First quote"],
      maxQuotes: 10
    };
  },
  components: {
    QuoteGrid,
    NewQuote,
    ProgressBar
  },
  methods: {
    quoteAdded(quote) {
      if(this.quotes.length === this.maxQuotes) {
        alert('quotes is max!');
        return;
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
