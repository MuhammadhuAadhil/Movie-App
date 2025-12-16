// src/components/Moviecard.js
import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'

const Moviecard = ({ movie }) => {
  const { toggleWatchlist, watchList } = useContext(WatchListContext)
  const inwatchlist = watchList.some(m => m.id === movie.id)

  return (
    <div className="bg-gray-800 p-4 border border-gray-700 rounded-xl shadow-lg text-white relative transform transition hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-4 text-blue-200 truncate">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.release_date}</p>

      <button
        className="absolute top-6 right-7 text-white-500 text-2xl hover:scale-110 transition-transform shadow-xl"
        onClick={() => toggleWatchlist(movie)}
      >
        {inwatchlist ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  )
}

export default Moviecard
