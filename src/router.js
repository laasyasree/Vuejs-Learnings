import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: () => import("./components/LifeCycleHooks")
    },
    {
      path: "/parent",
      name: "parent",
      component: () => import("./components/Parent")
    },
    {
      path: "/watcher",
      name: "watcher",
      component: () => import("./components/Watcher")
    },
    {
      path: "/next-tick",
      name: "nextTick",
      component: () => import("./components/NextTick")
    },
    {
      path: "/promises",
      name: "promises",
      component: () => import("./components/Promises")
    }
  ]
});
