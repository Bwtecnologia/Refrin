import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context/authContext'
import './index.css'
import RouterController from './Routes/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <AuthProvider>
          <RouterController/>
        </AuthProvider>
  </React.StrictMode>,
)
