import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Video from './pages/Video.jsx'
import Audio from './pages/Audio.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: '', element: <Home /> }, 
      { path: '/video', element: <Video /> },
      { path: '/audio', element: <Audio /> }, 
      { path: '/contact', element: <Contact /> }, 
    ],
  },
  { path: '*', element: <NotFound /> }, // 404 fallback
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)