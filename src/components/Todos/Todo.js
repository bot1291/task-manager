import { RiTodoFill } from 'react-icons/ri';
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import styles from './Todo.module.css';

function Todo({ value, removeTodo, setComplited, isCompleted, id }) {
  return (
    <div className={`${styles.todo} ${isCompleted ? styles.todoComplited : ''}`}>
      <RiTodoFill className={styles.todoIconTable} />
      <h1 className={styles.todoText}>{value}</h1>
      <AiFillCloseCircle
        onClick={isCompleted ? () => undefined : () => removeTodo(id)}
        className={`${styles.todoIconRemove} ${styles.todoIcon}`}
      />
      <AiFillCheckCircle
        onClick={() => setComplited(id)}
        className={`${styles.todoIconComplited} ${styles.todoIcon}`}
      />
    </div>
  );
}

export default Todo;
