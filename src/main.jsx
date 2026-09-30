import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import Humano from './components/Humano'
import App from './App'

import { BrowserRouter, Route, Routes} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/Humano' element={ <Humano />} />
        <Route path='/App' element={ <App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
