import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComingSoonPage } from './components/ComingSoonPage'
import { BrandingPage } from './components/BrandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
        <Route path="/branding" element={<BrandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
