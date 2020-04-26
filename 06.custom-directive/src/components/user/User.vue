<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <!-- <p>Loaded id: {{ id }}</p> -->
    <button class="btn btn-primary" @click="backToHome">Back to Homepage</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // data() {
  //   return ({
  //     id: this.$route.params.id
  //   })
  // },
  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   '$route'(to, _from){
  //     this.id = to.params.id
  //   }
  // },
  methods: {
    backToHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>