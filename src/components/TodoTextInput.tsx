import React from 'react';
import classnames from 'classnames';

interface TodoTextInputProps {
  onSave: Function;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

const TodoTextInput = (props: TodoTextInputProps): React.ReactElement => {
  const [text, setValue] = React.useState('');

  const handleSubmit = (event: any): void => {
    const value = event.target.value.trim();
    if (event.which === 13) {
      props.onSave(value);
      if (props.newTodo) {
        setValue('');
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!props.newTodo) {
      props.onSave(event.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: props.editing,
        'new-todo': props.newTodo,
      })}
      type="text"
      placeholder={props.placeholder}
      autoFocus={true}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default TodoTextInput;
