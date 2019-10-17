// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store'
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  // console.log('to:',to);
  // console.log('from:',from);
  // console.log('next:',next);
  next();
})

router.afterEach((to,from)=>{})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
