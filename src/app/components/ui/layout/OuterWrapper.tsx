import { OuterWrapperProps } from './OuterWrapperTypes';
import styles from './OuterWrapper.module.css';

const OuterWrapper: React.ComponentType<OuterWrapperProps> = (props) => {
  const { children, className } = props;
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default OuterWrapper;
