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
  content: string;
  createdAt: string;
};

export type NewNote = {
  name: string;
  isValid: boolean;
  error: string;
};

export type Folder = {
  id: string;
  name: string;
  notes: Note[];
};

export type NewFolder = {
  name: string;
  isValid: boolean;
  error: string;
};
