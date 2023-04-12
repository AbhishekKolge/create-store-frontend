import { apiSlice } from './apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation<unknown, { mobile: string }>({
      query: (userDetails) => ({
        url: '/auth/otp',
        method: 'POST',
        body: userDetails,
      }),
    }),
    verifyOtp: builder.mutation<
      unknown,
      { mobile: string; verificationCode: string }
    >({
      query: (verificationDetails) => ({
        url: '/auth/verify',
        method: 'POST',
        body: verificationDetails,
      }),
    }),
    signUp: builder.mutation<
      unknown,
      { mobile: string; firstName: string; lastName: string }
    >({
      query: (userDetails) => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: userDetails,
      }),
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation, useSignUpMutation } =
  authApiSlice;
