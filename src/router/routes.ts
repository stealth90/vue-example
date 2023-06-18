/* import { RouteConfig } from "vue-router"; */

import RoutesNames from "./routesNames";

const routes = [
  {
    path: "/",
    name: RoutesNames.home,
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/settings",
    name: RoutesNames.settings,
    component: () => import("@/views/AboutView.vue"),
  },
];

export default routes;
