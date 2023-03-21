import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { lendsqrApi } from "./features/lendsqrApi"
import { ApiProvider } from '@reduxjs/toolkit/query/react'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApiProvider api={lendsqrApi} > 
    <App />
  </ApiProvider> ,
)
