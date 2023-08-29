
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Success from './components/Success'
import Cancel from './components/Cancel'
import Test from './components/Test'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Test/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
