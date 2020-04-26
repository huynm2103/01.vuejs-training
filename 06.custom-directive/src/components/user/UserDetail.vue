<template>
	<div>
		<h3>Some User Details</h3>
		<p>Loaded id: {{ $route.params.id }}</p>
		<router-link
			tag="button"
			class="btn btn-primary"
			:to="{ name: 'editUser', params: { id: $route.params.id }, query: { name: 'ABC', age: '6' } }"
			>Edit User</router-link
		>
	</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('before route enter')
    next();
  }
}
</script>
