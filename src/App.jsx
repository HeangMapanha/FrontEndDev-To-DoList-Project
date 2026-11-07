import { useState } from 'react'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import { LoginPage } from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <LoginPage/>

      
      {/* <aside class="sidebar">
        <div class="sidebar-logo">
          <h2>AppLogo</h2>
        </div>
        

        <nav class="sidebar-menu">
          <ul>
            <li><a href="#" class="active">Overview</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </nav>


        <div class="sidebar-footer">
          <button type="button" id="theme-toggle">Toggle Dark Mode</button>
          <button type="button" class="btn-logout">Log Out</button>
        </div>
      </aside> */}
    </>
  )
}

export default App
