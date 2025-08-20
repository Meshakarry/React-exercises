import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router';
import App from './App.jsx'
import './index.css';
import ColorSwitcher from './pages/ColorSwitcher';
import GithubRepositoriesList from './pages/GithubRepositoriesList';
import Header from './components/Header'
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/color-switcher" element={<ColorSwitcher />} />
        <Route path="/repository-list" element={<GithubRepositoriesList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
