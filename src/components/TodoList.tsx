import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  filteredTodos: Array<Todo>;
  actions: any;
}

const TodoList = ({ filteredTodos, actions }: TodoListProps): React.ReactElement => (
  <ul className="todo-list">
    {filteredTodos.map(todo => (
      <TodoItem key={todo.id} todo={todo} {...actions} />
    ))}
  </ul>
);

export default TodoList;
