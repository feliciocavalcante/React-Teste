import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/style.css";
import App from './App.jsx'
import { CartProvider } from './components/Context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
