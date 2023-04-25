import { Routes, Route } from 'react-router-dom'

import Test from './pages/Test'
import Page404 from './pages/404'

function App() {
  return (
    <Routes>
      <Route path='/test' element={<Test />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App
