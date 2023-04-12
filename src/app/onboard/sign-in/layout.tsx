import styles from '../Onboard.module.css';

const SignInLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return <main className={styles.signUpMain}>{children}</main>;
};

export default SignInLayout;
