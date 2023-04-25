import { Routes, Route } from 'react-router-dom'

import Test from './pages/Test'
import About from './pages/About'
import Page404 from './pages/404'
import Home from './pages/Home'
import Navbar from './components/Home/Navbar'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
