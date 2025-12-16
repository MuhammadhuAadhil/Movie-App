// src/components/Navbar.js
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'

const Navbar = () => {
  const { watchList } = useContext(WatchListContext)

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 py-4 bg-gray-900/40 backdrop-blur-md shadow-lg z-50">
      <Link
        to="/"
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 transition hover:from-blue-400 hover:to-cyan-400"
      >
        MovieApp🎬
      </Link>

      <Link
        to="/watchlist"
        className="text-base font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition text-white"
      >
        Watchlist ({watchList.length})
      </Link>
    </nav>
  )
}

export default Navbar
