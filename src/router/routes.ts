import RoutesNames from "./routesNames";
import TodoListView from "../views/TodoListView.vue";

interface AppRoutes {
  path: string;
  name: string;
  icon: string;
  activeIcon: string;
  component: any;
}

const routes: AppRoutes = [
  {
    path: "/",
    name: RoutesNames.TODO_LIST,
    icon: "ri:todo-line",
    activeIcon: "ri:todo-fill",
    component: TodoListView,
  },
  {
    path: "/note",
    name: RoutesNames.NOTE,
    icon: "mdi-heart",
    activeIcon: "mdi-heart-outline",
    component: () => import("@/views/NoteView.vue"),
  },
];

export default routes;
