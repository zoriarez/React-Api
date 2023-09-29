import { useEffect, useState } from "react";
import { AlbumIndex } from '../api'

const useGetAlbums = () => {
  const [albums, setAlbums] = useState(null);
  
  const refreshAlbums = () => {
    const albumIndex = AlbumIndex()
    albumIndex.then(json => {
      setAlbums(json)
    })
  }

  useEffect(refreshAlbums)
  return albums
}

export default useGetAlbums