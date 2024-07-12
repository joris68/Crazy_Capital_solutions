import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorPage from './404/Error';
import {Home} from './Home/Home';
import { Login } from './Loginform/Login';
import reportWebVitals from './reportWebVitals';
import { Registration } from './Registrationform/Registration';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "register",
    element: <Registration/>,
  },
  {
    path: "game/:gameId"
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
