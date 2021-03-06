import Vue from 'vue'
import VueRouter from 'vue-router'
//import AuthGuard from '../authguard'

import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Home from '../views/Home'
import PlayerSelection from '../views/PlayerSelection'
import PlayerDetail from '../views/PlayerDetail'
import Players from '../views/Players'
import NotFound from '../views/NotFound'
import AuthGuard from '../authguard'
import MyTeams from '../views/MyTeams'

Vue.use(VueRouter)

const routes = [
  { path: "/", name:"root", component: SignIn },
  { path: "/signin", name:"signin", component: SignIn },
  { path: "/signup", name:"signup", component: SignUp },
  { path: "/home", name:"home", component: Home },
  { path: "/selection", name:"selection", component: PlayerSelection },
  { path: "/playerdetail", name:"playerdetail", component: PlayerDetail},
  { path: "/players", name:"players", component: Players, beforeEnter: AuthGuard},
  { path: "/myteams", name:"myteams", component: MyTeams},
  //{ path: "/dependencies", name:"dependencies", component: "Dependencies" , beforeEnter: AuthGuard},
  { path: "*", name:"notfound", component: NotFound }
];

const  router = new VueRouter({mode: 'history', routes})

export default router
