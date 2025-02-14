import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Registration from './Registration.jsx'
// import Login from './Login.jsx'
import './index.css'
// import App from './App.jsx'
import Homepage from './Homepage.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    Element :<Homepage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
