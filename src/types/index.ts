export type Todo = {
  id: string;
  name: string;
  completed: boolean;
  editMode: boolean;
  color: string;
  backgroundColor:string;
};

export type NewTodo = {
  name: string;
  isValid: boolean;
  error: string;
};

export type Note = {
  id: string;
  name: string;
};

export type NewNote = {
  name: string;
  isValid: boolean;
  error: string;
};
