import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './routes/routes';

export const App = () => (
  <>
   <RouterProvider router={router}/>
    <ToastContainer position="top-right" autoClose={3000} />
  </>
   
 
);
