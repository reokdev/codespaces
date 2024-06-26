import Nav from './components/Nav'
import Header from './components/Header'
import Grid from './components/Grid'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
            <Nav />
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
    </Router>
  )
}

export default App
