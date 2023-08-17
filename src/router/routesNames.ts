export interface IRoutesNames {
  HOME: string;
  NOTES: string;
  FOLDERS: string;
  TODO_LIST: string;
}

const routesNames: Readonly<IRoutesNames> = {
  HOME: "home",
  NOTES: "notes",
  FOLDERS: "folders",
  TODO_LIST: "todo",
};

export default routesNames;
