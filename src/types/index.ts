export type Todo = {
  id: string;
  name: string;
  completed: boolean;
  editMode: boolean;
};

export type NewTodo = {
  name: string;
  isValid: boolean;
  error: string;
};
