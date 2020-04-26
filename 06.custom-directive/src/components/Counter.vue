<template>
	<div>
		<button class="btn btn-primary" @click="increment({by: 50, duration: 1000})">Increment</button>
		<button class="btn btn-primary" @click="decrement({by: 50, duration: 1000})">Decrement</button>
	</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapMutations, mapActions } from "vuex";
import * as types from '../store/types';

export default {
	methods: {
    ...mapActions({
      increment: types.COUNTER_INCREMENT,
      decrement: types.COUNTER_DECREMENT
    })
    // ...mapMutations([
    //   'increment',
    //   'decrement'
    // ])
		// increment() {
    //   // this.$store.state.counter++;
    //   this.$store.commit('increment');
		// },
		// decrement() {
    //   // this.$store.state.counter--;
    //   this.$store.commit('decrement');
		// },
	},
};
</script>
