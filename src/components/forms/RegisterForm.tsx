import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '../../features/auth/authApi';
import { setCredentials } from '../../features/auth/authSlice';
import { InputField } from './InputField';
import { Button } from './Button';
import { useAppDispatch } from '../../hooks/TypesRedux';
import { toastMsg } from '../../utils/toast';


const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 chars')
});
type FormData = z.infer<typeof schema>;

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await registerUser(data).unwrap();
      console.log(res)
      dispatch(setCredentials(res));
      toastMsg.success(res.message);
   
    } catch (err: any) {
        console.log(err)
      toastMsg.error(err?.data?.message || 'Register failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <InputField label="Name" {...register('name')} />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <InputField label="Email" type="email" {...register('email')} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <InputField label="Password" type="password" {...register('password')} />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <Button type="submit" disabled={isLoading}>{isLoading ? 'Registering...' : 'Register'}</Button>
    </form>
  );
};
