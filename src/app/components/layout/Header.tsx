import OuterWrapper from '../ui/layout/OuterWrapper';
import styles from './Layout.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <OuterWrapper className={styles.container}>
        <h1 className={styles.logo}>logo</h1>
      </OuterWrapper>
    </header>
  );
};

export default Header;
