<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<button @click="changeName">Change my name</button>
		<p>{{ name }}</p>
    <p>{{ age }}</p>
		<hr />
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail
					:myName="name"
					@nameWasReset="name = $event"
					:resetName="resetFn"
          :userAge="age"
				></app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit :userAge="age" @ageWasReset="age = $event"></app-user-edit>
			</div>
		</div>
	</div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
	data: function() {
		return {
      name: 'Max',
      age: 27
		};
	},
	methods: {
		changeName() {
			this.name = 'Anna';
		},
		resetFn() {
			this.name = 'Max';
		},
	},
	components: {
		appUserDetail: UserDetail,
		appUserEdit: UserEdit,
	},
};
</script>

<style scoped>
div {
	background-color: lightblue;
}
</style>
