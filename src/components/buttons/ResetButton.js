import { BiReset } from 'react-icons/bi';
import styles from './Button.module.css';

function ResetButton({ reset }) {
  return (
    <BiReset
      title={'Reset list of todos'}
      onClick={() => reset()}
      className={styles.button}
    />
  );
}

export default ResetButton;
