const errorGifs: string[] = [
  'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif',
  'https://media.giphy.com/media/oYQ9HRm5Mo7VXeMNVR/giphy.gif',
  'https://images-ext-1.discordapp.net/external/RBrBPOqtBk1IeYXMDmiKjkj-QYQvWj0IVmB0-9Q8Y5A/https/media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif',
  'https://media.giphy.com/media/JsE9qckiYyVClQ5bY2/giphy.gif',
  'https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif',
  'https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif',
  'https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif',
  'https://media.giphy.com/media/cgj76CJbkhcSA/giphy.gif',
  'https://media.giphy.com/media/3oEjHCACoXye1k10GY/giphy.gif',
  'https://media.giphy.com/media/3o6gDUY3B8ocAgMNhu/giphy.gif',
]

export const getRandomErrorGif = (): string => {
  const gifId: number = Math.floor(Math.random() * errorGifs.length)

  const randomGif: string = errorGifs[gifId]
  return randomGif
}
