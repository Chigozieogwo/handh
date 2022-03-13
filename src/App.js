import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Footer from './components/Footer.js'

import DashboardScreen from './screens/DashboardScreen.js'
import CompanyListScreen from './screens/CompanyListScreen.js'
import CompanyProfileScreen from './screens/CompanyProfileScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import HomeScreen from './screens/HomeScreen.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="dashboard" element={<DashboardScreen />} />
          <Route path="list" element={<CompanyListScreen />} />
          <Route path="profile" element={<CompanyProfileScreen />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
}

export default App
