import fetch from 'node-fetch'

export const getData = async () => {
  const url = 'https://www.reddit.com/r/MAAU/hot.json'
  const response = await fetch(url)
  const data: any = await response.json()
  const results = data.data.children

  return results
}

export const getCustomSubRedditData = async (subreddit: string) => {
  const url = `https://www.reddit.com/r/${subreddit}/hot.json`
  const response = await fetch(url)
  const data: any = await response.json()
  const results = data.data.children

  return results
}
