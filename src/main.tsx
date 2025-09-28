import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ShopContextProvider from './components/context/ShopContext.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopContextProvider>
      <App />
      </ShopContextProvider>
    
  </StrictMode>, 
)
  