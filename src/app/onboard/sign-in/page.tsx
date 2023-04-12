'use client';
import Image from 'next/image';
import SignInForm from '@/app/components/onboard/SignInForm';
import OuterWrapper from '@/app/components/ui/layout/OuterWrapper';
import styles from '../Onboard.module.css';

const SignInPage = () => {
  return (
    <section className={styles.signInSection}>
      <Image
        className={styles.cover}
        src='/assets/images/log-in.png'
        width={3840}
        height={2400}
        alt='sign in cover'
      />
      <OuterWrapper className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.logo}>logo</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
            eget adipiscing faucibus platea. Eu ultrices ipsum
          </p>
        </div>
        <SignInForm />
      </OuterWrapper>
    </section>
  );
};

export default SignInPage;
