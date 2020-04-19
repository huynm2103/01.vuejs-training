<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>{{ userAge }}</p>
    <button @click="changeAge">Change Age</button>
  </div>
</template>

<script>
  import { eventBus } from './../../main'

  export default {
    props: ['userAge'],
    methods: {
      changeAge() {
        this.userAge = '30';
        // this.$emit('ageWasReset', this.userAge);
        // eventBus.$emit('ageWasReset', this.userAge);
        eventBus.changeAge(this.userAge);
      }
    }
  }
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
