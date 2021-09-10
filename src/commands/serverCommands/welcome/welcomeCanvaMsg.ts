import { Canvas, createCanvas, loadImage } from 'canvas'
import { Message, MessageAttachment, User } from 'discord.js'

type Props = {
  msg: Message
  user: User
}

export const welcomeCanvaMsg = async ({ msg, user }: Props) => {
  console.log(user)
  const canvas = createCanvas(700, 250)
  const context = canvas.getContext('2d')

  const background = await loadImage(
    'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg'
  )
  context.drawImage(background, 0, 0, canvas.width, canvas.height)

  context.strokeStyle = '#0099ff'
  context.strokeRect(0, 0, canvas.width, canvas.height)

  context.font = '28px sans-serif'
  context.fillStyle = '#ffffff'
  context.fillText('user:', canvas.width / 2.5, canvas.height / 3.5)

  context.font = applyText(canvas, `${user.username}`)
  context.fillStyle = '#ffffff'
  context.fillText(`${user.username}`, canvas.width / 2.5, canvas.height / 1.8)

  context.beginPath()
  context.arc(125, 125, 100, 0, Math.PI * 2, true)
  context.closePath()
  context.clip()

  const avatar = await loadImage(user.displayAvatarURL({ format: 'jpg' }))
  context.drawImage(avatar, 25, 25, 200, 200)

  const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png')

  msg.reply({ files: [attachment] })
}

const applyText = (canvas: Canvas, text: string) => {
  const context = canvas.getContext('2d')
  let fontSize = 70

  do {
    context.font = `${(fontSize -= 10)}px sans-serif`
  } while (context.measureText(text).width > canvas.width - 300)

  return context.font
}
