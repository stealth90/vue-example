import RoutesNames from "./routesNames";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: RoutesNames.home,
    component: HomeView,
  },
  {
    path: "/about",
    name: RoutesNames.about,
    component: () => import("@/views/AboutView.vue"),
  },
];

export default routes;
