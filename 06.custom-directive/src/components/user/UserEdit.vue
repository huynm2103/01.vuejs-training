<template>
	<div>
		<h3>Edit the User</h3>
		<p>Name: {{ $route.query.name }}</p>
    <p>Age: {{ $route.query.age }}</p>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
	</div>
</template>

<script>
export default {
  data() {
    return ({
      confirmed: false
    })
  },
  beforeRouteLeave(to, from, next) {
    if(this.confirmed) {
      next();
    } else {
      if(confirm('Are you sure?')) {
        next();
      } else {
        next(false);
      }
    }
  }
}
</script>
