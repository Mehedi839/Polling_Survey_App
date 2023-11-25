import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import NotFound from './components/NotFound';
import AddProduct from './components/AddProduct';
import MyCard from './components/MyCard';
import PrivateRoute from './routes/PrivateRoute';
import ProductDetails from './components/ProductDetails';
import Pricing from './components/Pricing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
      
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      
      {
        path: '/addProduct',
        element: <PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>,
        loader: () => fetch('/data.json')
      }, 
      {
        path: '/myCard',
        element: <PrivateRoute> <MyCard></MyCard> </PrivateRoute>
    
      }, 
      {
        path: '/pricing',
        element: <Pricing></Pricing>
    
      }, 
      
  
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
