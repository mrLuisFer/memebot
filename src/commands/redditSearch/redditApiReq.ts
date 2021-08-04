// import { config } from '../../config'
import fetch from 'node-fetch'

// const url = 'https://www.reddit.com/r/memes.json'
const url = 'https://www.reddit.com/r/MAAU/hot.json'

export const getData = async () => {
  const response = await fetch(url)
  const data: any = await response.json()
  const results = data.data.children

  return results
}
