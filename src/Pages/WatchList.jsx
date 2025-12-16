// src/pages/WatchList.js
import React, { useContext, useState } from 'react'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../components/Moviecard'
import GenreFilter from '../components/GenreFilter'

const WatchList = () => {
  const { watchList, genrelist } = useContext(WatchListContext)
  const [search, setSearch] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")

  const filteredMovies = watchList
    .filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    .filter(movie => selectedGenre === "" || movie.genre_ids.includes(Number(selectedGenre)))

  return (
    <div className="p-4 pt-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen">
      {/* Search */}
      <input
        type="text"
        placeholder="Search Watchlist..."
        onChange={e => setSearch(e.target.value)}
        className="z-10 p-3 w-3/4 md:w-1/2 fixed top-22 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full  focus:ring-2 focus:ring-cyan-400 placeholder-gray-300 transition"
      />

      {/* Genre Filter */}
      <div className="mt-20">
        <GenreFilter genrelist={genrelist} setSelectedGenre={setSelectedGenre} />
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {filteredMovies.map(movie => <Moviecard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default WatchList
