import canvas from 'discord-canvas'

export const welcomeCanvaMsg = async () => {
  const welcomeCanvas = await canvas.Welcome()

  const embed = await welcomeCanvas.setUsername('mrluisfer')

  console.log(embed)
}
