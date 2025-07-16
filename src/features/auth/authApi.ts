import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IAuthResponse, IUser } from './type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    register: builder.mutation<IAuthResponse, Partial<IUser> & { password: string }>({
      query: (user) => ({
        url: '/register',
        method: 'POST',
        body: user
      })
    }),
    login: builder.mutation<IAuthResponse, { email: string; password: string }>({
      query: (creds) => ({
        url: '/login',
        method: 'POST',
        body: creds
      })
    })
  })
});

export const { useRegisterMutation, useLoginMutation } = authApi;
