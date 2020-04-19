<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>Username: {{ switchName() }}</p>
    <p>Userage: {{ userAge }}</p>
    <button @click='changeName'>Change the name</button>
    <button @click="resetName()">Change the name with callback function</button>
	</div>
</template>

<script>
export default {
	props: {
		myName: {
			type: String,
			default: 'ABC'
    },
    resetName: Function,
    userAge: Number
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
