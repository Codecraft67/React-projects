import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github ,{githubInfoloader }from './components/Github/Github.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Added import
import User from './components/User/User.jsx';


// Define your router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Ensure Layout is defined or imported
    children: [
      {
        path: '', // Matches the root path
        element: <Home />, // Ensure Home is defined or imported
      },
      {
        path: 'about',
        element: <About />, // Ensure About is defined or imported
      },
      {
        path: 'Contact',
        element: <Contact />, // Ensure About is defined or imported
      },
      {
        path: 'user/userid',
        element: <User />, // Ensure About is defined or imported
      },
      {
        loader :' {githubInfoloader}',
        path: 'github',
        element: <Github />, // Ensure About is defined or imported
      },
      
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

