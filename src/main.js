import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/store'
import router from './router/routes'
import App from './App.vue'
import VuePageTransition from 'vue-page-transition'

Vue.use(Vue2Filters)
Vue.use(VuePageTransition)
Vue.config.productionTip = false

/* Global Guards -> Realiza uma verificação em todas as rotas da aplicação
router.beforeEach((to, from, next) => {

  console.log(to, from);

  next();

});

router.afterEach(() => {

  console.log('Renderização ok');

});
*/

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
