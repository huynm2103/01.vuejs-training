<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>Username: {{ switchName() }}</p>
    <button @click='changeName'>Change the name</button>
	</div>
</template>

<script>
export default {
	props: {
		myName: {
			type: String,
			default: 'ABC'
		},
	},
	methods: {
		switchName() {
			return this.myName
				.split('')
				.reverse()
				.join('');
    },
    changeName() {
      this.myName = 'Max';
      this.$emit('nameWasReset', this.myName);
    }
	},
};
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
