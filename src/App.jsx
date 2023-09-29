import AlbumCard from './components/AlbumCard'
import SkeletonCard from './components/SkeletonCard'
import { useState, useEffect } from 'react'
// import './App.css'
import { Box, Skeleton, Stack } from '@mui/material'
import useGetAlbums from './hooks/useGetAlbums'

function App() {
  const albums = useGetAlbums();
  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'space-around', gap: '1rem', width: '90vw', mx:'auto', flexWrap: 'wrap', alignItems: 'center'}}>
        {
          albums ? albums.map(album => <AlbumCard key={album.id} album={album} />) : 
          <SkeletonCard />
        }
      </Box>
    </>
  )
}

export default App
