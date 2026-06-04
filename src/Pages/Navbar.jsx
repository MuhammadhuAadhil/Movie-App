// src/components/Navbar.js
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'
import logo from "../assets/n.jpeg"

const Navbar = () => {
  const { watchList } = useContext(WatchListContext)

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 py-4 bg-gray-900/40 backdrop-blur-md shadow-lg z-50">
      <Link
        to="/"
        className="flex items-center gap-3 text-2xl font-bold text-white transition hover:text-cyan-300"
      >
        <img
          src={logo}
          alt="Movie App logo"
          className="h-11 w-11 rounded-full object-cover shadow-md ring-1 ring-white/20"
        />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          MovieApp
        </span>
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
