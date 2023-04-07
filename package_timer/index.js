import TimerPlugin from '../package/timer/index.vue'
import Tt from '../package/tt/index.vue'
const coms = [TimerPlugin, Tt]
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com)
  })
}

export default install
