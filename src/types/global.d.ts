interface Action {
  type: string;
  [prop: string]: any;
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
