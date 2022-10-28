import ResetButton from './ResetButton';
import AllCompleteButton from './AllCompleteButton';
import RemoveComplitedTodoButton from './RemoveComplitedTodoButton';
import styles from './Button.module.css';

function Buttons({ reset, removeComplitedTodo, allTodoComplete }) {
  return (
    <div className={styles.buttons}>
      <ResetButton reset={reset} />
      <RemoveComplitedTodoButton removeComplitedTodo={removeComplitedTodo} />
      <AllCompleteButton allTodoComplete={allTodoComplete} />
    </div>
  );
}

export default Buttons;
