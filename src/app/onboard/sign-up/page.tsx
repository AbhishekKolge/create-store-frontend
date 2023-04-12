'use client';
import Image from 'next/image';
import SignUpForm from '@/app/components/onboard/SignUpForm';
import OuterWrapper from '@/app/components/ui/layout/OuterWrapper';
import styles from '../Onboard.module.css';

const SignUnPage = () => {
  return (
    <section className={styles.signUpSection}>
      <Image
        className={styles.signUpCover}
        src='/assets/images/sign-up-bg.png'
        width={1920}
        height={1080}
        alt='sign up cover'
      />
      <OuterWrapper className={styles.containerSecondary}>
        <SignUpForm />
      </OuterWrapper>
    </section>
  );
};

export default SignUnPage;
