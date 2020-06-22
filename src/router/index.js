import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      name: "常用短语",
      icon: "mdi-account-voice"
    }
  },
  {
    path: "/dialogue",
    name: "Dialogue",
    component: () => import(/* webpackChunkName: "dialog" */ "../views/Dialogue.vue"),
    meta: {
      name: "场景对话",
      icon: "mdi-forum"
    }
  },
  {
    path: "/grammar",
    name: "Grammar",
    component: () => import(/* webpackChunkName: "grammar" */ "../views/Grammar.vue"),
    meta: {
      name: "常用语法",
      icon: "mdi-book"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
