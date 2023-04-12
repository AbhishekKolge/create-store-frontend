import Card from '../ui/card/Card';
import Input from '../ui/form/Input';
import CountryCodeSelect from '../ui/form/CountryCodeSelect';
import styles from './SignInForm.module.css';
import Button from '../ui/form/Button';
import Image from 'next/image';
import Link from 'next/link';
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from '@/store/slices/api/authApiSlice';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect, useId } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

const OTP_RESEND_INTERVAL_SEC = 15;

const SignInForm = () => {
  const router = useRouter();
  const otpResendTimerEl = useRef<HTMLSpanElement>(null!);
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [
    sendOtp,
    {
      isSuccess: sendOtpIsSuccess,
      isError: sendOtpIsError,
      isLoading: sendOtpIsLoading,
      error: sendOtpError,
    },
  ] = useSendOtpMutation();

  const [
    verifyOtp,
    {
      isSuccess: verifyOtpIsSuccess,
      isError: verifyOtpIsError,
      isLoading: verifyOtpIsLoading,
      error: verifyOtpError,
    },
  ] = useVerifyOtpMutation();

  const sendOtpFormik = useFormik({
    initialValues: {
      mobile: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .trim()
        .phone('IN', 'Please provide a valid mobile number')
        .required(),
    }),
    onSubmit: async (values) => {
      let userDetails: { mobile: string };

      userDetails = {
        mobile: values.mobile,
      };

      await sendOtp(userDetails);
    },
  });

  const OtpHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOtp(e.target.value);

  const verifyOtpHandler = async () => {
    let optDetails: { mobile: string; verificationCode: string };

    optDetails = {
      mobile: sendOtpFormik.values.mobile,
      verificationCode: otp,
    };

    await verifyOtp(optDetails);
  };

  useEffect(() => {
    if (sendOtpIsSuccess) {
      setShowOtp(true);
    }

    if (verifyOtpIsSuccess) {
      router.push('/onboard/create-store');
    }
  }, [sendOtpIsSuccess, verifyOtpIsSuccess, router]);

  useEffect(() => {
    if (sendOtpError) {
      setErrorText('Something went wrong!, please try again');

      setTimeout(() => {
        setErrorText('');
      }, 2000);
    }
    if (verifyOtpError) {
      setErrorText('Something went wrong!, please try again');

      setTimeout(() => {
        setErrorText('');
      }, 2000);
    }
  }, [sendOtpError, verifyOtpError]);

  const googleLoginHandler = async () => {
    window.open(`${process.env.NEXT_PUBLIC_URL}/auth/google`, '_self');
  };
  return (
    <Card className={styles.signInCard}>
      <div className={styles.headingContainer}>
        <h2>Get Started !</h2>
        <span className={styles.helperText}>
          New to Company?{' '}
          <Link href='/onboard/sign-up' className={styles.highlight}>
            Sign up
          </Link>
        </span>
      </div>
      <form
        noValidate
        onSubmit={sendOtpFormik.handleSubmit}
        className={styles.formContainer}
      >
        <Input
          label='Enter Mobile Number'
          inputProps={{
            id: 'mobile',
            required: true,
            value: sendOtpFormik.values.mobile,
            onChange: sendOtpFormik.handleChange,
            onBlur: sendOtpFormik.handleBlur,
            name: 'mobile',
            placeholder: 'Enter Mobile Number',
          }}
          invalid={
            sendOtpFormik.touched.mobile && sendOtpFormik.errors.mobile
              ? true
              : false
          }
          leftEl={<CountryCodeSelect id={useId()} />}
          errorText={
            sendOtpFormik.touched.mobile && sendOtpFormik.errors.mobile
              ? sendOtpFormik.errors.mobile
              : ''
          }
        />
        {showOtp && (
          <Input
            label='Enter OTP'
            inputProps={{
              id: 'otp',
              required: true,
              value: otp,
              onChange: OtpHandler,
              name: 'otp',
              placeholder: 'Enter four digit OTP',
            }}
            invalid={false}
            helperText={
              <span className={styles.helperText}>
                Haven’t received code?{' '}
                <span className={styles.highlight}>
                  <button className={styles.resendBtn}>Resend</button> in{' '}
                  <span>0:59</span> sec
                </span>
              </span>
            }
          />
        )}
        {showOtp ? (
          <Button
            type='button'
            loading={verifyOtpIsLoading}
            onClick={verifyOtpHandler}
          >
            Login
          </Button>
        ) : (
          <Button loading={sendOtpIsLoading} type='submit'>
            Get OTP
          </Button>
        )}
        {errorText && <span className={styles.errorText}>{errorText}</span>}
        <span className={styles.helperTextSecondary}>Or sign in with</span>
        <div className={styles.socialBtnContainer}>
          <Button
            type='button'
            onClick={googleLoginHandler}
            className={styles.socialBtn}
          >
            <Image
              src='/assets/icons/google.svg'
              alt='google'
              width={24}
              height={24}
            />
            Google
          </Button>
          <Button type='button' className={styles.socialBtn}>
            <Image
              src='/assets/icons/facebook.svg'
              alt='facebook'
              width={24}
              height={24}
            />
            Facebook
          </Button>
        </div>

        <span
          className={`${styles.helperTextSecondary} ${styles.helperTextTertiary}`}
        >
          By creating an account means you agree to the Terms & Conditions and
          our Privacy Policy
        </span>
      </form>
    </Card>
  );
};

export default SignInForm;
