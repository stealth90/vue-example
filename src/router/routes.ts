import RoutesNames from "./routesNames";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: RoutesNames.HOME,
    icon: "mdi-history",
    component: HomeView,
  },
  {
    path: "/todo_list",
    name: RoutesNames.TODO_LIST,
    icon: "mdi-heart",
    component: () => import("@/views/AboutView.vue"),
  },
];

export default routes;
