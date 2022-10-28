import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, removeTodo, setComplited }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            value={todo.text}
            removeTodo={removeTodo}
            setComplited={setComplited}
            isCompleted={todo.isCompleted}
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export default TodoList;
