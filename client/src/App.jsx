import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

//? Components
import Header from './components/HeaderUI/Header.jsx';
import HeaderAdmin from './components/HeaderUI/HeaderAdmin.jsx';
import HeaderDashboard from './components/HeaderUI/HeaderDashboard.jsx';
import Footer from './components/Footer.jsx';

//? Pages
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Cookies from './pages/CookieDeclaration.jsx';
import About from './pages/About.jsx';

//? Styles
import './styles/App.css';

function App() {
  const location = useLocation() 
  const isLogin = location.pathname === '/login';
  const isDashboard = location.pathname === '/dashboard';

  const PickHeader = () => {
    if (isLogin) {
      return <HeaderAdmin/>
    } else if (isDashboard) {
      return <HeaderDashboard/>
    } else {
      return <Header/>
    }
  }
  useEffect(() => {
    console.log(location.pathname)
  })

  return (
    <div className="App">
        {PickHeader()}
        <main>
          <div className="main-wrapper">
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/about' element={<About />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/cookies' element={<Cookies />} />
              <Route path='/sitemap.xml' element={<Admin />} />
          </Routes>
          </div>
        </main>
        {!(isLogin || isDashboard) && <Footer/> }
    </div>
  );
}

export default function Root() {
  return (
    <App/>
  )
};