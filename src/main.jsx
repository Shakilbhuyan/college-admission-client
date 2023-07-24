import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './pages/Home/Home/Home';
import AuthProvider from './Provider/AuthProvider';
import Login from './pages/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Register from './pages/Register/Register';
import Allcollege from './pages/Allcollege/Allcollege';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path : 'register',
      element: <Register></Register>
    },
    {
      path:'allcollege',
      element: <PrivateRoute><Allcollege></Allcollege></PrivateRoute>
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
