import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import './styles/style.css'
import { App } from './app'
import { Header } from './components/header'
import { Footer } from './components/footer'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header />
        <App />
        <Footer />
    </StrictMode>,
)
