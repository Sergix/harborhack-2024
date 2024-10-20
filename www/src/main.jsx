import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* styles */
import './index.css'

/* pages */
import App from './App.jsx'
import Offline from './Offline.jsx'
import Request from './Request.jsx'
import MapPage from './MapPage/index.jsx'

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
  },
  { 
    path: '/map',
    element: <MapPage />
  },
  {
    path: '/offline',
    element: <Offline />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
