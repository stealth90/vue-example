export interface IRoutesNames {
  HOME: string;
  NOTE: string;
  TODO_LIST: string;
}

const routesNames: Readonly<IRoutesNames> = {
  HOME: "home",
  NOTE: "note",
  TODO_LIST: "todo",
};

export default routesNames;
