import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
import VueRouter  from "vue-router";
import { routes } from "./routes.js";

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = "https://vuejs-http-c4e49.firebaseio.com";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.filter('toLower', function (value) {
  return value.toLowerCase();
})

Vue.directive('highlight', {
  // eslint-disable-next-line no-unused-vars
  bind(el, binding, vnode) {
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    // console.log(binding)
    // console.log(el)
    // console.log(vnode)

    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
