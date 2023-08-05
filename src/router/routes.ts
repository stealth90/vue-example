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
    path: "/note",
    name: RoutesNames.NOTE,
    icon: "mdi-heart",
    component: () => import("@/views/NoteView.vue"),
  },
];

export default routes;
