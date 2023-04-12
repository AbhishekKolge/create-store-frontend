import OuterWrapper from '../ui/layout/OuterWrapper';
import styles from './Layout.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <OuterWrapper className={styles.container}>
        <span className={styles.footerText}>
          &copy; copyright 2023 <span>company</span>
        </span>
      </OuterWrapper>
    </footer>
  );
};

export default Footer;
