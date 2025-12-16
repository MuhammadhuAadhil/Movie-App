import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import WatchList from './Pages/WatchList'
import { WatchListProvider } from './context/WatchListContext'

function App() {


  return (
    <div>
      <WatchListProvider>
      <BrowserRouter> 

<Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/watchlist' element={<WatchList/> }></Route>
        </Routes>
      </BrowserRouter>
      </WatchListProvider>
    </div>
  )
}

export default App
