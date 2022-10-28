import { CgPlayListCheck } from 'react-icons/cg';
import styles from './Button.module.css';

function RemoveComplitedTodoButton({
  removeComplitedTodo,
}) {
  return (
    <CgPlayListCheck
      title={'Remove all completed todos'}
      onClick={() => removeComplitedTodo ? removeComplitedTodo() : undefined}
      className={`${styles.button} ${
        !removeComplitedTodo && styles.removeComplitedButtonOff
      }`}
    />
  );
}

export default RemoveComplitedTodoButton;
