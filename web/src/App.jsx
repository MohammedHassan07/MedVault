import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import AddMedicinePage from './pages/AddMedicinePage'
import AddAgencyPage from './pages/AddAgencyPage'
import AddStoragePage from './pages/AddStoragePage'
import AddContentPage from './pages/AddContentPage'

function Layout({ children }) {

  const location = useLocation()

  const hideNavbarPaths = ['/login']
  return (
    <>

      {!hideNavbarPaths.includes(location.pathname) && <NavBar />}
      {children}
    </>
  )
}
function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>

          <Routes>

            <Route path='/login' element={<LoginPage />} />

            <Route path='/' element={<HomePage />}>

              <Route path='add-medicine' element={<AddMedicinePage />} />
              <Route path='add-agency' element={<AddAgencyPage />} />
              <Route path='add-storage' element={<AddStoragePage />} />
              <Route path='add-content' element={<AddContentPage />} />
            </Route>

            <Route path='/about' element={<AboutPage />} />

            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
