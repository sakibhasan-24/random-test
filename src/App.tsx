import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './routes/routes';

export const App = () => (
  <div className='max-w-6xl mx-auto p-4 '>
   <RouterProvider router={router}/>
    <ToastContainer position="top-right" autoClose={3000} />
  </div>
   
 
);
