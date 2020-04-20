<template>
  <div>
    <h3>New Quote</h3>
    <button @click="increase++">Increase</button>
    <p>{{ increase }}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return ({
        increase: 0
      })
    },
    destroyed() {
      console.log('destroyed!')
    },
    activated() {
      console.log('activated!')
    },
    deactivated() {
      console.log('deactivated!')
    }
  }
</script>

<style scoped>

</style>