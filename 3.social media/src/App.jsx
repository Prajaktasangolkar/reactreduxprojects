
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import { useState } from 'react'
import Post from './components/Post'


function App() {
  const [selectedTab,setSelectedTab]=useState(["Home"])

  return (
    <>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className='content'>
        <Header/>
    
        {selectedTab=='Home'? <CreatePost/> : <Post/>}
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
