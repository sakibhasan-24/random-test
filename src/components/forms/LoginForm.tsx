import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '../../features/auth/authApi';
import { setCredentials } from '../../features/auth/authSlice';
import { InputField } from './InputField';
import { Button } from './Button';
import { useAppDispatch } from '../../hooks/TypesRedux';
import { toastMsg } from '../../utils/toast';
import { motion } from "framer-motion";
import { AuthLink } from './LoginOrRegistration';

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
<div>
  <form onSubmit={handleSubmit(onSubmit)}>
  <motion.div
    className="max-w-md mx-auto p-8 my-20 bg-white rounded-xl shadow-lg"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome Back</h2>

    <InputField label="Email" type="email" {...register('email')} />
    {errors.email && <p className="text-red-500 mb-4 text-sm">{errors.email.message}</p>}

    <InputField label="Password" type="password" {...register('password')} />
    {errors.password && <p className="text-red-500 mb-4 text-sm">{errors.password.message}</p>}

    <Button type="submit" disabled={isLoading}>
      {isLoading ? 'Logging in...' : 'Login'}
    </Button>
  </motion.div>
</form>
<AuthLink to="/register">Don't have an account? <span className='text-blue-600 hover:underline'>Register</span></AuthLink>

</div>

  );
};
