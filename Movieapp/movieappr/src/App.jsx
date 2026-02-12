
import './css/App.css'
import Moviecard from './Components/Moviecard'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './context/movieContext'
import NavBar from './Components/NavBar'

function App() {

  return (
      <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorite/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
