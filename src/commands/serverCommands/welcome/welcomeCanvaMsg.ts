import { Canvas, createCanvas, loadImage, NodeCanvasRenderingContext2D } from 'canvas'
import { Message, MessageAttachment, User } from 'discord.js'

type WelcomeCanvaMsgProps = {
  msg: Message
  user: User
}

export const welcomeCanvaMsg = async ({ msg, user }: WelcomeCanvaMsgProps) => {
  console.log(user)
  const canvas = createCanvas(700, 250)
  const context: NodeCanvasRenderingContext2D = canvas.getContext('2d')
  const width = canvas.width
  const commonWidth = canvas.width / 2.5
  const height = canvas.height

  const background = await loadImage(
    'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg'
  )
  context.drawImage(background, 0, 0, canvas.width, canvas.height)

  context.strokeStyle = '#0099ff'
  context.strokeRect(0, 0, canvas.width, canvas.height)

  // context.font = '28px sans-serif'

  addTextField({
    canvas,
    text: `${user.username}`,
    x: commonWidth,
    y: height / 2,
  })

  addTextField({
    canvas,
    text: `#${user.discriminator}`,
    x: commonWidth,
    y: height / 1.4,
  })

  addTextField({
    text: `${user.id}`,
    x: width / 2.5,
    canvas,
    y: height / 1.1,
  })

  context.beginPath()
  context.arc(125, 125, 100, 0, Math.PI * 2, true)
  context.closePath()
  context.clip()

  const avatar = await loadImage(user.displayAvatarURL({ format: 'jpg' }))
  context.drawImage(avatar, 25, 25, 200, 200)

  const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png')

  msg.reply({ files: [attachment] })
}

type AddContextTextProps = {
  canvas: Canvas
  text: string
  x: number
  y: number
  fontOptions?: string
  fillStyle?: string
}
const addTextField = ({ text, x, y, canvas, fontOptions, fillStyle }: AddContextTextProps) => {
  const context: NodeCanvasRenderingContext2D = canvas.getContext('2d')
  if (fontOptions !== undefined && fontOptions.length > 1) {
    context.font = fontOptions
  } else {
    context.font = applyText(canvas, text)
  }
  if (fillStyle !== undefined && fillStyle.length > 1) {
    context.fillStyle = fillStyle
  } else {
    context.fillStyle = '#ffffff'
  }
  context.fillText(text, x, y)
}

const applyText = (canvas: Canvas, text: string) => {
  const context = canvas.getContext('2d')
  let fontSize = 50

  do {
    context.font = `${(fontSize -= 10)}px sans-serif`
  } while (context.measureText(text).width > canvas.width - 300)

  return context.font
}
