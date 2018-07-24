import 'normalize.css'
import '../../styles/style.less'
import Vue from 'vue'
import vdemo from './vdemo'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: {vdemo},
  template: '<vdemo/>'
})
