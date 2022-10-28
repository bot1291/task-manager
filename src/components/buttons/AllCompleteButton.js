import { TbListCheck } from 'react-icons/tb';
import styles from './Button.module.css';

function AllCompleteButton({ allTodoComplete }) {
  return (
    <TbListCheck
      onClick={() => (allTodoComplete ? allTodoComplete() : undefined)}
      title={'Set all todo complete'}
      className={`${styles.button} ${
        !allTodoComplete && styles.allCompleteButtonOff
      }`}
    />
  );
}

export default AllCompleteButton;
