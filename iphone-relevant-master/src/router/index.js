import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import upgrade from '../views/upgrade'
import addSource from '../views/addSource'
import breakout from '../views/breakout'

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
    }
  ]
})
