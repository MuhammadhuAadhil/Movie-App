// src/context/WatchListContext.js
import React, { createContext, useState, useEffect } from 'react'

export const WatchListContext = createContext()

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([])
  const [genrelist, setGenrelist] = useState([])

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=10c4933c6f40401cc395f3414c2dbe43`
    fetch(url)
      .then(res => res.json())
      .then(data => setGenrelist(data.genres || []))
  }, [])

  const toggleWatchlist = (movie) => {
    const index = watchList.findIndex(m => m.id === movie.id)
    if (index === -1) setWatchList([...watchList, movie])
    else setWatchList([...watchList.slice(0, index), ...watchList.slice(index + 1)])
  }

  return (
    <WatchListContext.Provider value={{ watchList, toggleWatchlist, genrelist }}>
      {children}
    </WatchListContext.Provider>
  )
}
