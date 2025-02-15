import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './common/ThemeContext.jsx'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
