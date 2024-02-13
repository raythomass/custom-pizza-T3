import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login/'
import Signup from './pages/Signup/'
import Menu from './pages/Menu/';
import AboutUs from './pages/About'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
