import Vue from 'vue'
import App from './App.vue'
// import Home from './components/Home.vue'

Vue.config.productionTip = false

// Vue.component('app-server-status', Home);
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasReset', age);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
