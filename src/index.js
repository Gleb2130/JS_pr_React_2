import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './toDo.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop  from './Shop';
import Categories from './categories';


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
      path:"/",
      element:<Shop/>,
  },  
  {
    path:"/categories/:id",
    element:<Categories/>
  },

])

root.render(
  <>
  <RouterProvider router={router}/> 
  </>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
