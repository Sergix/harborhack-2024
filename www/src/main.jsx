import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* styles */
import './index.css'

/* pages */
import App from './App.jsx'
import Request from './Request.jsx'

/* routing */
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  { 
    path: '/request',
    element: <Request />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
