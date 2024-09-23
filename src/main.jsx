import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>

)
