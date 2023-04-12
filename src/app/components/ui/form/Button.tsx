import styles from './Button.module.css';
import { ButtonProps } from './FormTypes';

const Button: React.ComponentType<ButtonProps> = (props) => {
  const { children, className, onClick, type, loading } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${className}`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
