<template>
	<p>Counter is: {{ getDoubleCounter }}</p>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from '../store/types';

export default {
	// computed: {
  //   counter() {
  //     // return this.$store.state.counter;
  //     return this.$store.getters.getDoubleCounter;
  //   }
  // }
  computed: {
    ...mapGetters({
      getDoubleCounter: types.DOUBLE_COUNTER
    })
  }
};
</script>
