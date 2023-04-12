import Card from '../ui/card/Card';
import Input from '../ui/form/Input';
import CountryCodeSelect from '../ui/form/CountryCodeSelect';
import styles from './SignUpForm.module.css';
import Button from '../ui/form/Button';
import Image from 'next/image';
import Link from 'next/link';
import {
  useSignUpMutation,
  useVerifyOtpMutation,
} from '@/store/slices/api/authApiSlice';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect, useId } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

const OTP_RESEND_INTERVAL_SEC = 15;

const SignUpForm = () => {
  const router = useRouter();
  const otpResendTimerEl = useRef<HTMLSpanElement>(null!);
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [
    signUp,
    {
      isSuccess: signUpIsSuccess,
      isError: signUpIsError,
      isLoading: signUpIsLoading,
      error: signUpError,
    },
  ] = useSignUpMutation();

  const [
    verifyOtp,
    {
      isSuccess: verifyOtpIsSuccess,
      isError: verifyOtpIsError,
      isLoading: verifyOtpIsLoading,
      error: verifyOtpError,
    },
  ] = useVerifyOtpMutation();

  const signUpFormik = useFormik({
    initialValues: {
      mobile: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .trim()
        .phone('IN', 'Please provide a valid mobile number')
        .required(),
      firstName: Yup.string()
        .trim()
        .min(3, 'Must be minimum 3 characters')
        .max(20, 'Must not be more than 20 characters')
        .required('Required'),
      lastName: Yup.string()
        .trim()
        .min(3, 'Must be minimum 3 characters')
        .max(20, 'Must not be more than 20 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      let userDetails: { mobile: string; firstName: string; lastName: string };

      userDetails = {
        mobile: values.mobile,
        firstName: values.firstName,
        lastName: values.lastName,
      };

      await signUp(userDetails);
    },
  });
  const OtpHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOtp(e.target.value);

  const verifyOtpHandler = async () => {
    let optDetails: { mobile: string; verificationCode: string };

    optDetails = {
      mobile: signUpFormik.values.mobile,
      verificationCode: otp,
    };

    await verifyOtp(optDetails);
  };

  useEffect(() => {
    if (signUpIsSuccess) {
      setShowOtp(true);
    }

    if (verifyOtpIsSuccess) {
      router.push('/onboard/create-store');
    }
  }, [signUpIsSuccess, verifyOtpIsSuccess, router]);

  useEffect(() => {
    if (signUpError) {
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
  }, [signUpError, verifyOtpError]);

  return (
    <Card className={styles.signInCard}>
      <div className={styles.headingContainer}>
        <h2>Create store in 10mins</h2>
        <span className={styles.helperText}>
          Already have a account?{' '}
          <Link href='/onboard/sign-in' className={styles.highlight}>
            Sign in
          </Link>
        </span>
      </div>
      <form
        noValidate
        onSubmit={signUpFormik.handleSubmit}
        className={styles.formContainer}
      >
        <div className={styles.inputWrapper}>
          <Input
            label='First Name'
            inputProps={{
              id: 'firstName',
              required: true,
              value: signUpFormik.values.firstName,
              onChange: signUpFormik.handleChange,
              onBlur: signUpFormik.handleBlur,
              name: 'firstName',
              placeholder: 'Your First Name',
            }}
            invalid={
              signUpFormik.touched.firstName && signUpFormik.errors.firstName
                ? true
                : false
            }
            errorText={
              signUpFormik.touched.firstName && signUpFormik.errors.firstName
                ? signUpFormik.errors.firstName
                : ''
            }
          />
          <Input
            label='Last Name'
            inputProps={{
              id: 'lastName',
              required: true,
              value: signUpFormik.values.lastName,
              onChange: signUpFormik.handleChange,
              onBlur: signUpFormik.handleBlur,
              name: 'lastName',
              placeholder: 'Your Last Name',
            }}
            invalid={
              signUpFormik.touched.lastName && signUpFormik.errors.lastName
                ? true
                : false
            }
            errorText={
              signUpFormik.touched.lastName && signUpFormik.errors.lastName
                ? signUpFormik.errors.lastName
                : ''
            }
          />
        </div>
        <Input
          label='Enter Mobile Number'
          inputProps={{
            id: 'mobile',
            required: true,
            value: signUpFormik.values.mobile,
            onChange: signUpFormik.handleChange,
            onBlur: signUpFormik.handleBlur,
            name: 'mobile',
            placeholder: 'Enter Mobile Number',
          }}
          invalid={
            signUpFormik.touched.mobile && signUpFormik.errors ? true : false
          }
          leftEl={<CountryCodeSelect id={useId()} />}
          errorText={
            signUpFormik.touched.mobile && signUpFormik.errors.mobile
              ? signUpFormik.errors.mobile
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
            Create your Store
          </Button>
        ) : (
          <Button type='submit' loading={signUpIsLoading}>
            Send OTP
          </Button>
        )}
        {errorText && <span className={styles.errorText}>{errorText}</span>}
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

export default SignUpForm;
