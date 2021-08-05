export const subredditList = [
  'MAAU',
  'AnimeART',
  'Art',
  'dankmemes',
  'mejico',
  'memes',
  'Mujico',
  'programming',
  'rubius',
  'technews',
  'ubius',
  'unixporn',
]

export const getRandomSubreddit = async (): Promise<string> => {
  const subredditId: number = Math.floor(Math.random() * subredditList.length)

  const randomSubreddit: string = subredditList[subredditId]
  return randomSubreddit
}
