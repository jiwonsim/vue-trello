import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath =  `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode : 'history',
  routes : [
    { path : '/', component : Home, beforeEnter : requireAuth}, 
    { path : '/login', component : Login },
    { path : '/b/:bid', component : Board, children : [
      { path : 'c/:cid', component : Card }
    ]}, 
    { path : '*', component : NotFound} //순서를 엄수하는 뷰이기 때문에 /, /login을 제외한 모든 페이지에서 Not Found가 뜬다. 
  ] 
})

export default router 