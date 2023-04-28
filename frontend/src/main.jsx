import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import PieChart from './components/pie-chart';
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/:fabricId/:monthId',
    element: <PieChart></PieChart>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
