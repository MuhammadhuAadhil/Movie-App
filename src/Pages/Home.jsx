// src/pages/Home.js
import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=10c4933c6f40401cc395f3414c2dbe43`
    if (search) url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=10c4933c6f40401cc395f3414c2dbe43`

    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results || []))
  }, [page, search])

  return (
    <div className="p-4 pt-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen">
      {/* Search */}
      <input
        type="text"
        placeholder="Search Movies..."
        onChange={e => setSearch(e.target.value)}
        className="z-10 p-3 w-3/4 md:w-1/2 fixed top-22 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full  focus:ring-2 focus:ring-cyan-400 placeholder-gray-300 transition"
      />

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {movies.map(movie => <Moviecard key={movie.id} movie={movie} />)}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-8 px-4 md:px-0">
        <button
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
          className="px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 disabled:opacity-50 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(prev => prev + 1)}
          className="px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Home
