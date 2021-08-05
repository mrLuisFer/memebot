import fetch from 'node-fetch'
import { getRandomSubreddit } from '../../utils/subredditList'

export const getData = async (): Promise<any> => {
  const url = 'https://www.reddit.com/r/MAAU/hot.json'
  const response = await fetch(url)
  const data: any = await response.json()
  const results = data.data.children

  return results
}

export const getCustomSubRedditData = async (subreddit: string): Promise<any> => {
  const url = `https://www.reddit.com/r/${subreddit}/hot.json`
  const response = await fetch(url)
  const data: any = await response.json()
  const results = data.data.children

  return results
}

export const getCustomSubRedditNews = async (subreddit: string): Promise<any> => {
  const url = `https://www.reddit.com/r/${subreddit}/new.json`
  const response = await fetch(url)
  const data: any = await response.json()
  const results = data.data.children

  return results
}

export const getRandomPosts = async (): Promise<any> => {
  const subreddit: string = await getRandomSubreddit()
  console.log(subreddit)
  const url = `https://www.reddit.com/r/${subreddit}/hot.json`
  const response = await fetch(url)
  const data: any = await response.json()
  const results = data.data.children

  return results
}
