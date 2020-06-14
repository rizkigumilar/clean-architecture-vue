import 'reflect-metadata'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import ElementUI from 'element-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import { AppComponent } from './app/framework/di/AppComponents'
import 'normalize.css'
import 'v-markdown-editor/dist/index.css'
import Editor from 'v-markdown-editor'
import moment from 'moment'
import Vuelidate from 'vuelidate'

Vue.prototype.moment = moment
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)
Vue.use(ElementUI)
Vue.use(Editor)
Vue.config.productionTip = false
Vue.component('tag-icon', Icon)
AppComponent.init()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
