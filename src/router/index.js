import Vue from 'vue'
import Router from 'vue-router'
import home from './home'

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      // component:{template:'<div>222</div>'}
    },
    home
  ]
})
function setRouterDefault(to) {
  var first = to.params&&to.params.first || (to.matched[0]&&to.matched[0].name)
  var second = to.params&&to.params.second || (to.matched[1]&&to.matched[1].name)
  if(first){
    store.commit('COMMIT_SELECT',first)
  }
  if(second){
    store.commit('COMMIT_SECSELECT',second)
  }
}
router.beforeEach((to, from, next) => {
  setRouterDefault(to)
  next();
})
export default router
