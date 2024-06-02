import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { Toaster } from './components/ui/sonner.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider
    defaultTheme='dark'
  >
    <App />
    <Toaster />
  </ThemeProvider>,
)
