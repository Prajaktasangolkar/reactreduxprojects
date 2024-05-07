import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import { useState } from 'react'
import Post from './components/Post'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className='app-container'>
        <Router>
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className='content'>
            <Header />
            <Routes>
              <Route path='/' element={selectedTab === 'Home' ? <CreatePost /> : <Post />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
