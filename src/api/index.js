import { URL, ALBUMS } from './apiConstants'
export const AlbumIndex = async () => {
    const response = await fetch(`${URL}${ALBUMS}`)
    const json = await response.json()
    return json
}