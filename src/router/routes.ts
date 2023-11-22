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
    name: RoutesNames.HOME,
    icon: "ri:todo-line",
    activeIcon: "ri:todo-fill",
    component: TodoListView,
  },
  {
    path: "/folders",
    name: RoutesNames.FOLDERS,
    icon: "mdi-heart",
    activeIcon: "mdi-heart-outline",
    component: () => import("@/views/FolderView.vue"),
  },
  {
    path: "/folders/:folder",
    name: RoutesNames.NOTES,
    icon: "mdi-heart",
    activeIcon: "mdi-heart-outline",
    component: () => import("@/views/NoteView.vue"),
  },
];

export const bottomRoutes: AppRoutes = [
  {
    path: "/",
    name: RoutesNames.TODO_LIST,
    icon: "mdi:todo-add",
    activeIcon: "ri:todo-fill",
    component: TodoListView,
  },
  {
    path: "/folders",
    name: RoutesNames.NOTES,
    icon: "ph:note",
    activeIcon: "mdi-heart-outline",
    component: () => import("@/views/FolderView.vue"),
  },
];

export default routes;
