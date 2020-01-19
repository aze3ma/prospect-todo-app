import React from 'react';
import classnames from 'classnames';

import TodoTextInput from './TodoTextInput';

interface TodoItemProps {
  todo: Todo;
  editTodo: Function;
  deleteTodo: Function;
  completeTodo: Function;
}

const TodoItem = ({ todo, editTodo, completeTodo, deleteTodo }: TodoItemProps): React.ReactElement => {
  const [editing, setTodoState] = React.useState(false);

  const handleDoubleClick = () => {
    setTodoState(true);
  };

  const handleSave = (id: string | number, text: string) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    setTodoState(false);
  };

  let element;
  if (editing) {
    element = <TodoTextInput text={todo.text} editing={editing} onSave={(text: string) => handleSave(todo.id, text)} />;
  } else {
    element = (
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => completeTodo(todo.id)} />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
    );
  }
  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing: editing,
      })}
    >
      {element}
    </li>
  );
};

export default TodoItem;
