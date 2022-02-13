import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import NavBar from './components/GeneralComponents/NavBar';

import PageNotFound from './pages/PageNotFound';

import HomePage from './pages/HomePage'

import ContactPage from './pages/ContactPage';

import AboutPage from './pages/AboutPage';


function App() {

  const location = useLocation()

  return (

    <div className="App">

      <NavBar />

      <AnimatePresence exitBeforeEnter>

        <Routes location={location} key={location.pathname}>

          <Route path='/' element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </AnimatePresence>

    </div>

  );

}


export default App;
