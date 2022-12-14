import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo, searchValue, inputChange, sortTodos }) {
  const [value, setValue] = useState('');

  function handleSubmitChange(e) {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return (
    <div className={styles.todoFormContainer}>
      <div className={styles.buttonsBlock}>
        <button onClick={() => sortTodos('text')}>Sort by alphabet</button>
        <button onClick={() => sortTodos('isCompleted')}>Sort by completed</button>
      </div>
      <form onSubmit={(e) => handleSubmitChange(e)}>
        <div className={styles.inputsBlock}>
          <input
            value={searchValue}
            onChange={(e) => inputChange(e.target.value)}
            placeholder="Seacrh todo"
          />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter new todo"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
