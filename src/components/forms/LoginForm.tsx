import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '../../features/auth/authApi';

import { setCredentials } from '../../features/auth/authSlice';
import { InputField } from './InputField';
import { Button } from './Button';
import { useAppDispatch } from '../../hooks/TypesRedux';
import { toastMsg } from '../../utils/toast';



const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 chars')
});
type FormData = z.infer<typeof schema>;

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await loginUser(data).unwrap();
      dispatch(setCredentials(res));
      toastMsg.success(res.message);
    } catch (err: any) {
      toastMsg.error(err?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <InputField label="Email" type="email" {...register('email')} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <InputField label="Password" type="password" {...register('password')} />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <Button type="submit" disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</Button>
    </form>
  );
};
