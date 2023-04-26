import { Routes, Route } from 'react-router-dom'

import Test from './pages/Test'
import About from './pages/About'
import Page404 from './pages/404'
import Home from './pages/Home'
import Navbar from './components/Home/Navbar'
import Login from './pages/Login'
import BranchHome from './pages/BranchHome'
import AddStaff from './pages/AddStaff'
import AddClient from './pages/AddClient'
import Owner from './pages/Owner'
import Branches from './pages/Branches'
import AddOwner from './pages/AddOwner'
import AddProperty from './pages/AddProperty'
import BranchInfo from './pages/BranchInfo'
import StaffInfo from './pages/StaffInfo'
import Search from './pages/Search'
import Properties from './pages/Properties'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/branch/:id' element={<BranchHome />} />
        <Route path='/branch/:id/staff' element={<AddStaff />} />
        <Route path='/branch/:id/client' element={<AddClient />} />
        <Route path='/branch/:id/owner' element={<Owner />} />
        <Route path='/branch/:id/owner/addowner' element={<AddOwner />} />
        <Route path='/branch/:id/owner/addproperty' element={<AddProperty />} />
        <Route path='/search' element={<Search />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/branches' element={<Branches />} />
        <Route path='/branches/:city/:id' element={<BranchInfo />} />
        <Route path='/branches/:city/:id/:staffId' element={<StaffInfo />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
