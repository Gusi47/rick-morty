import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from '../src/route'
import { RouterProvider } from 'react-router-dom'
import '../src/scss/base/_globales.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
