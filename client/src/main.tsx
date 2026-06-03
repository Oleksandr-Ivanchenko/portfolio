import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// ensure header styles are available globally for plain markup that uses
// `header__logo` (or other header classes) outside of the Header component
import './components/Header/Header.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
