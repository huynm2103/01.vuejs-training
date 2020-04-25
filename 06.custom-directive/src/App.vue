<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">Alert some info!</div>
        </transition>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpper | toLower }}</p>
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'v-text'"></p>
        <p v-html="'v-html'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'green'">Color this!</p>
        <p v-highlight="'green'">Color this!</p>
        <p v-local-highlight:background.delayed="'red'">Local Color this!</p>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/List.vue";
import { FruitMixin } from "./components/fruitMixin";

export default {
  data() {
    return {
      text: "Hello there!",
      show: false
    };
  },
  components: {
    appList: List
  },
  mixins: [FruitMixin],
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    "local-highlight": {
      // eslint-disable-next-line no-unused-vars
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }

        setTimeout(() => {
          if (binding.arg == "background") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      }
    }
  }
};
</script>

<style>
</style>
