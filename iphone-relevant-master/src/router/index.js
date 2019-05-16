import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import upgrade from '../views/upgrade'
import addSource from '../views/addSource'
import breakout from '../views/breakout'
import PanGu from '../views/PanGu'
import YaLu from '../views/YaLu'
import Electra from '../views/Electra'
import Unc0ver from '../views/Unc0ver'
import Chimera from '../views/Chimera'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/upgrade',
      name: 'upgrade',
      component: upgrade
    },
    {
      path: '/addSource',
      name: 'addSource',
      component: addSource
    },
    {
      path: '/breakout',
      name: 'breakout',
      component: breakout
    },
    {
      path: '/breakout/pangu',
      name: 'PanGu',
      component: PanGu
    },
    {
      path: '/breakout/yalu',
      name: 'YaLu',
      component: YaLu
    },
    {
      path: '/breakout/electra',
      name: 'Electra',
      component: Electra
    },
    {
      path: '/breakout/unc0ver',
      name: 'Unc0ver',
      component: Unc0ver
    },
    {
      path: '/breakout/chimera',
      name: 'Chimera',
      component: Chimera
    }
  ]
})
