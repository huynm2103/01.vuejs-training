<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { FruitMixin } from "./fruitMixin";
export default {
  mixins: [FruitMixin]
};
</script>

<style>
</style>
