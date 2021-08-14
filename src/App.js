import React from 'react'
import './App.css'
import Header from '../src/Components/Header/Header'
import '../src/Components/Header/Header.css'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
