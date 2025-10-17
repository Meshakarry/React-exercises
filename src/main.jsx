import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router';
import App from './App.jsx'
import './index.css';
import ColorSwitcher from './pages/ColorSwitcher';
import GithubRepositoriesList from './pages/GithubRepositoriesList';
import Header from './components/Header'
import NotFound from './pages/NotFound';
import FavoriteAnimal from './pages/FavoriteAnimal.js';
import ReviewService from './pages/ReviewService.js';
import RangeSliderExample from './pages/RangeSliderExample.js';
import SwiperExample from './pages/SliderExample.js';
import Generic from './pages/Generic.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/color-switcher" element={<ColorSwitcher />} />
        <Route path="/repository-list" element={<GithubRepositoriesList />} />
        <Route path="/favorite-animal" element={<FavoriteAnimal />} />
        <Route path="/review-service" element={<ReviewService />} />
        <Route path="/range-slider" element={<RangeSliderExample />} />
        <Route path="/slider-example" element={<SwiperExample />} />
        <Route path="/generic-components" element={<Generic />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
