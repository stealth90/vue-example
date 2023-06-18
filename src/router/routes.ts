import RoutesNames from "./routesNames";

const routes = [
  {
    path: "/",
    name: RoutesNames.home,
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: RoutesNames.about,
    component: () => import("@/views/AboutView.vue"),
  },
];

export default routes;
