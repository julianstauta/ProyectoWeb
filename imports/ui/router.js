import Vue from 'vue'
import VueRouter from 'vue-router'
//import AuthGuard from '../authguard'

import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  { path: "/", name:"root", component: SignIn },
  { path: "/signin", name:"signin", component: SignIn },
  { path: "/signup", name:"signup", component: SignUp },
  //{ path: "/users", name:"users", component: "Users" , beforeEnter: AuthGuard},
  //{ path: "/dependencies", name:"dependencies", component: "Dependencies" , beforeEnter: AuthGuard},
  { path: "*", name:"notfound", component: NotFound }
];

const  router = new VueRouter({mode: 'history', routes})

export default router
