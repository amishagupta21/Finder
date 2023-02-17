import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';
import Select from './pages/Select';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Select/>,
  },
  {
    path: "/searchResult",
    element:<SearchResults/>,
  },
  {
    path: "*",
    element:<NotFound/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
