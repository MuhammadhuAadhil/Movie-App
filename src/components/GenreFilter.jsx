// src/components/GenreFilter.js
import React from 'react'

const GenreFilter = ({ genrelist, setSelectedGenre }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition"
        onClick={() => setSelectedGenre("")}
      >
        All
      </button>
      {genrelist.map((genre) => (
        <button
          key={genre.id}
          className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition"
          onClick={() => setSelectedGenre(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default GenreFilter
