import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
)


