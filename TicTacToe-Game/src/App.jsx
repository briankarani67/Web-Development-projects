import Board from './pages/Board'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Clientlogin from './pages/Clientlogin'
import Navbar from './components/Navbar'
import './css/App.css'
// import './App.css'

function App() {
  

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/clientlogin' element={<Clientlogin />} />
      <Route path='/board' element={<Board />} />
    </Routes>
    </div>
  )
}

export default App
