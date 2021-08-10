export const animeGifs: string[] = [
  'https://media.giphy.com/media/naiatn5LxTOsU/giphy.gif',
  'https://media.giphy.com/media/jt7bAtEijhurm/giphy.gif',
  'https://media.giphy.com/media/4QxQgWZHbeYwM/giphy.gif',
  'https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif',
  'https://media.giphy.com/media/ZtB2l3jHiJsFa/giphy.mp4',
  'https://media.giphy.com/media/4Ev0Ari2Nd9io/giphy.gif',
  'https://media.giphy.com/media/o4fyzmHt7DoOI/giphy.gif',
  'https://media.giphy.com/media/jAe22Ec5iICCk/giphy.gif',
  'https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif',
  'https://media.giphy.com/media/YS7BctOtlyed2/giphy.gif',
  'https://media.giphy.com/media/NnMH7LDpZTPZS/giphy.gif',
  'https://media.giphy.com/media/kQ3FSVoJrkYWk/giphy.gif',
  'https://media.giphy.com/media/EAOTD2L0qyvhm/giphy.gif',
  'https://media.giphy.com/media/UQ4ZYtqML9s7S/giphy.gif',
  'https://media.giphy.com/media/l0IxZkXQw9A7OqbbW/giphy.gif',
  'https://media.giphy.com/media/QzxONYL3xbj6E/giphy.gif',
  'https://media.giphy.com/media/m6Gkz5AVTo7o4/giphy.gif',
  'https://media.giphy.com/media/a6pzK009rlCak/giphy.gif',
  'https://media.giphy.com/media/aipkSPpcdtYc0/giphy.gif',
  'https://media.giphy.com/media/3o7btMCltyDvSgF92E/giphy.gif',
  'https://media.giphy.com/media/3o7btRkeE7RtAq8DnO/giphy.gif',
  'https://media.giphy.com/media/2QHLYZFJgjsFq/giphy.gif',
]

export const getRandomGif = (): string => {
  const gifId: number = Math.floor(Math.random() * animeGifs.length)

  const randomGif: string = animeGifs[gifId]
  return randomGif
}
