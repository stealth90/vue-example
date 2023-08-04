import RoutesNames from "./routesNames";
import TodoListView from "../views/TodoListView.vue";

const routes = [
  {
    path: "/",
    name: RoutesNames.TODO_LIST,
    icon: "ri:todo-line",
    component: TodoListView,
  },
  {
    path: "/home",
    name: RoutesNames.HOME,
    icon: "mdi-heart",
    component: () => import("@/views/AboutView.vue"),
  },
];

export default routes;
