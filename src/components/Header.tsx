import React from 'react';
import TodoTextInput from './TodoTextInput';

interface HeaderProps {
  addTodo: Function;
}

const Header = ({ addTodo }: HeaderProps): React.ReactElement => (
  <header className="header">
    <TodoTextInput
      newTodo
      onSave={(text: string) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

export default Header;
