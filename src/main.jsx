import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Register.jsx';
import About from './pages/About.jsx';
import Mentor from './pages/Mentor.jsx';
import Contact from './pages/Contact.jsx';
import Career from './pages/Career.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }, 
   {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/mentor",
    element: <Mentor/>
  },
  {
    path: "/career",
    element: <Career/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  
  

]);

  ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);